'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './justified-text.module.css';
import BeyondHealingExact from '@/components/BeyondHealingExact';
import { motion } from 'framer-motion';
import { 
  SparklesIcon, 
  HeartIcon, 
  LightBulbIcon, 
  UserGroupIcon, 
  CheckIcon, 
  ArrowRightIcon, 
  UserCircleIcon, 
  AcademicCapIcon, 
  BookOpenIcon, 
  ClockIcon, 
  FireIcon, 
  ArrowUpRightIcon, 
  GlobeAltIcon, 
  MapPinIcon,
  ChevronDownIcon, 
  ChevronUpIcon,
  UserIcon
} from '@heroicons/react/24/outline';
import RaumFuerDichSection from '@/components/RaumFuerDichSection';
import VisionCollapsible from '@/components/VisionCollapsible';
import CollapsibleSection from '@/components/CollapsibleSection';
import MeineWendeSection from '@/components/MeineWendeSection';
import MeineBerufungSection from '@/components/MeineBerufungSection';
import SummaryCollapsible from '@/components/SummaryCollapsible';
import TimelineCollapsible from '@/components/TimelineCollapsible';

interface TimelinePoint {
  year: number;
  title: string;
  description: string;
  rating: number;
  isExpanded?: boolean;
  isSplit?: boolean;
  [key: string]: any; // For any additional properties
}

