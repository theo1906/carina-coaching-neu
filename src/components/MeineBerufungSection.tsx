'use client';

import { useState } from 'react';
import { HeartIcon } from '@heroicons/react/24/outline';

export default function MeineBerufungSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 group cursor-pointer transition-all duration-200 hover:shadow-md"
         onClick={() => setIsOpen(!isOpen)}>
      <div className="flex justify-between items-center">
        <h4 className="font-medium text-lg text-pink-600 flex items-center">
          <HeartIcon className="h-5 w-5 mr-2" />
          Meine Berufung
        </h4>
        <svg 
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
      
      <div 
        className={`transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'}`}
      >
        <p className="text-gray-700 leading-relaxed mb-6">
          Heute lebe ich in einer liebevollen Beziehung mit mir und meinem Körper, in tiefer Verbindung mit meinem Herzen und mit kraftvollen Überzeugungen, die mich stärken und von innen heraus leiten und unterstütze so viele Frauen wie möglich auf ihrem Weg, ihre eigene Heilkraft und innere Weisheit wiederzuentdecken und zu verkörpern.
        </p>
      </div>
    </div>
  );
}
