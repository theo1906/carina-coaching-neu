'use client';

import { SparklesIcon } from '@heroicons/react/24/outline';

export default function OshoQuote() {
  return (
    <div className="relative bg-gradient-to-r from-pink-50 to-pink-100 rounded-2xl p-8 md:p-10 my-8 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-4 right-4 text-pink-200">
        <SparklesIcon className="h-12 w-12 opacity-30" />
      </div>
      
      <div className="relative z-10 flex items-center justify-center px-4">
        <blockquote className="text-center w-full">
          <p className="text-2xl md:text-3xl font-serif italic text-pink-900 leading-relaxed uppercase">
            „ALLES,<br className="md:hidden" />
            WAS DU BRAUCHST,<br className="md:hidden" />
            IST BEREITS IN DIR."
          </p>
        </blockquote>
      </div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat"></div>
      </div>
    </div>
  );
}
