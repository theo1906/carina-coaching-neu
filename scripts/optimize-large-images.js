const sharp = require('sharp');
const fs = require('fs').promises;
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '../public/images');
const MAX_WIDTH = 2000;
const QUALITY = 80;

async function optimizeImage(filePath, outputPath) {
  try {
    const image = sharp(filePath);
    const metadata = await image.metadata();
    
    // Skip if already optimized
    if (filePath.endsWith('.webp') || filePath.includes('-optimized')) {
      console.log(`Skipping already optimized: ${path.basename(filePath)}`);
      return;
    }
    
    // Calculate new dimensions while maintaining aspect ratio
    let width = metadata.width;
    let height = metadata.height;
    
    if (width > MAX_WIDTH) {
      height = Math.round((height * MAX_WIDTH) / width);
      width = MAX_WIDTH;
    }
    
    console.log(`Optimizing ${path.basename(filePath)} (${metadata.width}x${metadata.height} -> ${width}x${height})`);
    
    // Convert to WebP with quality settings
    await image
      .resize(width, height, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ 
        quality: QUALITY,
        effort: 6 // Higher effort = better compression (slower)
      })
      .toFile(outputPath);
    
    const originalSize = (await fs.stat(filePath)).size / 1024 / 1024;
    const newSize = (await fs.stat(outputPath)).size / 1024 / 1024;
    const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
    
    console.log(`  → Optimized: ${(originalSize).toFixed(2)}MB → ${newSize.toFixed(2)}MB (${savings}% smaller)\n`);
    
  } catch (error) {
    console.error(`Error optimizing ${filePath}:`, error.message);
  }
}

async function optimizeLargeImages() {
  try {
    const files = await fs.readdir(IMAGES_DIR);
    const imageFiles = files.filter(file => /\.(jpg|jpeg|png)$/i.test(file));
    
    console.log('Optimizing large images...\n');
    
    for (const file of imageFiles) {
      const filePath = path.join(IMAGES_DIR, file);
      const stats = await fs.stat(filePath);
      
      // Only process large files (>500KB)
      if (stats.size > 500 * 1024) {
        const outputFile = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        const outputPath = path.join(IMAGES_DIR, outputFile);
        
        await optimizeImage(filePath, outputPath);
      }
    }
    
    console.log('Optimization complete!');
    
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

// Run the optimization
optimizeLargeImages();
