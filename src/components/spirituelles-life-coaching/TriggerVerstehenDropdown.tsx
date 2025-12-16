'use client';

import { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function TriggerVerstehenDropdown() {
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
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="prose prose-pink prose-lg max-w-none text-gray-700">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">Trigger verstehen und bewusst damit umgehen</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mb-8 mx-auto"></div>
            
            <div className="space-y-6 text-gray-700">
              <p>
                Oft rennen wir vor unseren Triggern weg und ignorieren sie. Oder wir betäuben uns durch alle möglichen Formen von Kompensation (Essen, Drogen, Sex, Alkohol, etc.). Oder wir dissoziieren (Daydreaming, Taubheitsgefühl im Körper/ Ich spüre mich nicht, Konzentrationsschwierigkeiten, innere Getriebenheit und Unruhe, Leere, Brennen im Kopf oder Black-outs, etc.).
              </p>
              
              <p>
                Einige von uns erkennen nicht einmal, dass sie getriggert werden. Wir hinterfragen nicht, sondern nehmen unser Verhalten und unsere Reaktionen als gegeben an. In all diesen Momenten sind wir nicht in Kontakt mit uns selbst.
              </p>
              
              <p>
                In diesem unbewussten Seins-Zustand kontrollieren Trigger uns, bestimmen unser Verhalten und schränken uns ein, frei wählen zu können in unserer Reaktion, in unseren Entscheidungen und in unserem Leben. Dadurch verletzen wir uns selbst und andere, zerstören dadurch oft Beziehungen in allen Bereichen unseres Lebens oder haben generell destruktive Verhaltensweisen, die uns krank machen. Wir leben reaktiv, anstatt unser Leben bewusst zu gestalten.
              </p>
              
              <div className="bg-pink-50 p-6 rounded-xl border-l-4 border-pink-500 my-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">Mein Ansatz</h3>
                <p>
                  Durch körperorientierte Tools und Techniken aus dem Holistic Counselling und dem spirituellen System-Coaching helfe ich dir den Gap zwischen dem Moment wo du getriggert wirst und deiner Reaktion, bewusster wahrzunehmen und dich so zu verlangsamen. Bestenfalls und mit etwas Übung so, dass du dadurch bewusster und aus deiner Klarheit und Wahrhaftigkeit heraus entscheiden kannst, wie du reagieren möchtest.
                </p>
              </div>
              
              <p>
                Als emotional reifer Erwachsener lernst du in meinen Coachings auch, Trigger als Teil deines Lebens zu akzeptieren – wir alle haben Trigger. Wir können sie nicht komplett vermeiden, aber wir können durch Embodiment und Präsenz lernen, bewusster darauf zu reagieren und damit mehr Tiefe und Verbundenheit in der Beziehung mit uns selbst erlangen und in unseren zwischenmenschlichen Beziehungen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
