import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://carina-coaching.com';
  const now = new Date();
  
  // List all your routes with their respective priorities and change frequencies
  const routes = [
    { path: '', priority: 1.0, changefreq: 'daily' },
    { path: 'ueber-mich/mein-weg', priority: 0.9, changefreq: 'weekly' },
    { path: 'dienstleistungen', priority: 0.9, changefreq: 'weekly' },
    { path: 'buchen', priority: 0.9, changefreq: 'weekly' },
    { path: 'kontakt', priority: 0.8, changefreq: 'monthly' },
    { path: 'impressum', priority: 0.3, changefreq: 'yearly' },
    { path: 'datenschutz', priority: 0.3, changefreq: 'yearly' },
    { path: 'cookie-einstellungen', priority: 0.1, changefreq: 'yearly' },
    { path: 'dienstleistungen/spiritual', priority: 0.9, changefreq: 'weekly' },
    { path: 'dienstleistungen/essstorung', priority: 0.9, changefreq: 'weekly' },
    { path: 'dienstleistungen/essstorung/meine-heilungsreise', priority: 0.8, changefreq: 'monthly' },
    { path: 'dienstleistungen/essstorung/ist-coaching-das-richtige', priority: 0.8, changefreq: 'monthly' },
    { path: 'services/angebot', priority: 0.9, changefreq: 'weekly' },
    { path: 'dienstleistungen/spiritual/themen/mein-ansatz', priority: 0.8, changefreq: 'monthly' },
  ];

  // Generate sitemap entries
  const sitemapEntries: MetadataRoute.Sitemap = routes.map(({ path, priority, changefreq }) => ({
    url: `${baseUrl}/${path}`,
    lastModified: now,
    changeFrequency: changefreq as 'yearly' | 'monthly' | 'weekly' | 'daily' | 'always',
    priority,
  }));

  return sitemapEntries;
}
