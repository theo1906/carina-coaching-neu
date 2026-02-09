'use client';

import { useState } from 'react';
import { ChevronRightIcon, UserCircleIcon } from '@heroicons/react/24/outline';

export default function CollapsibleSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 group cursor-pointer transition-all duration-200 hover:shadow-md"
      onClick={() => setIsOpen(!isOpen)}>
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h4 className="font-medium text-lg text-pink-600 flex items-center mb-3">
            <UserCircleIcon className="h-5 w-5 mr-2" />
            Über mich
          </h4>
          <p className="text-gray-700 leading-relaxed mb-4">
            Hallo, ich bin Carina Göb und<br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>
            Gründerin von "CARINA COACHING -<br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>
            embodiment for women". Schön,<br className="sm:hidden" />
            <span className="hidden sm:inline"> </span>
            dass du den Weg hierher gefunden hast.
          </p>
        </div>
        <ChevronRightIcon 
          className={`h-5 w-5 text-pink-600 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''} flex-shrink-0`} 
        />
      </div>
      
      <div className={`transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <p className="text-gray-700 leading-relaxed">
          In meiner Arbeit als spiritueller Life Coach, Rebalancing Bodyworker und systemischer Coach verbinde ich 20 Jahre Bulimie-Erfahrung und meine eigene Heilung mit professionellem Coaching. Mein Weg in die Heilarbeit mit Menschen begann nicht mit einer Ausbildung, sondern mit einem knallharten Weckruf, der mich gezwungen hat, hinzuspüren.
          <br /><br />
          Meine eigene Heilungsreise ist daher mein größter Lehrer und die Basis meiner Arbeit. Ich bin hier, um Frauen zu unterstützen, ihre eigene Heilkraft zu entfalten und ihr authentisches Selbst zu leben.
        </p>
      </div>
    </div>
  );
}
