import React from 'react';
import Link from 'next/link';

export default function Impressum() {
  return (
    <main className="min-h-screen bg-white pt-32 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-900 mb-4">Impressum</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto"></div>
        </div>
        
        <div className="prose prose-lg max-w-none prose-p:normal-case">
          <h2 className="text-2xl font-medium text-gray-800 mb-6">Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)</h2>
          
          <h3 className="text-xl font-medium text-gray-800 mt-8 mb-2">Verantwortlich für den Inhalt:</h3>
          <p className="mb-4 text-lg text-gray-800">Carina Göb</p>
          <p className="mb-2">Carina Göb Coaching – Embodiment for Women</p>
          <p className="mb-2">Jella-Lepman-Str. 17</p>
          <p className="mb-2">81673 München</p>
          <p className="mb-6">Deutschland</p>
          
          <h3 className="text-xl font-medium text-gray-800 mt-8 mb-4">Praxisadresse (nur für persönliche Termine):</h3>
          <p className="mb-2">Rosenstraße 7</p>
          <p className="mb-6">(am Marienplatz)<br />80331 München</p>
          
          <h3 className="text-xl font-medium text-gray-800 mt-8 mb-4">Kontakt:</h3>
          <p className="mb-2">Mobil: +49 (0)157 58244237</p>
          <p className="mb-6">E-Mail: <a href="mailto:connect@carina-coaching.de" className="text-pink-600 hover:underline">connect@carina-coaching.de</a></p>
          
          <p className="mb-6">Steuernummer: 147/143/71526</p>
          
          <h3 className="text-xl font-medium text-gray-800 mt-8 mb-4">Kleinunternehmerregelung:</h3>
          <p className="mb-12">Gemäß § 19 UStG wird keine Umsatzsteuer erhoben und ausgewiesen.</p>
          
          <h2 className="text-2xl font-medium text-gray-800 mt-12 mb-6">Haftungsausschluss & rechtliche Hinweise</h2>
          <p className="mb-4">
            Ich bin Recovery Coach für Essstörungen. Ich bin kein Arzt, keine medizinische Fachkraft, kein Psychologe, 
            kein eingetragener Ernährungsberater, kein professioneller Ernährungsberater und auch kein ausgebildeter Kliniker jeglicher Art.
          </p>
          <p className="mb-4">
            Ich praktiziere keine Psychologie, gebe keine Ernährungsberatung, führe keine Ernährungsbewertungen durch und 
            befasse mich nicht mit Diätetik oder Ernährungspraxis.
          </p>
          <p className="mb-4">
            Stattdessen biete ich ausschließlich bildungsorientierte Informationen zu Lebensmitteln und Lebensmittelgruppen an – 
            zur Ergänzung einer bestehenden ambulanten Behandlung von Essstörungen.
          </p>
          <p className="mb-4">
            Die bereitgestellten Inhalte sind ausschließlich zu Informations- und Bildungszwecken bestimmt. 
            Sie stellen keine medizinische oder therapeutische Beratung, Diagnose oder Behandlung dar.
          </p>
          <p className="mb-4">
            Wenn du gesundheitliche Bedenken oder Fragen hast, konsultiere bitte immer einen Arzt oder eine andere medizinische Fachkraft.
          </p>
          <p className="mb-4">
            Personen mit diagnostizierten Essstörungen sollten sich in ärztlicher oder therapeutischer Behandlung befinden.
          </p>
          <p className="mb-4">
            Menschen mit schweren gesundheitlichen Problemen wird geraten, zusätzlich externe medizinische oder psychologische Hilfe in Anspruch zu nehmen.
          </p>
          <p className="mb-12">
            Verlasse dich niemals ausschließlich auf die von mir bereitgestellten Informationen.
          </p>
          
          <h3 className="text-xl font-medium text-gray-800 mt-8 mb-4">Plattform der EU-Kommission zur Online-Streitbeilegung:</h3>
          <p className="mb-12">
            <a 
              href="https://ec.europa.eu/consumers/odr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-pink-600 hover:underline"
            >
              https://ec.europa.eu/consumers/odr
            </a>
            <br />
            Verbraucher haben die Möglichkeit, diese Plattform für die Beilegung ihrer Streitigkeiten zu nutzen.
          </p>
          
          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link 
              href="/" 
              className="inline-flex items-center text-pink-600 hover:text-pink-800 font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
