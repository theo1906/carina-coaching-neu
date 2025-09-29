'use client';

import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function HeilungVonInnenNachAussenPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50 pt-48 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Heilung von innen nach außen
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto mb-8"></div>
            <p className="text-2xl text-pink-800/90 italic max-w-2xl mx-auto mb-8">
              "Dein Weg zu ganzheitlicher Heilung und Selbstannahme"
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="prose prose-pink prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            Wir arbeiten gemeinsam von innen nach außen, indem wir allen Anteilen in dir Raum schenken und Würdigung durch Tools wie geführte Meditationen, die Kraft der Stille, der Aufstellung deines inneren Teams und das bewusste Hinfühlen und Verkörpern all deiner Gefühle, Gedanken und Überzeugungen ermöglichen.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Dein System hat dadurch die Möglichkeit, sich neu zu ordnen und mit der Zeit festigt sich dein Vertrauen in dich selbst. Ein neuer Bewusstseinszustand stellt sich ein und selbstzerstörerische Verhaltensweisen können transformiert werden.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Gemeinsam erforschen wir, wie es sich anfühlt, im eigenen Körper präsent zu sein und sich dabei sicher zu fühlen und gehalten. Anstatt zu verschwinden, dich zu verstecken oder im anderen zu verlieren, lernst du gesunde Grenzen zu setzen, indem wir gemeinsam Situationen aus deinem Alltag aufgreifen, die dich herausfordern oder triggern und energetisch damit arbeiten.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Mein holistischer, spiritueller und systemischer Ansatz erkennt an, dass eine Essstörung nicht die eine Ursache hat und individuell ist. Ich unterstütze dich daher dabei, alle Dimensionen deines Seins unvoreingenommen, mit Neugierde und Offenheit zu ergründen, damit Heilung von innen heraus stattfinden kann.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Du entscheidest über dein Leben. Nimm die Entscheidung jetzt in deine Hand. Und ja, es bedarf der Annahme dessen, was ist, einem 100%igen Commitment und einem klaren, überzeugten "Ja zu dir. Ja zum Leben. Ja zur Heilung." Und ein unanfechtbares Warum. Dabei möchte ich dich gerne begleiten.
          </p>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-colors shadow-md hover:shadow-lg no-underline"
            >
              Jetzt Erstgespräch vereinbaren
            </Link>
          </div>

          {/* Back Button */}
          <div className="mt-12 text-center">
            <Link 
              href="/dienstleistungen/essstorung#heilung-von-innen-nach-aussen" 
              className="inline-flex items-center text-pink-600 hover:text-pink-800 transition-colors duration-300 group text-lg no-underline"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Zurück zur Übersicht
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