const initialTimelinePoints: TimelinePoint[] = [
  { 
    year: 1989, 
    title: 'Kindheitstrauma',
    description: 'Ich laufe um mein Leben nach einer Drohung meines Elternteils. Ich glaube: Wenn ich mich zeige, bin ich in Gefahr.',
    rating: 0,
    isExpanded: false,
    fullText: '1989 – Kindheitstrauma (Wohlbefinden: 0)\nIch laufe um mein Leben nach einer Drohung meines Elternteils. Ich glaube: Wenn ich mich zeige, bin ich in Gefahr.'
  },
  { 
    year: 1996, 
    title: 'Beginn der Bulimie',
    description: 'Das Erbrechen wird mein tägliches Ventil. Ich verberge meine Bulimie voller Scham und beginne zu stehlen.',
    rating: 1,
    isExpanded: false,
    fullText: '1996 – Beginn der Bulimie (Wohlbefinden: 1)\nDas Erbrechen wird mein tägliches Ventil. Ich verberge meine Bulimie voller Scham und beginne zu stehlen.'
  },
  { 
    year: 2001, 
    title: 'Totaler Kontrollverlust',
    description: 'Ich verursache mehrere Autounfälle, verliere komplett die Kontrolle und fühle mich völlig allein.',
    rating: 1,
    isExpanded: false,
    fullText: '2001 – Totaler Kontrollverlust (Wohlbefinden: 1)\nIch verursache mehrere Autounfälle, verliere komplett die Kontrolle und fühle mich völlig allein.'
  },
  { 
    year: 2003, 
    title: 'Freiheit & Trauma in Australien',
    description: 'Ich erlebe Freiheit auf Reisen, gerate aber auch in Drogenkonsum und erleide einen sexuellen Übergriff.',
    rating: 2,
    isExpanded: false,
    fullText: '2003 – Freiheit & Trauma in Australien (Wohlbefinden: 2)\nIch erlebe Freiheit auf Reisen, gerate aber auch in Drogenkonsum und erleide einen sexuellen Übergriff.'
  },
  { 
    year: 2009, 
    title: 'Liebe & Verstecken',
    description: 'Ich fühle mich geliebt wie nie zuvor, doch ich verheimliche meine Essstörung aus Angst und Scham.',
    rating: 3,
    isExpanded: false,
    fullText: '2009 – Liebe & Verstecken (Wohlbefinden: 3)\nIch fühle mich geliebt wie nie zuvor, doch ich verheimliche meine Essstörung aus Angst und Scham.'
  },
  { 
    year: 2014, 
    title: 'Zusammenbruch',
    description: 'Die Beziehung endet plötzlich, ich verliere meinen Job und ziehe in ein kleines WG-Zimmer. Ich denke ans Aufgeben.',
    rating: 0,
    isExpanded: false,
    fullText: '2014 – Zusammenbruch (Wohlbefinden: 0)\nDie Beziehung endet plötzlich, ich verliere meinen Job und ziehe in ein kleines WG-Zimmer. Ich denke ans Aufgeben.'
  },
  { 
    year: 2015, 
    title: 'Wendepunkt am Strand',
    description: 'In Australien manifestiere ich: Ich will heilen, unabhängig sein und mein Leben in die Hand nehmen.',
    rating: 2,
    isExpanded: false,
    fullText: '2015 – Wendepunkt am Strand (Wohlbefinden: 2)\nIn Australien manifestiere ich: Ich will heilen, unabhängig sein und mein Leben in die Hand nehmen.'
  },
  { 
    year: 2016, 
    title: 'Erste eigene Wohnung',
    description: 'Ich ziehe in meine erste selbst finanzierte Wohnung. Es ist beängstigend, aber auch befreiend.',
    rating: 3,
    isExpanded: false,
    fullText: '2016 – Erste eigene Wohnung (Wohlbefinden: 3)\nIch ziehe in meine erste selbst finanzierte Wohnung. Es ist beängstigend, aber auch befreiend.'
  },
  { 
    year: 2018, 
    title: 'Schweigen gebrochen',
    description: 'Ich verlasse eine Beziehung aus Selbstachtung und erzähle meinen Eltern erstmals von meiner Bulimie.',
    rating: 4,
    isExpanded: false,
    fullText: '2018 – Schweigen gebrochen (Wohlbefinden: 4)\nIch verlasse eine Beziehung aus Selbstachtung und erzähle meinen Eltern erstmals von meiner Bulimie.'
  },
  { 
    year: 2019, 
    title: 'Tiefe Heilung beginnt',
    description: 'In Bali teile ich meine Geschichte öffentlich. Nach 23 Jahren breche ich mein Schweigen.',
    rating: 5,
    isExpanded: false,
    fullText: '2019 – Tiefe Heilung beginnt (Wohlbefinden: 5)\nIn Bali teile ich meine Geschichte öffentlich. Nach 23 Jahren breche ich mein Schweigen.'
  },
  { 
    year: 2021, 
    title: 'Entscheidung gegen das System',
    description: 'Ich verlasse die Konzernwelt und widme mich voll meiner inneren Heilung und beruflichen Neuausrichtung.',
    rating: 4,
    isExpanded: false,
    fullText: '2021 – Entscheidung gegen das System (Wohlbefinden: 4)\nIch verlasse die Konzernwelt und widme mich voll meiner inneren Heilung und beruflichen Neuausrichtung.'
  },
  { 
    year: 2022, 
    title: 'Klarheit & Sichtbarkeit', 
    description: 'Auf einer Reise wird mir klar: Ich will sichtbar werden und als Coach arbeiten. Ich treffe die Entscheidung.',
    rating: 5,
    isExpanded: false,
    fullText: '2022 – Klarheit & Sichtbarkeit (Wohlbefinden: 5)\nAuf einer Reise wird mir klar: Ich will sichtbar werden und als Coach arbeiten. Ich treffe die Entscheidung.'
  },
  { 
    year: 2023, 
    title: 'Erfolg', 
    description: 'Mein erstes Buch erscheint. Ich werde als Expertin für weibliche Heilung und spirituelles Wachstum anerkannt.',
    rating: 6,
    isExpanded: false,
    fullText: '2023 – Erfolg (Wohlbefinden: 6)\nMein erstes Buch erscheint. Ich werde als Expertin für weibliche Heilung und spirituelles Wachstum anerkannt.'
  },
  { 
    year: 2024, 
    title: 'Fülle', 
    description: 'Ich gründe eine Stiftung, die Mädchen und Frauen weltweit unterstützt. Mein Traum wird Wirklichkeit.',
    rating: 6,
    isExpanded: false,
    fullText: '2024 – Fülle (Wohlbefinden: 6)\nIch gründe eine Stiftung, die Mädchen und Frauen weltweit unterstützt. Mein Traum wird Wirklichkeit.'
  },
  { 
    year: 2025, 
    title: 'Neubeginn', 
    description: 'Ich starte ein neues Projekt, das Frauen weltweit inspiriert und stärkt. Der Kreis schließt sich.',
    rating: 6,
    isExpanded: false
  }
];

