'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function SystemischesCoachingPage() {
  const router = useRouter();
  const pathname = usePathname();
  
  useEffect(() => {
    // Only redirect if not already on the target page
    if (!pathname.includes('essstorung')) {
      router.replace('/dienstleistungen/essstorung');
    }
  }, [router, pathname]);
  
  // Show a loading state while redirecting
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center space-y-4">
        <div className="inline-block w-12 h-12 border-4 border-gray-200 border-t-primary-500 rounded-full animate-spin"></div>
        <p className="text-lg text-gray-700 font-medium">Lade Inhalt...</p>
      </div>
    </div>
  );
}
