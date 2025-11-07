const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);

const IMAGES_DIR = path.join(__dirname, '../public/images');
const MAX_WIDTH = 2000; // Maximum width for resized images
const QUALITY = 80; // Quality for WebP (1-100)

async function optimizeImages() {
  try {
    const files = await readdir(IMAGES_DIR);
    
    for (const file of files) {
      const filePath = path.join(IMAGES_DIR, file);
      const fileStat = await stat(filePath);
      
      // Skip directories and non-image files
      if (!fileStat.isFile() || !/\.(jpg|jpeg|png)$/i.test(file)) {
        continue;
      }
      
      // Skip already optimized files
      if (file.endsWith('.webp') || file.endsWith('-optimized.jpg')) {
        continue;
      }
      
      const fileSizeMB = fileStat.size / (1024 * 1024);
      
      // Only process large files (>1MB)
      if (fileSizeMB > 1) {
        console.log(`Processing ${file} (${fileSizeMB.toFixed(2)}MB)`);
        
        const outputFile = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
        const outputPath = path.join(IMAGES_DIR, outputFile);
        
        try {
          await sharp(filePath)
            .resize({
              width: MAX_WIDTH,
              withoutEnlargement: true,
            })
            .webp({ quality: QUALITY })
            .toFile(outputPath);
            
          const newSize = (await stat(outputPath)).size / (1024 * 1024);
          console.log(`  → Optimized: ${outputFile} (${newSize.toFixed(2)}MB, ${((1 - (newSize / fileSizeMB)) * 100).toFixed(0)}% smaller)`);
          
        } catch (error) {
          console.error(`Error processing ${file}:`, error);
        }
      }
    }
    
    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error optimizing images:', error);
  }
}

optimizeImages();
