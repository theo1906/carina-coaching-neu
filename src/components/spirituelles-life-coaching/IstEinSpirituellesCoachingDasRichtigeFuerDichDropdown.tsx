'use client';

import { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function IstEinSpirituellesCoachingDasRichtigeFuerDichDropdown() {
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
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 text-center [text-shadow:0_2px_4px_rgba(0,0,0,0.1)]">
              Ist ein spirituelles Coaching das Richtige für dich?
            </h1>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Deine spirituelle Reise beginnt hier</h3>
                <p className="text-gray-700 mt-2">
                  Deine spirituelle Coaching Reise ist eine innere Reise. Eine Reise zu dir, in deine Kraft, in deinen Körper, in dein Herz, in die Verbindung mit deiner Seele und mit deinem Frausein.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mt-6">Entdecke dein wahres Selbst</h3>
                <p className="text-gray-700 mt-2">
                  Entdecke deine Essenz, deinen wahren Wesenskern, und die Qualitäten deiner Weiblichkeit auf ganz natürliche Art und Weise von innen heraus zu entfalten.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mt-6">Tauche tiefer ein</h3>
                <p className="text-gray-700 mt-2">
                  Erforsche deine Muster und Strategien, um tiefer in dein Bewusstsein einzutauchen - in den Raum in dir, in dem du genau richtig bist, so wie du bist.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mt-6">Erlebe Verbundenheit</h3>
                <p className="text-gray-700 mt-2">
                  Erfahre, wie es sich anfühlt, mehr und mehr in allen Bereichen deines Lebens als auch in deinem Körper in Präsenz und Verbundenheit mit dir zu sein und die Kraft und die Ressourcen deines Frauseins in Balance mit deiner männlichen Energie zu leben.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mt-6">Werde zur Gestalterin deines Lebens</h3>
                <p className="text-gray-700 mt-2">
                  Verkörpere das, was du dir wünschst und bring deine Energie in das, was dir wichtig ist. Erkenne, dass du es bist, die immer die Wahl hat und die entscheiden kann, mutig für sich loszugehen und inspiriere andere dasselbe zu tun.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mt-6">Aus eigener Erfahrung</h3>
                <p className="text-gray-700 mt-2">
                  Ich teile das hier mit dir aus eigener, erlebter und gefühlter Erfahrung und vollständiger Recovery nach 20 Jahren Krankheit.
                </p>
              </div>

              <div className="relative my-6 p-6 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl border-l-4 border-pink-400 shadow-lg transform hover:scale-[1.01] transition-all duration-300 hover:shadow-xl hover:border-pink-500 group">
                <div className="absolute -top-3 -left-3 w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center shadow-md group-hover:bg-pink-200 transition-colors duration-300">
                  <svg className="h-5 w-5 text-pink-500 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <p className="text-gray-700 italic text-base relative z-10 group-hover:text-gray-800 transition-colors duration-300">
                  "Mein Weg in die spirituelle Heilung und auch der Prozess danach auf der Suche nach meiner eigenen Identität und was mir in meinem Leben wirklich wichtig ist, nachdem ich mich 20 Jahre in meiner Essstörung verloren hatte, ist meine größte Stärke und Super-Power."
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800">Mein Ansatz</h3>
                <p className="text-gray-700 mt-2">
                  Die gesammelten Erfahrungen sind die Essenz meiner Arbeit und mein Ansatz für ein erfülltes SEIN im eigenen Körper, dem Zuhause deiner Seele und damit für ein erfülltes Leben.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mt-6">Gemeinsam den Weg gehen</h3>
                <p className="text-gray-700 mt-2">
                  Ich bin hier, um all das mit dir zu teilen. Du musst diesen Weg nicht alleine gehen. Spirituelles Coaching unterstützt dich dabei, dein Herz zu öffnen und wieder ganz in Verbindung mit dir selbst zu sein - mit deinem Körper und mit deiner weiblichen Kraft.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mt-6">Starte noch heute</h3>
                <p className="text-gray-700 mt-2">
                  Geh' los für dich und entdecke was möglich ist in einer kostenfreien, unverbindlichen 30-minütigen Kennenlern-Session mit mir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
