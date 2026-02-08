import React from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coaching bei Essstörungen & ED Recovery | Carina Coaching',
  description:
    'Systemisches Coaching bei Essstörungen & ED Recovery. Körperorientierte, traumasensible Begleitung für mehr Selbstverbundenheit. Erfahre mehr zu meinem Ansatz.',
  alternates: {
    canonical: 'https://carina-coaching.com/dienstleistungen/essstoerung/',
  },
  openGraph: {
    title: 'Coaching bei Essstörungen & ED Recovery | Carina Coaching',
    description:
      'Systemisches Coaching bei Essstörungen & ED Recovery. Körperorientierte, traumasensible Begleitung für mehr Selbstverbundenheit. Erfahre mehr zu meinem Ansatz.',
    url: 'https://carina-coaching.com/dienstleistungen/essstoerung/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Coaching bei Essstörungen & ED Recovery | Carina Coaching',
    description:
      'Systemisches Coaching bei Essstörungen & ED Recovery. Körperorientierte, traumasensible Begleitung für mehr Selbstverbundenheit. Erfahre mehr zu meinem Ansatz.',
  },
};

export default function EssstoerungLayout({ children }: { children: React.ReactNode }) {
  return children;
}
