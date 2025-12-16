'use client';

import { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function InnereWeisheitDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="space-y-8 mt-12">
      {/* Clickable text with arrow */}
      <div className="text-center">
        <div 
          className="inline-flex items-center text-pink-600 hover:text-pink-800 transition-colors duration-300 group cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-lg font-medium">Mehr erfahren</span>
          <ArrowRightIcon className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
      
      {/* Content that appears below */}
      <div className={`transition-all duration-300 ${isOpen ? 'max-h-none opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="prose prose-pink prose-lg max-w-none text-gray-700">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center">Verbinde dich mit deiner inneren Weisheit</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              Als spiritueller Coach halte ich einen sicheren, wertfreien Raum für dich. Ich helfe dir dich über die Kraft und die Energie von verkörperter Präsenz mit deiner inneren Weisheit zu verbinden, die dir die Antworten schenkt auf wichtige Fragen in deinem Leben:
            </p>
            <ul className="list-disc pl-6 mb-6 space-y-4 text-lg text-gray-700">
              <li>Warum bin ich hier? Wie lebe ich ein erfülltes Leben?</li>
              <li>Was ist meine Wahrheit? Und wie kann ich diese Wahrheit in meinen Beziehungen authentisch leben ohne Angst vor Zurückweisung oder Ausgrenzung?</li>
              <li>Wie kann ich meine Spiritualität im Alltag leben und wie kann ich mit dieser Quelle in Verbindung sein, um mein ganzes Potenzial zu entfalten?</li>
              <li>Wer bin ich jenseits meiner Rollen und Verantwortlichkeiten? Jenseits meiner Ängste, meiner Verletzungen, meiner Krankheiten, meiner Schwächen, meiner Stärken?</li>
              <li>Wie kann ich mehr im Einklang mit meinen eigenen Werten und wahren Wünschen leben?</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
