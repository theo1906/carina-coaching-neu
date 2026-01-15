'use client';

import { useState } from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function VorteileSystemCoachingDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const benefits = [
    {
      title: 'Wahre Selbstfindung von Innen heraus',
      description: 'Lerne dich selbst und deinen Körper besser kennen. Entdecke deine Ressourcen in dir, anstatt sie im Außen zu suchen. Befreie dich von Konditionierungen, alten Verletzungen und limitierenden Glaubenssätzen über dich, um wieder mehr in Verbindung mit dir selbst zu sein und deiner Weiblichkeit. Owne deinen Zyklus, sei schmerzfrei und in Verbindung mit deinem Hara und deiner Lebensenergie. Finde die Kraft in dir, dein Leben nach deinen Wünschen zu kreieren und dein volles Potential zu entfalten.'
    },
    {
      title: 'Verkörperte Präsenz',
      description: 'Spüre dich in deinem Körper, und trainiere bewusste Körperwahrnehmung und damit die Fähigkeit, voll und ganz im gegenwärtigen Moment zu sein. Verkörperte Präsenz schenkt dir ehrlichen Kontakt mit dir selbst und in deinen Beziehungen. Erlaubt dir, gesunde Grenzen zu setzen und bringt dir Klarheit und Zentriertheit für deine Entscheidungen und in deinen Reaktionen, statt überfordert, reaktiv oder kontrollierend zu sein.'
    },
    {
      title: 'Reduzierung von Leistungsdruck',
      description: 'Durch spürbare, innere Stabilität und Urvertrauen: Sei in Verbindung mit deinem Urvertrauen, der Sicherheit und Stabilität in dir und gehe mit der entspannten Zuversicht durch dein Leben, dass du alles in dir trägst, was es braucht - bei großen Herausforderungen, aber auch im Alltag und in deinem Job.'
    },
    {
      title: 'Selbstannahme',
      description: 'Entwickle einen stabilen Selbstwert für liebevolle Körperakzeptanz und wahre Verbundenheit in Beziehungen: Erkenne deinen Selbstwert und befreie dich von Schuld- und Schamgefühlen für eine liebevolle und gesunde Beziehung zu dir selbst und deinem Körper, um echte Intimität, Verbindung und Zugehörigkeit auch in der Beziehung mit anderen Menschen zu ermöglichen.'
    },
    {
      title: 'Authentizität als Superkraft',
      description: 'Klarheit und Einklang im Leben: Deine innere Haltung und deine Gefühle spiegeln sich in deiner äußeren Erscheinung und deinem Verhalten wider. Es gibt keine Diskrepanz zwischen dem, was du fühlst und dem, was du zeigst, wer du bist. Durch deine gelebte und verkörperte Authentizität ziehst du weniger ambivalentes Verhalten in deinen Beziehungen an und erkennst sehr viel schneller, wer wahres Interesse an dir hat.'
    },
    {
      title: 'Zielgerichtetes, sinnerfülltes Handeln',
      description: 'Richte deine täglichen Entscheidungen und langfristigen Ziele an deinem inneren Wertekompass aus und erschaffe dir ein Leben voller Integrität, Wirksamkeit und Erfüllung. Verkörpere du selbst die Veränderung, die du dir wünschst und inspiriere andere, das Gleiche zu tun.'
    },
    {
      title: 'Spirit & Business',
      description: 'Entdecke, wie du moderne Spiritualität in deiner Arbeit oder in deinem Unternehmen integrieren kannst, um nachhaltigen Erfolg zu erzielen, der dich tief in dir drin nährt und dir Energie schenkt, anstatt dich zu erschöpfen. Erfolg, der inspiriert und kraftvolle Räume öffnet für weibliche Qualitäten wie in Co-Creation zu sein, mit deinem Team und auch mit anderen Business Partner/-innen.'
    },
    {
      title: 'Mentale Stärke',
      description: 'Entwickle deine eigene spirituelle Praxis, die dich die Kraft deiner Gedanken erkennen und nutzen lässt und die dich durch die Ups and Downs in deinem Leben trägt und Blockaden in Chancen für Wachstum und Weisheit verwandelt.'
    },
    {
      title: 'Integrierte Ganzheitlichkeit',
      description: 'Heile deine Verletzungen und die von dir (unbewusst) getrennten Anteile, um zurückzukehren in deine Essenz und den Flow von:',
      bulletPoints: [
        'Entspannter Zuversicht und Urvertrauen in dich und das Leben',
        'Mut, Stärke und Individuation',
        'Liebevoller Güte, wahrem Mitgefühl und Geduld',
        'Freude, Neugierde und Lebendigkeit'
      ]
    }
  ];

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
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
              Was sind die wichtigsten Vorteile von körperzentriertem, spirituellem Life Coaching für Frauen?
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto text-center mb-12">
              Entdecke, wie du durch gezielte Methoden zu mehr Lebensqualität und innerer Harmonie findest
            </p>
            
            <div className="w-full mb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => {
                  const colors = [
                    // Light pink
                    { bg: 'from-pink-50 to-pink-100', border: 'border-pink-200', accent: 'from-pink-400 to-pink-500' },
                    // Light purple
                    { bg: 'from-purple-50 to-purple-100', border: 'border-purple-200', accent: 'from-purple-400 to-purple-500' },
                    // Fuchsia (darker pink)
                    { bg: 'from-fuchsia-50 to-fuchsia-100', border: 'border-fuchsia-200', accent: 'from-fuchsia-400 to-fuchsia-500' },
                    // Rose (warmer pink)
                    { bg: 'from-rose-50 to-rose-100', border: 'border-rose-200', accent: 'from-rose-400 to-rose-500' },
                    // Violet (darker purple)
                    { bg: 'from-violet-50 to-violet-100', border: 'border-violet-200', accent: 'from-violet-400 to-violet-500' },
                    // Pink with purple accent
                    { bg: 'from-pink-50 to-purple-50', border: 'border-pink-200', accent: 'from-pink-500 to-purple-500' },
                  ][index % 6];
                  
                  return (
                    <div key={index} className="group relative overflow-hidden h-full">
                      <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      <div className={`relative h-full bg-white rounded-xl border ${colors.border} p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg`}>
                        <div className={`w-12 h-1 bg-gradient-to-r ${colors.accent} mb-4 rounded-full transform group-hover:scale-110 origin-left transition-transform duration-300`}></div>
                        <h2 className="text-lg font-bold text-gray-900 mb-3 relative z-10">{benefit.title}</h2>
                        <div className="text-gray-600 text-sm relative z-10 leading-relaxed">
                          <p>{benefit.description}</p>
                          {benefit.bulletPoints && (
                            <ul className="mt-2 space-y-1 list-disc pl-5">
                              {benefit.bulletPoints.map((point, i) => (
                                <li key={i} className="text-gray-600 text-sm leading-relaxed">
                                  {point}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-white opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Bereit für deine Reise zu dir selbst?</h2>
              <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                Entdecke, wie du mit einem persönlichen Coaching dein volles Potential entfalten und ein erfülltes Leben in Einklang mit deiner wahren Natur führen kannst.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
