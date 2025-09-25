'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import {
  ClockIcon,
  FireIcon,
  HandThumbUpIcon,
  HeartIcon,
  LightBulbIcon,
  SparklesIcon,
  ArrowRightIcon,
  GlobeAltIcon,
  UserIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  CpuChipIcon,
  CheckIcon,
  ArrowPathIcon, 
  CheckCircleIcon,
  ArrowPathIcon as ArrowPathOutlineIcon,
  HeartIcon as HeartOutlineIcon,
  SparklesIcon as SparklesOutlineIcon
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ImageCarousel from '@/components/ImageCarousel';

function CollapsibleText({ content }: { content: string }) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [needsCollapse, setNeedsCollapse] = React.useState(false);

  React.useEffect(() => {
    if (contentRef.current) {
      const lineHeight = parseInt(getComputedStyle(contentRef.current).lineHeight);
      const maxHeight = lineHeight * 5; // Show ~4 lines of text
      setNeedsCollapse(contentRef.current.scrollHeight > maxHeight);
    }
  }, [content]);

  return (
    <div>
      <div 
        ref={contentRef}
        className={`text-gray-700 transition-all duration-300 ${!isExpanded && needsCollapse ? 'line-clamp-4' : ''}`}
      >
        {content}
      </div>
      {needsCollapse && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-pink-600 hover:text-pink-800 text-sm font-medium flex items-center group transition-colors"
        >
          {isExpanded ? 'Weniger anzeigen' : 'Mehr anzeigen'}
          <svg 
            className={`ml-1 w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default function EssstorungPage() {
  const pathname = usePathname();
  
  useEffect(() => {
    const handleScroll = () => {
      // First check for hash in URL
      if (window.location.hash) {
        const element = document.querySelector(window.location.hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          return;
        }
      }
      
      // Then check sessionStorage
      const shouldScrollToSection = sessionStorage.getItem('shouldScrollToSection');
      if (shouldScrollToSection) {
        const element = document.getElementById(shouldScrollToSection);
        if (element) {
          // Use requestAnimationFrame for better timing
          requestAnimationFrame(() => {
            window.scrollTo({
              top: element.offsetTop - 120, // Increased offset for better visibility
              behavior: 'smooth'
            });
          });
        }
        // Clear the flag
        sessionStorage.removeItem('shouldScrollToSection');
      }
    };

    // Add a small delay to ensure everything is loaded
    const timer = setTimeout(handleScroll, 100);
    
    // Also handle popstate for browser back/forward
    window.addEventListener('popstate', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('popstate', handleScroll);
    };
  }, [pathname]);
  
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-white to-rose-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fuchsia-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute top-1/3 -right-20 w-48 h-48 bg-gradient-to-br from-rose-100 to-fuchsia-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
          <div className="absolute -top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-fuchsia-100 to-rose-100 rounded-full mix-blend-multiply filter blur-2xl opacity-15"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div id="systemisches-coaching" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient from-pink-600 to-purple-600 bg-clip-text bg-gradient-to-r mb-6">
              Systemisches Coaching für Essstörungen & ED Recovery
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-2xl text-pink-800/90 italic max-w-2xl mx-auto mb-8">
              „HEILUNG DURCH KÖRPERWEISHEIT UND EMOTIONALE BEFREIUNG“
            </p>
            <div className="mt-8">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-pink-600 to-pink-600 rounded-full hover:from-pink-700 hover:to-pink-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="mr-2">Kostenloses Erstgespräch vereinbaren</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Ist ein Coaching für Essstörungen das Richtige für dich? */}
      <section className="py-24 bg-gradient-to-br from-white to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-transparent opacity-10"></div>
        <div className="absolute -top-24 -right-40 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-24 -left-40 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute top-1/3 -right-8 w-24 h-24 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
        <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient from-pink-600 to-pink-600 bg-clip-text bg-gradient-to-r mb-6">
              Ist ein Coaching für Essstörungen das Richtige für dich?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Column: Wenn du... */}
            <div>
              <h3 className="text-2xl font-semibold text-pink-600 mb-6">Wenn du...</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <ShieldCheckIcon className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">...stark mit deinem Körper und Essen kämpfst</h4>
                    <p className="text-gray-600">Ob Bulimie, Magersucht (Anorexie) oder Binge Eating - wenn du dich in einem ständigen Kampf mit deinem Körper und Essen befindest.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <UserGroupIcon className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">...bereit bist, tiefere Ursachen zu erkunden</h4>
                    <p className="text-gray-600">Wenn du den Mut hast, dir selbst gegenüber aufrichtig ehrlich zu sein und tieferliegende Ursachen zu erkennen.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <HeartIcon className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">...bereit bist, dich selbst zu lieben</h4>
                    <p className="text-gray-600">Wenn du bereit bist, den Weg zu wahrer Selbstliebe und Körperakzeptanz einzuschlagen</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Column: Dann ist dieses Coaching genau das Richtige für dich */}
            <div>
              <h3 className="text-2xl font-semibold text-pink-600 mb-6">Dann ist dieses Coaching genau das Richtige für dich</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <SparklesIcon className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Ganzheitliche Heilung</h4>
                    <p className="text-gray-600">Wir betrachten nicht nur die Symptome, sondern gehen den wahren Ursachen auf den Grund.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <UserIcon className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Individueller Ansatz</h4>
                    <p className="text-gray-600">Jeder Mensch ist einzigartig - dein Coaching wird genau auf deine Bedürfnisse zugeschnitten.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <LightBulbIcon className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">Nachhaltige Veränderung</h4>
                    <p className="text-gray-600">Durch tiefgreifende Prozesse erreichst du langfristige Heilung und Wachstum.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-pink-600 to-pink-600 rounded-full hover:from-pink-700 hover:to-pink-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span className="mr-2">Jetzt Termin vereinbaren</span>
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Section 3: Mein Ansatz im Detail */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-pink-50 to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-purple-50 to-transparent"></div>
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient from-pink-600 to-purple-600 bg-clip-text bg-gradient-to-r mb-6">
              Mein Ansatz im Überblick
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Eine ganzheitliche Herangehensweise, die Körper, Geist und Seele in Einklang bringt
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-pink-100 p-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center mb-6 text-pink-600 group-hover:from-pink-100 group-hover:to-pink-200 transition-all duration-300">
                <HeartIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Ganzheitliche Betrachtung</h3>
              <p className="text-gray-600">
                Ich betrachte Essstörungen nicht isoliert, sondern als Ausdruck tieferliegender emotionaler Muster. Gemeinsam arbeiten wir an der Wurzel des Problems.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-purple-100 p-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center mb-6 text-purple-600 group-hover:from-purple-100 group-hover:to-purple-200 transition-all duration-300">
                <SparklesIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Körperarbeit & Embodiment</h3>
              <p className="text-gray-600">
                Durch achtsame Körperarbeit hilfe ich dir, wieder ein gesundes Körpergefühl zu entwickeln und die Verbindung zu deiner inneren Weisheit zu stärken.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-amber-100 p-8">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center mb-6 text-amber-600 group-hover:from-amber-100 group-hover:to-amber-200 transition-all duration-300">
                <LightBulbIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Praktische Werkzeuge</h3>
              <p className="text-gray-600">
                Du erhältst konkrete Übungen und Methoden, die dir im Alltag helfen, mit schwierigen Situationen umzugehen und ein gesundes Essverhalten zu etablieren.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Methoden & Ansätze */}
      <section className="py-24 bg-gradient-to-br from-pink-50 to-purple-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient from-pink-600 to-purple-600 bg-clip-text bg-gradient-to-r mb-6">
              Methoden & Ansätze
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bewährte Methoden, die dich auf deinem Heilungsweg unterstützen
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-100 hover:border-pink-100 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-2xl font-semibold text-pink-600 mb-4">Systemische Aufstellungsarbeit</h3>
                <div className="prose max-w-none text-gray-600">
                  <p>
                    Durch systemische Aufstellungen können wir unbewusste Dynamiken in deinem Familiensystem sichtbar machen, die möglicherweise zu deiner Essstörung beitragen. Diese Methode hilft dir, belastende Muster zu erkennen und aufzulösen.
                  </p>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-100 hover:border-purple-100 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-2xl font-semibold text-purple-600 mb-4">Traumasensible Begleitung</h3>
                <div className="prose max-w-none text-gray-600">
                  <p>
                    Viele Essstörungen haben ihre Wurzeln in traumatischen Erfahrungen. Mit einer einfühlsamen, traumasensiblen Herangehensweise begleite ich dich dabei, diese Erfahrungen zu verarbeiten und zu integrieren.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-100 hover:border-amber-100 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-2xl font-semibold text-amber-600 mb-4">Achtsamkeitsbasierte Methoden</h3>
                <div className="prose max-w-none text-gray-600">
                  <p>
                    Durch Achtsamkeit lernst du, deine Gedanken und Gefühle ohne Bewertung zu beobachten. Dies hilft dir, destruktive Essmuster zu durchbrechen und ein gesünderes Verhältnis zu deinem Körper aufzubauen.
                  </p>
                </div>
              </div>

              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg p-8 border border-gray-100 hover:border-emerald-100 transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-2xl font-semibold text-emerald-600 mb-4">Ressourcenorientierte Arbeit</h3>
                <div className="prose max-w-none text-gray-600">
                  <p>
                    Anstatt uns auf Defizite zu konzentrieren, stärken wir deine vorhandenen Ressourcen und Fähigkeiten. Dies gibt dir das nötige Vertrauen, um deinen Heilungsweg zu gehen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Häufige Fragen */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gradient from-pink-600 to-purple-600 bg-clip-text bg-gradient-to-r mb-6">
              Häufige Fragen
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto mb-8"></div>
          </div>

          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <button 
                className="w-full px-6 py-5 text-left focus:outline-none"
                onClick={(e) => {
                  const content = e.currentTarget.nextElementSibling as HTMLElement;
                  if (content) {
                    content.style.maxHeight = content.style.maxHeight ? '' : content.scrollHeight + 'px';
                  }
                  const svg = e.currentTarget.querySelector('svg');
                  if (svg) {
                    svg.classList.toggle('rotate-180');
                  }
                }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">Wie lange dauert die Behandlung einer Essstörung?</h3>
                  <svg className="w-6 h-6 text-pink-600 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </button>
              <div className="px-6 pb-5 overflow-hidden transition-all duration-300 max-h-0">
                <div className="prose text-gray-600">
                  <p>
                    Die Dauer der Behandlung ist individuell sehr unterschiedlich und hängt von verschiedenen Faktoren ab, wie z.B. der Art und Schwere der Essstörung, der Dauer der Erkrankung und deiner persönlichen Situation. In der Regel empfehle ich eine Begleitung über mehrere Monate, um nachhaltige Veränderungen zu erzielen.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Item 2 */}
            <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
              <button 
                className="w-full px-6 py-5 text-left focus:outline-none"
                onClick={(e) => {
                  const content = e.currentTarget.nextElementSibling as HTMLElement;
                  if (content) {
                    content.style.maxHeight = content.style.maxHeight ? '' : content.scrollHeight + 'px';
                  }
                  const svg = e.currentTarget.querySelector('svg');
                  if (svg) {
                    svg.classList.toggle('rotate-180');
                  }
                }}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium text-gray-900">Kann ich das Coaching auch online machen?</h3>
                  <svg className="w-6 h-6 text-pink-600 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>
              </button>
              <div className="px-6 pb-5 overflow-hidden transition-all duration-300 max-h-0">
                <div className="prose text-gray-600">
                  <p>
                    Ja, ich biete meine Coachings auch online an. Viele Klienten schätzen die Flexibilität und den Komfort, von zu Hause aus an Sitzungen teilzunehmen. Die Wirksamkeit ist dabei genauso hoch wie bei Präsenzterminen. Wir nutzen eine sichere Videoplattform für unsere Sitzungen.
                  </p>
                </div>
              </div>
            </div>

            {/* Add more FAQ items as needed */}
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="relative py-20 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Bereit für deine Heilungsreise?</h2>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Vereinbare jetzt ein kostenloses Erstgespräch und entdecke, wie ich dich auf deinem Weg zur Heilung begleiten kann.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-pink-600 to-pink-600 rounded-full hover:from-pink-700 hover:to-pink-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span className="mr-2">Jetzt Termin vereinbaren</span>
              <ArrowRightIcon className="w-5 h-5" />
            </Link>
            <Link 
              href="/ueber-mich" 
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-pink-700 bg-white border border-pink-200 rounded-full hover:bg-pink-50 transition-colors"
            >
              <span>Mehr über mich</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
