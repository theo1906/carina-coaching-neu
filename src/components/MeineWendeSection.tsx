'use client';

import { useState } from 'react';
import { ClockIcon } from '@heroicons/react/24/outline';
import OshoQuote from './OshoQuote';

export default function MeineWendeSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-8">
      <div 
        className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 group cursor-pointer transition-all duration-200 hover:shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-lg text-pink-600 flex items-center">
            <ClockIcon className="h-5 w-5 mr-2" />
            Meine Wende
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
        
        <div className={`transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <p className="text-gray-700 leading-relaxed">
            2016 erlebte ich meine spontane, vollständige Heilung nach 20 Jahren täglichem Kampf – ein Wendepunkt, der mich gelehrt hat, wie tiefgreifend echte Transformation sein kann. Diese Erfahrung hat mich nicht nur von der Bulimie befreit, sondern hat in mir auch die unglaubliche Kraft erweckt, die wir alle in uns tragen, um uns von innen heraus zu heilen.
          </p>
        </div>
      </div>
      
      {isOpen && <OshoQuote />}
    </div>
  );
}
