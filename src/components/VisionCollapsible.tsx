'use client';

import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

export default function VisionCollapsible() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-8 text-center">
      <div 
        className="inline-flex items-center text-rose-600 hover:text-rose-700 cursor-pointer mb-2 transition-colors font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>
          {isOpen ? 'Weniger anzeigen' : 'Mehr erfahren'}
        </span>
        {isOpen ? (
          <ChevronUpIcon className="h-5 w-5 ml-1" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 ml-1" />
        )}
      </div>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}
        aria-hidden={!isOpen}
      >
        <div className="mt-6">
          <div className="text-gray-700 max-w-4xl mx-auto text-lg space-y-6 text-left bg-white/50 backdrop-blur-sm p-8 rounded-xl border border-gray-100 shadow-sm">
            <p>
              Mein Coaching setzt dort an, wo du gerade stehst in deinem Leben und ermöglicht dir eine ganz individuelle Reise in deinem eigenen Tempo mit Empathie, Verständnis und praktischer, alltagsnaher Begleitung.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
