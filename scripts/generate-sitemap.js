const fs = require('fs');
const path = require('path');

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com';

// Define your pages here
const pages = [
  { url: '/', priority: '1.0', changefreq: 'daily' },
  { url: '/ueber-mich', priority: '0.8', changefreq: 'weekly' },
  { url: '/dienstleistungen', priority: '0.8', changefreq: 'weekly' },
  { url: '/kontakt', priority: '0.7', changefreq: 'weekly' },
  // Add more pages as needed
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
    <url>
      <loc>${siteUrl}${page.url}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>`
    )
    .join('')}
</urlset>`;

const robotsTxt = `# https://www.robotstxt.org/robotstxt.html
User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml`;

// Ensure the public directory exists
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write sitemap.xml
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);

// Write robots.txt
fs.writeFileSync(path.join(publicDir, 'robots.txt'), robotsTxt);

console.log('Sitemap and robots.txt generated successfully!');
