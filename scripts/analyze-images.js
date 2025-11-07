const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const sizeOf = promisify(require('image-size'));

const IMAGES_DIR = path.join(__dirname, '../public/images');
const MAX_WIDTH = 2000;
const MAX_HEIGHT = 2000;

async function analyzeImages() {
  try {
    const files = await fs.promises.readdir(IMAGES_DIR);
    const imageFiles = files.filter(file => /.(jpg|jpeg|png|webp)$/i.test(file));
    
    console.log('Analyzing images...\n');
    
    let totalOriginalSize = 0;
    let totalOptimizedSize = 0;
    
    for (const file of imageFiles) {
      try {
        const filePath = path.join(IMAGES_DIR, file);
        const stats = await fs.promises.stat(filePath);
        const fileSize = stats.size;
        const fileSizeMB = (fileSize / (1024 * 1024)).toFixed(2);
        
        // Skip small files
        if (fileSize < 1024 * 100) continue; // Skip files smaller than 100KB
        
        const dimensions = await sizeOf(filePath);
        const isOversized = dimensions.width > MAX_WIDTH || dimensions.height > MAX_HEIGHT;
        
        console.log(`File: ${file}`);
        console.log(`  Size: ${fileSizeMB} MB`);
        console.log(`  Dimensions: ${dimensions.width}x${dimensions.height} ${isOversized ? '(Oversized)' : ''}`);
        
        // Check if WebP version exists
        const webpFile = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        const webpPath = path.join(IMAGES_DIR, webpFile);
        const hasWebP = await fs.promises.access(webpPath).then(() => true).catch(() => false);
        
        if (hasWebP) {
          const webpStats = await fs.promises.stat(webpPath);
          const webpSizeMB = (webpStats.size / (1024 * 1024)).toFixed(2);
          const savings = ((1 - (webpStats.size / fileSize)) * 100).toFixed(0);
          console.log(`  WebP: ${webpSizeMB} MB (${savings}% smaller)`);
          totalOptimizedSize += webpStats.size;
        } else if (!file.toLowerCase().endsWith('.webp')) {
          console.log('  ❌ No WebP version found');
        }
        
        totalOriginalSize += fileSize;
        console.log('');
        
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
      }
    }
    
    // Print summary
    console.log('\n--- Summary ---');
    console.log(`Total original size: ${(totalOriginalSize / (1024 * 1024)).toFixed(2)} MB`);
    console.log(`Total optimized size: ${(totalOptimizedSize / (1024 * 1024)).toFixed(2)} MB`);
    console.log(`Potential savings: ${((1 - (totalOptimizedSize / totalOriginalSize)) * 100).toFixed(0)}%`);
    
  } catch (error) {
    console.error('Error analyzing images:', error);
  }
}

analyzeImages();
