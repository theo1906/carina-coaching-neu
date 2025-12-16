'use client';

import { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function WasIstSpirituellesLifeCoachingDropdown() {
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
        <div className="max-w-6xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="prose prose-pink prose-lg max-w-none text-gray-700">
            <div className="space-y-12">
              {/* Section 1: Wie Herausforderungen uns wachsen lassen */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-pink-100">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center">Wie Herausforderungen uns wachsen lassen</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-8"></div>
                
                <div className="space-y-6">
                  <p className="text-lg text-gray-700">
                    Herausforderungen – die sich als Schmerz, Leid oder immer wiederkehrende Muster in unserem Leben manifestieren, in denen sich nichts zu verändern scheint – können uns als kraftvolle Katalysatoren für tiefgreifendes Wachstum und Transformation dienen.
                  </p>
                  <p className="text-lg text-gray-700">
                    In schwierigen Zeiten, wenn uns alles zu viel wird, wir uns verloren fühlen, überfordert vom eigenen Leben und mit den eigenen Gefühlen, sind wir gezwungen, unsere Überzeugungen in Frage zu stellen, neue Möglichkeiten zu erkunden und uns auf eine Reise zurück zu uns selbst zu begeben.
                  </p>
                  <p className="text-lg text-gray-700">
                    Aus eigener Erfahrung weiß ich, dass dieser Weg nicht einfach ist, wenn du dich mitten in einer Krise befindest und jede Menge Mut bedarf. Ich habe jedoch selbst erlebt, als ich komplett am Ende war und nicht mehr weiterleben wollte, dass unsere emotionalen und physischen Verletzungen als auch unsere größten Ängste, Türen sind, hinter denen unser größtes Potenzial schlummert, zu heilen und uns für unsere eigene Wahrhaftigkeit zu öffnen.
                  </p>
                  <p className="text-lg text-gray-700">
                    Vielleicht bist du aktuell in einer ähnlichen Situation oder du fühlst dich wie festgefahren in deinen Beziehungen, in deiner Arbeit oder mit dir selbst.
                  </p>
                </div>
              </div>

              {/* Section 2: Bewusst Veränderungen willkommen heißen */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-purple-100">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center">Bewusst Veränderungen willkommen heißen</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
                
                <div className="space-y-6">
                  <p className="text-lg text-gray-700">
                    Veränderung wird möglich, wenn du dich diesen Herausforderungen liebevoll stellst - mit Bewusstsein, Mitgefühl, Neugierde und einem offenen Herzen, anstatt sie weg haben zu wollen, zu ignorieren oder davor weg zu rennen.
                  </p>
                  <p className="text-lg text-gray-700">
                    Mein Coaching setzt genau hier an: über aktives Hinfühlen und bewusste Körperwahrnehmung tauchen wir tief ein in dein Herz und damit in deine innere Weisheit und helfen dir dadurch von innen heraus zu heilen und damit auch im Außen ein erfülltes, gesundes und glückliches Leben zu kreieren. In dem du präsent bist in deinem Körper, mit dir verbunden und bewusste, klare Entscheidungen triffst - im Einklang mit deiner eigenen Wahrheit und dem, was du wirklich willst.
                  </p>
                  <p className="text-lg text-gray-700">
                    Auf dem Weg dahin lernst du praktische Tools, wie du dich selbst regulieren und dabei emotionale Resilienz aufbauen kannst. Ich begleite dich darin, ein stärkeres Selbstwertgefühl zu entwickeln, in dem du dich sicher und geborgen in deinem Körper fühlst und damit bist du auch gefestigter und gleichzeitig freier in deinem Leben.
                  </p>
                </div>
              </div>

              {/* Section 3: Verbinde dich mit deiner inneren Weisheit */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-pink-100">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center">Verbinde dich mit deiner inneren Weisheit</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-8"></div>
                
                <div className="space-y-6">
                  <p className="text-lg text-gray-700">
                    Als spiritueller Coach halte ich einen sicheren, wertfreien Raum für dich. Ich helfe dir dich über die Kraft und die Energie von verkörperter Präsenz mit deiner inneren Weisheit zu verbinden, die dir die Antworten schenkt auf wichtige Fragen in deinem Leben:
                  </p>
                  <ul className="list-disc pl-6 mb-6 space-y-4 text-lg text-gray-700">
                    <li>Warum bin ich hier? Wie lebe ich ein erfülltes Leben?</li>
                    <li>Was ist meine Wahrheit? Und wie kann ich diese Wahrheit in meinen Beziehungen authentisch leben ohne Angst vor Zurückweisung oder Ausgrenzung?</li>
                    <li>Wie kann ich meine Spiritualität im Alltag leben und wie kann ich mit dieser Quelle in Verbindung sein, um mein ganzes Potenzial zu entfalten?</li>
                    <li>Wer bin ich jenseits meiner Rollen und Verantwortlichkeiten? Jenseits meiner Ängste, meiner Verletzungen, meiner Krankheiten, meiner Schwächen, meiner Stärken?</li>
                    <li>Wie kann ich mehr im Einklang mit meinen eigenen Werten und wahren Wünschen leben?</li>
                  </ul>
                </div>
              </div>

              {/* Section 4: The power of embodied change */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-indigo-100">
                <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 text-center">The power of embodied change</h2>
                <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto mb-8"></div>
                
                <div className="space-y-6">
                  <p className="text-lg text-gray-700">
                    Was ich aus meiner Heilungserfahrung gelernt habe: Veränderung passiert nicht nur im Kopf. Veränderung passiert vor allem im Körper. Im Herzen. Im Energiesystem. In der Stille.
                  </p>
                  <p className="text-lg text-gray-700">
                    Durch unsere gemeinsame Arbeit entwickelst du eine tiefere Verbindung zu dir und zu deinen Gefühlen, indem wir deine Körperwahrnehmung trainieren und sensibilisieren und damit über deine Körperpräsenz den Zugang zu deiner Intuition stärken. Du kommst vom Denken ins Fühlen. Emotionale Blockaden werden zugänglich und intuitive Antworten werden aktiviert, wo der Verstand nicht mehr weiter weiss, um Veränderung nicht nur zu besprechen, sondern spürbar zu verankern.
                  </p>
                  <p className="text-lg text-gray-700">
                    Das ermöglicht dir zu heilen und abgespaltene Anteile zurück zu dir zu holen für mehr Präsenz und Empowerment in deinem Leben. Du bist selbstsicher und triffst Entscheidungen, die im Einklang mit deinem Herzen und deinen Wünschen stehen, für die du bisher aber vielleicht noch nicht den Mut hattest.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
