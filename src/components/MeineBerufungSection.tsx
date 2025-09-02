'use client';

import { useState } from 'react';
import { HeartIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function MeineBerufungSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 group cursor-pointer transition-all duration-200 hover:shadow-md"
         onClick={() => setIsOpen(!isOpen)}>
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h4 className="font-medium text-lg text-pink-600 flex items-center mb-3">
            <HeartIcon className="h-5 w-5 mr-2" />
            Meine Berufung
          </h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            Heute lebe ich in einer liebevollen Beziehung mit mir und meinem Körper und bin tief mit meinem Herzen verbunden.
          </p>
        </div>
        <div className="flex items-center h-5 mt-1 ml-4">
          <ChevronRightIcon 
            className={`h-5 w-5 text-pink-600 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} 
          />
        </div>
      </div>
      
      <div className={`transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <p className="text-gray-700 leading-relaxed">
          Mit kraftvollen Überzeugungen, die mich stärken und von innen heraus leiten, unterstütze ich so viele Frauen wie möglich auf ihrem Weg, ihre eigene Heilkraft und innere Weisheit wiederzuentdecken und zu verkörpern.
        </p>
      </div>
    </div>
  );
}
