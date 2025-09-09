const fs = require('fs');
const path = require('path');

const outDir = path.join(process.cwd(), 'out');

// Ensure out directory exists
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

// Generate sitemap.xml content
const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://www.carinacoaching.com/</loc>
    <lastmod>2025-09-09T00:00:00+02:00</lastmod>
    <changefreq>daily</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://www.carinacoaching.com/ueber-mich/mein-weg</loc>
    <lastmod>2025-09-09T00:00:00+02:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.carinacoaching.com/dienstleistungen</loc>
    <lastmod>2025-09-09T00:00:00+02:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.carinacoaching.com/buchen</loc>
    <lastmod>2025-09-09T00:00:00+02:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.carinacoaching.com/contact</loc>
    <lastmod>2025-09-09T00:00:00+02:00</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  <url>
    <loc>https://www.carinacoaching.com/impressum</loc>
    <lastmod>2025-09-09T00:00:00+02:00</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://www.carinacoaching.com/datenschutz</loc>
    <lastmod>2025-09-09T00:00:00+02:00</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.3</priority>
  </url>
  <url>
    <loc>https://www.carinacoaching.com/cookie-einstellungen</loc>
    <lastmod>2025-09-09T00:00:00+02:00</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.1</priority>
  </url>
  <url>
    <loc>https://www.carinacoaching.com/dienstleistungen/spiritual</loc>
    <lastmod>2025-09-09T00:00:00+02:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  <url>
    <loc>https://www.carinacoaching.com/dienstleistungen/essstorung</loc>
    <lastmod>2025-09-09T00:00:00+02:00</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
</urlset>`;

// Generate robots.txt content
const robotsContent = `# Allow all search engines to crawl the entire site
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

# Sitemap location
Sitemap: https://www.carinacoaching.com/sitemap.xml`;

// Write sitemap.xml with UTF-8 encoding
fs.writeFileSync(path.join(outDir, 'sitemap.xml'), sitemapContent, { encoding: 'utf8' });
console.log('Generated sitemap.xml');

// Write robots.txt with UTF-8 encoding and ensure proper line endings
fs.writeFileSync(path.join(outDir, 'robots.txt'), robotsContent, { encoding: 'utf8' });
console.log('Generated robots.txt');

// Verify files were written
console.log('Verifying files...');
console.log('sitemap.xml exists:', fs.existsSync(path.join(outDir, 'sitemap.xml')));
console.log('robots.txt exists:', fs.existsSync(path.join(outDir, 'robots.txt')));

console.log('Static files generated successfully!');
