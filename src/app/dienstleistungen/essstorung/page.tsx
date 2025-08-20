'use client';

import React from 'react';
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
  CheckCircleIcon
} from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

function CollapsibleText({ content }: { content: string }) {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const contentRef = React.useRef<HTMLDivElement>(null);
  const [needsCollapse, setNeedsCollapse] = React.useState(false);

  React.useEffect(() => {
    if (contentRef.current) {
      const lineHeight = parseInt(getComputedStyle(contentRef.current).lineHeight);
      const maxHeight = lineHeight * 5;
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
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient from-pink-600 to-pink-600 bg-clip-text bg-gradient-to-r mb-6">
              Was macht ein ED Recovery Coach für Essstörungen?
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-6"></div>
            <p className="text-2xl text-pink-800/90 italic max-w-2xl mx-auto mb-8">
              "HEILUNG DURCH KÖRPERLICHE PRÄSENZ UND INNERE TRANSFORMATION"
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-pink max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Als zertifizierter ED Recovery Coach begleite ich dich auf deinem persönlichen Weg zur Genesung von Essstörungen. Mein Ansatz kombiniert körperzentrierte Methoden mit psychologischer Begleitung, um dir zu helfen, ein gesundes Verhältnis zu deinem Körper und zu Essen aufzubauen.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dein Weg zur Heilung</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Individuelle Begleitung',
                icon: <UserIcon className="w-8 h-8 text-pink-600 mx-auto mb-4" />,
                description: 'Maßgeschneiderte Unterstützung, die auf deine persönlichen Bedürfnisse und Ziele abgestimmt ist.'
              },
              {
                title: 'Ganzheitlicher Ansatz',
                icon: <HeartIcon className="w-8 h-8 text-pink-600 mx-auto mb-4" />,
                description: 'Kombination aus körperlichen Übungen, mentalem Training und emotionaler Unterstützung.'
              },
              {
                title: 'Nachhaltige Veränderung',
                icon: <CheckCircleIcon className="w-8 h-8 text-pink-600 mx-auto mb-4" />,
                description: 'Langfristige Strategien für ein gesundes Selbstbild und Essverhalten.'
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-center">
                  {item.icon}
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Personal Story CTA */}
      <section className="py-20 bg-gradient-to-r from-pink-50 to-rose-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Meine persönliche Geschichte</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Ich kenne den Kampf mit Essstörungen aus eigener Erfahrung. Meine eigene Heilungsreise hat mich zu meiner Berufung geführt, andere auf ihrem Weg zu begleiten.
          </p>
          <Link 
            href="/dienstleistungen/essstorung/persoenliche-geschichte" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 shadow-md hover:shadow-lg transition-all duration-300"
          >
            Meine Geschichte lesen
            <ArrowRightIcon className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Bereit für den ersten Schritt?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Vereinbare ein kostenloses Erstgespräch und lass uns gemeinsam deinen Weg zur Heilung gestalten.
          </p>
          <Link 
            href="/kontakt" 
            className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 shadow-md hover:shadow-lg transition-all duration-300"
          >
            Kostenloses Erstgespräch vereinbaren
          </Link>
        </div>
      </section>
    </main>
  );
}
