const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '../public/images');

async function analyzeImages() {
  try {
    const files = await fs.promises.readdir(IMAGES_DIR);
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file));
    
    console.log('Analyzing images...\n');
    
    let totalSize = 0;
    const largeImages = [];
    
    for (const file of imageFiles) {
      try {
        const filePath = path.join(IMAGES_DIR, file);
        const stats = await fs.promises.stat(filePath);
        const fileSizeMB = (stats.size / (1024 * 1024)).toFixed(2);
        
        // Only show files larger than 500KB
        if (stats.size < 500 * 1024) continue;
        
        console.log(`${file}: ${fileSizeMB} MB`);
        totalSize += stats.size;
        
        if (stats.size > 1 * 1024 * 1024) { // Larger than 1MB
          largeImages.push({
            name: file,
            size: stats.size,
            path: filePath
          });
        }
        
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
      }
    }
    
    // Sort large images by size (descending)
    largeImages.sort((a, b) => b.size - a.size);
    
    // Print summary
    console.log('\n--- Large Images (over 1MB) ---');
    largeImages.forEach(img => {
      console.log(`${img.name}: ${(img.size / (1024 * 1024)).toFixed(2)} MB`);
    });
    
    console.log('\n--- Summary ---');
    console.log(`Total image size: ${(totalSize / (1024 * 1024)).toFixed(2)} MB`);
    console.log(`Number of large images: ${largeImages.length}`);
    
  } catch (error) {
    console.error('Error analyzing images:', error);
  }
}

analyzeImages();
