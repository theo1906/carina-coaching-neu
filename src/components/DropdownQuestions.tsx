'use client';

import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { HeartIcon, SparklesIcon, LightBulbIcon } from '@heroicons/react/24/solid';

export default function DropdownQuestions() {
  const [isOpen, setIsOpen] = useState(false);
  
  const questions = [
    {
      text: "Möchtest du in liebevoller Verbindung zu deinem Körper sein?",
      icon: HeartIcon,
      color: "from-pink-400 to-pink-600"
    },
    {
      text: "Sehnst du dich nach mehr Leichtigkeit?",
      icon: SparklesIcon,
      color: "from-amber-400 to-pink-500"
    },
    {
      text: "Bist du bereit, dir in deiner Wahrheit zu begegnen?",
      icon: LightBulbIcon,
      color: "from-purple-400 to-pink-500"
    }
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="w-full max-w-2xl mx-auto">
      <button
        onClick={toggleDropdown}
        className="group flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors duration-200 mx-auto mb-6"
      >
        <span className="font-medium group-hover:underline">Mehr erfahren</span>
        {isOpen ? (
          <ChevronUpIcon className="h-4 w-4 mt-0.5 transition-transform duration-200" />
        ) : (
          <ChevronDownIcon className="h-4 w-4 mt-0.5 transition-transform duration-200" />
        )}
      </button>

      <div className={`space-y-4 transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 max-h-[500px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
        {questions.map(({ text, icon: Icon, color }, index) => (
          <div 
            key={index} 
            className="group relative overflow-hidden bg-white/70 backdrop-blur-sm p-5 rounded-2xl border border-pink-100 hover:border-transparent transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>
            <div className="flex items-start">
              <div className={`flex-shrink-0 h-10 w-10 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mr-4 mt-0.5 group-hover:scale-110 transition-all duration-300 shadow-md`}>
                <Icon className="h-5 w-5 text-white transform group-hover:rotate-12 transition-transform duration-300" />
              </div>
              <div className="flex-1">
                <p className="text-base font-medium text-pink-900/90 group-hover:text-pink-900 transition-colors duration-300">
                  {text}
                </p>
                <div className="mt-1.5 h-1 w-8 bg-gradient-to-r from-pink-200 to-transparent group-hover:w-16 transition-all duration-300"></div>
              </div>
            </div>
            <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
