import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function MeinAnsatzPage() {
  return (
    <div className="bg-white pt-24">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <Link 
          href="/dienstleistungen/spiritual" 
          className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium mb-8 group"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Zurück zur Übersicht
        </Link>
      </div>
      
      {/* Main content */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pb-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-pink prose-lg max-w-none pt-8">
            <p className="text-gray-700 mb-6 text-lg">
              Mein ganzheitlicher Beratungsansatz verbindet die Tiefe meiner persönlichen Selbstheiler-Erfahrung mit fundierten Methoden aus dem professionellen Coaching und der transformativen Kraft spiritueller Weisheit. Diese einzigartige Kombination ermöglicht es uns, auf verschiedenen Ebenen zu arbeiten und nachhaltige Veränderungen zu bewirken. 
            </p>
            
            <blockquote className="border-l-4 border-pink-500 pl-4 italic text-gray-700 my-8">
              "Transform in who you truly are."
            </blockquote>
            
            <p className="text-gray-700 mb-6">
              Als spiritueller Life Coach begleite ich dich liebevoll auf deinem Weg zurück zu deiner ureigenen Ganzheit. Ich sehe dich in deiner ursprünglichen Essenz - so, wie du auf diese Welt gekommen bist: vollkommen authentisch, mit einem offenen und vertrauensvollen Herzen, in tiefer Verbindung mit deinem Körper, erfüllt von natürlicher Neugier und Lebensfreude. Gemeinsam arbeiten wir daran, diese ursprüngliche Ganzheit wiederzuentdecken und in deinem Alltag zu verankern, damit du ein Leben in Fülle, Freude und tiefer Erfüllung führen kannst. 
            </p>
            
            <p className="text-gray-700 mb-6">
              Durch Kindheitserfahrungen, gesellschaftliche Konditionierung und Traumata fragmentieren wir uns – wir trennen uns von wesentlichen Teilen unseres Selbst ab und damit auch von unserer Lebensenergie und unserer Essenz. 
            </p>
            
            <p className="text-gray-700 mb-6">
              Anders gesagt: Teile unseres Gehirns gehen OFFLINE. 
            </p>
            
            <p className="text-gray-700 mb-6">
              Indem wir uns von schmerzhaften Emotionen abschneiden, trennen wir uns ungewollt auch von unserer Kraft, unserer Freude und unserer Fähigkeit, präsent zu sein im eigenen Körper und damit in einem Zustand von Entspannung, Unbeschwertheit, Zuversicht, Urvertrauen in uns und in das Leben.
            </p>
            
            <p className="text-gray-700 mb-6">
              Durch meinen ganzheitlichen Ansatz von Holistic Counselling, der sowohl deine intuitive spirituelle Weisheit deiner Seele als auch deine menschlichen Erfahrungen mit einbezieht, arbeiten wir gemeinsam daran, dieses Gefühl von Sicherheit, Selbstvertrauen und Stabilität in dir von innen heraus mit Hilfe von Körperwahrnehmung und-präsenz wieder zu entdecken und in deinem Alltag zu verkörpern.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-12">
              <div className="group relative overflow-hidden bg-gradient-to-br from-pink-50 to-pink-100 p-6 rounded-xl border-l-4 border-pink-500 h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="absolute top-0 right-0 w-16 h-16 -mr-8 -mt-8 bg-pink-200 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-10 h-1 bg-gradient-to-r from-pink-500 to-pink-300 mb-4 rounded-full"></div>
                  <h3 className="font-bold text-xl text-pink-800 mb-3 font-serif">The theory of holes</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Dadurch entsteht in uns eine Leere, die wir durch Kompensationen im Außen versuchen zu füllen. Unser Hunger nach Liebe oder unserem Bedürfnis anderen, aber vor allem uns selbst, unseren Wert beweisen zu müssen, zeigt sich in unseren Persönlichkeitsstrukturen und Strategien. Oft sind wir uns dessen nicht bewusst.
                  </p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border-l-4 border-purple-500 h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="absolute top-0 right-0 w-16 h-16 -mr-8 -mt-8 bg-purple-200 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-10 h-1 bg-gradient-to-r from-purple-500 to-purple-300 mb-4 rounded-full"></div>
                  <h3 className="font-bold text-xl text-purple-800 mb-3 font-serif">Your journey of discovery</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ich begleite dich darin, die Leere zu fühlen, die du nicht fühlen willst. Gemeinsam erforschen wir durch <span className="font-semibold text-purple-700">liebevolle "inquiry"</span> die Gründe für diese Leere und nutzen sie dadurch wie eine Art Tür, die dich step by step zurück führt in deine <span className="font-semibold text-purple-700">Vollständigkeit, Präsenz</span> und damit in <span className="font-semibold text-purple-700">deine ganze Kraft</span>.
                  </p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-l-4 border-blue-500 h-full transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="absolute top-0 right-0 w-16 h-16 -mr-8 -mt-8 bg-blue-200 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-10 h-1 bg-gradient-to-r from-blue-500 to-blue-300 mb-4 rounded-full"></div>
                  <h3 className="font-bold text-xl text-blue-800 mb-3 font-serif">Integrierte Ganzheitlichkeit</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">
                    Heile deine Verletzungen und die von dir (unbewusst) getrennten Anteile, um zurückzukehren in deine Essenz und den Flow von:
                  </p>
                  <ul className="space-y-2.5">
                    <li className="flex items-start group-hover:translate-x-1 transition-transform duration-300">
                      <span className="inline-flex items-center justify-center w-5 h-5 mr-2 mt-0.5 bg-blue-100 text-blue-500 rounded-full flex-shrink-0">
                        <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Entspannte Zuversicht</span>
                    </li>
                    <li className="flex items-start group-hover:translate-x-1 transition-transform duration-300 delay-75">
                      <span className="inline-flex items-center justify-center w-5 h-5 mr-2 mt-0.5 bg-blue-100 text-blue-500 rounded-full flex-shrink-0">
                        <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Mut & Stärke</span>
                    </li>
                    <li className="flex items-start group-hover:translate-x-1 transition-transform duration-300 delay-100">
                      <span className="inline-flex items-center justify-center w-5 h-5 mr-2 mt-0.5 bg-blue-100 text-blue-500 rounded-full flex-shrink-0">
                        <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Liebevolle Güte</span>
                    </li>
                    <li className="flex items-start group-hover:translate-x-1 transition-transform duration-300 delay-150">
                      <span className="inline-flex items-center justify-center w-5 h-5 mr-2 mt-0.5 bg-blue-100 text-blue-500 rounded-full flex-shrink-0">
                        <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </span>
                      <span className="text-gray-700">Freude & Lebendigkeit</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <p className="text-gray-700 mb-6">
              <span className="font-semibold">Verkörperte Präsenz</span> zu entwickeln, ist deshalb so wertvoll, weil sie dir mehr und mehr die Freiheit schenkt, bewusst wählen zu können, wie du dich verhalten möchtest in einer Situation, die dich triggert. Anstatt auf Autopilot zu schalten und aus nicht verarbeiteten Verletzungen aus deiner Vergangenheit heraus zu reagieren oder dich wie gelähmt zu fühlen und damit handlungsunfähig und ausgeliefert.
            </p>
            
            <p className="text-gray-700 mb-6">
              In den Sessions mit mir zeige ich dir praktische Tools zur Selbstregulierung. Wir entwickeln Routinen, die dich stärken und kultivieren die Ressourcen von Geduld und Mitgefühl in dir für dich und deinen Prozess der Heilung. Wir üben mit körpereigenen Tools wie zum Beispiel deiner Atmung, bewusster Berührung und doppelter Wahrnehmung.
            </p>
            
            <p className="text-gray-700 mb-6">
              Auf dieser Entdeckungsreise zu dir selbst lernst du dich immer besser kennen. Das entspannt dich, dein Nervensystem und schenkt dir <span className="font-semibold">Frieden, Selbstsicherheit</span> und <span className="font-semibold">Stabilität</span> von innen heraus und mehr Freiheit für Kreation und Entfaltung im Außen.
            </p>
            
            <p className="text-gray-700 mb-6">
              Dein Energielevel und deine Schwingung steigt, weil du dich und dein System von Fremdenergien und Altlasten befreist, hin zu deiner ursprünglichen Energiesignatur - deinem höchsten Selbst, dein ursprüngliches und authentisches Ich, das frei ist von den Begrenzungen des Egos.
            </p>
            
            <p className="text-gray-700 mb-6">
              Beim spirituellen Coaching geht es nicht darum, dir bestimmte Überzeugungen oder Praktiken "aufzuzwingen". Sondern dich dabei zu unterstützen, dein authentisches Selbst zu entfalten und dabei die Beziehung zu dir selbst und deinem Körper zu stärken, um wieder mehr Leichtigkeit, Energie und Freude in deinem Alltag zu erleben und dich von Konditionierungen und "veralteten Schutzstrategien" zu befreien.
            </p>
            
            <p className="text-gray-700">
              Erfahre aktiv über angeleitete Meditationen diesen deinen ursprünglichen Zustand des <span className="font-semibold">"Gelöst-SEIN"</span>, sodass du bewusst spüren kannst, wie du in dir im Grunde genommen bist - in jedem Moment deines Seins. Ein Teil der Arbeit liegt darin, dass du diesen Zugang zu dieser Quelle in dir bewusst trainierst und damit befreiter, entschleunigter und entspannter durch dein Leben gehst.
            </p>

          </div>
          
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-pink-50 to-purple-50 py-16 mt-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Bereit für deine persönliche Reise?</h2>
              <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
                Lass uns gemeinsam deinen Weg zu mehr Selbstliebe, Klarheit und innerem Frieden gestalten.
              </p>
              <Link 
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Jetzt kostenloses Erstgespräch vereinbaren
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
