import type { MetadataRoute } from 'next';

// Ensure we use the apex domain (no www) for all URLs
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { 
        userAgent: '*', 
        allow: '/', 
        disallow: [
          '/admin/',
          '/api/'
        ] 
      }
    ],
    sitemap: 'https://carina-coaching.com/sitemap.xml',
  };
}
