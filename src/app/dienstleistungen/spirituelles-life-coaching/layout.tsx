import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spirituelles Life Coaching für Frauen | Carina Coaching',
  description:
    'Ganzheitliches spirituelles Life Coaching für Frauen. Finde zurück in die Verbindung mit deinem Körper, deiner Intuition und inneren Weisheit.',
  alternates: {
    canonical: 'https://carina-coaching.com/dienstleistungen/spirituelles-life-coaching/',
  },
  openGraph: {
    title: 'Spirituelles Life Coaching für Frauen | Carina Coaching',
    description:
      'Ganzheitliches spirituelles Life Coaching für Frauen. Finde zurück in die Verbindung mit deinem Körper, deiner Intuition und inneren Weisheit.',
    url: 'https://carina-coaching.com/dienstleistungen/spirituelles-life-coaching/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spirituelles Life Coaching für Frauen | Carina Coaching',
    description:
      'Ganzheitliches spirituelles Life Coaching für Frauen. Finde zurück in die Verbindung mit deinem Körper, deiner Intuition und inneren Weisheit.',
  },
};

export default function SpiritualLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-white text-gray-900">
      {children}
    </div>
  );
}
