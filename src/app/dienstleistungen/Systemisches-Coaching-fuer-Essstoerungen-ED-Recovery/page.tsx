'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

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
