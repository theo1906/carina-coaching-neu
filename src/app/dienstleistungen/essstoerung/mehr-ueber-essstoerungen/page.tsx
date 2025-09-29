'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function MehrUeberEssstoerungen() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white via-pink-50 to-pink-100 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-32 bg-gradient-to-t from-pink-50 to-transparent z-10"></div>
        </div>
        
        <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="w-full flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 [text-shadow:0_2px_4px_rgba(0,0,0,0.1)]">
              Was macht ein ED Recovery Coach für Essstörungen?
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-fuchsia-400 mb-8"></div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-12 md:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="prose prose-lg prose-pink max-w-none">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Ich arbeite holistisch, systemisch und spirituell, das bedeutet, wir schauen uns dein Leben bis heute in einer Art Zeitreise gemeinsam an und die Schlüsselerlebnisse darin und bringen sie in den Kontext mit den Menschen, die an deiner Seite waren bzw. sind und mit deinen Gefühlen. 
                </p>
                
                <p>
                  Dabei entladen wir mögliche Fremdenergien aus deinem System, schaffen Raum und kreieren eine Zukunft, die selbstbestimmt und frei ist von der Essstörung. 
                </p>
                
                <p>
                  Ich unterstütze dich in diesem Prozess mit der "Inquiry"-Methode, das sind gezielte Fragen, die dich sanft tiefer und tiefer in dich hinein geleiten und auf einzigartige, erhellende Erkenntnisse führen aus deiner eigenen, in dir liegenden Weisheit. 
                </p>
                
                <p>
                  In dem du die Verbindung zu dir wiederentdeckt findest du Zugang zur universellen Kraft. 
                </p>
                
                <p>
                  Diese Verbindung hat mein ganzes Leben nachhaltig zum Positiven verändert und mich in die Heilung geführt und auch in meine Berufung. 
                </p>
                
                <p>
                  Osho, Eckhart Tolle oder andere spirituelle Lehrer sprechen in diesem Zusammenhang auch von Erwachen, das heisst wir finden wieder Zugang zu unserem inneren Wesen und damit zu unserer tiefsten Weisheit, die Selbsterkenntnis, Transformation und Selbstverwirklichung ermöglicht. 
                </p>
                
                <p>
                  Dein eigenes spirituelles Erwachen und Sein ist HIER und JETZT, in jedem Moment, und eine Ressource, die wir alle in uns tragen. Diese wesentliche Seite unseres Selbst wird in den klassischen therapeutischen Ansätzen ausgeschlossen. 
                </p>
                
                <p>
                  In meiner Arbeit liegt genau hier der Fokus und ich nutze unterstützende Methoden aus dem System-Coaching, damit du dich auf deine innere Reise begeben kannst. Wir holen deinen Verstand dort ab, wo er gerade steht und was er greifen kann, um sich für eine neue Realität zu öffnen. 
                </p>
                
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <Link 
                    href="/dienstleistungen/essstoerung#heilungsreise" 
                    className="inline-flex items-center text-pink-600 hover:text-pink-800 transition-colors group text-lg"
                    scroll={false}
                  >
                    <ArrowLeftIcon className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
                    Zurück zur Übersicht
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
