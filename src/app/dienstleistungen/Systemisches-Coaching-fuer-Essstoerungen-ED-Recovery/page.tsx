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
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center space-y-4">
        <div className="inline-block w-12 h-12 border-4 border-gray-200 border-t-primary-500 rounded-full animate-spin"></div>
        <p className="text-lg text-gray-700 font-medium">Weiterleitung...</p>
      </div>
    </div>
  );
}
