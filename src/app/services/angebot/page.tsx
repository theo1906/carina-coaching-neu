'use client';

import { CheckIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useState } from 'react';

const coachingPackages = [
  {
    title: 'Synergy',
    description: '„Ich vertraue meiner Kraft“',
    price: '444€',
    features: [
      '4 Stunden Coaching',
      'Persönlicher Kompass zum Kennenlernen Deiner inneren Landkarte',
      'Praktische Übungen zur emotionalen Selbstregulation',
      'Bereit für den ersten Schritt?',
      'Gibt es ein Thema, das dich momentan besonders beschäftigt oder eine Situation, die sich in deinem Leben immer wiederholt und du möchtest gerne den ersten Schritt gehen Richtung Selbsterforschung und „gelöst SEIN“? Einstieg in dein inneres System, erkenne dein Kernmuster und erwecke die Kraft in dir für deinen Weg.'
    ],
  },
  {
    title: 'Infinite Balance',
    description: '„Ich ruhe in meiner Mitte“',
    price: '800€',
    features: [
      '8 Stunden Coaching',
      'Gelebtes Gleichgewicht durch Integration und Ausgleich Deiner inneren Dynamiken',
      'Intensives körperorientiertes Begleitprogramm',
      'Ressourcen orientierte geführte Meditationen inkl. Recording',
      'Wöchentlicher Check-in',
      'Bereit für nachhaltige Transformation auf allen Ebenen?',
      'Wir vertiefen deine Erkenntnisse über deine Kernmuster und Hauptpersönlichkeitsanteile, erforschen zugrunde liegende Strategien im Ursprung und bringen deine inneren Ressourcen und Talente in den Fokus als bewusster Anker in all deinen Lebensbereichen. Du erfährst deine Trigger als Wachstumsmöglichkeiten zu verstehen und zu erforschen für innere Harmonie und tiefe Heilung.'
    ],
  },
  {
    title: 'Wholeness',
    description: '„Ich bin erfüllt“',
    price: '1.122€',
    features: [
      '12 Stunden Coaching',
      'Körpervertrauen, Herzverbundenheit und achtsame Präsenz, um Dich mutig und in entspannter Zuversicht für neue Wege zu öffnen',
      'Exklusives körperorientiertes Begleitprogramm',
      'Ressourcen orientierte geführte Meditationen inkl. Recording',
      'Wöchentlicher Check In',
      'Exklusive Community Coaching Calls Online',
      'Bereit für die Wunder in deinem Leben?',
      'Durch die tiefe Verbundenheit zu dir und deinem Körper, die Auflösung deiner Kernmuster und Strategien im Ursprung hin zu kraftvollen, positiven Glaubenssätzen über dich und deinen wahren Wert als Frau und einer etablierten spirituellen Alltagspraxis, sendest du auf einer Frequenz von Vertrauen, Liebe und Leichtigkeit - bereit dein volles Potenzial zu entfalten, Fülle zu empfangen und mutig los zu gehen für dich und dem was dir in deinem Leben wichtig ist.'
    ],
  },
  {
    title: 'Healing Home',
    description: 'Individuelles Angebot auf Anfrage',
    price: '150€',
    features: [
      '1 Stunde Coaching',
      'Rebalancing Bodywork',
      'Oder Kombination aus beidem',
      'Stadtgebiet München',
      'Persönliche Beratung und Betreuung',
      'Flexible Terminvereinbarung',
      'Individuell auf deine Bedürfnisse abgestimmt'
    ],
  },
];

