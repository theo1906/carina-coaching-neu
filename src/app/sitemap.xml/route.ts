import { NextResponse } from 'next/server';

type SitemapEntry = {
  url: string;
  lastModified?: string | Date;
  changeFrequency?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
};

const baseUrl = 'https://carina-coaching.com';

const sitemapData: SitemapEntry[] = [
  { 
    url: '/', 
    changeFrequency: 'daily',
    priority: 1.0,
    lastModified: new Date()
  },
  { 
    url: '/ueber-mich/mein-weg',
    changeFrequency: 'weekly',
    priority: 0.9,
    lastModified: new Date()
  },
  { 
    url: '/dienstleistungen',
    changeFrequency: 'weekly',
    priority: 0.9,
    lastModified: new Date()
  },
  { 
    url: '/buchen',
    changeFrequency: 'weekly',
    priority: 0.9,
    lastModified: new Date()
  },
  { 
    url: '/kontakt',
    changeFrequency: 'monthly',
    priority: 0.8,
    lastModified: new Date()
  },
  { 
    url: '/dienstleistungen/spirituelles-life-coaching',
    changeFrequency: 'weekly',
    priority: 0.9,
    lastModified: new Date()
  },
  { 
    url: '/dienstleistungen/spirituelles-life-coaching/themen/mein-ansatz',
    changeFrequency: 'monthly',
    priority: 0.7,
    lastModified: new Date()
  },
  { 
    url: '/dienstleistungen/essstoerungen-coaching/meine-heilungsreise',
    changeFrequency: 'monthly',
    priority: 0.7,
    lastModified: new Date()
  },
  { 
    url: '/dienstleistungen/Systemisches-Coaching-fuer-Essstoerungen-ED-Recovery',
    changeFrequency: 'weekly',
    priority: 0.9,
    lastModified: new Date()
  },
  { 
    url: '/impressum',
    changeFrequency: 'yearly',
    priority: 0.3,
    lastModified: new Date()
  },
  { 
    url: '/datenschutz',
    changeFrequency: 'yearly',
    priority: 0.3,
    lastModified: new Date()
  },
  { 
    url: '/agb',
    changeFrequency: 'yearly',
    priority: 0.3,
    lastModified: new Date()
  },
  { 
    url: '/widerrufsbelehrung',
    changeFrequency: 'yearly',
    priority: 0.1,
    lastModified: new Date()
  },
  { 
    url: '/cookie-einstellungen',
    changeFrequency: 'yearly',
    priority: 0.1,
    lastModified: new Date()
  },
];

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapData.map((entry) => {
        const lastmod = entry.lastModified ? 
          new Date(entry.lastModified).toISOString() : 
          new Date().toISOString();
          
        return `
        <url>
          <loc>${baseUrl}${entry.url}</loc>
          <lastmod>${lastmod}</lastmod>
          ${entry.changeFrequency ? `<changefreq>${entry.changeFrequency}</changefreq>` : ''}
          ${entry.priority ? `<priority>${entry.priority.toFixed(1)}</priority>` : ''}
        </url>`;
      }).join('')}
    </urlset>`;

  return new NextResponse(sitemap.trim(), {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate',
    },
  });
}
