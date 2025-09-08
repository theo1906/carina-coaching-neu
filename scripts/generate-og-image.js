const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

const width = 1200;
const height = 630;

const canvas = createCanvas(width, height);
const context = canvas.getContext('2d');

// Background color
context.fillStyle = '#fdf2f8'; // Light pink background
context.fillRect(0, 0, width, height);

// Add gradient overlay
const gradient = context.createLinearGradient(0, 0, width, height);
gradient.addColorStop(0, 'rgba(249, 168, 212, 0.2)');
gradient.addColorStop(1, 'rgba(244, 114, 182, 0.2)');
context.fillStyle = gradient;
context.fillRect(0, 0, width, height);

// Add text
context.fillStyle = '#831843'; // Dark pink text
context.textAlign = 'center';
context.textBaseline = 'top';

// Main title
context.font = 'bold 60px Arial';
const title = 'Carina Coaching';
context.fillText(title, width / 2, 150);

// Subtitle
context.font = '30px Arial';
const subtitle = 'Spirituelles Life Coaching';
context.fillText(subtitle, width / 2, 250);

// Bottom text
context.font = '24px Arial';
const bottomText = 'carinacoaching.com';
context.fillText(bottomText, width / 2, 500);

// Save the image
const buffer = canvas.toBuffer('image/png');
fs.writeFileSync(path.join(__dirname, '../public/og/og-image.png'), buffer);

console.log('OG image generated successfully!');
