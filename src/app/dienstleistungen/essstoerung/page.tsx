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
      <section className="relative pt-20 pb-10 bg-gradient-to-b from-white to-rose-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fuchsia-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute top-1/3 -right-20 w-48 h-48 bg-gradient-to-br from-rose-100 to-fuchsia-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
          <div className="absolute -top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-fuchsia-100 to-rose-100 rounded-full mix-blend-multiply filter blur-2xl opacity-15"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div id="systemisches-coaching" className="text-center mb-16 pt-28">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient from-pink-600 to-purple-600 bg-clip-text bg-gradient-to-r mb-6">
              Systemisches Coaching bei Essstörungen & ED Recovery
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

      {/* Section: Ist ein Coaching bei Essstörungen das Richtige für dich? */}
      <section className="py-24 bg-gradient-to-br from-white to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-transparent opacity-10"></div>
        <div className="absolute -top-24 -right-40 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-24 -left-40 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute top-1/3 -right-8 w-24 h-24 bg-gradient-to-r from-pink-100 to-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
        <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient from-pink-600 to-pink-600 bg-clip-text bg-gradient-to-r mb-6">
              Ist ein Coaching bei Essstörungen das Richtige für dich?
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-6"></div>
            <p className="text-2xl text-pink-800/90 italic max-w-2xl mx-auto mb-8">
            </p>
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
                    <p className="text-gray-600">Wenn du bereit bist, den Weg zu wahrer Selbstliebe und Körperakzeptanz einzuschlagen.</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Right Column: Dann ist mein Coaching... */}
            <div>
              <h3 className="text-2xl font-semibold text-pink-600 mb-6">Dann ist mein Coaching...</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <SparklesIcon className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">...ein Weg zur Heilung</h4>
                    <p className="text-gray-600">Ich begleite dich auf deinem Weg zur Heilung durch Körperweisheit und emotionales Loslassen.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <LightBulbIcon className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">...ein Prozess der Selbstentdeckung</h4>
                    <p className="text-gray-600">Gemeinsam entwickeln wir ein tieferes KörperBewusstSein und schaffen die Grundlage für eine liebevolle Beziehung zu dir selbst.</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <UserIcon className="w-6 h-6 text-pink-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-2">...ein Schritt zur Freiheit</h4>
                    <p className="text-gray-600">Zusammen entdecken wir, wie du mehr Vertrauen in dich und deinen Körper finden kannst und legen so die Basis für innere Ruhe und echte Selbstverbundenheit.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Mehr erfahren Button */}
          <div className="mt-12 text-center">
              <Link 
                href="/dienstleistungen/essstoerung/ist-coaching-das-richtige" 
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-colors shadow-md hover:shadow-lg"
              >
                <span>Mehr erfahren</span>
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Link>
          </div>
          
          {/* Image below button */}
          <div className="mt-8 flex justify-center">
            <div className="relative w-full max-w-2xl rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/weißer Anzug auf Sessel.png"
                alt="Weißer Anzug auf Sessel - Symbolbild für Coaching und Transformation"
                width={800}
                height={533}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Mit wem ich arbeite */}
      <section id="embodiment" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-pink-50 opacity-10"></div>
        <div className="absolute -top-24 -right-40 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute -bottom-24 -left-40 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient from-pink-600 to-pink-600 bg-clip-text bg-gradient-to-r mb-6">
              Embodiment als Schlüssel auf deiner Heilungsreise aus der Essstörung
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-6"></div>
            <p className="text-xl text-pink-800/90 max-w-2xl mx-auto mb-8">
              „Du verkörperst, wer du bist, was du brauchst, wo du hin möchtest, wann du gesunde Grenzen setzen und loslassen darfst, warum du hier bist und wie du leben möchtest.“
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 [&>*:last-child]:md:col-start-1 [&>*:last-child]:lg:col-start-2">
            {[
              {
                title: '3 Stages von Empowerment',
                icon: SparklesIcon,
                content: 'Über den Körper kommen wir mit deinen verborgenen Gefühlen in Kontakt z. B. mit deiner gesunden Wut oder der unterdrückten Traurigkeit und Scham und erforschen deine Bedürfnisse für ein Leben in Selbstverantwortung, Wahrhaftigkeit und Würde. Wir öffnen den Raum für ganzheitliche Heilung.',
                color: 'text-rose-400'
              },
              {
                title: 'KörperBewusstSein',
                icon: HeartIcon,
                content: 'Körperverbindung zurückzugewinnen, um Körperakzeptanz und Vertrauen in deinen Körper zu stärken und sicher und präsent zu sein, in deinem Körper und dadurch auch in deinem Leben.',
                color: 'text-fuchsia-500'
              },
              {
                title: 'Selbstliebe praktizieren',
                icon: HandThumbUpIcon,
                content: 'Selbstliebe zu empfinden und zu praktizieren und dadurch die Transformation weg von Kontrolle und Streben nach Perfektion zu ermöglichen, hin zu wahrem Mitgefühl für dich selbst und in Beziehungen. Ohne retten zu wollen oder in Co-Abhängigkeit zu sein. Dein Körper ist dein Zuhause und wir ent-wickeln eine nährende und stabile Beziehung zu dir selbst.',
                color: 'text-pink-600'
              },
              {
                title: 'Heart-Body-Mind Verbindung',
                icon: CpuChipIcon,
                content: 'Die Verbindung von Heart-Body-Mind zu stärken und dadurch zentrierter, aus deiner Mitte heraus deinen Alltag zu leben durch die Anwendung von geführter Meditation und Visualisierungsübungen, bewusster Berührung, Chanting und dem Erforschen von deinen individuellen "healing movements", die speziell dir und deinem Körper gut tun.',
                color: 'text-violet-500'
              },
              {
                title: 'Emotionale Resilienz',
                icon: ShieldCheckIcon,
                content: 'Emotionale Resilienz zu entwickeln: lerne, deine Gefühle bewusst wahrzunehmen, körperlich zu spüren und zuzulassen, anstatt sie wegzudrücken oder auf ungesunde Essverhaltensweisen als Bewältigungsstrategie zurückzugreifen. So wirst du nicht mehr von deinen Emotionen überrannt oder überrascht und reagierst achtsamer und bewusster bei Triggern.',
                color: 'text-indigo-500'
              },
              {
                title: 'Leichtigkeit entdecken',
                icon: LightBulbIcon,
                content: 'Leichtigkeit und Verspieltheit wieder zu entdecken: wir lösen step by step Blockaden in Form von Fremdenergien in deinem Körper auf und bringen all deine Chakren wieder in Einklang miteinander und dein Prana, deine Lebensenergie zum fließen. Dein Herz darf sich öffnen und du die Freude des gegenwärtigen Moments voll und ganz spüren. Du erfährst, dein Leben wieder aktiv zu gestalten, statt reaktiv zu sein oder gefangen in einem immer wiederkehrenden Programm von Fight, Flight oder Freeze.',
                color: 'text-purple-400'
              },
              {
                title: 'Weiblichkeit entdecken',
                icon: SparklesIcon,
                content: 'Verbindung mit deiner Weiblichkeit: entdecke neugierig deine Qualitäten als Frau. Lebe in liebevoller Annahme und im Einklang mit deinem monatlichen Zyklus anstatt dich davon abzuschneiden.',
                color: 'text-pink-500'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/90 p-6 rounded-xl shadow-sm border border-pink-100 flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center ${item.color.replace('text', 'bg')} bg-opacity-10`}>
                    {React.cloneElement(<item.icon className="w-6 h-6" />, { className: `w-6 h-6 ${item.color}` })}
                  </div>
                  <h3 className={`text-xl font-medium ${item.color}`}>{item.title}</h3>
                </div>
                <div className="flex-grow">
                  <CollapsibleText content={item.content} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lebe wahrhaftig Section */}
      <section id="wahrhaftig" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-pink-50 opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient from-pink-600 to-pink-600 bg-clip-text bg-gradient-to-r mb-6">
              Lebe wahrhaftig und entdecke die Heilkraft deines Körpers
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-6"></div>
            <p className="text-xl text-pink-800/90 max-w-2xl mx-auto mb-8">
              "Mein Weg, meine Vision und meine Mission"
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-pink-50 hover:border-pink-100 h-full flex flex-col"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center mb-4 border border-pink-100">
                  <ArrowPathOutlineIcon className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-2xl font-semibold text-pink-700 mb-4 relative inline-block">
                  <span className="relative z-10">Mein Weg</span>
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-pink-100 -z-0 opacity-70" style={{ bottom: '2px', height: '8px' }}></span>
                </h3>
                <p className="text-gray-700 leading-relaxed flex-grow">
                  Ich bin Carina, 43 Jahre alt und selbst ehemalige Betroffene. Meine eigene spirituelle Heilerfahrung hat mich zu meiner Berufung geführt: 
                  Frauen auf ihrem eigenen Weg in die Heilung zu begleiten und zu unterstützen.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-pink-50 hover:border-pink-100 h-full flex flex-col"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center mb-4 border border-pink-100">
                  <SparklesOutlineIcon className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-2xl font-semibold text-pink-700 mb-4 relative inline-block">
                  <span className="relative z-10">Meine Vision</span>
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-pink-100 -z-0 opacity-70" style={{ bottom: '2px', height: '8px' }}></span>
                </h3>
                <p className="text-gray-700 leading-relaxed flex-grow">
                  „Ich gehe los für eine Welt, in der wir Frauen unser einzigartiges Selbst annehmen und bedingungslos lieben. 
                  Eine Welt, in der wir Raum einnehmen, unsere Stimme nutzen und unsere Wahrhaftigkeit und Stärke mutig leben."
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-pink-50 hover:border-pink-100 h-full flex flex-col"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div className="w-12 h-12 bg-pink-50 rounded-full flex items-center justify-center mb-4 border border-pink-100">
                  <HeartOutlineIcon className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-2xl font-semibold text-pink-700 mb-4 relative inline-block">
                  <span className="relative z-10">Meine Mission</span>
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-pink-100 -z-0 opacity-70" style={{ bottom: '2px', height: '8px' }}></span>
                </h3>
                <p className="text-gray-700 leading-relaxed flex-grow">
                  Ich begleite Frauen dabei, mit Mut zur Wahrheit, Selbstannahme und KörperBewusstSein ihre innere Kraft zu erwecken. 
                  Gemeinsam arbeiten wir daran, die eigene Heilkraft zu entdecken. Für ein Leben in Freiheit und Lebendigkeit.
                </p>
              </motion.div>
            </div>
            
            {/* Mehr erfahren Button */}
            <div className="text-center mt-8">
              <Link 
                href="/dienstleistungen/essstoerung/meine-heilungsreise/embodiment"
                className="inline-flex items-center px-8 py-3.5 text-base font-medium text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-full hover:from-pink-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                <span>Mehr erfahren</span>
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
            
            {/* Added image at the bottom of the section */}
            <div className="mt-12 flex justify-center">
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="/images/IMG_5786_SnapseedCopy.png" 
                  alt="Lebe wahrhaftig und entdecke die Heilkraft deines Körpers"
                  className="max-w-full h-auto max-h-[70vh] object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Mein Ansatz */}
      <section className="py-24 relative overflow-hidden bg-gradient-to-br from-white to-pink-50">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute top-1/3 -right-8 w-24 h-24 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float"></div>
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-float animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/4 w-32 h-32 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-float animation-delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <motion.div 
            id="heilung-von-innen-nach-aussen"
            className="text-center mb-16 pt-24 -mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient from-pink-600 to-purple-600 bg-clip-text bg-gradient-to-r mb-6">
              Heilung von innen nach außen..
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-2xl text-pink-800/90 italic max-w-2xl mx-auto mb-8">
              "Die Kraft der Heilung liegt in uns selbst."
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[
              {
                title: 'Körperliche Präsenz',
                content: 'Ich unterstütze dich, deinen Körper zu spüren, zu verstehen und zu lieben. Wir arbeiten mit bewusstseinsbasierten Übungen und Körperarbeit.',
                color: 'from-pink-600 to-pink-700',
                icon: <UserIcon className="h-6 w-6 text-white" />,
                features: ['Körperwahrnehmung', 'Achtsamkeitsübungen', 'Atemtechniken'],
                buttonGradient: 'from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800',
                iconBg: 'from-pink-100 to-pink-50',
                accent: 'from-pink-400 to-pink-300'
              },
              {
                title: 'Trauma-Bewusstheit',
                content: 'Wir erkennen und integrieren tiefere Ursachen deiner Essstörung. Ich begleite dich sicher durch den Prozess der Heilung.',
                color: 'from-pink-600 to-pink-700',
                icon: <LightBulbIcon className="h-6 w-6 text-white" />,
                features: ['Sichere Traumaintegration', 'Ressourcenarbeit', 'Stabilisierungstechniken'],
                buttonGradient: 'from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800',
                iconBg: 'from-pink-100 to-pink-50',
                accent: 'from-pink-400 to-pink-300'
              },
              {
                title: 'Emotionale Befreiung',
                content: 'Du lernst, deine Emotionen zu spüren, zu akzeptieren und zu integrieren. Du erkennst, sie als wichtige Botschaften zu verstehen.',
                color: 'from-pink-600 to-pink-700',
                icon: <SparklesIcon className="h-6 w-6 text-white" />,
                features: ['Gefühlsregulation', 'Körperwissen', 'Selbstmitgefühl'],
                buttonGradient: 'from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800',
                iconBg: 'from-pink-100 to-pink-50',
                accent: 'from-pink-400 to-pink-300'
              },
              {
                title: 'Selbstliebe und Akzeptanz',
                content: 'Wir arbeiten an der Entwicklung einer liebevollen Beziehung zu dir selbst und deinem Körper. Du erkennst deinen Wert und lernst dich zu schätzen.',
                color: 'from-pink-600 to-pink-700',
                icon: <HeartIcon className="h-6 w-6 text-white" />,
                features: ['Selbstfürsorge', 'Positive Affirmationen', 'Achtsamkeitspraxis'],
                buttonGradient: 'from-pink-600 to-pink-700 hover:from-pink-700 hover:to-pink-800',
                iconBg: 'from-pink-100 to-pink-50',
                accent: 'from-pink-400 to-pink-300'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 300
                }}
                viewport={{ once: true, margin: "-50px" }}
                className="group relative overflow-hidden bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-100/50 hover:shadow-xl transition-all duration-300"
              >
                
                <div className="relative z-10 p-6">
                  <div className="flex items-start gap-5 mb-5">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-r ${item.iconBg} p-3 flex items-center justify-center shadow-sm`}>
                      {item.icon}
                    </div>
                    <div>
                      <h3 className={`text-xl font-semibold bg-gradient-to-r ${item.color} bg-clip-text text-transparent`}>
                        {item.title}
                      </h3>
                      <div className={`w-10 h-0.5 bg-gradient-to-r ${item.accent} mt-3 mb-4 rounded-full`}></div>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {item.content}
                  </p>
                  
                  <div className="mt-5 pt-4 border-t border-pink-100">
                    <h4 className="text-sm font-medium text-pink-800/80 mb-3 flex items-center">
                      <span className="mr-2">Schwerpunkte:</span>
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {item.features.map((feature, i) => (
                        <span 
                          key={i}
                          className={`inline-flex items-center text-xs font-medium px-3 py-1.5 rounded-full bg-white/90 text-pink-700 border border-pink-100 shadow-sm hover:bg-white transition-colors ${index % 2 === 0 ? 'hover:shadow-md' : 'hover:shadow'}`}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-pink-50/30 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:scale-[1.02]"></div>
              </motion.div>
            ))}
          </div>
          
          {/* Call to action */}
          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-pink-800/90 mb-6">
              Bereit für den ersten Schritt in deine persönliche Transformation?
            </p>
            <Link 
              href="/dienstleistungen/essstoerung/heilung-von-innen-nach-aussen" 
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 transition-colors shadow-md hover:shadow-lg no-underline"
            >
              Mehr erfahren
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Section 4: Körperliche Präsenz */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-pink-50 opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
              Was macht ein ED Recovery Coach bei Essstörungen?
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-2xl text-pink-800/90 italic max-w-2xl mx-auto mb-8">
              „Finde zurück zu dir, zu einem gesunden Verhältnis zu deinem Körper und zu deinen Emotionen.“
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Bewusstseinsbasierte Übungen',
                icon: UserIcon,
                content: 'Lerne, deinen Körper zu spüren und zu verstehen. Wir arbeiten mit speziellen Übungen für körperliche Präsenz.',
                color: 'text-pink-500'
              },
              {
                title: 'Spirituelle Heilung',
                icon: HeartIcon,
                content: 'Wir integrieren spirituelle Heilmethoden, die dir helfen, die tiefer liegenden Emotionen deiner Essstörung über den Körper zu befreien.',
                color: 'text-pink-600'
              },
              {
                title: 'Selbstfürsorge',
                icon: ShieldCheckIcon,
                content: 'Du erfährst, deinen Körper zu lieben und zu nähren. Wir entwickeln eine liebevolle Beziehung zu dir selbst und ein positives Selbstbild.',
                color: 'text-pink-700'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/90 p-6 rounded-xl shadow-sm border border-pink-100"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 flex items-center justify-center">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className={`text-xl font-medium ${item.color}`}>{item.title}</h3>
                </div>
                <p className="text-gray-700">{item.content}</p>
              </motion.div>
            ))}
            
            {/* Mehr erfahren Button */}
            <div className="col-span-1 md:col-span-3 flex justify-center mt-8">
              <Link 
                href="/dienstleistungen/essstoerung/ed-recovery-coach"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-colors shadow-md hover:shadow-lg no-underline"
              >
                <span>Mehr erfahren</span>
                <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" />
              </Link>
            </div>
          </div>
          
        </div>
      </section>

      {/* Section 5: Leben nach der Genesung */}
      <section id="auf-der-suche-nach-identitaet" className="py-24 bg-gradient-to-br from-white to-pink-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100 to-transparent opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gradient from-pink-600 to-pink-600 bg-clip-text bg-gradient-to-r mb-6">
              Ein Leben in Freiheit und Verbundenheit
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-8"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white/90 p-6 rounded-xl shadow-sm border border-pink-100">
              <h3 className="text-xl font-medium text-pink-600 mb-4">Was du erwarten kannst:</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <SparklesIcon className="w-5 h-5 text-pink-500 flex-shrink-0 mt-2.5" />
                  <span className="text-gray-700">Ein liebevolles Verhältnis zu deinem Körper & Essen als Genuss</span>
                </li>
                <li className="flex items-center gap-3">
                  <HeartIcon className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">Tiefe Selbstakzeptanz und Selbstliebe</span>
                </li>
                <li className="flex items-center gap-3">
                  <ShieldCheckIcon className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">Sicherheit in deinem Körper</span>
                </li>
                <li className="flex items-center gap-3">
                  <UserGroupIcon className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">Verbundenheit mit dir selbst und anderen</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/90 p-6 rounded-xl shadow-sm border border-pink-100">
              <h3 className="text-xl font-medium text-pink-600 mb-4">Dein neues Leben:</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <UserIcon className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">Körperliche Präsenz und Bewusstsein</span>
                </li>
                <li className="flex items-center gap-3">
                  <FireIcon className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">Lebensenergie und Vitalität</span>
                </li>
                <li className="flex items-center gap-3">
                  <ClockIcon className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">Freiheit von Essstörungssymptomen</span>
                </li>
                <li className="flex items-center gap-3">
                  <SparklesIcon className="w-5 h-5 text-pink-500" />
                  <span className="text-gray-700">Leben in deiner vollen Kraft</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Warum JA sagen */}
      <section id="warum-ja-sagen-zu-meinem-coaching" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-white to-pink-50 opacity-10"></div>
        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gradient from-pink-600 to-pink-600 bg-clip-text bg-gradient-to-r mb-6">
              Warum JA sagen zu meinem Coaching bei Essstörungen:
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-6"></div>
            <p className="text-2xl text-pink-800/90 italic max-w-2xl mx-auto mb-8">
              "Beginne deinen Weg zur Heilung"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Individuelles Coaching',
                icon: UserIcon,
                content: 'In meinem Einzelcoaching begleite ich dich persönlich auf deinem individuellen Heilungsweg. Wir arbeiten intensiv an deinen spezifischen Bedürfnissen und Zielen, um nachhaltige Veränderungen zu bewirken. Gemeinsam erforschen wir deine innere Weisheit, die dich leitet, um ein gesundes Verhältnis zu deinem Körper und deinem Selbstbild aufzubauen.',
                color: 'text-pink-500',
                features: ['Persönliche Einzelsitzungen', 'Individueller Behandlungsplan', 'Flexible Termingestaltung', 'Diskrete Umgebung']
              },
              {
                title: 'Körperliche Präsenz Training',
                icon: UserIcon,
                content: 'In unseren Sitzungen lernst du, wieder eine liebevolle Verbindung zu deinem Körper aufzubauen. Durch achtsamkeitsbasierte Übungen und Körperarbeit helfe ich dir, Vertrauen in deinen Körper zurückzugewinnen. In exklusiven Online Sessions hast du ebenfalls die Möglichkeit in kleinen Gruppen weitere Embodiment Erfahrungen live zu erleben und dich auszutauschen.',
                color: 'text-pink-600',
                features: ['Praktische Übungen', 'Sicherer Raum', 'Nachhaltige Methoden', 'Community Exchange']
              },
              {
                title: 'Trauma-Bewusstheit',
                icon: ShieldCheckIcon,
                content: 'Mit meiner eigenen Heilerfahrung und spezialisierten Begleitung im Kontext von Traumatisierungen biete ich dir einen sicheren Rahmen, um belastende Erfahrungen und Emotionen zu verarbeiten. Mein Ansatz ist einfühlsam und respektvoll, immer unter Berücksichtigung deiner individuellen Grenzen und Bedürfnisse.',
                color: 'text-pink-700',
                features: ['Traumasensible Begleitung', 'Sichere Methoden', 'Ressourcenorientiert', 'Individuelles Tempo']
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white/90 p-6 rounded-xl shadow-sm border border-pink-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-pink-100 to-purple-100 flex items-center justify-center">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className={`text-xl font-medium ${item.color}`}>{item.title}</h3>
                </div>
                <p className="text-gray-700">{item.content}</p>
                <div className="mt-4 space-y-2">
                  {item.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <CheckIcon className="w-4 h-4 text-pink-500 mr-2" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Image Carousel */}
          <div className="mt-16 max-w-4xl mx-auto">
            <ImageCarousel />
          </div>
        </div>
      </section>

      {/* CTA Section - Matches Homepage */}
      <section className="py-20 bg-gradient-to-r from-primary-50 to-pink-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            Möchtest du mehr über Coaching bei Essstörungen erfahren?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Wenn du mehr über Coaching bei Essstörungen erfahren möchtest als Betroffene / Angehörige oder Unterstützung suchst bei deiner Recovery, vereinbare dir jetzt dein 100% kostenloses 30-minütiges Erstgespräch
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-full transition-all duration-300 hover:shadow-lg mx-auto"
          >
            Kostenloses Erstgespräch vereinbaren
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </main>
  );
}
