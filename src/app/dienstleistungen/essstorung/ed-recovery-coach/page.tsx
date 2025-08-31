'use client';

import Link from 'next/link';
import { ArrowLeftIcon, UserIcon, HeartIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function EDRecoveryCoachPage() {
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
              Systemisches Coaching für Essstörungen & ED Recovery
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-6"></div>
            <p className="text-2xl text-pink-800/90 italic max-w-2xl mx-auto mb-8">
              „Finde zurück zu dir, zu einem gesunden Verhältnis zu deinem Körper und zu deinen Emotionen.“
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Content */}
        <div className="mt-16 max-w-3xl mx-auto prose prose-pink prose-lg">
          <p className="text-gray-700 mb-6">
            Ich arbeite holistisch, systemisch und spirituell, das bedeutet, wir schauen uns dein Leben bis heute in einer Art Zeitreise gemeinsam an und die Schlüsselerlebnisse darin und bringen sie in den Kontext mit den Menschen, die an deiner Seite waren bzw. sind und mit deinen Gefühlen.
          </p>
          <p className="text-gray-700 mb-6">
            Dabei entladen wir mögliche Fremdenergien aus deinem System, schaffen Raum und kreieren eine Zukunft, die selbstbestimmt und frei ist von der Essstörung.
          </p>
          <p className="text-gray-700 mb-6">
            Ich unterstütze dich in diesem Prozess mit der "Inquiry"-Methode, das sind gezielte Fragen, die dich sanft tiefer und tiefer in dich hinein geleiten und auf einzigartige, erhellende Erkenntnisse führen aus deiner eigenen, in dir liegenden Weisheit.
          </p>
          <p className="text-gray-700 mb-6">
            In dem du die Verbindung zu dir wiederentdeckt findest du Zugang zur universellen Kraft.
          </p>
          <p className="text-gray-700 mb-6">
            Diese Verbindung hat mein ganzes Leben nachhaltig zum Positiven verändert und mich in die Heilung geführt und auch in meine Berufung.
          </p>
          <p className="text-gray-700 mb-6">
            Osho, Eckhart Tolle oder andere spirituelle Lehrer sprechen in diesem Zusammenhang auch von Erwachen, das heisst wir finden wieder Zugang zu unserem inneren Wesen und damit zu unserer tiefsten Weisheit, die Selbsterkenntnis, Transformation und Selbstverwirklichung ermöglicht.
          </p>
          <p className="text-gray-700 mb-6">
            Dein eigenes spirituelles Erwachen und Sein ist HIER und JETZT, in jedem Moment, und eine Ressource, die wir alle in uns tragen. Diese wesentliche Seite unseres Selbst wird in den klassischen therapeutischen Ansätzen ausgeschlossen.
          </p>
          <p className="text-gray-700">
            In meiner Arbeit liegt genau hier der Fokus und ich nutze unterstützende Methoden aus dem System-Coaching, damit du dich auf deine innere Reise begeben kannst. Wir holen deinen Verstand dort ab, wo er gerade steht und was er greifen kann, um sich für eine neue Realität zu öffnen.
          </p>
        </div>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link 
            href="/dienstleistungen/essstorung#auf-der-suche-nach-identitaet" 
            className="inline-flex items-center text-pink-600 hover:text-pink-800 transition-colors duration-300 group text-lg no-underline"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Zurück zur Übersicht
          </Link>
        </div>
      </div>
    </div>
  );
}
