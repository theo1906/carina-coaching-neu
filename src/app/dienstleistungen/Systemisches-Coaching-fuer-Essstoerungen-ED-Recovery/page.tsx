'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Systemisches Coaching für Essstörungen & ED Recovery - Carina Göb',
  description: 'Professionelle Begleitung bei Essstörungen. Individuelles Coaching für nachhaltige Genesung und ein gesundes Selbstbild.',
  openGraph: {
    title: 'Systemisches Coaching für Essstörungen & ED Recovery - Carina Göb',
    description: 'Professionelle Begleitung bei Essstörungen. Individuelles Coaching für nachhaltige Genesung und ein gesundes Selbstbild.',
    url: 'https://carinacoaching.com/dienstleistungen/Systemisches-Coaching-fuer-Essstoerungen-ED-Recovery',
    type: 'website',
  },
  alternates: {
    canonical: 'https://carinacoaching.com/dienstleistungen/Systemisches-Coaching-fuer-Essstoerungen-ED-Recovery',
  },
  keywords: ['essstörungen coaching', 'ed recovery', 'essstörung therapie', 'heilung essstörung', 'selbstwert stärken'],
};

export default function SystemischesCoachingPage() {
  const router = useRouter();
  
  useEffect(() => {
    // Client-side redirect to the original page
    router.replace('/dienstleistungen/essstorung');
  }, [router]);
  
  // Show a loading state while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-lg text-gray-700">Weiterleitung...</p>
      </div>
    </div>
  );
}
