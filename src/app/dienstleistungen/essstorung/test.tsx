import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Test Page | Carina Göb',
  description: 'Test page to check chunk loading',
};

export default function TestPage() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-7xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900">Test Page</h1>
        <p className="mt-4 text-gray-600">This is a test page to check chunk loading.</p>
      </main>
    </div>
  );
}
