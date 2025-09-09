const fs = require('fs');
const path = require('path');

const publicDir = path.join(process.cwd(), 'public');
const outDir = path.join(process.cwd(), 'out');

// Ensure out directory exists
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Files to copy
const filesToCopy = ['robots.txt', 'sitemap.xml'];

// Copy each file
filesToCopy.forEach(file => {
  const source = path.join(publicDir, file);
  const dest = path.join(outDir, file);
  
  if (fs.existsSync(source)) {
    fs.copyFileSync(source, dest);
    console.log(`Copied ${file} to out directory`);
  } else {
    console.warn(`Warning: ${file} not found in public directory`);
  }
});

console.log('File copy complete!');
