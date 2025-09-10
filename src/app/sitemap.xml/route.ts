import { NextResponse } from 'next/server';

const lastModified = new Date().toISOString();
const base = 'https://carina-coaching.com';

function generateSitemap(): string {
  const pages = [
    { url: '/', changefreq: 'daily', priority: '1.0' },
    { url: '/ueber-mich/mein-weg', changefreq: 'weekly', priority: '0.9' },
    { url: '/dienstleistungen', changefreq: 'weekly', priority: '0.9' },
    { url: '/buchen', changefreq: 'weekly', priority: '0.9' },
    { url: '/kontakt', changefreq: 'monthly', priority: '0.8' },
    { url: '/dienstleistungen/spirituelles-life-coaching', changefreq: 'weekly', priority: '0.9' },
    { url: '/dienstleistungen/spirituelles-life-coaching/themen/mein-ansatz', changefreq: 'monthly', priority: '0.7' },
    { url: '/dienstleistungen/essstoerungen-coaching/meine-heilungsreise', changefreq: 'monthly', priority: '0.7' },
    { url: '/dienstleistungen/Systemisches-Coaching-fuer-Essstoerungen-ED-Recovery', changefreq: 'weekly', priority: '0.9' },
    { url: '/impressum', changefreq: 'yearly', priority: '0.3' },
    { url: '/datenschutz', changefreq: 'yearly', priority: '0.3' },
    { url: '/agb', changefreq: 'yearly', priority: '0.3' },
    { url: '/widerrufsbelehrung', changefreq: 'yearly', priority: '0.1' },
    { url: '/cookie-einstellungen', changefreq: 'yearly', priority: '0.1' },
  ];

  const urlEntries = pages.map(page => `
    <url>
      <loc>${base}${page.url}</loc>
      <lastmod>${lastModified}</lastmod>
      <changefreq>${page.changefreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urlEntries}
</urlset>`;
}

export async function GET() {
  const sitemap = generateSitemap();
  
  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate',
    },
  });
}
