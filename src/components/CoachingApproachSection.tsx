import React from 'react';
import { HeartIcon, SparklesIcon, LightBulbIcon, CheckIcon } from '@heroicons/react/24/outline';

const CoachingApproachSection = () => {
  const categories = [
    {
      title: 'Körperarbeit',
      description: 'zur Nervensystem-Regulation und Auflösung von gespeicherten Emotionen',
      items: ['Somatische Körperarbeit', 'Rebalancing Massage', 'Atemübungen'],
      icon: <HeartIcon className="h-8 w-8 text-rose-500" />,
      bgGradient: 'from-rose-50 to-rose-50',
      textColor: 'text-rose-500',
      iconColor: 'text-rose-500',
    },
    {
      title: 'Spiritualität',
      description: 'Für Verbindung zu dem Raum in dir, indem du einfach nur bist',
      items: ['Geführte Meditation', 'Bewusste Wahrnehmung', 'Energiearbeit'],
      icon: <SparklesIcon className="h-8 w-8 text-purple-500" />,
      bgGradient: 'from-purple-50 to-purple-50',
      textColor: 'text-purple-500',
      iconColor: 'text-purple-500',
    },
    {
      title: 'Geist & Psyche',
      description: 'Für mentale Klarheit und emotionale Ausgeglichenheit',
      items: ['Systemisches Coaching', 'Selbstreflektionsprozesse', 'Achtsamkeitspraktiken'],
      icon: <LightBulbIcon className="h-8 w-8 text-fuchsia-500" />,
      bgGradient: 'from-rose-50 to-rose-50',
      textColor: 'text-rose-500',
      iconColor: 'text-rose-500',
    }
  ];

  return (
    <section className="relative py-20 md:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
            Mein ganzheitlicher Coaching Ansatz
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-400 to-rose-400 mx-auto mb-6"></div>
        </div>
        
        <div className="w-full">
          <div className="flex flex-col md:flex-row gap-6 mb-12">
            {categories.map((category, index) => (
              <div key={index} className="w-full md:w-1/3">
                <div className="w-full bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full min-h-[320px]">
                  <div className={`p-6 bg-gradient-to-r ${category.bgGradient} flex-1 flex flex-col`}>
                    <div className="h-16 w-16 bg-white rounded-full shadow-sm mb-4 mx-auto flex items-center justify-center">
                      {category.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">
                        {category.title}
                      </h3>
                      {category.description && (
                        <p className="text-sm text-gray-600 text-center mb-3">
                          {category.description}
                        </p>
                      )}
                    </div>
                    <ul className="mt-4 space-y-2">
                      {category.items.map((item, i) => (
                        <li key={i} className="flex items-center">
                          <CheckIcon className={`h-5 w-5 ${category.textColor} mr-2 flex-shrink-0`} />
                          <span className="text-gray-700 text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16">
            <div className="max-w-3xl mx-auto p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm">
              <p className="text-gray-700 text-lg leading-relaxed text-center">
                Dieser umfassende Ansatz geht in die Tiefe und begleitet dich als Frau auf allen Ebenen in die Heilung. Jede Session ist auf deine ganz persönlichen Bedürfnisse abgestimmt, respektiert dein Tempo und schafft einen Raum für natürliche Transformation von innen heraus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachingApproachSection;
