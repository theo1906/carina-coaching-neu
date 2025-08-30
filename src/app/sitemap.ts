import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://carina-coaching.com';
  
  // List all your routes here
  const routes = [
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

  // Generate sitemap entries
  const sitemapEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${baseUrl}/${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8, // Homepage has higher priority
  }));

  return sitemapEntries;
}
