'use client';

import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

export default function RaumCollapsible() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-8">
      <div 
        className="inline-flex items-center text-rose-600 hover:text-rose-700 cursor-pointer transition-colors font-medium"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg">
          {isOpen ? 'Weniger anzeigen' : 'Mehr erfahren'}
        </span>
        {isOpen ? (
          <ChevronUpIcon className="h-6 w-6 ml-2" />
        ) : (
          <ChevronDownIcon className="h-6 w-6 ml-2" />
        )}
      </div>

      {isOpen && (
        <div className="mt-6 space-y-6 text-gray-700">
          <p className="text-lg leading-relaxed">
            Ich musste selbst fühlen, wie viel Scham und Schuld als auch Isolation mit bspw. einer Essstörung verbunden sind. Seitdem ich meinen Weg des persönlichen Wachstums konsequent gehe, geschehen Wunder in meinem Leben und ich erlaube mir Freiheit, Leichtigkeit und Fülle. Im Außen treffe ich oft noch auf wenig Verständnis für meine Veränderung und mein „Aufbrechen“ aus veralteten Denkweisen und Dynamiken. Umso wichtiger ist es mir, dir genau diesen wertfreien Raum zu schenken, damit auch du all das für dich ermöglichen kannst.
          </p>
        </div>
      )}
    </div>
  );
}
