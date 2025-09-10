import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://carina-coaching.com';
  const lastModified = new Date('2025-09-09');

  return [
    { url: `${base}/`, changeFrequency: 'daily', priority: 1.0, lastModified },
    { url: `${base}/ueber-mich/mein-weg`, changeFrequency: 'weekly', priority: 0.9, lastModified },
    { url: `${base}/dienstleistungen`, changeFrequency: 'weekly', priority: 0.9, lastModified },
    { url: `${base}/buchen`, changeFrequency: 'weekly', priority: 0.9, lastModified },
    { url: `${base}/kontakt`, changeFrequency: 'monthly', priority: 0.8, lastModified },
    { url: `${base}/impressum`, changeFrequency: 'yearly', priority: 0.3, lastModified },
    { url: `${base}/datenschutz`, changeFrequency: 'yearly', priority: 0.3, lastModified },
    { url: `${base}/cookie-einstellungen`, changeFrequency: 'yearly', priority: 0.1, lastModified },
    { url: `${base}/dienstleistungen/spiritual`, changeFrequency: 'weekly', priority: 0.9, lastModified },
    { url: `${base}/dienstleistungen/essstorung`, changeFrequency: 'weekly', priority: 0.9, lastModified },
    { url: `${base}/dienstleistungen/essstorung/meine-heilungsreise`, changeFrequency: 'monthly', priority: 0.8, lastModified },
    { url: `${base}/dienstleistungen/essstorung/ist-coaching-das-richtige`, changeFrequency: 'monthly', priority: 0.8, lastModified },
    { url: `${base}/services/angebot`, changeFrequency: 'weekly', priority: 0.9, lastModified },
    { url: `${base}/dienstleistungen/spiritual/themen/mein-ansatz`, changeFrequency: 'monthly', priority: 0.8, lastModified },
  ];
}
