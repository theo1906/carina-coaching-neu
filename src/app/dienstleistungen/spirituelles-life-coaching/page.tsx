'use client';

import { useState } from 'react';
import { ArrowRightIcon, HeartIcon, LightBulbIcon, SparklesIcon, UserIcon, WrenchScrewdriverIcon, ScaleIcon, BoltIcon, ShieldCheckIcon, CheckIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

// Image paths
const heroImagePath = "/images/hero-new.jpg";
const homeHeroMobilePath = "/images/home-hero-section-mobile.png";
const moodOnlineImagePath = "/images/Mood Online.JPG";
const spiritualCoachingJourneyPath = "/images/spiritual-coaching-journey.jpg";
const carinaPortraitPath = "/images/carina-portrait.png";
import Link from 'next/link';
import SpiritualCoachingCarousel from '@/components/SpiritualCoachingCarousel';

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

export default function SpiritualPage() {
  
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

      {/* Section 2: Ist ein spirituelles Coaching das Richtige für dich? */}
      <section id="ist-ein-spirituelles-coaching-das-richtige-fuer-dich" className="relative py-12 md:py-16 bg-white">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">Ist ein spirituelles Life Coaching das Richtige für dich?</h2>
              <div className="relative w-full h-[500px] overflow-hidden mt-4">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-full h-full max-w-[550px] rounded-3xl overflow-hidden">
                    <div className="relative w-full h-full">
                      <Image 
                        src={spiritualCoachingJourneyPath}
                        alt="Spirituelle Reise - Finde deinen inneren Frieden"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-pink-50 mix-blend-multiply opacity-30"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative mt-12">
              <div className="bg-gradient-to-br from-pink-50 to-white p-8 rounded-2xl shadow-lg border border-pink-100">
                <h3 className="text-2xl font-bold text-pink-900 mb-6">Dein Weg zu dir selbst</h3>
                <p className="text-gray-700 mb-6">
                  In meinen Coachings begleite ich dich sanft und einfühlsam auf deiner Reise zurück zu dir selbst. Gemeinsam entdecken wir deine innere Weisheit und stärken deine Verbindung zu deinem natürlichen SEINszustand.
                </p>
                <div className="space-y-4">
                  <div className="flex items-baseline">
                    <div className="flex-shrink-0 mr-3 pt-1.5">
                      <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                    </div>
                    <p className="text-gray-700">Individuelle Begleitung auf deinem spirituellen Weg</p>
                  </div>
                  <div className="flex items-baseline">
                    <div className="flex-shrink-0 mr-3 pt-1.5">
                      <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                    </div>
                    <p className="text-gray-700">Tiefe Selbsterkenntnis und Bewusstseinserweiterung</p>
                  </div>
                  <div className="flex items-baseline">
                    <div className="flex-shrink-0 mr-3 pt-1.5">
                      <div className="w-2 h-2 rounded-full bg-pink-500"></div>
                    </div>
                    <p className="text-gray-700">Heilung auf körperlicher, emotionaler und spiritueller Ebene</p>
                  </div>
                </div>
                <div className="mt-6 text-center">
                  <Link 
                    href="/dienstleistungen/spirituelles-life-coaching/ist-ein-spirituelles-coaching-das-richtige-fuer-dich"
                    className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium transition-colors group"
                  >
                    <span className="mr-2">Mehr erfahren</span>
                    <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Energetische Reinigung */}
      <section className="relative py-16 md:py-20 bg-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div id="embodiment-und-heilung" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient from-pink-600 to-purple-600 bg-clip-text bg-gradient-to-r mb-6">
              Embodiment als Schlüssel auf deiner Heilungsreise
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-6"></div>
            <p className="text-2xl text-pink-800/90 italic max-w-2xl mx-auto mb-8">
              "OWN IT. FEEL IT. HEAL IT."
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="md:order-2">
              <p className="text-gray-700 mb-6">
                Dein Körper speichert all deinen Schmerz und deine Verletzungen - selbst die unsichtbaren. Er ist damit ein wertvoller Impulsgeber für die Anteile in dir, die noch heilen dürfen, um wieder in Verbindung mit dir selbst zu sein und im Vertrauen ins Leben.
              </p>
              <p className="text-gray-700 mb-6">
                Unverheilte Wunden machen sich auf verschiedene Weisen bemerkbar:
              </p>
              <ul className="space-y-3 pl-5 mb-6 list-disc">
                <li className="text-gray-700">Durch Muster, Überlebensstrategien, Selbstsabotage und den ständigen Kampf mit dem eigenen Körper</li>
                <li className="text-gray-700">Durch das Gefühl, nicht wirklich du selbst sein zu können</li>
              </ul>
              <p className="text-gray-700 mb-8">
                Oft läuft das unbewusst ab, es ist dein "Normal". Aber tief in dir spürst du diese Trennung von dem, wonach du dich sehnst: echte Verbindung. Und diese beginnt immer bei dir selbst und in dir.
              </p>
              <div className="mt-6">
                <Link 
                  href="/dienstleistungen/spiritual/embodiment-und-heilung" 
                  className="inline-flex items-center px-6 py-3 text-base font-medium text-pink-600 hover:text-pink-700 transition-colors group"
                >
                  <span className="mr-2">Mehr erfahren</span>
                  <ArrowRightIcon className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
            <div className="md:order-1 group relative">
              <div className="absolute -inset-1 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl opacity-20 blur-lg group-hover:opacity-30 transition-all duration-300"></div>
              <div className="relative bg-gradient-to-br from-white to-purple-50 rounded-2xl p-6 shadow-xl border border-purple-100/70 hover:shadow-2xl hover:border-pink-100 transition-all duration-300">
                <div className="absolute -top-4 -right-4 w-14 h-14 bg-pink-500 rounded-full flex items-center justify-center text-white shadow-lg">
                  <SparklesIcon className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-4">Dein Weg zur Ganzheit</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  Ich helfe dir, deine Körperwahrnehmung zu stärken und ein tieferes Verständnis für deine körperlichen und emotionalen Zustände zu entwickeln.
                </p>
                <div className="relative py-3 mb-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg px-4 -mx-2">
                  <div className="absolute -top-2.5 left-4 bg-pink-500 text-white text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-md">
                    OWN IT. FEEL IT. HEAL IT.
                  </div>
                  <p className="text-gray-700 italic pt-2">
                    Nimm mutig alles an, was ist, um zu deiner wahren Essenz zurückzufinden.
                  </p>
                </div>
                <ul className="space-y-3 mb-4">
                  <li className="flex items-start group-hover:translate-x-1 transition-transform duration-200">
                    <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mr-2">
                      <CheckIcon className="h-3 w-3 text-pink-600" />
                    </div>
                    <span className="text-gray-700">Indem du gesehen wirst, wo du dich verstecken willst</span>
                  </li>
                  <li className="flex items-start group-hover:translate-x-1 transition-transform duration-200 delay-75">
                    <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mr-2">
                      <CheckIcon className="h-3 w-3 text-pink-600" />
                    </div>
                    <span className="text-gray-700">Indem du deiner Unsicherheit mit Mitgefühl begegnest</span>
                  </li>
                  <li className="flex items-start group-hover:translate-x-1 transition-transform duration-200 delay-100">
                    <div className="flex-shrink-0 mt-0.5 w-6 h-6 rounded-full bg-pink-100 flex items-center justify-center mr-2">
                      <CheckIcon className="h-3 w-3 text-pink-600" />
                    </div>
                    <span className="text-gray-700">Indem du dich in deiner Verletzlichkeit zeigst</span>
                  </li>
                </ul>
                <div className="text-center mt-2">
                  <p className="text-sm font-medium inline-block bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">
                    Hier beginnt deine Reise zurück zu dir selbst und in deine volle Kraft.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Was ist Spirituelles Life Coaching? */}
      <section id="was-ist-spiritual-life-coaching" className="relative py-16 md:py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Was ist spirituelles Life Coaching?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-8"></div>
            <p className="text-gray-700 max-w-3xl mx-auto text-lg relative z-10">
              Eine <span className="font-semibold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">transformative Begleitung</span> in dein Herz, deinen Körper und dein Frausein, um dein Leben bewusster zu gestalten und deine Beziehungen erfüllt zu leben – ganz du selbst.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 relative z-10">
            <div id="herausforderungen" className="group relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-pink-100 hover:border-pink-200 p-6 md:p-7 hover:-translate-y-1.5 flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/40 to-purple-50/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative flex-1 flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-100 to-pink-50 flex items-center justify-center mb-4 shadow-inner border border-pink-100 group-hover:shadow-pink-100/30 transition-all duration-300">
                  <BoltIcon className="h-7 w-7 text-pink-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-pink-700 transition-colors">Wie Herausforderungen uns wachsen lassen</h3>
                <p className="text-gray-600 leading-[1.6] mb-4">
                  Herausforderungen wie Schmerz oder wiederkehrende Muster sind kraftvolle Katalysatoren für tiefgreifende Transformation und persönliches Wachstum.
                </p>
                <Link href="/dienstleistungen/spiritual/themen/herausforderungen" className="mt-auto text-pink-600 hover:text-pink-700 text-sm font-medium inline-flex items-center group-hover:underline">
                  Mehr erfahren
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="group relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-pink-100 hover:border-purple-200 p-6 md:p-7 hover:-translate-y-1.5 flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/40 to-pink-50/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative flex-1 flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center mb-4 shadow-inner border border-purple-100 group-hover:shadow-purple-100/30 transition-all duration-300">
                  <ScaleIcon className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">Bewusst Veränderungen willkommen heißen</h3>
                <p className="text-gray-600 leading-[1.6] mb-4">
                  Veränderung wird möglich, wenn wir Herausforderungen mit Bewusstsein und einem offenen Herzen begegnen, anstatt sie zu verdrängen.
                </p>
                <Link href="/dienstleistungen/spiritual/themen/bewusste-veraenderung" className="mt-auto text-purple-600 hover:text-purple-700 text-sm font-medium inline-flex items-center group-hover:underline">
                  Mehr erfahren
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="group relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-pink-100 hover:border-pink-200 p-6 md:p-7 hover:-translate-y-1.5 flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-50/40 to-purple-50/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative flex-1 flex flex-col">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-pink-100 to-pink-50 flex items-center justify-center mb-4 shadow-inner border border-pink-100 group-hover:shadow-pink-100/30 transition-all duration-300">
                  <LightBulbIcon className="h-7 w-7 text-pink-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-pink-700 transition-colors">Verbinde dich mit deiner inneren Weisheit</h3>
                <p className="text-gray-600 leading-[1.6] mb-4">
                  Durch verkörperte Präsenz verbindest du dich mit deiner inneren Weisheit und findest Antworten in dir auf deine Lebensfragen. Gemeinsam stärken wir dein Vertrauen in deine innere Führung.
                </p>
                <Link href="/dienstleistungen/spiritual/themen/innere-weisheit" className="mt-auto text-pink-600 hover:text-pink-700 text-sm font-medium inline-flex items-center group-hover:underline">
                  Mehr erfahren
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="group relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-pink-100 hover:border-indigo-200 p-6 md:p-7 hover:-translate-y-1.5 flex flex-col">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-50/40 to-indigo-50/40 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
              <div className="relative flex-1 flex flex-col">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-100 to-indigo-50 flex items-center justify-center mb-4 shadow-inner border border-indigo-100 group-hover:shadow-indigo-100/30 transition-all duration-300">
                  <ShieldCheckIcon className="h-7 w-7 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors">The power of embodied change</h3>
                <p className="text-gray-600 text-[0.95rem] leading-[1.6] mb-4">
                  Wahre Veränderung beginnt im Körper. Durch verkörperte Präsenz stärkst du deine Intuition und verankerst nachhaltige Veränderung in deinem Alltag.
                </p>
                <Link href="/dienstleistungen/spiritual/themen/power-embodied-change" className="mt-auto text-indigo-600 hover:text-indigo-700 text-sm font-medium inline-flex items-center group-hover:underline">
                  Mehr erfahren
                  <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4.5: Mein Ansatz */}
      <section id="mein-ansatz" className="relative py-16 md:py-20 bg-gradient-to-b from-white to-pink-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-14 relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Mein Ansatz für spirituelles Life Coaching
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Column - Main Text and Authentic Self */}
            <div className="space-y-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-100 hover:border-pink-200 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Mein ganzheitlicher Beratungsansatz verbindet die Tiefe meiner persönlichen Selbstheiler-Erfahrung mit fundierten Methoden aus dem professionellen Coaching und der transformativen Kraft spiritueller Weisheit. Diese einzigartige Kombination ermöglicht es uns, auf verschiedenen Ebenen zu arbeiten und nachhaltige Veränderungen zu bewirken.
                </p>
                <div className="mt-6 pt-4 border-t border-pink-100">
                  <Link 
                    href="/dienstleistungen/spiritual/themen/mein-ansatz" 
                    className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium group"
                  >
                    <span className="mr-2">Mehr erfahren</span>
                    <svg className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
              
              <div className="group relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-pink-100 hover:border-amber-200 p-6 pl-24">
                <div className="absolute top-6 left-6 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-100 to-amber-50 flex items-center justify-center shadow-inner border border-amber-100">
                  <SparklesIcon className="h-6 w-6 text-amber-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors">Dein authentisches Selbst</h3>
                <p className="text-gray-600 leading-relaxed">
                  Es geht nicht darum, dir bestimmte Überzeugungen aufzuzwingen, sondern dich dabei zu unterstützen, dein authentisches Selbst zu entfalten und die Beziehung zu dir selbst und deinem Körper zu stärken.
                </p>
              </div>
            </div>
            
            {/* Right Column - Remaining Feature Cards */}
            <div className="grid gap-6">
              <div className="group relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-pink-100 hover:border-pink-200 p-6 pl-24">
                <div className="absolute top-6 left-6 w-14 h-14 rounded-2xl bg-gradient-to-br from-pink-100 to-pink-50 flex items-center justify-center shadow-inner border border-pink-100">
                  <HeartIcon className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-pink-700 transition-colors">Ganzheitliche Transformation</h3>
                <p className="text-gray-600 leading-relaxed">
                  Durch meinen Ansatz von Holistic Counselling arbeiten wir gemeinsam daran, Gefühle von Sicherheit, Selbstvertrauen und Stabilität in dir von innen heraus wiederzuentdecken und in deinem Alltag zu verkörpern.
                </p>
              </div>
              
              <div className="group relative bg-white/95 backdrop-blur-sm rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-pink-100 hover:border-purple-200 p-6 pl-24">
                <div className="absolute top-6 left-6 w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-100 to-purple-50 flex items-center justify-center shadow-inner border border-purple-100">
                  <WrenchScrewdriverIcon className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 group-hover:text-purple-700 transition-colors">Praktische Werkzeuge</h3>
                <p className="text-gray-600 leading-relaxed">
                  In den Sitzungen zeige ich dir praktische Tools zur Selbstregulierung. Wir entwickeln Routinen, die dich stärken und kultivieren die Ressourcen von Geduld und Mitgefühl in dir für deinen Heilungsprozess.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Meine Werte und Prinzipien - Modern Design */}
      <section className="relative py-24 overflow-hidden bg-gradient-to-br from-white to-pink-50">
        {/* Decorative background elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-20 -right-20 w-48 h-48 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
          <div className="absolute -bottom-20 -left-20 w-48 h-48 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-20"></div>
          <div className="absolute top-1/3 -right-4 w-16 h-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full mix-blend-multiply filter blur opacity-20"></div>
          <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mix-blend-multiply filter blur opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient from-pink-600 to-pink-600 bg-clip-text bg-gradient-to-r mb-6">
              Meine Werte und Prinzipien
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-6"></div>
            <p className="text-2xl text-pink-800/90 italic max-w-3xl mx-auto mb-8">
              "DAS HERZ MEINER ARBEIT"
            </p>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Für eine tiefgreifende und nachhaltige Transformation
            </p>
          </div>

          {/* Quote */}
          <div className="mb-12 max-w-3xl mx-auto px-4">
            <blockquote className="text-gray-700 leading-relaxed text-center font-normal">
              <p className="relative">
                <span className="absolute -left-4 -top-2 text-4xl text-pink-800/90">„</span>
                Wenn dir jemand wirklich zuhört, ohne über dich zu urteilen, ohne zu versuchen, Verantwortung für dich zu übernehmen, ohne zu versuchen, dich zu formen, fühlt sich das verdammt gut an.
                <span className="absolute -right-4 -top-2 text-4xl text-pink-800/90">„</span>
              </p>
              <footer className="mt-4 text-gray-500 text-base font-medium">— Carl Rogers</footer>
            </blockquote>
            
            {/* Three Boxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 w-full">
              {/* Box 1 */}
              <div className="bg-gradient-to-br from-white to-pink-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-pink-100 h-full flex flex-col w-full">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600 mb-4 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Authentizität</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ich stehe für ehrliche und transparente Kommunikation. In meiner Arbeit lege ich Wert auf Echtheit und Klarheit, damit du dich sicher und verstanden fühlst.
                </p>
              </div>

              {/* Box 2 */}
              <div className="bg-gradient-to-br from-white to-purple-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-purple-100 h-full flex flex-col w-full">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center text-purple-600 mb-4 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Menschlichkeit</h3>
                <p className="text-gray-600 leading-relaxed">
                  Jeder Mensch ist einzigartig. Ich begegne dir mit Respekt, Wertschätzung und der Überzeugung, dass in jedem von uns ungeahnte Potenziale schlummern.
                </p>
              </div>

              {/* Box 3 */}
              <div className="bg-gradient-to-br from-white to-pink-50 p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 border border-pink-100 h-full flex flex-col w-full">
                <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600 mb-4 flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Ganzheitlichkeit</h3>
                <p className="text-gray-600 leading-relaxed">
                  Ich betrachte dich als Mensch in deiner Gesamtheit. Körper, Geist, Seele und Emotion bilden eine untrennbare Einheit, die in meiner Arbeit gleichermaßen Berücksichtigung findet.
                </p>
              </div>
            </div>
            
            {/* Added Image */}
            <div className="mt-16 text-center">
              <div className="inline-block rounded-xl overflow-hidden shadow-xl max-w-3xl">
                <Image
                  src="/images/sunnylifemoments-shooting-coaching-carina-münchen-275.webp"
                  alt="Carina Göb - Spiritueller Life Coach"
                  width={800}
                  height={500}
                  className="rounded-2xl shadow-xl w-full h-auto"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vorteile System-Coaching Section */}
      <section id="vorteile" className="relative py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Was sind die wichtigsten Vorteile von körperzentriertem, spirituellem Life Coaching für Frauen?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-lg text-pink-800/90 max-w-3xl mx-auto">
              Entdecke, wie du durch gezielte Methoden zu mehr Lebensqualität und innerer Harmonie findest
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Benefit 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Wahre Selbstfindung & innere Stärke</h3>
              <p className="text-gray-600">
                Lerne dich selbst und deinen Körper besser kennen. Entdecke deine verborgenen Ressourcen und befreie dich von alten Mustern, die dich zurückhalten. 
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-pink-100 rounded-lg flex items-center justify-center text-pink-600 mb-4">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Reduzierung von Leistungsdruck</h3>
              <p className="text-gray-600">
                Finde zu mehr Leichtigkeit im Alltag und lerne, dein Leben mit mehr Gelassenheit zu gestalten. Befreie dich vom Druck, immer perfekt sein zu müssen. 
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 bg-pink-50 rounded-lg flex items-center justify-center text-pink-500 mb-4">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Authentizität als Superkraft</h3>
              <p className="text-gray-600">
                Entdecke, dein wahres Selbst zu leben und dich von gesellschaftlichen Erwartungen zu befreien. Finde zu deiner inneren Wahrheit und lebe authentisch.
              </p>
            </div>
          </div>

          <div className="mt-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-8 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Bereit für deine Transformation?</h3>
            <p className="text-pink-100 text-lg mb-6 max-w-2xl mx-auto">
              Entdecke alle Vorteile des körperzentrierten, spirituellen System-Coachings.
            </p>
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-pink-600 bg-white hover:bg-pink-50 transition-colors shadow-md hover:shadow-lg">
                <span>Kostenloses Kennenlerngespräch</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
              <Link href="/dienstleistungen/spiritual/vorteile-system-coaching" className="inline-flex items-center justify-center px-6 py-3 border border-white/30 text-base font-medium rounded-full text-white hover:bg-white/10 transition-colors">
                <span>Mehr erfahren</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          
        </div>
      </section>

      {/* Wie arbeitet ein spiritueller Coach mit Dir? */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Wie arbeitet ein spiritueller Coach mit Dir?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-pink-500">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Als spiritueller Coach begleite ich dich zu den Anteilen in dir, die von deinem Energiesystem und deiner Essenz aktuell abgeschnitten sind und dich blockieren, deine ganze Kraft zu leben.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl border border-pink-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Embracing triggers as teachers</h3>
                <p className="text-gray-700">
                  Intensive, emotionale oder körperliche Reaktionen (aktiviert durch einen Trigger) sind oft alte, nicht verheilte Verletzungen, die deine liebevolle Aufmerksamkeit einfordern. Sie können dir als Wegweiser für tiefe Heilung dienen.
                </p>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h4 className="font-semibold text-lg text-pink-700 mb-3">Automatische Reaktionsmuster</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">→</span>
                    <span className="text-gray-700"><span className="font-medium">Fight</span> (kontrollierend, impulsiv)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">→</span>
                    <span className="text-gray-700"><span className="font-medium">Flee</span> (zurückziehen, einmauern)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">→</span>
                    <span className="text-gray-700"><span className="font-medium">Freeze</span> (erstarren, einfrieren)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-pink-500 mr-2">→</span>
                    <span className="text-gray-700"><span className="font-medium">Fawn</span> (people pleasing)</span>
                  </li>
                </ul>
              </div>
              
              <div id="bewusste-veraenderung" className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                <h4 className="font-semibold text-lg text-pink-700 mb-3">Bewusste Veränderung</h4>
                <p className="text-gray-700 mb-4">
                  Im Coaching lernst du, präsent zu bleiben und bewusst zu wählen, wie du aktiv auf Trigger antworten möchtest, anstatt automatisch zu reagieren.
                </p>
                <Link href="/dienstleistungen/spiritual/mehr-erfahren/trigger-verstehen" className="inline-flex items-center text-pink-600 hover:text-pink-700 text-sm font-medium transition-colors duration-200">
                  Mehr erfahren
                  <svg className="w-3.5 h-3.5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Image Carousel - Moved outside the grid */}
        <div className="w-full flex justify-center items-center mt-16 mb-16 px-4">
          <div className="w-full max-w-4xl">
            <SpiritualCoachingCarousel />
          </div>
        </div>
      </section>

      {/* Dein Weg in die emotionale Freiheit und Selbst-Gelassenheit */}
      <section className="relative py-16 md:py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Dein Weg in die emotionale Freiheit und Selbst-Gelassenheit
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Praktische Schritte zu mehr innerem Frieden und Selbstbestimmung
            </p>
          </div>
          
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-pink-500">
              <div className="flex items-center mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-100 text-pink-700 font-bold text-xl mr-4">1</span>
                <h3 className="text-2xl font-bold text-gray-900">Selbstbeobachtung üben</h3>
              </div>
              <div className="pl-14">
                <p className="text-gray-700">
                  Lerne dich selbst zu beobachten, ohne zu bewerten. Nimm deine Gefühle, deine Gedanken, deine Körperempfindungen und deine Reaktionen einfach nur wahr in der Haltung von mitfühlender Achtsamkeit für dich selbst. Stell dir vor, du bist dein bester Freund. Und aus diesem Mindset heraus trete dir selbst gegenüber und gehe in einen liebevollen Dialog mit dir, tief verbunden mit der Weisheit deines Körpers. Das ist dein erster Schritt.
                </p>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-500">
              <div className="flex items-center mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-purple-100 text-purple-700 font-bold text-xl mr-4">2</span>
                <h3 className="text-2xl font-bold text-gray-900">Gewohnheitsreaktionen durchbrechen</h3>
              </div>
              <div className="pl-14">
                <p className="text-gray-700 mb-4">
                  Erkenne, wann du getriggert wirst: das heißt beobachte genau, in welchen Situationen du emotional sehr stark reagierst und deine Reaktion gefühlt wie automatisch abläuft.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-pink-700 mb-2">Typische Reaktionsmuster:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        <span className="text-gray-700">Laut werden</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        <span className="text-gray-700">Kontrolle ausüben</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-pink-500 mr-2">•</span>
                        <span className="text-gray-700">Sich verschließen</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-purple-700 mb-2">Weitere Muster:</h4>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Übertrieben entschuldigen</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Anderen die Schuld geben</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-purple-500 mr-2">•</span>
                        <span className="text-gray-700">Sich vergleichen</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <p className="text-gray-700">
                  Mit etwas Übung schaffst du Raum zwischen Reiz und Reaktion, wählst Stille und nimmst Abstand von der Situation, anstatt zu überreagieren.
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-pink-500">
              <div className="flex items-center mb-4">
                <span className="flex items-center justify-center w-10 h-10 rounded-full bg-pink-100 text-pink-700 font-bold text-xl mr-4">3</span>
                <h3 className="text-2xl font-bold text-gray-900">Den Stresszyklus beenden</h3>
              </div>
              <div className="pl-14">
                <p className="text-gray-700 mb-4">
                  Jeder Trigger aktiviert dein sympathisches Nervensystem (fight, flight, freeze Modus), das heißt, dein Körper bereitet sich auf Gefahr vor und das löst daher eine Stressreaktion in deinem Körper aus.
                </p>
                
                <div className="bg-pink-50 p-6 rounded-lg mb-6 border border-pink-100">
                  <h4 className="font-semibold text-pink-700 text-lg mb-3">Bewegungstechniken zur Stressregulation</h4>
                  <p className="text-gray-700 mb-4">
                    Ich zeige dir Bewegungs-Techniken, mit denen du die Energie aus deinem aktivierten Nervensystem freisetzen kannst:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                      <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-2">1</div>
                      <span className="text-gray-700">Schütteln</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                      <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-2">2</div>
                      <span className="text-gray-700">Tanzen</span>
                    </div>
                    <div className="bg-white p-3 rounded-lg text-center shadow-sm">
                      <div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-2">3</div>
                      <span className="text-gray-700">Dynamische Meditationen</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700">
                  Diese Techniken helfen deinem Körper, in den Zustand der Ruhe und Klarheit zurückzukehren. Auch bei einer Überaktivierung des Nervensystems, die über einen längeren Zeitraum anhält und zu chronischem Stress, einem gestörten Essverhalten, Angstzuständen, Schlafstörungen etc. führt, unterstützen dich diese Übungen auf deinem Weg in die innere Heilung.
                </p>
              </div>
            </div>
            
            {/* CTA Box */}
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-8 rounded-2xl text-center text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">Dein Weg zur Transformation</h3>
              <p className="text-pink-100 text-lg mb-6 max-w-2xl mx-auto">
                Spirituelles Life Coaching ermöglicht dir nachhaltige, körperzentrierte Transformation von innen heraus. Für mehr bewusstes Sein, hin zu mehr Sanftheit dir selbst gegenüber und in der liebevollen Annahme dessen, was ist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mein spirituelles Life Coaching Angebot an dich */}
      <section className="relative py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Mein spirituelles Life Coaching Angebot an dich
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Individuelle Begleitung für deine persönliche Transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-8 rounded-2xl border border-pink-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">1:1 Einzelcoaching</h3>
                <p className="text-gray-700 mb-6">
                  Im persönlichen Einzelcoaching begleite ich dich auf deinem individuellen Weg zu mehr Selbstbewusstsein, innerer Klarheit und emotionaler Freiheit.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Individuelle Terminvereinbarung</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Pakete: 4h, 8h oder 12h Coaching-Kontingent, flexibel einsetzbar oder Einzelstunden buchbar für dein Coaching@Home</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-pink-500 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Online und vor Ort möglich: Praxis, "Walk your Talk" in der Natur, bei dir Zuhause (Stadtgebiet München)</span>
                  </li>
                </ul>
                <Link 
                  href="/services/angebot" 
                  className="mt-4 inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-all duration-200 shadow-sm"
                >
                  Preispakete ansehen
                  <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              
              {/* Mood Online Image */}
              <div className="relative w-full h-[500px] overflow-hidden mt-4">
                <Image
                  src={moodOnlineImagePath}
                  alt="Spirituelles Coaching - Online verfügbar"
                  fill
                  className="object-cover rounded-2xl"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-purple-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Kostenloses Kennenlerngespräch</h3>
                <p className="text-gray-700">
                  Lerne mich und meine Arbeitsweise in einem unverbindlichen 30-minütigen Gespräch kennen. Wir besprechen deine aktuelle Situation, deine Ziele und wie ich dich unterstützen kann.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border-l-4 border-indigo-500">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Methoden und Schwerpunkte im Überblick</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Traumasensibles, spirituelles Coaching</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Systemisches Coaching (Aufstellungen)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Arbeit mit dem Inneren System (Antreiber, Perfektionist, Zweifler, etc.)</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Spirituelles Business Coaching</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Energiearbeit</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Rebalancing Körperarbeit und Massagen</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Beziehung authentisch leben</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Begleitung von Familienthemen und Konflikten</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Intuitionsentwicklung</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Klärung der Seelenaufgabe</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-indigo-500 mr-2 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">Unterstützung bei Trennungen</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-8 rounded-2xl text-center">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Dein Weg zu mehr Leichtigkeit</h3>
                <p className="text-pink-100 text-lg mb-6 max-w-2xl mx-auto">
                  Beginne noch heute deine Reise zu mehr Lebensfreude und innerer Freiheit.
                </p>
                <div className="flex justify-center">
                  <Link href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-pink-600 bg-white hover:bg-pink-50 transition-colors shadow-md hover:shadow-lg">
                    <span>Kostenloses Kennenlerngespräch vereinbaren</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