export default function MeinWeg() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [timelinePoints, setTimelinePoints] = useState<TimelinePoint[]>(initialTimelinePoints);
  const [activePoint, setActivePoint] = useState<number | null>(null);
  
  const handlePointClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setActivePoint(activePoint === index ? null : index);
  };

  // Close tooltip when clicking anywhere on the graph area
  const handleGraphClick = () => {
    if (activePoint !== null) {
      setActivePoint(null);
    }
  };

  // Cleanup effect for component unmount
  React.useEffect(() => {
    return () => {
      // Any cleanup if needed
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="absolute inset-0">
          <div className="absolute -top-16 -right-16 w-40 h-40 bg-pink-100 rounded-full mix-blend-multiply filter blur-lg opacity-20"></div>
          <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-purple-100 rounded-full mix-blend-multiply filter blur-lg opacity-20"></div>
          <div className="absolute top-1/3 -right-4 w-12 h-12 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full mix-blend-multiply filter blur opacity-20"></div>
          <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mix-blend-multiply filter blur opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-4">
          <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-2">
              Mein Weg
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-3"></div>
            <p className="text-2xl text-pink-800/90 italic max-w-2xl mx-auto">
              "Wie ich gelernt habe, meinem Körper zu vertrauen und meine innere Kraft zu erwecken."
            </p>
          </div>
        </div>
      </section>

      {/* Section 2: Meine Geschichte */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-white to-rose-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-rose-100 rounded-full opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fuchsia-100 rounded-full opacity-20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
              Spiritueller Life Coach und systemischer Coach bei Essstörungen
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-fuchsia-400 mx-auto mb-6"></div>
            <p className="text-xl text-pink-600 italic max-w-3xl mx-auto mb-8">
              „DURCH MEINE EIGENE HEILUNG BEGLEITE ICH HEUTE ANDERE"
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8 max-w-2xl mx-auto md:mx-0 md:pr-8">
              <div className="space-y-6">
                <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 leading-tight">
                  Von 20 Jahren Kampf zur Heilung über Nacht
                </h3>
                
                <div className="space-y-6 text-gray-700">
                  <CollapsibleSection />
                  
                  <MeineWendeSection />
                  <MeineBerufungSection />
                </div>
              </div>
            </div>
            <div className="relative w-full">
              <div className="relative w-full h-full min-h-[400px] md:min-h-[500px] rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 hover:shadow-3xl hover:-translate-y-1 bg-gray-100">
                <div className="relative w-full h-full">
                  <img 
                    src="/images/hero-section.png" 
                    alt="Carina Göb - Spiritual Life Coach"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.error('Image failed to load:', e);
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      // Show error message if image fails to load
                      const errorDiv = document.createElement('div');
                      errorDiv.className = 'absolute inset-0 flex items-center justify-center text-red-500';
                      errorDiv.textContent = 'Image failed to load';
                      target.parentNode?.appendChild(errorDiv);
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Der Beginn meiner Heilungsreise aus 20 Jahren Essstörung */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-white to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-100 rounded-full opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 rounded-full opacity-20"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12" id="heilungsreise">
            <h2 className="text-3xl font-bold text-gradient from-pink-600 to-pink-600 bg-clip-text bg-gradient-to-r mb-4">
              Der Beginn meiner Heilungsreise aus 20 Jahren Essstörung
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-4"></div>
            <p className="text-xl text-pink-800/90 italic max-w-2xl mx-auto">
              "Meine persönliche Heilungsreise von der Essstörung zur Berufung"
            </p>
          </div>

          <div className="relative">
            {/* Animated vertical line */}
            <motion.div 
              className="absolute left-1/2 w-0.5 h-full bg-gradient-to-b from-pink-300 via-purple-300 to-pink-300 transform -translate-x-1/2"
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-transparent h-20"></div>
            </motion.div>
            
            {/* Timeline items */}
            <div className="space-y-10">
              {[
                {
                  title: "Mit 14 – Der Beginn",
                  content: "Ich war 14, als die Bulimie in mein Leben trat. Scham, Rückzug, Isolation – die Essstörung wurde zu meinem Geheimnis, meiner Strategie, um zu überleben. Ich eskalierte und funktionierte, aber innerlich war ich verloren.",
                  icon: <ClockIcon className="h-6 w-6 text-pink-500" />
                },
                {
                  title: "Die Jahre des Versteckens",
                  content: "Über 20 Jahre lang bestimmte die Bulimie mein Denken, Fühlen und Handeln. Ich lebte im ständigen Kampf mit mir selbst, sehnte mich nach Liebe, Sicherheit und Zugehörigkeit – fand sie aber nur in der Kontrolle durch die Krankheit.",
                  icon: <FireIcon className="h-6 w-6 text-pink-500" />
                },
                {
                  title: "Der Tiefpunkt",
                  content: "Trennung, Jobverlust, völliger emotionaler Zusammenbruch – in nur vier Wochen fiel alles auseinander. Das Leben schickte mir einen Weckruf. Zum ersten Mal sagte ich mir: Ich will leben. Anders. Wahrhaftig.",
                  icon: <HeartIcon className="h-6 w-6 text-pink-500" />
                },
                {
                  title: "Die Nacht der Heilung",
                  content: "Unerwartet kam sie – über Nacht. Ein inneres energetisches 'Cleansing', das alles veränderte. Der Zwang war weg. Ich wusste intuitiv: es ist vorbei. Für immer. Zum ersten Mal spürte ich Frieden in mir.",
                  icon: <SparklesIcon className="h-6 w-6 text-pink-500" />
                },
                {
                  title: "Die ersten Schritte danach",
                  content: "Die Heilung war echt, aber ungewohnt. Wer bin ich ohne Bulimie? Ich lernte mich neu kennen, begegnete meinem Körper mit Achtsamkeit und in tiefer Verbundenheit. Yoga, Meditation und Stille wurden meine Anker.",
                  icon: <ArrowRightIcon className="h-6 w-6 text-pink-500" />
                },
                {
                  title: "Reisen & Rückverbindung",
                  content: "In Indien begegnete ich dem Yoga. In Bali brach ich mein Schweigen – zum ersten Mal teilte ich meine Geschichte. Mein Körper wurde mein Lehrer. Ich fand Kraft im Frausein, Vertrauen ins Leben.",
                  icon: <GlobeAltIcon className="h-6 w-6 text-pink-500" />
                },
                {
                  title: "Heute – Meine Berufung leben",
                  content: "Seit 2016 bin ich vollständig frei von der Bulimie. Ich lebe verbunden, klar, selbstbestimmt. Mein Weg wurde zu meiner Aufgabe: heute begleite ich Frauen auf ihrer Reise – mit Mitgefühl, Tiefe und echter Erfahrung.",
                  icon: <UserIcon className="h-6 w-6 text-pink-500" />
                }
              ].map((item, index) => (
                <motion.div 
                  key={index} 
                  className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  style={{ minHeight: '120px' }}
                >
                  {/* Animated timeline dot */}
                  <motion.div 
                    className="absolute left-1/2 -translate-x-1/2 h-6 w-6 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 border-4 border-white shadow-lg z-10 flex items-center justify-center"
                    whileHover={{ scale: 1.2, rotate: 15 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    style={{ top: '50%', transform: 'translate(-50%, -50%)' }}
                  >
                    <div className="h-2 w-2 rounded-full bg-white/80"></div>
                  </motion.div>
                  
                  {/* Content card */}
                  <motion.div 
                    className={`w-full md:w-[44%] p-5 bg-white/95 backdrop-blur-sm rounded-xl shadow-sm border border-pink-100/50 relative overflow-hidden group ${index % 2 === 0 ? 'mr-auto md:mr-0 md:pr-3' : 'ml-auto md:ml-0 md:pl-3'}`}
                    whileHover={{ 
                      y: -5,
                      boxShadow: '0 10px 25px -5px rgba(236, 72, 153, 0.1), 0 10px 10px -5px rgba(236, 72, 153, 0.04)'
                    }}
                    transition={{ type: 'spring', stiffness: 300 }}
                  >
                    {/* Decorative corner accent */}
                    <div className={`absolute ${index % 2 === 0 ? 'top-0 right-0' : 'top-0 left-0'} w-16 h-16 -m-4 bg-pink-100/30 rounded-full filter blur-xl`}></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-3">
                        <motion.div 
                          className="flex-shrink-0 h-9 w-9 rounded-full bg-gradient-to-br from-pink-50 to-pink-100 flex items-center justify-center shadow-inner border border-pink-100"
                          whileHover={{ rotate: 10, scale: 1.1 }}
                        >
                          {React.cloneElement(item.icon, { className: 'h-4 w-4 text-pink-600' })}
                        </motion.div>
                        <h3 className="text-lg font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-gray-700 text-sm leading-relaxed relative pl-1 border-l-2 border-pink-100">
                        {item.content}
                      </p>
                    </div>
                    
                    {/* Subtle hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-pink-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </motion.div>
                </motion.div>
              ))}
              
              {/* Mehr erfahren Button */}
              <motion.div 
                className="flex justify-center mt-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Link 
                  href="/dienstleistungen/mein-weg/meine-heilungsreise"
                  className="px-8 py-3 bg-gradient-to-r from-pink-500 to-pink-600 text-white font-medium rounded-full shadow-lg hover:shadow-xl hover:from-pink-600 hover:to-pink-700 transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 group"
                >
                  <span>Mehr zu meiner Geschichte</span>
                  <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Mein Coaching Ansatz */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-rose-50 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-100 rounded-full opacity-20"></div>
          <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-rose-100 rounded-full opacity-20"></div>
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
              Mein Coaching Ansatz – Embodiment als Schlüssel zur Transformation
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-rose-400 mx-auto mb-6"></div>
            <p className="text-xl text-rose-800/90 italic max-w-2xl mx-auto mb-12">
              "DEIN KÖRPER KENNT DEN WEG"
            </p>
            
            <div className="w-full max-w-3xl mx-auto mb-12 px-4">
              <p className="text-center text-gray-700 text-lg leading-relaxed">
                Heilung geschieht nicht alleine mit Entschlossen&shy;heit im Kopf – sie geschieht vor allem über den Körper und im Nerven&shy;system. In meinem Coaching arbeiten wir mit Embodi&shy;ment: bewusste Präsenz im Körper, Entwick&shy;lung von Körper&shy;vertrauen und die Öffnung für innere Heilung.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Körperwahrnehmung',
                description: 'Deine Körpersignale wieder bewusst wahrnehmen und verstehen lernen durch aktives Hinfühlen.',
                icon: <HeartIcon className="h-8 w-8 text-rose-600" />,
                color: 'bg-rose-50'
              },
              {
                title: 'Emotionale Resilienz',
                description: 'Stärkung deiner emotionalen Widerstandskraft, deiner Fähigkeit zur Selbstregulierung und inneren Stabilität.',
                icon: <SparklesIcon className="h-8 w-8 text-purple-600" />,
                color: 'bg-purple-50'
              },
              {
                title: 'Grenzen setzen',
                description: 'Gesunde Grenzen erkennen und selbstbewusst kommunizieren.',
                icon: <UserCircleIcon className="h-8 w-8 text-fuchsia-600" />,
                color: 'bg-fuchsia-50'
              },
              {
                title: 'Spirituelle Praxis',
                description: 'Alltagstaugliche, spirituelle Übungen für mehr Präsenz in deinem Körper und in deinem Leben.',
                icon: <LightBulbIcon className="h-8 w-8 text-amber-600" />,
                color: 'bg-amber-50'
              },
              {
                title: 'Weibliche Kraft',
                description: 'Deine weibliche Energie entdecken und authentisch leben.',
                icon: <AcademicCapIcon className="h-8 w-8 text-rose-600" />,
                color: 'bg-rose-50'
              },
              {
                title: 'Selbstführung',
                description: 'Dein Leben bewusst und aus deiner inneren Weisheit heraus gestalten.',
                icon: <BookOpenIcon className="h-8 w-8 text-purple-600" />,
                color: 'bg-purple-50'
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100"
              >
                <div className={`w-12 h-12 ${item.color} rounded-full flex items-center justify-center mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          
          <SummaryCollapsible />
        </div>
      </section>


      {/* Section 3: Meine Quelle im Coaching - meine verkörperte Erfahrung */}
      <section className="relative py-16 md:py-20 bg-white overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-700 mb-6">
              Meine Quelle im Coaching - meine verkörperte Erfahrung
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-4"></div>
            <p className="text-2xl text-pink-800/90 italic max-w-2xl mx-auto">
              "VOM ANFANG BIS HEUTE - MEINE REISE ZU MIR SELBST"
            </p>
          </div>

          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Jede Reise hat ihren eigenen Rhythmus. Meine führte mich durch viele Höhen und Tiefen, bis ich meinen Weg in die Freiheit und Selbstliebe gefunden habe.
          </p>
          
          {/* Journey Image */}
          <div className="flex flex-col items-center mb-8 px-4">
            <div className="bg-white rounded-xl p-0 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden mb-8">
              <Image 
                src="/images/meine-reise-ueberblick.png" 
                alt="Meine Reise im Überblick" 
                width={1000}
                height={800}
                className="w-auto h-auto max-w-full max-h-[80vh]"
                priority
              />
            </div>
            
            {/* Moved text directly below the image */}
            <div className="w-full max-w-2xl mx-auto text-center">
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                Was meine Arbeit besonders macht, ist, dass ich diesen Weg selbst gegangen bin. Ich teile nicht nur Wissen, sondern echte Heilerfahrung. Ich verstehe den Mut, den es braucht, um sich für Hilfe und Unterstützung zu öffnen.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-sm">
              <div className="flex justify-center space-x-1.5 mb-5">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-rose-400"></span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-rose-300"></span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-rose-200"></span>
              </div>
              
              <TimelineCollapsible />
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Meine Vision & Philosophie */}
      <section className="relative py-16 md:py-20 bg-gradient-to-b from-rose-50 to-white">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fuchsia-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-rose-900 mb-3">
              Meine Vision & Philosophie
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-fuchsia-400 to-rose-400 mx-auto mb-4"></div>
            <p className="text-lg text-rose-800/90 italic max-w-2xl mx-auto">
              "WENN WIR UNS SELBST HEILEN, HEILEN WIR DIE WELT"
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="h-12 w-12 rounded-full bg-fuchsia-100 flex items-center justify-center mb-4 mx-auto">
                <HeartIcon className="h-6 w-6 text-fuchsia-500" />
              </div>
              <h3 className="text-lg font-semibold text-rose-900 text-center mb-3">Deine innere Weisheit</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Ich helfe dir, deine eigene innere Stimme wiederzuentdecken und ihr zu vertrauen – denn du trägst alle Antworten bereits in dir.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-rose-50 to-fuchsia-50 p-6 rounded-xl border border-rose-100">
              <div className="h-12 w-12 rounded-full bg-gradient-to-br from-amber-100 to-rose-100 flex items-center justify-center mb-4 mx-auto">
                <LightBulbIcon className="h-6 w-6 text-amber-500" />
              </div>
              <h3 className="text-lg font-semibold text-rose-900 text-center mb-4">Mein Coaching Ansatz</h3>
              <ul className="space-y-3">
                {[
                  { text: 'Achtsame Körperwahrnehmung' },
                  { text: 'Emotionale Selbstregulation' },
                  { text: 'Spirituelle Selbsterforschung' },
                  { text: 'Praktische Werkzeuge' }
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="h-5 w-5 text-rose-500 flex-shrink-0 mt-0.5" />
                    <span className="ml-2 text-sm text-gray-700">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="h-12 w-12 rounded-full bg-rose-100 flex items-center justify-center mb-4 mx-auto">
                <SparklesIcon className="h-6 w-6 text-rose-500" />
              </div>
              <h3 className="text-lg font-semibold text-rose-900 text-center mb-3">Ganzheitliche Heilung</h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                Ein Ansatz, der Körper, Geist, Seele und Emotion gleichermaßen einbezieht, für tiefgreifende und nachhaltige Veränderung.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <div className="max-w-3xl mx-auto p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm">
              <p className="text-gray-700 text-lg leading-relaxed">
                Die Kraft zu heilen, liegt in uns selbst. Und wenn wir uns selbst heilen, heilen wir die Welt. Als Wassermann Frau ist das meine Lebensphilosophie und die Motivation hinter meiner Arbeit.
              </p>
              
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Mein Raum für dich */}
      <RaumFuerDichSection />

      {/* Section 6: Mein Ansatz */}
      <section className="relative py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
              Mein ganzheitlicher Coaching Ansatz
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-400 to-rose-400 mx-auto mb-6"></div>
          </div>
          
          <div className="flex flex-col md:grid md:grid-cols-3 gap-6 mb-12">
            {[
              {
                title: 'Körperarbeit',
                description: 'zur Nervensystem-Regulation und Auflösung von gespeicherten Emotionen',
                items: ['Somatische Körperarbeit', 'Rebalancing Massage', 'Atemübungen'],
                icon: <HeartIcon className="h-8 w-8 text-rose-500" />,
                bgGradient: 'from-rose-50 to-rose-50',
                textColor: 'text-rose-500',
                iconColor: 'text-rose-500',
                minHeight: 'min-h-[320px]',
                contentClass: 'flex flex-col'
              },
              {
                title: 'Spiritualität',
                description: 'Für Verbindung zu dem Raum in dir indem du einfach nur bist',
                items: [
                  'Geführte Meditation',
                  'Bewusste Wahrnehmung',
                  'Energiearbeit'
                ],
                icon: <SparklesIcon className="h-8 w-8 text-purple-500" />,
                bgGradient: 'from-purple-50 to-purple-50',
                textColor: 'text-purple-500',
                iconColor: 'text-purple-500',
                minHeight: 'min-h-[320px]',
                contentClass: 'flex flex-col'
              },
              {
                title: 'Geist & Psyche',
                description: 'Für mentale Klarheit und emotionale Ausgeglichenheit',
                items: ['Systemisches Coaching', 'Selbstreflektionsprozesse', 'Achtsamkeitspraktiken'],
                icon: <LightBulbIcon className="h-8 w-8 text-fuchsia-500" />,
                bgGradient: 'from-rose-50 to-rose-50',
                textColor: 'text-rose-500',
                iconColor: 'text-rose-500',
                minHeight: 'min-h-[320px]',
                contentClass: 'flex flex-col'
              }
            ].map((category, index) => (
              <div key={index} className={`bg-white rounded-xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full ${category.minHeight || ''}`}>
                <div className={`p-6 bg-gradient-to-r ${category.bgGradient} flex-1 flex flex-col`}>
                  <div className="h-16 w-16 bg-white rounded-full shadow-sm mb-4 mx-auto flex items-center justify-center" style={{ aspectRatio: '1/1' }}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">{category.title}</h3>
                    {category.description && (
                      <p className="text-sm text-gray-600 text-center mb-3">{category.description}</p>
                    )}
                  </div>
                  <ul className={`${category.contentClass || ''} w-full`}>
                    {category.items.map((item, i) => (
                      <li 
                        key={i} 
                        className="flex items-center mb-2 last:mb-0 justify-start text-left"
                      >
                        <CheckIcon className={`h-5 w-5 ${category.textColor} mr-2 flex-shrink-0`} />
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            
            {/* Dropdown Section */}
            <div className="col-span-3 mt-16">
              <div className="max-w-3xl mx-auto p-6 bg-white/50 backdrop-blur-sm rounded-xl border border-gray-100 shadow-sm">
                <p className="text-gray-700 text-lg leading-relaxed text-center">
                  Dieser umfassende Ansatz geht in die Tiefe und begleitet dich als Frau auf allen Ebenen in die Heilung. Jede Session ist auf deine ganz persönlichen Bedürfnisse abgestimmt, respektiert dein Tempo und schafft einen Raum für natürliche Transformation von innen heraus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: Mein Weg zu dir */}
      <section className="relative py-20 md:py-28 bg-rose-50">
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fuchsia-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.02]"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
              Mein Weg zu dir
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-400 to-rose-400 mx-auto mb-6"></div>
            <p className="text-xl text-rose-800/90 italic max-w-2xl mx-auto">
              "AUTHENTIZITÄT VERBINDET – AUF AUGENHÖHE"
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold text-rose-900 mb-4">Mein Versprechen an dich</h3>
                <p className="text-gray-700 mb-4">
                  Ich begegne dir mit dem Verständnis und Mitgefühl, das ich mir selbst in meinem Heilungsprozess gewünscht habe. Und mit meiner Liebe zur Wahrheit und für echte, ehrliche Begegnung auf Augenhöhe durch verkörperte Präsenz.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-rose-900">Du musst diesen Weg nicht alleine gehen</h3>
                <div className="relative h-full min-h-[250px] rounded-xl overflow-hidden shadow-sm border border-gray-200">
                  <Image 
                    src="/images/dein-naechster-schritt.png" 
                    alt="Gemeinsam wachsen wir über uns hinaus"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold text-rose-900 mb-4">Was dich erwartet</h3>
                <ul className="space-y-4">
                  {[
                    { 
                      title: 'Sichere Umgebung', 
                      text: 'Ein Raum ohne Bewertung, in dem du ganz du selbst sein kannst.' 
                    },
                    { 
                      title: 'Individueller & holistischer Ansatz', 
                      text: 'Kein Schema F – wir erforschen gemeinsam, was für dich funktioniert.' 
                    },
                    { 
                      title: 'Spirituelle Entwicklung', 
                      text: 'Tiefe Verbindung zu deinem wahren Selbst und höherem Bewusstsein.' 
                    },
                    { 
                      title: 'Körperarbeit', 
                      text: 'Sanfte Methoden für tiefe körperliche Heilung und Wohlbefinden.' 
                    },
                    { 
                      title: 'Praktische Werkzeuge', 
                      text: 'Konkrete Übungen, die du sofort in deinen Alltag integrieren kannst.' 
                    },
                    { 
                      title: 'Nachhaltige Veränderung', 
                      text: 'Keine schnellen Lösungen, sondern echte, tiefgreifende Transformation.' 
                    }
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-7 w-7 rounded-full bg-rose-100 flex items-center justify-center mr-3 mt-0.5">
                        <CheckIcon className="h-3.5 w-3.5 text-rose-500" />
                      </div>
                      <div className="text-sm">
                        <p className="text-gray-600"><span className="font-bold">{item.title}</span>: {item.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: Jenseits der Heilung */}
      <BeyondHealingExact />

      {/* Section 9: Dein nächster Schritt */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-white to-rose-50">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/pattern.svg')] opacity-[0.02]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
                Dein nächster Schritt
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-400 to-rose-400 mx-auto mb-6"></div>
              <p className="text-xl text-rose-800/90 italic mb-8">
                "DER ERSTE SCHRITT IST IMMER DER WICHTIGSTE"
              </p>
            </div>
            
            <div className="space-y-6 mb-10">
              <p className="text-gray-700 text-center max-w-2xl mx-auto">
                Vielleicht stehst du an einem Wendepunkt. Vielleicht spürst du, dass da mehr ist. Vielleicht bist du bereit, dich selbst wahrhaftig zu entdecken.
              </p>
              
              <div className="p-6 bg-rose-50 rounded-xl">
                <p className="text-lg text-rose-900 font-medium mb-4 text-center">
                  Was auch immer dich hierher geführt hat – du bist willkommen.
                </p>
                <p className="text-gray-700 text-center mb-4">
                  Heilung ist möglich - in jedem Moment.
                  Du musst nicht perfekt sein, nicht „funktionieren“, um diesen Weg zu gehen. Alles, was du brauchst, ist bereits in dir. Ich helfe dir, dich daran zu erinnern.
                </p>
                <p className="text-xl font-semibold text-rose-900 text-center italic">
                  Du bist unendlich kraftvoll und schöpferisch.
                </p>
                <div className="mt-6 flex justify-center">
                  <Image 
                    src="/images/Spagat ohne Pflanze.png" 
                    alt="Spirituelle Transformation" 
                    width={400} 
                    height={300}
                    className="rounded-lg shadow-md"
                  />
                </div>
              </div>
              
              <p className="text-lg font-medium text-rose-900 text-center mb-8">
                Ich lade dich herzlich zu einem kostenfreien, unverbindlichen Gespräch ein – um herauszufinden, ob ich dich auf deinem Weg begleiten kann.
              </p>
              
              <div className="flex justify-center mt-8">
                <Link 
                  href="/buchen" 
                  className="group inline-flex items-center px-8 py-4 text-sm font-medium text-white bg-gradient-to-r from-pink-600 to-purple-600 rounded-full hover:from-pink-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <span className="mr-2">Kostenloses Erstgespräch vereinbaren</span>
                  <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
