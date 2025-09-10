import SpiritualPage from '../spiritual/page';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spirituelles Life Coaching - Carina Göb',
  description: 'Entdecke dein volles Potenzial durch spirituelles Life Coaching. Individuelle Begleitung für persönliches Wachstum und Transformation.',
  openGraph: {
    title: 'Spirituelles Life Coaching - Carina Göb',
    description: 'Entdecke dein volles Potenzial durch spirituelles Life Coaching. Individuelle Begleitung für persönliches Wachstum und Transformation.',
    url: 'https://carinacoaching.com/dienstleistungen/spirituelles-life-coaching',
    type: 'website',
  },
  alternates: {
    canonical: 'https://carinacoaching.com/dienstleistungen/spirituelles-life-coaching',
  },
  keywords: ['spirituelles coaching', 'life coaching', 'persönliche entwicklung', 'selbsterkenntnis', 'transformation'],
};

export default function SpirituellesLifeCoachingPage() {
  return <SpiritualPage />;
}
