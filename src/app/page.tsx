'use client';

import React from 'react';
import Link from 'next/link';
import Hero from '@/components/Hero';
import StorySection from '@/components/StorySection';
import CoachingOfferings from '@/components/CoachingOfferings';
import AppShowcase from '@/components/AppShowcase';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import { HeartIcon, SparklesIcon, ArrowRightIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import ExpandableBulletPoint from '@/components/ExpandableBulletPoint';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="relative z-10 w-full" role="banner">
        <Hero />
      </header>
      
      <main className="flex-grow" role="main">
        {/* Hero section is handled by the Hero component */}
        
        {/* Wer bin ich Section */}
        <section className="relative py-24 overflow-hidden bg-pink-50">
          <div className="absolute inset-0">
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="absolute top-1/3 -right-8 w-24 h-24 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gradient from-pink-600 to-pink-600 bg-clip-text bg-gradient-to-r mb-6">
                Wer bin ich?
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-6"></div>
              <p className="text-2xl text-pink-800/90 italic max-w-2xl mx-auto mb-8">
                "INNERE TRANSFORMATION DURCH KÖRPERLICHE PRÄSENZ"
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="space-y-8">
                <div className="bg-white/80 p-6 rounded-xl shadow-sm border border-pink-100">
                  <p className="font-medium text-pink-800 mb-3">Meine spirituelle Reise</p>
                  <div className="space-y-3">
                    {[
                      'Transformation durch Ehrlichkeit und Selbstannahme',
                      'Tiefe Verbindung zur Weisheit des Körpers',
                      'Integration spiritueller Praktiken in den Alltag',
                      'Begleitung anderer auf ihrem Weg der Persönlichkeitsentwicklung'
                    ].map((item, index) => (
                      <div key={index} className="flex items-center">
                        <div className="flex-shrink-0 h-4 w-4 rounded-full bg-gradient-to-r from-pink-100 to-pink-50 flex items-center justify-center mr-3">
                          <div className="h-1.5 w-1.5 rounded-full bg-pink-600"></div>
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white/90 p-8 rounded-2xl shadow-lg border border-pink-100">
                  <p className="text-gray-700 leading-relaxed">
                    Jeder Mensch ist unendlich kraftvoll, weise und schöpferisch und wir alle tragen
                    das Potenzial der Selbstheilung in uns. Der Schlüssel dazu ist das Bewusstsein
                    darüber, wie wir unser Potenzial verwirklichen können. Meine eigene Geschichte und spirituelle Heilungserfahrung aus 20 Jahren Krankheit ist Inspiration und Wegweiser. Und mein größter Motivator für die Begleitung von Frauen in die Verkörperung ihrer Essenz und Wahrhaftigkeit in ihrem Leben.
                  </p>
                  <div className="mt-8 mb-2">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-r from-pink-100 to-pink-50 p-2 flex items-center justify-center">
                        <HeartIcon className="h-8 w-8 text-pink-600" />
                      </div>
                      <div className="relative flex-1">
                        <p className="text-sm text-gray-600 italic m-0">
                          "BE REALISTIC: PLAN FOR A MIRACLE." <span className="not-italic text-xs text-gray-500 ml-2">Osho</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="bg-gradient-to-r from-white/90 to-white/70 p-8 rounded-3xl shadow-xl border border-pink-100">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-2xl font-bold text-pink-900">
                      Meine Methode
                    </h3>
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-pink-100 to-pink-50 flex items-center justify-center">
                      <SparklesIcon className="h-8 w-8 text-pink-600" />
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <p className="text-gray-800 leading-relaxed">
                      Meine Methode kombiniert spirituelle Praktiken mit körperzentriertem Coaching, um dir zu helfen, tiefe Verbindung zu deiner inneren Weisheit zu finden und zu verkörpern. Diese ganzheitliche Herangehensweise ermöglicht dir, deinen wahren Weg mutig zu gehen und dein volles Potenzial als Frau zu entfalten.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        'Intuitive Praktiken',
                        'Geführte Meditation',
                        'Heilung durch Präsenz',
                        'Integration spiritueller Tools'
                      ].map((point, index) => (
                        <div key={index} className="flex items-center">
                          <div className="flex-shrink-0 h-4 w-4 rounded-full bg-gradient-to-r from-pink-100 to-pink-50 flex items-center justify-center mr-3">
                            <div className="h-1.5 w-1.5 rounded-full bg-pink-600"></div>
                          </div>
                          <span className="text-gray-700">{point}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <p className="text-gray-600 text-sm">
                        "Die Kraft der Präsens und die Verbindung mit deiner Wahrhaftigkeit ist der Schlüssel zu tiefer Heilung, persönlicher Transformation und deinen Wundern."
                      </p>
                    </div>
                  </div>
                </div>

                <Link 
                  href="/ueber-mich/mein-weg"
                  className="inline-flex items-center px-8 py-4 text-sm font-medium text-white bg-gradient-to-r from-pink-600 to-pink-600 rounded-full hover:from-pink-700 hover:to-pink-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  <span className="mr-2">Mehr erfahren</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mein Coaching Section */}
        <section className="relative py-24 overflow-hidden w-full">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-pink-50">
            <div className="absolute -top-24 -right-40 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            <div className="absolute top-1/3 -right-8 w-24 h-24 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
          </div>
          
          <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
                Mein Coaching
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-8"></div>
              <p className="text-2xl text-pink-800/90 italic max-w-3xl mx-auto mb-8">
                "Spiritueller Weg und KörperBewusstSein"
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div className="bg-white/95 p-10 rounded-3xl shadow-xl border border-pink-100 hover:border-pink-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-pink-100 to-pink-50 p-2 mb-8">
                  <HeartIcon className="h-8 w-8 text-pink-600" />
                </div>
                <p className="text-2xl font-bold text-pink-900 mb-4">
                  Spirituelles Life Coaching - Erwecke und vertraue deiner inneren Weisheit
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mb-6"></div>
                <p className="text-gray-700 mb-10 text-lg">
                  Verbinde dich mit deiner weiblichen Essenz, entdecke deine Spiritualität und lebe dein wahres Potential – durch körperzentriertes, spirituelles Coaching.
                </p>
                <div className="space-y-5 mt-6">
                  <ExpandableBulletPoint 
                    index={0}
                    title="Tiefe innere Heilung"
                    content="Mein Ansatz hilft dir, in deinem Körper anzukommen – dem Zuhause deiner Seele. Du lernst, präsent im gegenwärtigen Moment zu sein und Entscheidungen bewusst aus dem Hier und Jetzt zu treffen anstatt aus alten Verletzungen oder Mustern. So gestaltest du dein Leben und deine Beziehungen voller Sinn, Authentizität und Freude."
                  />
                  <ExpandableBulletPoint 
                    index={1}
                    title="Verbundenheit mit deiner Essenz"
                    content="Durch achtsames Erforschen und Körperwahrnehmungsübungen verbindest du dich mit deiner Herzensweisheit. Du lernst, deiner inneren Führung zu vertrauen und Entscheidungen aus Liebe zu dir und deinem Körper zu treffen. So kannst du mutig deinem Herzensweg folgen."
                  />
                  <ExpandableBulletPoint 
                    index={2}
                    title="Transformation durch Präsenz"
                    content="Ganz gleich, ob du dich in einem Umbruch befindest, eine Herausforderung meistern möchtest, deine Bestimmung suchst oder deine spirituelle Praxis vertiefen willst – diese Arbeit hilft dir, alle Anteile in dir zu integrieren für eine echte und nachhaltige Transformation."
                  />
                  <ExpandableBulletPoint 
                    index={3}
                    title="Ganzheit"
                    content="Spirituelles Coaching erforscht alle Dimensionen deines Seins als Frau. Du vertiefst deine Beziehung zu deinem Körper und deinem Zyklus, zu deinen Emotionen, deinen Grenzen und deinem Selbstwert – und vereinst dadurch deine Qualitäten von Sanftheit und Stärke."
                  />
                  <ExpandableBulletPoint 
                    index={4}
                    title="Integration spiritueller Praktiken"
                    content="Du entwickelst praktische Tools für Selbstregulation und emotionale Resilienz, die dich in allen Bereichen deines Alltags unterstützen, ein erfülltes und selbstbestimmtes Leben zu führen. Dazu gehören Atemübungen, Meditation, Körperwahrnehmung und achtsame Bewegung."
                  />
                </div>
                <Link href="/dienstleistungen/spiritual" className="inline-flex items-center px-8 py-4 text-sm font-medium text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg hover:from-pink-700 hover:to-purple-700 transition-colors mt-8">
                  <span className="mr-2">Mehr erfahren</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
              </div>

              <div className="bg-white/95 p-10 rounded-3xl shadow-xl border border-purple-100 hover:border-purple-200 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-100 to-purple-50 p-2 mb-8">
                  <SparklesIcon className="h-8 w-8 text-purple-600" />
                </div>
                <p className="text-2xl font-bold text-purple-900 mb-4">
                  Coaching bei Essstörungen und ED Recovery - Heilung von Innen heraus
                </p>
                <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mb-6"></div>
                <p className="text-gray-700 mb-10 text-lg">
                  Holistische Unterstützung bei Essstörungen durch Körperbewusstsein<br/>
                  und spirituelle Heilung.
                </p>
                <div className="space-y-5 mt-6">
                  <ExpandableBulletPoint 
                    index={0}
                    title="Begleitung durch gelebte Erfahrung"
                    content="Nachdem ich selbst 20 Jahre lang in der Bulimie gefangen war und 2016 meine vollständige spirituelle Heilung über Nacht erfahren habe, möchte ich meine Geschichte und mein tiefes Wissen gerne mit dir teilen, um dir Hoffnung, Verständnis und konkrete Unterstützung für deinen ganz persönlichen Heilungsweg zu schenken. Ganz gleich, ob du gerade am Anfang deiner Heilungsreise stehst oder zusätzliche Unterstützung neben einer anderen Therapieform suchst, diese Arbeit bietet dir individuelle Begleitung in deinem eigenen Tempo von jemandem, der diesen Weg selbst gegangen ist."
                    color="purple"
                  />
                  <ExpandableBulletPoint 
                    index={1}
                    title="Von der Entfremdung zur Heilung"
                    content="Mein traumasensibler und holistischer Ansatz berücksichtigt, dass eine Essstörung im Kern oft ein Schutzmechanismus ist, der das Gefühl von absoluter Leere, Wertlosigkeit und Wut kompensiert, und daher eine Trennung vom Selbst und dem eigenen Körper zur Folge hat. An dieser Stelle beginnt unsere gemeinsame Arbeit."
                    color="purple"
                  />
                  <ExpandableBulletPoint 
                    index={2}
                    title="Emotionale Freiheit"
                    content="Durch achtsames Hinspüren, sanfte Körperarbeit und körperorientierte Meditationen erforschen wir aufgestaute Emotionen und zugrunde liegende Muster und Überzeugungen, um dich und dein System davon zu befreien."
                    color="purple"
                  />
                  <ExpandableBulletPoint 
                    index={3}
                    title="Körper-Verbundenheit und Selbstfürsorge"
                    content="Du lernst, dich mit der Weisheit deines Körpers zu verbinden, gesunde Grenzen zu setzen und die Selbstliebe und -fürsorge für dich zu empfinden, die nachhaltige Heilung ermöglicht."
                    color="purple"
                  />
                  <ExpandableBulletPoint 
                    index={4}
                    title="Unterstützung für Betroffene und Angehörige"
                    content="Mein ED Recovery Coaching unterstützt dich, wenn du von Bulimie, Anorexie, Binge-Eating oder emotionalem Essen betroffen bist. Sowie Familienmitglieder oder Partner/innen, die gerne tiefer gehen, mitfühlen und zugrunde liegende Dynamiken und Auslöser verstehen und transformieren möchten."
                    color="purple"
                  />
                </div>
                <Link href="/dienstleistungen/essstoerung" className="inline-flex items-center px-8 py-4 text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-colors mt-8">
                  <span className="mr-2">Mehr erfahren</span>
                  <ArrowRightIcon className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <StorySection />
        
        {/* Other Components */}
        <CoachingOfferings />
        <AppShowcase />
        <Testimonials />
        <CallToAction />
      </main>
    </div>
  );
}
