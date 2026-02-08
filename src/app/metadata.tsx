import type { Metadata } from 'next';

const siteUrl = 'https://carina-coaching.com';
const title = 'Carina Coaching | Spirituelles Life Coaching & Systemisches Coaching Essstörungen';
const description = 'Carina - Dein Coach für spirituelles Wachstum & Essstörungsbewältigung. Professionelle Begleitung bei Essstörungen, emotionalem Essen & spiritueller Entwicklung in München & online.';

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: [
    'Carina Coaching',
    'Spirituelles Life Coaching',
    'Systemisches Coaching Essstörungen',
    'Essstörung Hilfe München',
    'Spiritueller Coach München',
    'Heilung von Essstörungen',
    'Emotionales Essen überwinden',
    'Körperwahrnehmung verbessern',
    'Selbstliebe entwickeln',
    'Frauencoaching München',
    'Spirituelle Entwicklung',
    'ED Recovery Coach',
    'Heilung Essstörung',
    'Körperarbeit München'
  ],
  
  // Open Graph / Facebook
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: title,
    description: description,
    siteName: 'Carina Coaching',
    images: [
      {
        url: `${siteUrl}/og/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'Carina Coaching - Spirituelles Life Coaching & Systemischer Coach für Essstörungen',
      },
    ],
    locale: 'de_DE',
  },
  
  // Twitter
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    images: [`${siteUrl}/og/og-image.png`],
  },
  
  // Additional metadata
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
