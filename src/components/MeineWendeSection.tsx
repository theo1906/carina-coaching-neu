'use client';

import { useState } from 'react';
import { ClockIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import OshoQuote from './OshoQuote';

export default function MeineWendeSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-8">
      <div 
        className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 group cursor-pointer transition-all duration-200 hover:shadow-md"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-start">
          <div className="flex-1">
            <h4 className="font-medium text-lg text-pink-600 flex items-center mb-3">
              <ClockIcon className="h-5 w-5 mr-2" />
              Meine Wende
            </h4>
            <p className="text-gray-700 leading-relaxed mb-4">
              2016 erlebte ich meine spontane, vollständige Heilung nach 20 Jahren Krankheit – ein Wendepunkt, der mich gelehrt hat, wie tiefgreifend echte Transformation sein kann.
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
            Diese Erfahrung hat mich nicht nur von der Bulimie befreit, sondern hat in mir auch die unglaubliche Kraft erweckt, die wir alle in uns tragen, um uns von innen heraus zu heilen und wahrhaftig zu leben.
          </p>
        </div>
      </div>
      
      {isOpen && <OshoQuote />}
    </div>
  );
}
