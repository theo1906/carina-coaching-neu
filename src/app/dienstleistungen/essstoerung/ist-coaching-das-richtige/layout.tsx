import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ist ein Coaching bei Essstörungen das Richtige für dich? - Carina Coaching',
  description: 'Erfahre, ob ein Coaching bei Essstörungen der richtige Weg für dich ist und wie ich dich auf deiner Heilungsreise unterstützen kann.',
};

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>;
}
