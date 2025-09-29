import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spirituelles Life Coaching & Embodiment für Frauen – Carina Göb',
  description: 'Spirituelles Life Coaching mit Carina bietet eine transformative Reise in dein Herz, deinen Körper und deine Weiblichkeit.',
  keywords: ['spirituelles coaching', 'weiblichkeit entdecken', 'körperarbeit', 'spirituelle entwicklung', 'heilung', 'transformation'],
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
