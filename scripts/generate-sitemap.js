const fs = require('fs');
const path = require('path');

// List of all your pages (add more as needed)
const pages = [
  '',
  'ueber-mich/mein-weg',
  'dienstleistungen',
  'kontakt',
  'impressum',
  'datenschutz',
  'cookie-einstellungen',
  'dienstleistungen/spiritual',
  'dienstleistungen/essstorung/meine-heilungsreise',
  'dienstleistungen/essstorung/ist-coaching-das-richtige'
];

const baseUrl = 'https://www.carinacoaching.com';

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map((page) => {
      const path = page.endsWith('/') ? page : `${page}/`;
      const route = path === '/' ? '' : path;
      return `
        <url>
          <loc>${`${baseUrl}${route}`}</loc>
          <lastmod>${new Date().toISOString()}</lastmod>
          <changefreq>weekly</changefreq>
          <priority>0.8</priority>
        </url>
      `;
    })
    .join('')}
</urlset>`;

// Ensure the public directory exists
const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Write sitemap to public directory
fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);

console.log('Sitemap generated successfully!');
