'use client';

import { useState } from 'react';
import { ChevronRightIcon, UserCircleIcon } from '@heroicons/react/24/outline';

export default function CollapsibleSection() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
      {/* Always visible introduction */}
      <div className="mb-4">
        <h4 className="font-medium text-lg text-pink-600 flex items-center mb-3">
          <UserCircleIcon className="h-5 w-5 mr-2" />
          Über mich
        </h4>
        <p className="text-gray-700 leading-relaxed">
          Hallo, ich bin Carina. Schön, dass du den Weg hierher in mein Online-Zuhause gefunden hast. Ich bin Gründerin von "Carina Coaching - Embodiment for Women", spiritueller Life Coach, Rebalancing Bodyworker und Systemischer Coach für ED Recovery aus München. 
        </p>
      </div>
      
      {/* Collapsible section */}
      <div 
        className="cursor-pointer transition-all duration-200 hover:bg-gray-50 rounded-lg -mx-2 px-2 py-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex justify-between items-center text-pink-600">
          <span className="font-medium">Mehr über mich lesen</span>
          <ChevronRightIcon 
            className={`h-5 w-5 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`} 
          />
        </div>
        <div 
          className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-100 mt-3' : 'max-h-0 opacity-0'}`}
        >
          <p className="text-gray-700 leading-relaxed pt-2 border-t border-gray-100 mt-2">
            In meiner Arbeit verbinde ich 20 Jahre Bulimie Erfahrung und meine eigene Heilung mit professionellem Coaching. Ich bin hier, um so viele Frauen wie möglich zu unterstützen, ihre eigene Heilkraft zu entfalten und ihr authentisches Selbst zu leben.
            <br /><br />
            Mein Weg ins Coaching und in die Heilarbeit mit Menschen hat nicht mit einer Ausbildung begonnen, sondern mit einem knallharten Weckruf, der mich gezwungen hat, hin zu spüren. Meine eigene Heilungsreise ist daher mein größter Lehrer und Motivator als auch Inspiration in meinem Leben und die Basis meiner Arbeit.
          </p>
        </div>
      </div>
    </div>
  );
}
