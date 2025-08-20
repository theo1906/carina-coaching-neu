'use client';

import { SparklesIcon } from '@heroicons/react/24/outline';

export default function OshoQuote() {
  return (
    <div className="relative bg-gradient-to-r from-pink-50 to-pink-100 rounded-2xl p-8 md:p-10 my-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 text-pink-200">
        <SparklesIcon className="h-12 w-12 opacity-30" />
      </div>
      
      <div className="relative z-10">
        <blockquote className="text-center">
          <p className="text-2xl md:text-3xl font-serif italic text-pink-900 leading-relaxed mb-6">
            "Be realistic plan for a Miracle"
          </p>
          <footer className="text-pink-700 font-medium">
            — Osho
          </footer>
        </blockquote>
      </div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat"></div>
      </div>
    </div>
  );
}
