import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spirituelles Life Coaching & Embodiment für Frauen – Carina Göb',
  description: 'Spirituelles Life Coaching mit Carina bietet eine transformative Reise in dein Herz, deinen Körper und deine Weiblichkeit.',
  keywords: ['spirituelles coaching', 'weiblichkeit entdecken', 'körperarbeit', 'spirituelle entwicklung', 'heilung', 'transformation'],
  openGraph: {
    title: 'Spirituelles Life Coaching & Embodiment für Frauen – Carina Göb',
    description: 'Spirituelles Life Coaching mit Carina bietet eine transformative Reise in dein Herz, deinen Körper und deine Weiblichkeit.',
    url: 'https://www.carinagoeb.com/dienstleistungen/spirituelles-life-coaching',
    siteName: 'Carina Göb',
    images: [
      {
        url: '/images/og/spirituelles-coaching-og.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'de_DE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spirituelles Life Coaching & Embodiment für Frauen – Carina Göb',
    description: 'Spirituelles Life Coaching mit Carina bietet eine transformative Reise in dein Herz, deinen Körper und deine Weiblichkeit.',
    images: ['/images/og/spirituelles-coaching-og.jpg'],
  },
  alternates: {
    canonical: 'https://www.carinagoeb.com/dienstleistungen/spirituelles-life-coaching',
  },
};
