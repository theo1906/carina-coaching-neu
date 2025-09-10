import { redirect } from 'next/navigation';

export default function SystemischesCoachingPage() {
  // Server-side redirect to the original page
  redirect('/dienstleistungen/essstorung');
  
  // This return is just to satisfy TypeScript, it won't be reached
  return null;
}

// This tells Next.js to use client-side navigation for this page
export const dynamic = 'force-dynamic';
