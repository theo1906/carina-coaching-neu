'use client';

import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

export default function TimelineCollapsible() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-8 text-center">
      <div 
        className="inline-flex items-center text-pink-600 hover:text-pink-700 cursor-pointer mb-2 transition-colors font-medium"
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
              Ich kenne die Ängste, die Zweifel, aber auch die Hoffnung, die dich hierher geführt hat. Als ich selbst noch am Kämpfen war und in der Essstörung, fühlte ich mich völlig alleine und habe mich aus tiefer Scham und Selbstablehnung niemandem anvertraut - 20 Jahre nicht.
            </p>
            
            <p>
              Die Erfahrung dieser jahrelangen Isolation bestärkt mich umso mehr darin, einen sicheren, wertfreien Raum zu schaffen, in dem du dich als Frau gesehen und verstanden fühlst - mit allem, was da ist und sich zeigen, gehalten und gefühlt werden möchte. In unserer gemeinsamen Arbeit begegne ich dir mit der gelebten Erfahrung, dass Heilung möglich ist in jedem Moment und unsere schmerzvollsten Erlebnisse die größte Stärke und Weisheit in uns hervorbringen.
            </p>
            
            <p>
              Meine Heilung geschah nicht mithilfe traditioneller Therapie oder in speziellen Behandlungszentren: sie hat begonnen, in dem Moment als ich mutig, ehrlich mir selbst gegenüber und in voller Annahme dessen, was ist, für mich losgegangen bin. Durch diese Entschlossenheit bin ich mit der tiefen Weisheit in mir in Verbindung getreten, die mich in meine körpereigene, intuitive Heilkraft geführt hat. Meine Selbstheiler-Erfahrung nährt meine Überzeugung, dass wir alle diese transformierende Kraft in uns haben. Meine Arbeit besteht darin, dich zu unterstützen, den Zugang zu entdecken.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
