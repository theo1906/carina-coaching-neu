'use client';

import { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function EmbodimentUndHeilungDropdown() {
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
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6 text-center">
              YOUR BODY IS YOUR BEST GUIDE AND A POWERFUL TEACHER
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto mb-6"></div>
            <p className="text-2xl text-pink-800/90 italic text-center mb-8">
              "Vertraue der Weisheit deines Körpers"
            </p>

            <div className="my-12 p-8 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl border-l-4 border-pink-400">
              <p className="text-gray-700 text-lg">
                Embodiment ist für mich der Schlüssel für Heilung und Transformation. Der Fokus meiner Arbeit liegt daher auf dem Stärken deiner Körperwahrnehmung und dem aktiven Hinfühlen, um dadurch ein tieferes Verständnis für deine körperlichen und emotionalen Zustände zu entwickeln und dir so zu ermöglichen, bewusstere Entscheidungen für dich und dein Leben zu treffen.
              </p>
            </div>

            <div className="mt-12 mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                OWN IT. FEEL IT. HEAL IT.
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto mb-6"></div>
            </div>
            <p className="text-lg">
              Heilung beginnt dort, wo wir uns erlauben, uns selbst in unserer ganzen Tiefe zu
              begegnen – mit all unseren Verletzungen, Ängsten und Sehnsüchten. Es ist ein Akt
              des Mutes, sich dem zu stellen, was ist, um zu dem zurückzukehren, was wir
              wahrhaftig sind.
            </p>

            <div className="my-8 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center mr-4">
                  <span className="text-pink-600 text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-lg font-normal text-gray-900 mb-1">OWN IT.</h3>
                  <p className="text-gray-700 text-lg">Nimm ehrlich an, was ist – deine Erfahrungen, dein Jetzt, deine Gefühle, deinen Körper.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center mr-4">
                  <span className="text-pink-600 text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-lg font-normal text-gray-900 mb-1">FEEL IT.</h3>
                  <p className="text-gray-700 text-lg">Spüre in deinen Körper hinein, lass die Gefühle zu, ohne sie zu bewerten.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center mr-4">
                  <span className="text-pink-600 text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-lg font-normal text-gray-900 mb-1">HEAL IT.</h3>
                  <p className="text-gray-700 text-lg">Erlaube dir, alte Muster loszulassen und neue, heilsame Wege zu gehen.</p>
                </div>
              </div>
            </div>

            <p className="text-lg">
              In meiner Arbeit verbinden wir körperliche Wahrnehmungsübungen mit Ansätzen aus dem spirituellen System-Coaching, um die Wurzeln deiner Muster zu verstehen und aufzulösen. Du lernst, deinen Körper als Kompass zu nutzen und deine Bedürfnisse klarer zu erkennen.
            </p>

            <p className="text-lg mt-6">
              Gemeinsam schaffen wir einen sicheren Raum, in dem du dich öffnen und zeigen kannst – ganz so, wie du bist. Ohne Maske, ohne Anpassung, ohne dich verstellen zu müssen.
            </p>

            <p className="text-lg mt-8">
              <span className="font-semibold">Dein Körper ist dein Zuhause.</span> Wenn du dich darin nicht wohlfühlst, wirst du dich nirgendwo wirklich zu Hause fühlen. Deshalb lade ich dich ein, deinen Körper wieder als Verbündeten zu entdecken – als Ort der Weisheit, Kraft und Heilung.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
