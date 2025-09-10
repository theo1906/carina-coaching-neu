import type { MetadataRoute } from 'next';

// Common last modified date - update this when making significant changes
const lastModified = new Date();

// Base URL - ensure this matches your production URL
const base = 'https://carinacoaching.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Main pages - highest priority
    { 
      url: `${base}/`, 
      lastModified,
      changeFrequency: 'daily' as const, 
      priority: 1.0 
    },
    
    // Service pages - high priority
    { 
      url: `${base}/dienstleistungen/spirituelles-life-coaching`, 
      lastModified,
      changeFrequency: 'weekly' as const, 
      priority: 0.9 
    },
    { 
      url: `${base}/dienstleistungen/Systemisches-Coaching-fuer-Essstoerungen-ED-Recovery`, 
      lastModified,
      changeFrequency: 'weekly' as const, 
      priority: 0.9 
    },
    { 
      url: `${base}/buchen`, 
      lastModified,
      changeFrequency: 'weekly' as const, 
      priority: 0.9 
    },
    
    // About and personal journey
    { 
      url: `${base}/ueber-mich/mein-weg`, 
      lastModified,
      changeFrequency: 'monthly' as const, 
      priority: 0.8 
    },
    
    // Sub-pages - medium priority
    { 
      url: `${base}/dienstleistungen/spirituelles-life-coaching/themen/mein-ansatz`, 
      lastModified,
      changeFrequency: 'monthly' as const, 
      priority: 0.7 
    },
    { 
      url: `${base}/dienstleistungen/essstoerungen-coaching/meine-heilungsreise`, 
      lastModified,
      changeFrequency: 'monthly' as const, 
      priority: 0.7 
    },
    { 
      url: `${base}/dienstleistungen/essstoerungen-coaching/ist-coaching-das-richtige`, 
      lastModified,
      changeFrequency: 'monthly' as const, 
      priority: 0.7 
    },
    
    // Contact and legal pages - lower priority
    { 
      url: `${base}/kontakt`, 
      lastModified,
      changeFrequency: 'monthly' as const, 
      priority: 0.5 
    },
    { 
      url: `${base}/impressum`, 
      lastModified,
      changeFrequency: 'yearly' as const, 
      priority: 0.3 
    },
    { 
      url: `${base}/datenschutz`, 
      lastModified,
      changeFrequency: 'yearly' as const, 
      priority: 0.3 
    },
    { 
      url: `${base}/cookie-einstellungen`, 
      lastModified,
      changeFrequency: 'yearly' as const, 
      priority: 0.1 
    },
  ];
}
