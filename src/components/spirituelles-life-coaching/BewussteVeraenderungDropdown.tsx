'use client';

import { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function BewussteVeraenderungDropdown() {
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
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center">Bewusst Veränderungen willkommen heißen</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
            
            <p className="text-lg text-gray-700 mb-6">
              Veränderung wird möglich, wenn du dich diesen Herausforderungen liebevoll stellst - mit Bewusstsein, Mitgefühl, Neugierde und einem offenen Herzen, anstatt sie weg haben zu wollen, zu ignorieren oder davor weg zu rennen.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Mein Coaching setzt genau hier an: über aktives Hinfühlen und bewusste Körperwahrnehmung tauchen wir tief ein in dein Herz und damit in deine innere Weisheit und helfen dir dadurch von innen heraus zu heilen und damit auch im Außen ein erfülltes, gesundes und glückliches Leben zu kreieren. In dem du präsent bist in deinem Körper, mit dir verbunden und bewusste, klare Entscheidungen triffst - im Einklang mit deiner eigenen Wahrheit und dem, was du wirklich willst.
            </p>
            <p className="text-lg text-gray-700">
              Auf dem Weg dahin lernst du praktische Tools, wie du dich selbst regulieren und dabei emotionale Resilienz aufbauen kannst. Ich begleite dich darin, ein stärkeres Selbstwertgefühl zu entwickeln, in dem du dich sicher und geborgen in deinem Körper fühlst und damit bist du auch gefestigter und gleichzeitig freier in deinem Leben.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