const HealingHomeSection = () => {
  const healingHomePackage = coachingPackages.find(pkg => pkg.title === 'Healing Home');
  
  if (!healingHomePackage) return null;
  
  return (
    <div className="relative mt-20 py-16 bg-gradient-to-br from-rose-50 to-fuchsia-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-rose-200 rounded-full opacity-20"></div>
      <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-fuchsia-200 rounded-full opacity-20"></div>
      
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 text-sm font-semibold text-rose-800 bg-rose-100 rounded-full mb-4">
            Persönliche Begleitung
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
            {healingHomePackage.title}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-fuchsia-400 mx-auto mb-6"></div>
          <p className="text-xl text-rose-800/90 max-w-3xl mx-auto">
            {healingHomePackage.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
          {/* Features */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-rose-100">
            <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Was dich erwartet</h3>
            <ul className="space-y-3">
              {healingHomePackage.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon className="h-6 w-6 text-rose-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Benefits */}
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-rose-100">
            <div className="w-12 h-12 bg-rose-100 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-rose-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Dein Nutzen</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-rose-100 text-rose-700 font-bold mr-3">1</div>
                </div>
                <p className="text-gray-700">Individuelle Betreuung, die genau auf deine Bedürfnisse zugeschnitten ist</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-rose-100 text-rose-700 font-bold mr-3">2</div>
                </div>
                <p className="text-gray-700">Flexible Terminvereinbarung nach deinem Zeitplan</p>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-rose-100 text-rose-700 font-bold mr-3">3</div>
                </div>
                <p className="text-gray-700">Persönliche Beratung in vertrauensvoller Atmosphäre</p>
              </li>
            </ul>
          </div>
          
          {/* CTA */}
          <div className="bg-gradient-to-br from-rose-600 to-fuchsia-600 p-8 rounded-2xl shadow-xl text-white">
            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2">Jetzt starten</h3>
            <p className="text-rose-100 mb-6">Buche dein persönliches Kennenlerngespräch</p>
            
            <div className="text-4xl font-bold mb-6">{healingHomePackage.price}
              <span className="text-xl font-normal text-rose-100">/ Stunde</span>
            </div>
            
            <a
              href="/contact"
              className="block w-full text-center px-6 py-4 bg-white text-rose-700 font-semibold rounded-lg hover:bg-rose-50 transition-all duration-200 shadow-md hover:shadow-lg mb-4"
            >
              Termin anfragen
            </a>
            
            <p className="text-sm text-rose-100 text-center">
              Oder schreibe mir direkt eine Nachricht
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Angebot() {
  const [isHealingHomeOpen, setIsHealingHomeOpen] = useState(false);
  const [isSynergyExpanded, setIsSynergyExpanded] = useState(false);
  const [isInfiniteBalanceExpanded, setIsInfiniteBalanceExpanded] = useState(false);
  const [isWholenessExpanded, setIsWholenessExpanded] = useState(false);
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-white to-rose-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-rose-100 rounded-full opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fuchsia-100 rounded-full opacity-20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
              Preise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-fuchsia-400 mx-auto mb-6"></div>
            <p className="text-xl text-rose-800/90 italic max-w-3xl mx-auto mb-4">
              Wähle zwischen mehreren kürzeren oder weniger längeren Sitzungen. Die Gesamtstundenanzahl bleibt gleich, die Aufteilung entscheidest du selbst.
            </p>
          </div>
        </div>
      </section>

      {/* Coaching Packages */}
      <section className="py-4 sm:py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {coachingPackages.filter(pkg => pkg.title !== 'Healing Home').map((packageItem) => (
              <div key={packageItem.title} className="p-8 bg-white shadow-2xl rounded-2xl">
                <h3 className="text-lg font-semibold text-gray-900">{packageItem.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{packageItem.description}</p>
                <p className="mt-4 text-3xl font-bold text-primary-600">{packageItem.price}</p>
                <ul role="list" className="mt-6 space-y-4">
                  {packageItem.features.map((feature, index, array) => {
                    const isLastItem = index === array.length - 1;
                    const isSynergyQuestion = packageItem.title === 'Synergy' && index === array.length - 2;
                    const isSynergyAnswer = packageItem.title === 'Synergy' && isLastItem;
                    const isInfiniteBalanceQuestion = packageItem.title === 'Infinite Balance' && index === array.length - 2;
                    const isInfiniteBalanceAnswer = packageItem.title === 'Infinite Balance' && isLastItem;
                    const isWholenessQuestion = packageItem.title === 'Wholeness' && index === array.length - 2;
                    const isWholenessAnswer = packageItem.title === 'Wholeness' && isLastItem;
                    
                    if (isSynergyQuestion) {
                      return (
                        <li key={feature} className="list-none">
                          <p className="text-sm leading-6 text-gray-600 mt-4">
                            {feature}
                          </p>
                        </li>
                      );
                    }
                    
                    if (isSynergyAnswer || isInfiniteBalanceAnswer || isWholenessAnswer) {
                      const isExpanded = 
                        packageItem.title === 'Synergy' ? isSynergyExpanded :
                        packageItem.title === 'Infinite Balance' ? isInfiniteBalanceExpanded :
                        isWholenessExpanded;
                      
                      const setIsExpanded = 
                        packageItem.title === 'Synergy' ? setIsSynergyExpanded :
                        packageItem.title === 'Infinite Balance' ? setIsInfiniteBalanceExpanded :
                        setIsWholenessExpanded;
                      
                      return (
                        <li key={feature} className="mt-2">
                          <button
                            type="button"
                            className="flex items-center text-sm font-medium text-rose-700 hover:text-rose-600 focus:outline-none"
                            onClick={() => setIsExpanded(!isExpanded)}
                          >
                            <span>Mehr erfahren</span>
                            <ChevronDownIcon
                              className={`ml-2 h-4 w-4 transition-transform duration-200 ${isExpanded ? 'rotate-180 transform' : ''}`}
                              aria-hidden="true"
                            />
                          </button>
                          {isExpanded && (
                            <div className="mt-2 pl-2 border-l-2 border-rose-200">
                              <p className="text-sm text-gray-600">
                                {feature}
                              </p>
                            </div>
                          )}
                        </li>
                      );
                    }
                    
                    if (isInfiniteBalanceQuestion || isWholenessQuestion) {
                      return (
                        <li key={feature} className="list-none">
                          <p className="text-sm leading-6 text-gray-600 mt-4">
                            {feature}
                          </p>
                        </li>
                      );
                    }
                    
                    return (
                      <li key={feature} className="flex gap-x-3">
                        <CheckIcon className="h-6 w-5 flex-none text-primary-600" aria-hidden="true" />
                        <span className="text-sm leading-6 text-gray-600">
                          {feature}
                        </span>
                      </li>
                    );
                  })}
                </ul>
                <Link
                  href="/contact"
                  className="mt-6 block rounded-md bg-primary-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600"
                >
                  Kostenloses Erstgespräch buchen
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Healing Home Section - Minimalist */}
      <section className="relative py-16 overflow-hidden bg-gradient-to-br from-white to-pink-50">
        {/* Subtle background elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-pink-50 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>
        
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-900 mb-4">
              Healing Home
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-pink-300 to-pink-400 mx-auto mb-4"></div>
            <p className="text-lg text-pink-700/90 max-w-xl mx-auto">
              Persönliche 1:1 Betreuung in vertrauensvoller Atmosphäre
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Features */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-pink-50 hover:shadow transition-shadow duration-200">
              <div className="w-10 h-10 bg-pink-50 rounded-md flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-pink-900 mb-4">Was dich erwartet</h3>
              <ul className="space-y-3">
                {[
                  '1 Stunde individuelles Coaching',
                  'Rebalancing Bodywork',
                  'Kombination möglich',
                  'Exklusiv in München'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span className="text-pink-700/90 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Benefits */}
            <div className="bg-white p-6 rounded-lg shadow-sm border border-pink-50 hover:shadow transition-shadow duration-200">
              <div className="w-10 h-10 bg-pink-50 rounded-md flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-pink-900 mb-4">Dein Nutzen</h3>
              <ul className="space-y-3">
                {[
                  'Individuelle Betreuung',
                  'Persönliche Beratung',
                  'Flexible Termine'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="flex items-center justify-center h-5 w-5 rounded-full bg-pink-100 text-pink-700 font-medium text-xs mr-2">
                        {index + 1}
                      </div>
                    </div>
                    <span className="text-pink-700/90 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Price */}
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-lg border border-pink-100">
              <div className="w-10 h-10 bg-pink-100/50 rounded-md flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-pink-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-pink-900 mb-2">Preis</h3>
              <p className="text-pink-700/90 text-sm mb-4">Pro Stunde Coaching</p>
              <div className="text-3xl font-bold text-pink-900 mb-2">150€</div>
              <p className="text-pink-600/80 text-xs mt-6">
                Termin vereinbaren
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-pink-500/60 text-xs font-medium tracking-wider">
              EXKLUSIV IN MÜNCHEN
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
              Dein erstes Gespräch
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-fuchsia-400 mx-auto mb-6"></div>
            <p className="text-xl text-rose-800/90 italic max-w-3xl mx-auto mb-4">
              Lass uns gemeinsam deinen persönlichen Weg entdecken
            </p>
          </div>
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-rose-600 to-fuchsia-600 rounded-lg hover:from-rose-700 hover:to-fuchsia-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Kostenloses Erstgespräch buchen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
