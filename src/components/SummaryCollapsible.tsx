'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

export default function SummaryCollapsible() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-16 text-center">
      <div 
        className="inline-flex items-center text-pink-600 hover:text-pink-700 cursor-pointer mb-2 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">
          {isOpen ? 'Weniger anzeigen' : 'Mehr erfahren'}
        </span>
        {isOpen ? (
          <ChevronUpIcon className="h-5 w-5 ml-1" />
        ) : (
          <ChevronDownIcon className="h-5 w-5 ml-1" />
        )}
      </div>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[1200px] opacity-100' : 'max-h-0 opacity-0'}`}
        aria-hidden={!isOpen}
      >
        <div className="mt-4">
          <div className="text-gray-700 max-w-3xl mx-auto mb-8 text-lg space-y-4 text-left">
            <p>
              Als <Link href="/dienstleistungen/spiritual" className="text-pink-600 hover:text-pink-700 font-medium">spiritueller Coach</Link>, begleite ich Frauen zu mehr Körperverbindung und in ein erfülltes SEIN im eigenen Körper, dem Zuhause der Seele und damit in ein erfülltes, selbstbestimmtes Leben voller Leichtigkeit, Freude und authentischem Selbstausdruck. Mein Ansatz verbindet praktisches Coaching mit intuitiver Weisheit und hilft dir dabei, bewusster zu leben durch die tiefe Verbindung mit deinem Körper, deiner inneren Stimme und deiner weiblichen Kraft.
            </p>
            
            <p>
              Als <Link href="/dienstleistungen/essstorung" className="text-pink-600 hover:text-pink-700 font-medium">Coaching für Essstörung</Link> teile ich meine gelebte Erfahrung und mein Wissen, um dir Hoffnung, Verständnis und konkrete Unterstützung für deinen ganz persönlichen Heilungsweg zu schenken. Ich kenne die Scham, die Isolation und die Entfremdung von sich selbst sehr gut und kann mit dir mitfühlen. Ich kann dir aber auch spiegeln, dass vollkommene Heilung möglich ist. Mein traumasensibler, holistischer Ansatz erkennt an, dass es bei Essstörungen weniger um Essen geht, sondern vielmehr um die Beziehung zu dir selbst, deinem Wert, deinem Körper und vor allem um den Kontakt mit deiner Wut.
            </p>
            
            <p>
              Die Verbindung zu dir selbst, deinem Körper und deinen Gefühlen ermöglicht echte, nachhaltige Veränderung – Schritt für Schritt in deinem Tempo.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Link 
              href="/dienstleistungen/spiritual" 
              className="px-6 py-3 bg-pink-50 text-pink-700 rounded-full hover:bg-pink-100 transition-colors text-sm font-medium"
            >
              Spirituelles Coaching entdecken
            </Link>
            <Link 
              href="/dienstleistungen/essstorung" 
              className="px-6 py-3 bg-pink-50 text-pink-700 rounded-full hover:bg-pink-100 transition-colors text-sm font-medium"
            >
              Coaching für Essstörungen
            </Link>
            <Link 
              href="/buchen" 
              className="px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors text-sm font-medium"
            >
              Kostenloses Erstgespräch vereinbaren
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
