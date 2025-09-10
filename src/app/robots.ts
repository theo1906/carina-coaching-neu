import type { MetadataRoute } from 'next';

/**
 * Robots.txt configuration
 * 
 * This file is used by search engines to understand which parts of the site
 * should be crawled and indexed.
 * 
 * The sitemap URL must use the apex domain (no www).
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { 
        userAgent: '*', 
        allow: '/', 
        disallow: [
          '/admin/', 
          '/api/',
          '/_next/',
          '/404',
          '/500'
        ] 
      },
    ],
    sitemap: 'https://carinacoaching.com/sitemap.xml',
  };
}
