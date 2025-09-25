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
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${color}"></div>
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
            
            <div className="mt-10">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-full hover:from-pink-700 hover:to-purple-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="mr-2">Jetzt Termin vereinbaren</span>
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Call to Action */}
      <section className="relative py-16 md:py-20 overflow-hidden bg-gradient-to-br from-pink-500 to-purple-600">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80')] bg-cover bg-center"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              <span className="block">Bereit für deine persönliche Transformation?</span>
            </h2>
            <p className="mt-4 text-xl text-pink-100 max-w-3xl mx-auto">
              Entdecke in einem kostenlosen Kennenlerngespräch, wie ich dich auf deinem Weg zu mehr Klarheit, Freude und Erfüllung begleiten kann.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-pink-700 bg-white rounded-full hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="mr-2 font-semibold">Jetzt Termin vereinbaren</span>
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
              <Link
                href="#coaching-prozess"
                className="inline-flex items-center justify-center px-4 sm:px-8 py-2 sm:py-4 text-base sm:text-lg font-medium text-white bg-transparent border-2 border-white/30 rounded-full hover:bg-white/10 transition-colors"
              >
                <span>Mehr erfahren</span>
              </Link>
            </div>
            <div className="mt-8 bg-white/10 backdrop-blur-sm rounded-full inline-flex items-center px-4 sm:px-6 py-2">
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-pink-200 border-2 border-white"></div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-purple-200 border-2 border-white"></div>
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-pink-300 border-2 border-white flex items-center justify-center">
                    <span className="text-[10px] sm:text-xs font-bold text-pink-700">+42</span>
                  </div>
                </div>
                <div className="text-xs sm:text-sm text-white font-medium text-center sm:text-left">
                  <span className="block sm:inline">Über 42 Menschen haben bereits</span>{' '}
                  <span className="text-pink-100">ihre Reise begonnen</span>
                </div>
              </div>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-pink-100">
              <div className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-300 mr-2" />
                <span>Kostenloses & unverbindliches Gespräch</span>
              </div>
              <div className="h-4 w-px bg-pink-400/50 hidden sm:block"></div>
              <div className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-300 mr-2" />
                <span>Online oder persönlich in München</span>
              </div>
              <div className="h-4 w-px bg-pink-400/50 hidden sm:block"></div>
              <div className="flex items-center">
                <CheckIcon className="h-5 w-5 text-green-300 mr-2" />
                <span>Keine langen Vertragslaufzeiten</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 md:py-16 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Was meine Klient:innen sagen
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mt-4 mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Echte Geschichten von Menschen, die den Schritt zur Veränderung gewagt haben
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-xl mr-4">
                    S
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Sarah M.</h4>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Durch das Coaching bei Carina habe ich gelernt, wieder auf meine innere Stimme zu hören. Die Kombination aus spiritueller Begleitung und praktischen Übungen hat mir geholfen, meine Ängste zu überwinden und selbstbewusster durchs Leben zu gehen. Ich bin so dankbar für diese Erfahrung!"
                </p>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-4">
                    T
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Thomas K.</h4>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Nach einer schwierigen Lebensphase wusste ich nicht mehr weiter. Carinas einfühlsame und professionelle Begleitung hat mir geholfen, wieder Boden unter den Füßen zu bekommen. Ihre Methoden sind so wertvoll und haben mich nachhaltig verändert. Ich kann das Coaching nur wärmstens empfehlen!"
                </p>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold text-xl mr-4">
                    L
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Lisa R.</h4>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Die Arbeit mit Carina hat mein Leben verändert. Ihre klaren Worte und die gezielten Übungen haben mir geholfen, alte Muster zu durchbrechen und mein volles Potenzial zu entfalten. Ich fühle mich befreit und voller Energie für die Zukunft. Vielen Dank für diese wertvolle Unterstützung!"
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Link 
              href="/erfahrungen" 
              className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium"
            >
              <span>Mehr Erfahrungsberichte lesen</span>
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section id="faq" className="py-12 md:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Häufig gestellte Fragen
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mt-4 mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Antworten auf die am häufigsten gestellten Fragen zum spirituellen Life Coaching
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            {/* FAQ Item 1 */}
            <div className="py-6">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center justify-between cursor-pointer group"
                  onClick={(e) => {
                    const content = e.currentTarget.nextElementSibling as HTMLElement;
                    content.classList.toggle('max-h-0');
                    content.classList.toggle('max-h-96');
                    e.currentTarget.querySelector('svg')?.classList.toggle('rotate-180');
                  }}>
                Was ist der Unterschied zwischen spirituellem Coaching und einer Psychotherapie?
                <svg className="w-6 h-6 text-pink-500 transform transition-transform duration-300 group-hover:text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </h3>
              <div className="mt-2 text-gray-600 overflow-hidden transition-all duration-300 max-h-96">
                <p className="mb-3">
                  Während sich Psychotherapie auf die Behandlung von psychischen Erkrankungen konzentriert, geht es beim spirituellen Coaching um persönliche Weiterentwicklung und die Entfaltung deines vollen Potenzials. Als Coach bin ich keine Therapeutin, sondern unterstütze dich dabei, Klarheit zu gewinnen, Blockaden zu lösen und dein Leben bewusster zu gestalten.
                </p>
                <p>
                  Wenn du unter schwerwiegenden psychischen Problemen leidest, empfehle ich dir dringend, eine:n qualifizierte:n Therapeut:in aufzusuchen.
                </p>
              </div>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="py-6">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center justify-between cursor-pointer group"
                  onClick={(e) => {
                    const content = e.currentTarget.nextElementSibling as HTMLElement;
                    content.classList.toggle('max-h-0');
                    content.classList.toggle('max-h-96');
                    e.currentTarget.querySelector('svg')?.classList.toggle('rotate-180');
                  }}>
                Wie viele Sitzungen benötige ich, um Ergebnisse zu sehen?
                <svg className="w-6 h-6 text-pink-500 transform transition-transform duration-300 group-hover:text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </h3>
              <div className="mt-2 text-gray-600 overflow-hidden transition-all duration-300 max-h-0">
                <p className="mb-3">
                  Die Dauer des Coachings hängt von deinen individuellen Zielen und Themen ab. Manche Klient:innen erleben bereits nach 1-2 Sitzungen spürbare Veränderungen, während andere eine längerfristige Begleitung bevorzugen.
                </p>
                <p>
                  In der Regel empfehle ich ein Paket von 5-10 Sitzungen, um nachhaltige Ergebnisse zu erzielen. Nach einer ersten Sitzung können wir gemeinsam einschätzen, was für dich am sinnvollsten ist.
                </p>
              </div>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="py-6">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center justify-between cursor-pointer group"
                  onClick={(e) => {
                    const content = e.currentTarget.nextElementSibling as HTMLElement;
                    content.classList.toggle('max-h-0');
                    content.classList.toggle('max-h-96');
                    e.currentTarget.querySelector('svg')?.classList.toggle('rotate-180');
                  }}>
                Funktioniert Online-Coaching genauso gut wie persönliche Treffen?
                <svg className="w-6 h-6 text-pink-500 transform transition-transform duration-300 group-hover:text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </h3>
              <div className="mt-2 text-gray-600 overflow-hidden transition-all duration-300 max-h-0">
                <p className="mb-3">
                  Ja, Online-Coaching kann genauso wirksam sein wie persönliche Treffen. Viele Klient:innen schätzen die Flexibilität und Bequemlichkeit, von zu Hause aus an Sitzungen teilzunehmen.
                </p>
                <p>
                  Ich nutze professionelle Videokonferenz-Tools, die eine sichere und vertrauliche Umgebung bieten. Die Qualität der Arbeit leidet dabei nicht – die Verbindung und der Austausch sind ebenso intensiv und wertvoll wie bei einem persönlichen Treffen.
                </p>
              </div>
            </div>
            
            {/* FAQ Item 4 */}
            <div className="py-6">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center justify-between cursor-pointer group"
                  onClick={(e) => {
                    const content = e.currentTarget.nextElementSibling as HTMLElement;
                    content.classList.toggle('max-h-0');
                    content.classList.toggle('max-h-96');
                    e.currentTarget.querySelector('svg')?.classList.toggle('rotate-180');
                  }}>
                Was kostet das Coaching und gibt es Ermäßigungen?
                <svg className="w-6 h-6 text-pink-500 transform transition-transform duration-300 group-hover:text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </h3>
              <div className="mt-2 text-gray-600 overflow-hidden transition-all duration-300 max-h-0">
                <p className="mb-3">
                  Meine Preise richten sich nach Art und Umfang des Coachings. Einzelne Sitzungen beginnen bei 120€, bei Buchung eines Pakets erhältst du einen Rabatt.
                </p>
                <p className="mb-3">
                  Ich biete eine begrenzte Anzahl von Ermäßigungen für Studierende, Alleinerziehende und Menschen mit geringem Einkommen an. Sprich mich gerne darauf an, wenn du Bedarf hast.
                </p>
                <p>
                  Denke daran, dass Investitionen in deine persönliche Entwicklung zu den wertvollsten gehören, die du tätigen kannst. Viele meiner Klient:innen berichten, dass sich die Investition durch positive Veränderungen in ihrem Leben mehr als ausgezahlt hat.
                </p>
              </div>
            </div>
            
            {/* FAQ Item 5 */}
            <div className="py-6">
              <h3 className="text-xl font-semibold text-gray-900 flex items-center justify-between cursor-pointer group"
                  onClick={(e) => {
                    const content = e.currentTarget.nextElementSibling as HTMLElement;
                    content.classList.toggle('max-h-0');
                    content.classList.toggle('max-h-96');
                    e.currentTarget.querySelector('svg')?.classList.toggle('rotate-180');
                  }}>
                Wie bereite ich mich auf die erste Sitzung vor?
                <svg className="w-6 h-6 text-pink-500 transform transition-transform duration-300 group-hover:text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </h3>
              <div className="mt-2 text-gray-600 overflow-hidden transition-all duration-300 max-h-0">
                <p className="mb-3">
                  Es ist völlig in Ordnung, wenn du dich nicht speziell vorbereitest. Nimm dir vor der Sitzung vielleicht ein paar Minuten Zeit, um zur Ruhe zu kommen und in dich hineinzuspüren, was dich gerade beschäftigt.
                </p>
                <p className="mb-3">
                  Hilfreich kann es sein, wenn du dir vorab folgende Fragen stellst:
                </p>
                <ul className="list-disc pl-5 space-y-2 mb-3">
                  <li>Was sind meine Hauptanliegen oder Ziele für das Coaching?</li>
                  <li>Welche Herausforderungen beschäftigen mich aktuell am meisten?</li>
                  <li>Was erhoffe ich mir von der Zusammenarbeit?</li>
                </ul>
                <p>
                  Alles Weitere entwickeln wir dann gemeinsam in unserem Gespräch. Sei einfach du selbst – das ist die beste Voraussetzung für ein wertvolles Coaching.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600 mb-6">
              Deine Frage wurde nicht beantwortet?
            </p>
            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 transition-colors"
            >
              <span>Kontaktiere mich direkt</span>
              <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Secondary CTA */}
      <section className="bg-white py-8 md:py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-2/3">
                <h3 className="text-2xl font-bold text-gray-900">Hast du noch Fragen?</h3>
                <p className="mt-2 text-gray-600">
                  Ich stehe dir gerne persönlich für alle Fragen zu meinem Coaching-Angebot zur Verfügung.
                </p>
              </div>
              <div className="mt-6 md:mt-0">
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-pink-700 bg-white border-2 border-pink-200 rounded-full hover:bg-pink-50 transition-colors shadow-sm"
                  >
                    <span>Kontaktiere mich</span>
                  </Link>
                  <a
                    href="mailto:info@carinagoeb.com"
                    className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 hover:text-pink-600 transition-colors"
                  >
                    <span>info@carinagoeb.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
