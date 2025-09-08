import type { Metadata } from 'next';

const siteUrl = 'https://carinacoaching.com';
const title = 'Spirituelles Life Coaching & Systemischer Coach für Essstörungen – Carina Coaching';
const description = 'Ich bin spiritueller Life Coach und systemischer Coach für Essstörungen. Ich begleite Frauen auf ihrem Heilungsweg durch einen verkörperungsbasierten Ansatz.';

export const metadata: Metadata = {
  title: title,
  description: description,
  keywords: ['spirituelles coaching', 'essstörungen coaching', 'heilung essstörung', 'frauen coaching', 'spirituelle entwicklung', 'körperarbeit'],
  
  // Open Graph / Facebook
  openGraph: {
    type: 'website',
    url: siteUrl,
    title: title,
    description: description,
    siteName: 'Carina Coaching',
    images: [
      {
        url: `${siteUrl}/images/logo-og.png`,
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
    images: [`${siteUrl}/images/logo-og.png`],
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
