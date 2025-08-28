import React from 'react';
import Link from 'next/link';

export default function Impressum() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-900 mb-4 font-playfair">Impressum</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10 border border-gray-100">
          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-800 mb-6 font-playfair">Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)</h2>
            
            <div className="space-y-6">
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Verantwortlich für den Inhalt:</h3>
                <div className="space-y-1 text-gray-700">
                  <p>Carina Göb</p>
                  <p>Carina Göb Coaching – Embodiment for Women</p>
                  <p>Jella-Lepman-Str. 17</p>
                  <p>81673 München</p>
                  <p>Deutschland</p>
                </div>
              </div>
              
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Praxisadresse (nur für persönliche Termine):</h3>
                <div className="space-y-1 text-gray-700">
                  <p>Rosenstraße 7 (am Marienplatz)</p>
                  <p>80331 München</p>
                </div>
              </div>
              
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Kontakt:</h3>
                <div className="space-y-1 text-gray-700">
                  <p>Mobil: +49 (0)157 58244237</p>
                  <p>E-Mail: <a href="mailto:connect@carina-coaching.com" className="text-pink-600 hover:underline transition-colors">connect@carina-coaching.com</a></p>
                </div>
              </div>
              
              <div className="border-b border-gray-100 pb-6">
                <p className="text-gray-700">Steuernummer: 147/143/71526</p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-800 mb-3">Kleinunternehmerregelung:</h3>
                <p className="text-gray-700">Gemäß § 19 UStG wird keine Umsatzsteuer erhoben und ausgewiesen.</p>
              </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-800 mb-6 font-playfair">Haftungsausschluss & rechtliche Hinweise</h2>
            <div className="space-y-4 text-gray-700">
              <p>Ich bin Recovery Coach für Essstörungen. Ich bin kein Arzt, keine medizinische Fachkraft, kein Psychologe, kein eingetragener Ernährungsberater, kein professioneller Ernährungsberater und auch kein ausgebildeter Kliniker jeglicher Art.</p>
              <p>Ich praktiziere keine Psychologie, gebe keine Ernährungsberatung, führe keine Ernährungsbewertungen durch und befasse mich nicht mit Diätetik oder Ernährungspraxis.</p>
              <p>Stattdessen biete ich ausschließlich bildungsorientierte Informationen zu Lebensmitteln und Lebensmittelgruppen an – zur Ergänzung einer bestehenden ambulanten Behandlung von Essstörungen.</p>
              <p>Die bereitgestellten Inhalte sind ausschließlich zu Informations- und Bildungszwecken bestimmt. Sie stellen keine medizinische oder therapeutische Beratung, Diagnose oder Behandlung dar.</p>
              <p>Wenn du gesundheitliche Bedenken oder Fragen hast, konsultiere bitte immer einen Arzt oder eine andere medizinische Fachkraft.</p>
              <p>Personen mit diagnostizierten Essstörungen sollten sich in ärztlicher oder therapeutischer Behandlung befinden.</p>
              <p>Menschen mit schweren gesundheitlichen Problemen wird geraten, zusätzlich externe medizinische oder psychologische Hilfe in Anspruch zu nehmen.</p>
              <p>Verlasse dich niemals ausschließlich auf die von mir bereitgestellten Informationen.</p>
            </div>
          </section>
          
          <section>
            <h3 className="text-lg font-medium text-gray-800 mb-3">Plattform der EU-Kommission zur Online-Streitbeilegung:</h3>
            <div className="space-y-2 text-gray-700">
              <a 
                href="https://ec.europa.eu/consumers/odr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-pink-600 hover:underline transition-colors inline-block"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              <p>Verbraucher haben die Möglichkeit, diese Plattform für die Beilegung ihrer Streitigkeiten zu nutzen.</p>
            </div>
          </section>
          
          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link 
              href="/" 
              className="inline-flex items-center text-pink-600 hover:text-pink-800 font-medium transition-colors"
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
