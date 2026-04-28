"use client";

import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

type ExpandableBulletPointProps = {
  title: string;
  content: string;
  index: number;
  color?: 'pink' | 'purple';
};

export default function ExpandableBulletPoint({ title, content, index, color = 'pink' }: ExpandableBulletPointProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <li className="mb-4">
      <div
        className="flex items-start cursor-pointer group"
        onClick={() => setIsExpanded(!isExpanded)}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setIsExpanded(!isExpanded);
          }
        }}
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
        aria-label={title}
      >
        <div className={`flex-shrink-0 h-6 w-6 rounded-full bg-gradient-to-r ${color === 'pink' ? 'from-pink-100 to-pink-50' : 'from-purple-100 to-purple-50'} flex items-center justify-center mr-4`}>
          <div className={`h-2 w-2 rounded-full ${color === 'pink' ? 'bg-pink-600' : 'bg-purple-600'}`}></div>
        </div>
        <div className="flex-1 pt-0.5">
          <h4 className="sr-only">{title}</h4>
          <div className="flex items-start justify-between">
            <span className="text-gray-700 text-lg leading-snug">
              {title}
            </span>
            <span className={`ml-2 flex-shrink-0 mt-1 ${color === 'pink' ? 'text-pink-500' : 'text-purple-500'}`} aria-hidden="true">
              {isExpanded ? (
                <ChevronUpIcon className="h-4 w-4" />
              ) : (
                <ChevronDownIcon className="h-4 w-4" />
              )}
            </span>
          </div>
          
          {isExpanded && (
            <div className="mt-2 text-gray-600 text-base leading-relaxed">
              {content}
            </div>
          )}
        </div>
      </div>
    </li>
  );
}
