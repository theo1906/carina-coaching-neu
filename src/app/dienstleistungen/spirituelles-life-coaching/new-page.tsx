'use client';

import React from 'react';
import { ArrowRightIcon, HeartIcon, LightBulbIcon, SparklesIcon, UserIcon, WrenchScrewdriverIcon, ScaleIcon, BoltIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const metadata = {
  title: 'Spirituelles Life Coaching & Embodiment für Frauen – Carina Göb',
  description: 'Spirituelles Life Coaching mit Carina bietet eine transformative Reise in dein Herz, deinen Körper und deine Weiblichkeit.',
  keywords: ['spirituelles coaching', 'weiblichkeit entdecken', 'körperarbeit', 'spirituelle entwicklung', 'heilung', 'transformation'],
};

const features = [
  {
    name: 'Individuell',
    description: 'Maßgeschneiderte Sitzungen, die auf deine persönlichen Bedürfnisse und Ziele zugeschnitten sind.',
    icon: UserIcon,
  },
  {
    name: 'Ganzheitlich',
    description: 'Betrachtung von Körper, Geist und Seele für eine umfassende Transformation.',
    icon: HeartIcon,
  },
  {
    name: 'Praktisch',
    description: 'Konkrete Werkzeuge und Übungen für den Alltag.',
    icon: WrenchScrewdriverIcon,
  },
  {
    name: 'Transformativ',
    description: 'Tiefgreifende Veränderungen auf allen Ebenen deines Seins.',
    icon: SparklesIcon,
  },
];

const values = [
  {
    name: 'Mitgefühl & Akzeptanz',
    description: 'Ich begegne dir mit bedingungsloser Wertschätzung und schaffe einen sicheren Raum, in dem du ganz du selbst sein kannst – ohne Bewertung oder Erwartungen.',
    icon: HeartIcon,
    color: 'pink',
  },
  {
    name: 'Ganzheitlichkeit',
    description: 'Ich betrachte den Menschen in seiner Gesamtheit – Körper, Geist und Seele – und berücksichtige dabei auch dein soziales Umfeld und deine Lebensumstände.',
    icon: SparklesIcon,
    color: 'purple',
  },
  {
    name: 'Selbstverantwortung',
    description: 'Du bist der Experte deines Lebens. Ich begleite dich auf deinem Weg, aber die Verantwortung für dein Wachstum und deine Entscheidungen liegt bei dir.',
    icon: ScaleIcon,
    color: 'amber',
  },
  {
    name: 'Vertrauen & Sicherheit',
    description: 'Dein Vertrauen ist mir heilig. Ich schaffe eine vertrauensvolle Atmosphäre, in der du dich sicher fühlst, dich zu öffnen und dich auf den Prozess einzulassen.',
    icon: ShieldCheckIcon,
    color: 'emerald',
  },
  {
    name: 'Wachstum & Entwicklung',
    description: 'Ich glaube an dein Potenzial zur Veränderung und unterstütze dich dabei, über dich hinauszuwachsen und deine persönlichen Ziele zu erreichen.',
    icon: BoltIcon,
    color: 'blue',
  },
  {
    name: 'Achtsamkeit & Präsenz',
    description: 'Ich begegne dir mit voller Präsenz und Achtsamkeit und unterstütze dich darin, diese Qualitäten auch in deinem eigenen Leben zu kultivieren.',
    icon: LightBulbIcon,
    color: 'indigo',
  },
];

export default function SpiritualCoachingPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-36 pb-24 overflow-hidden bg-gradient-to-br from-white to-pink-50">
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
          <div className="absolute top-1/3 -right-4 w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full mix-blend-multiply filter blur opacity-20"></div>
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mix-blend-multiply filter blur opacity-20"></div>
        </div>
        
        <div className="mx-auto max-w-7xl px-4 sm:px-8 lg:px-12 relative z-10 h-full flex items-center">
          <div className="text-center w-full max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-1">
              Spirituelles Life Coaching
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-2"></div>
            <p className="text-xl md:text-2xl text-pink-800/90 italic leading-relaxed mb-8">
              "INNERE TRANSFORMATION DURCH KÖRPERLICHE PRÄSENZ"
            </p>
            <div className="mt-16">
              <Link 
                href="/contact" 
                className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-gradient-to-r from-pink-600 to-pink-600 rounded-full hover:from-pink-700 hover:to-pink-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <span className="mr-2">Kostenloses Erstgespräch vereinbaren</span>
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
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
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="pt-6">
                <div className="flow-root bg-white rounded-lg px-6 pb-8 h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-gradient-to-br from-pink-500 to-purple-600 rounded-md shadow-lg">
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gradient-to-br from-white to-pink-50">
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

      {/* Call to Action */}
      <section className="bg-gradient-to-br from-pink-50 to-purple-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-10">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              <span className="block">Bereit für deine Reise zu dir selbst?</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Vereinbare jetzt ein kostenloses Erstgespräch und entdecke, wie ich dich auf deinem Weg begleiten kann.
            </p>
            <div className="mt-8">
              <div className="inline-flex rounded-md shadow">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                >
                  Termin vereinbaren
                  <ArrowRightIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
                </Link>
              </div>
            </div>
            <p className="mt-6 text-sm text-gray-500">
              Oder schreibe mir eine E-Mail an{' '}
              <a href="mailto:info@carinagoeb.com" className="font-medium text-pink-600 hover:text-pink-500">
                info@carinagoeb.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
