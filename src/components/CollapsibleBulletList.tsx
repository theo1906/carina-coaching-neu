"use client";

import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

type CollapsibleBulletListProps = {
  items: string[];
  initialVisibleCount: number;
  bulletColor?: string;
};

export default function CollapsibleBulletList({ 
  items, 
  initialVisibleCount, 
  bulletColor = 'pink-600' 
}: CollapsibleBulletListProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleItems = isExpanded ? items : items.slice(0, initialVisibleCount);
  const hasMore = items.length > initialVisibleCount;

  return (
    <div className="space-y-3">
      <ul className="space-y-3 text-gray-800 text-lg">
        {visibleItems.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className={`text-${bulletColor} mr-3`}>•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      
      {hasMore && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-pink-600 hover:text-pink-700 text-sm font-medium mt-2 ml-8"
        >
          {isExpanded ? (
            <>
              <span>Weniger anzeigen</span>
              <ChevronUpIcon className="h-4 w-4 ml-1" />
            </>
          ) : (
            <>
              <span>Mehr anzeigen</span>
              <ChevronDownIcon className="h-4 w-4 ml-1" />
            </>
          )}
        </button>
      )}
    </div>
  );
}
