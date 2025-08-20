import React from 'react';
import { ShieldCheck, Heart, Sparkles, Zap, Target, Clock, Eye } from 'lucide-react';
import RaumCollapsible from './RaumCollapsible';

export default function RaumFuerDichSection() {
  const topFeatures = [
    {
      icon: <ShieldCheck className="w-8 h-8 text-white" />,
      title: 'Vertrauensvoll, einladend und wertfrei',
      description: 'Ein geschützter Raum ohne Bewertung, in dem du ganz du selbst sein kannst.'
    },
    {
      icon: <Heart className="w-8 h-8 text-white" />,
      title: 'Trauma sensibel und Verantwortungsbewusst',
      description: 'Begleitung mit tiefem Verständnis für dein Nervensystem und höchster Professionalität.'
    },
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: 'Ressourcenorientiertes Vorgehen',
      description: 'Wir nutzen deine inneren Stärken als Basis für deine Entwicklung.'
    }
  ];

  const bottomFeatures = [
    {
      icon: <Zap className="w-6 h-6 text-rose-500" />,
      title: 'Flexible Begleitung',
      description: 'Online, persönlich oder in der Natur - ganz wie es für dich passt.'
    },
    {
      icon: <Clock className="w-6 h-6 text-rose-500" />,
      title: 'Schritt für Schritt in deinem Tempo',
      description: 'Schritt für Schritt, so wie es sich für dich sicher anfühlt.'
    },
    {
      icon: <Eye className="w-6 h-6 text-rose-500" />,
      title: 'Ganzheitliche Sichtweise',
      description: 'Ursachenforschung statt Symptombekämpfung.'
    },
    {
      icon: <Sparkles className="w-6 h-6 text-rose-500" />,
      title: 'Humor, Freude und Leichtigkeit',
      description: 'Heilung bringt Freude und Lebendigkeit in dein Leben.'
    }
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white to-rose-50">
      <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-5"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-rose-900 mb-3">
            Mein Raum für dich
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-fuchsia-400 to-rose-400 mx-auto mb-4"></div>
          <p className="text-lg text-rose-800/90 italic max-w-2xl mx-auto">
            "EIN SICHERER HAFEN FÜR DEINE PERSÖNLICHE REISE ZU DIR SELBST"
          </p>
        </div>

        {/* Top Row - 3 Boxes */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {topFeatures.map((feature, index) => (
            <div 
              key={`top-${index}`}
              className="bg-gradient-to-br from-rose-100 to-pink-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-rose-50"
            >
              <div className="w-14 h-14 rounded-xl bg-rose-500/10 flex items-center justify-center mb-4 mx-auto">
                {React.cloneElement(feature.icon, { className: 'w-6 h-6 text-rose-600' })}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">{feature.title}</h3>
              <p className="text-gray-600 text-sm text-center">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Row - 4 Boxes */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {bottomFeatures.map((feature, index) => (
            <div 
              key={`bottom-${index}`}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="w-12 h-12 rounded-xl bg-rose-50 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="max-w-3xl mx-auto p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm">
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Mit meinem Coaching möchte ich dir einen Raum schaffen, in dem du dich als Frau absolut sicher fühlst, um dich in deiner Tiefe zu erforschen und zu heilen.
            </p>
            
            <div className="flex justify-center space-x-4 mt-6">
              <span className="inline-block w-3 h-3 rounded-full bg-rose-500"></span>
              <span className="inline-block w-3 h-3 rounded-full bg-rose-400"></span>
              <span className="inline-block w-3 h-3 rounded-full bg-rose-300"></span>
            </div>
            
            <div className="mt-6">
              <RaumCollapsible />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
