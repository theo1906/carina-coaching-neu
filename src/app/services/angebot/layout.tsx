import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Angebot & Preise | Carina Coaching',
  description:
    'Angebot & Preise für spirituelles Life Coaching & Coaching bei Essstörungen. Flexible Sitzungen online oder vor Ort – vereinbare dein erstes Kennenlerngespräch.',
  alternates: {
    canonical: 'https://carina-coaching.com/services/angebot/',
  },
  openGraph: {
    title: 'Angebot & Preise | Carina Coaching',
    description:
      'Angebot & Preise für spirituelles Life Coaching & Coaching bei Essstörungen. Flexible Sitzungen online oder vor Ort – vereinbare dein erstes Kennenlerngespräch.',
    url: 'https://carina-coaching.com/services/angebot/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Angebot & Preise | Carina Coaching',
    description:
      'Angebot & Preise für spirituelles Life Coaching & Coaching bei Essstörungen. Flexible Sitzungen online oder vor Ort – vereinbare dein erstes Kennenlerngespräch.',
  },
};

export default function AngebotLayout({ children }: { children: React.ReactNode }) {
  return children;
}
