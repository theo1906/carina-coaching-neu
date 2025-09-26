'use client';

import React from 'react';
import { ArrowRightIcon, HeartIcon, LightBulbIcon, SparklesIcon, UserIcon, WrenchScrewdriverIcon, ScaleIcon, BoltIcon, ShieldCheckIcon, CheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const features = [
  {
    name: 'Individuelles Coaching',
    description: 'Jede Sitzung wird speziell auf deine Bedürfnisse, Ziele und deinen spirituellen Weg abgestimmt. Kein Einheitsprogramm, sondern maßgeschneiderte Begleitung, die dich genau dort abholt, wo du gerade stehst.',
    benefits: [
      'Persönliche Zielsetzung und individuelle Herangehensweise',
      'Flexible Anpassung an deinen Entwicklungsprozess',
      'Berücksichtigung deiner einzigartigen Lebensumstände'
    ],
    icon: UserIcon,
  },
  {
    name: 'Ganzheitliche Betrachtung',
    description: 'Wir betrachten dich in deiner Gesamtheit – Körper, Geist und Seele – und schaffen so nachhaltige Veränderungen auf allen Ebenen deines Seins.',
    benefits: [
      'Integration von körperlichen, emotionalen und spirituellen Aspekten',
      'Ganzheitliche Heilung und Wachstum',
      'Nachhaltige Veränderungen im Alltag'
    ],
    icon: HeartIcon,
  },
  {
    name: 'Praktische Werkzeuge',
    description: 'Du erhältst konkrete Übungen und Methoden, die du sofort in deinem Alltag anwenden kannst, um deine Entwicklung zu unterstützen.',
    benefits: [
      'Einfach umsetzbare Übungen für zu Hause',
      'Praktische Tools für herausfordernde Situationen',
      'Nachhaltige Strategien für langfristigen Erfolg'
    ],
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Tiefgreifende Transformation',
    description: 'Gehe über oberflächliche Veränderungen hinaus und erlebe tiefgreifende Wandlung auf körperlicher, emotionaler und spiritueller Ebene.',
    benefits: [
      'Lösung tiefliegender Blockaden',
      'Entwicklung von Klarheit und innerem Frieden',
      'Stärkung deiner intuitiven Fähigkeiten'
    ],
    icon: SparklesIcon,
  },
];

const values = [
  {
    name: 'Mitgefühl & Akzeptanz',
    description: 'Ich begegne dir mit bedingungsloser Wertschätzung und schaffe einen sicheren Raum, in dem du ganz du selbst sein kannst – ohne Bewertung oder Erwartungen.',
    icon: HeartIcon,
  },
  {
    name: 'Ganzheitlichkeit',
    description: 'Ich betrachte den Menschen in seiner Gesamtheit – Körper, Geist und Seele – und berücksichtige dabei auch dein soziales Umfeld und deine Lebensumstände.',
    icon: SparklesIcon,
  },
  {
    name: 'Selbstverantwortung',
    description: 'Du bist der Experte deines Lebens. Ich begleite dich auf deinem Weg, aber die Verantwortung für dein Wachstum und deine Entscheidungen liegt bei dir.',
    icon: ScaleIcon,
  },
  {
    name: 'Vertrauen & Sicherheit',
    description: 'Dein Vertrauen ist mir heilig. Ich schaffe eine vertrauensvolle Atmosphäre, in der du dich sicher fühlst, dich zu öffnen und dich auf den Prozess einzulassen.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Wachstum & Entwicklung',
    description: 'Ich glaube an dein Potenzial zur Veränderung und unterstütze dich dabei, über dich hinauszuwachsen und deine persönlichen Ziele zu erreichen.',
    icon: BoltIcon,
  },
  {
    name: 'Achtsamkeit & Präsenz',
    description: 'Ich begegne dir mit voller Präsenz und Achtsamkeit und unterstütze dich darin, diese Qualitäten auch in deinem eigenen Leben zu kultivieren.',
    icon: LightBulbIcon,
  },
];

export default function SpiritualCoachingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden bg-gradient-to-br from-white to-pink-50" id="spirituelles-coaching">
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
          <div className="absolute top-1/3 -right-4 w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full mix-blend-multiply filter blur opacity-20"></div>
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mix-blend-multiply filter blur opacity-20"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 relative z-10 h-full flex items-center">
          <div className="text-center w-full max-w-4xl mx-auto">
            <span className="inline-block px-4 py-2 mb-6 text-sm font-semibold text-pink-700 bg-pink-100 rounded-full">Spirituelles Life Coaching</span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Entdecke deine innere Weisheit und <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">lebe dein authentisches Selbst</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
              Tiefgreifende Transformation durch die Verbindung von Körper, Geist und Seele – für ein Leben in voller Kraft und Freude
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-full hover:from-pink-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="mr-2">Kostenloses Kennenlerngespräch</span>
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link 
                href="#mehr-erfahren" 
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-pink-700 bg-white border-2 border-pink-200 rounded-full hover:bg-pink-50 transition-colors"
              >
                Mehr erfahren
              </Link>
            </div>
            <div className="mt-10 flex items-center justify-center space-x-4 text-sm text-gray-500">
              <div className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                <span>Individuell auf dich abgestimmt</span>
              </div>
              <div className="h-4 w-px bg-gray-300"></div>
              <div className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-500 mr-2" />
                <span>Online & Vor-Ort möglich</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Was dich erwartet
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mt-4 mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ein ganzheitlicher Ansatz, der Körper, Geist und Seele in Einklang bringt
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
            {features.map((feature, index) => {
              const colors = [
                'from-pink-500 to-purple-600',
                'from-blue-500 to-indigo-600',
                'from-emerald-500 to-teal-600',
                'from-amber-500 to-orange-600'
              ];
              const color = colors[index % colors.length];
              
              return (
                <div key={feature.name} className="group relative overflow-hidden bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                  <div className="p-8">
                    <div className="flex items-start">
                      <div className="flex-shrink-0">
                        <span className={`inline-flex items-center justify-center p-3 rounded-lg shadow-lg bg-gradient-to-br ${color}`}>
                          <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </span>
                      </div>
                      <div className="ml-6">
                        <h3 className="text-xl font-bold text-gray-900">{feature.name}</h3>
                        <p className="mt-2 text-gray-600">
                          {feature.description}
                        </p>
                        {feature.benefits && feature.benefits.length > 0 && (
                          <div className="mt-4 space-y-2">
                            <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Dein Nutzen:</h4>
                            <ul className="space-y-2">
                              {feature.benefits.map((benefit, i) => (
                                <li key={i} className="flex items-start">
                                  <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                  <span className="text-gray-700">{benefit}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Coaching Process Section */}
      <section id="coaching-prozess" className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Dein Weg zur Transformation
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mt-4 mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ein klarer und strukturierter Prozess für nachhaltige Veränderung
            </p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-pink-200 to-purple-200 transform -translate-x-1/2"></div>
            
            {/* Timeline items */}
            <div className="space-y-12 md:space-y-16">
              {/* Step 1 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900">1. Kostenloses Kennenlerngespräch</h3>
                  <p className="mt-2 text-gray-600">
                    In einem unverbindlichen Gespräch lernen wir uns kennen und klären, ob wir zueinander passen.
                  </p>
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 mx-auto md:mx-0">
                  1
                </div>
                <div className="md:flex-1 md:pl-12 mt-6 md:mt-0">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>30-minütiges Kennenlernen</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Kostenlos und unverbindlich</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Klärung deiner Anliegen und Ziele</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:flex-1 md:pr-12 md:text-right order-2 md:order-1 mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900">2. Individuelle Beratung</h3>
                  <p className="mt-2 text-gray-600">
                    Gemeinsam entwickeln wir einen maßgeschneiderten Fahrplan für deine persönliche Entwicklung.
                  </p>
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 mx-auto md:mx-0 order-1 md:order-2">
                  2
                </div>
                <div className="md:flex-1 md:pl-12 mt-6 md:mt-0 order-3">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Ausführliche Bestandsaufnahme</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Klärung deiner Ziele und Wünsche</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Erstellung eines individuellen Coaching-Plans</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="flex-1 md:pr-12 md:text-right mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900">3. Begleitete Transformation</h3>
                  <p className="mt-2 text-gray-600">
                    In regelmäßigen Sitzungen begleite ich dich auf deinem Weg der Heilung und des Wachstums.
                  </p>
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 mx-auto md:mx-0">
                  3
                </div>
                <div className="md:flex-1 md:pl-12 mt-6 md:mt-0">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Regelmäßige Einzelcoachings (online oder vor Ort)</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Praktische Übungen für den Alltag</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Individuelle Unterstützung zwischen den Terminen</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Step 4 */}
              <div className="relative flex flex-col md:flex-row items-center">
                <div className="md:flex-1 md:pr-12 md:text-right order-2 md:order-1 mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold text-gray-900">4. Nachhaltige Integration</h3>
                  <p className="mt-2 text-gray-600">
                    Wir sorgen dafür, dass deine neuen Erkenntnisse und Fähigkeiten nachhaltig in deinem Alltag wirken.
                  </p>
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 mx-auto md:mx-0 order-1 md:order-2">
                  4
                </div>
                <div className="md:flex-1 md:pl-12 mt-6 md:mt-0 order-3">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Überprüfung deiner Fortschritte</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Anpassung der Strategien an deine Entwicklung</span>
                    </li>
                    <li className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>Werkzeuge für deinen weiteren Weg</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 text-lg font-medium text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-full hover:from-pink-700 hover:to-purple-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span className="mr-3">Starte jetzt deine Reise</span>
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-12 md:py-16 bg-gradient-to-br from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Meine Werte und Prinzipien
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mt-4 mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Grundlagen meiner Arbeit, die jede Interaktion prägen
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const colors = ['pink', 'purple', 'amber', 'emerald', 'blue', 'indigo'];
              const color = colors[index % colors.length];
              
              return (
                <div key={value.name} className="group bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-pink-100">
                  <div className="p-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br from-${color}-50 to-${color}-100 flex items-center justify-center mb-4 text-${color}-600 group-hover:from-${color}-100 group-hover:to-${color}-200 transition-all duration-300`}>
                      <value.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.name}</h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Über das Spirituelle Life Coaching
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mt-4 mb-6"></div>
          </div>
          
          <div className="prose prose-lg text-gray-600 max-w-3xl mx-auto">
            <p className="mb-6">
              Unverheilte Wunden machen sich auf verschiedene Weisen bemerkbar:
            </p>
            <ul className="space-y-3 pl-5 mb-6 list-disc">
              <li>Durch Muster, Überlebensstrategien, Selbstsabotage und den ständigen Kampf mit dem eigenen Körper</li>
              <li>Durch das Gefühl, nicht wirklich du selbst sein zu können</li>
            </ul>
            <p className="mb-8">
              Oft läuft das unbewusst ab, es ist dein "Normal". Aber tief in dir spürst du diese Trennung von dem, wonach du dich sehnst: echte Verbindung. Und diese beginnt immer bei dir selbst und in dir.
            </p>
            
            <div className="bg-pink-50 border-l-4 border-pink-400 p-6 my-8 rounded-r-lg">
              <p className="text-pink-800 font-medium">
                "Die größte Entscheidung deines Lebens liegt darin, dass du dein Leben ändern kannst, indem du deine Geisteshaltung änderst."<br />
                <span className="text-sm text-pink-600">- Albert Schweitzer</span>
              </p>
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Was ist Spirituelles Life Coaching?</h3>
            <p className="mb-6">
              Spirituelles Life Coaching ist eine ganzheitliche Methode, die traditionelle Coaching-Techniken mit spirituellen Weisheiten und energetischen Heilmethoden verbindet. Im Gegensatz zum klassischen Coaching, das sich oft auf konkrete Ziele und Problemlösungen konzentriert, geht das Spirituelle Coaching einen Schritt weiter.
            </p>
            <p className="mb-6">
              Es betrachtet nicht nur die sichtbaren Herausforderungen, sondern auch die tieferen Ursachen und Muster, die dahinterstehen. Dabei spielen Themen wie Selbstliebe, Selbstwert, innere Blockaden, Glaubenssätze und die Verbindung zu deiner inneren Weisheit eine zentrale Rolle.
            </p>
            
            <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Für wen ist Spirituelles Coaching geeignet?</h3>
            <p className="mb-6">
              Mein Angebot richtet sich an Menschen, die:
            </p>
            <ul className="space-y-3 pl-5 mb-6 list-disc">
              <li>Sich nach mehr Sinn und Erfüllung in ihrem Leben sehnen</li>
              <li>Alte Muster und Blockaden überwinden möchten</li>
              <li>Ihre Beziehung zu sich selbst verbessern wollen</li>
              <li>Mehr Klarheit über ihre Lebensrichtung gewinnen möchten</li>
              <li>Ihre spirituelle Entwicklung vertiefen möchten</li>
              <li>Mehr Leichtigkeit und Freude in ihr Leben bringen möchten</li>
            </ul>
            
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-white mt-12">
              <h3 className="text-2xl font-bold mb-4">Bereit für den ersten Schritt?</h3>
              <p className="mb-6 text-pink-100">
                Vereinbare jetzt dein kostenloses Kennenlerngespräch und entdecke, wie ich dich auf deinem Weg begleiten kann.
              </p>
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 text-base font-medium text-pink-600 bg-white rounded-full hover:bg-gray-50 transition-colors shadow-lg hover:shadow-xl"
              >
                <span>Termin vereinbaren</span>
                <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
