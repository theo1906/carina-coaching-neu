'use client';

import { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function EDRecoveryCoachDropdown() {
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
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="prose prose-pink prose-lg max-w-none text-gray-700">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
              Was macht ein ED Recovery Coach bei Essstörungen?
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mt-6"></div>
            
            <p className="leading-relaxed mb-6">
              Ich arbeite holistisch, systemisch und spirituell, das bedeutet, wir schauen uns dein Leben bis heute in einer Art Zeitreise gemeinsam an und die Schlüsselerlebnisse darin und bringen sie in den Kontext mit den Menschen, die an deiner Seite waren bzw. sind und mit deinen Gefühlen.
            </p>
            <p className="leading-relaxed mb-6">
              Dabei entladen wir mögliche Fremdenergien aus deinem System, schaffen Raum und kreieren eine Zukunft, die selbstbestimmt und frei ist von der Essstörung.
            </p>
            <p className="leading-relaxed mb-6">
              Ich unterstütze dich in diesem Prozess mit der "Inquiry"-Methode, das sind gezielte Fragen, die dich sanft tiefer und tiefer in dich hinein geleiten und auf einzigartige, erhellende Erkenntnisse führen aus deiner eigenen, in dir liegenden Weisheit.
            </p>
            <p className="leading-relaxed mb-6">
              In dem du die Verbindung zu dir wiederentdeckt findest du Zugang zur universellen Kraft.
            </p>
            <p className="leading-relaxed mb-6">
              Diese Verbindung hat mein ganzes Leben nachhaltig zum Positiven verändert und mich in die Heilung geführt und auch in meine Berufung.
            </p>
            <p className="leading-relaxed mb-6">
              Osho, Eckhart Tolle oder andere spirituelle Lehrer sprechen in diesem Zusammenhang auch von Erwachen, das heisst wir finden wieder Zugang zu unserem inneren Wesen und damit zu unserer tiefsten Weisheit, die Selbsterkenntnis, Transformation und Selbstverwirklichung ermöglicht.
            </p>
            <p className="leading-relaxed mb-6">
              Dein eigenes spirituelles Erwachen und Sein ist HIER und JETZT, in jedem Moment, und eine Ressource, die wir alle in uns tragen. Diese wesentliche Seite unseres Selbst wird in den klassischen therapeutischen Ansätzen ausgeschlossen.
            </p>
            <p className="leading-relaxed">
              In meiner Arbeit liegt genau hier der Fokus und ich nutze unterstützende Methoden aus dem System-Coaching, damit du dich auf deine innere Reise begeben kannst. Wir holen deinen Verstand dort ab, wo er gerade steht und was er greifen kann, um sich für eine neue Realität zu öffnen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
