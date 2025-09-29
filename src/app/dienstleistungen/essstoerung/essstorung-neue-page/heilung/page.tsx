import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function HeilungPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Back Button */}
      <div className="container mx-auto px-4 py-8">
        <Link 
          href="/dienstleistungen/essstoerung" 
          className="inline-flex items-center text-pink-600 hover:text-pink-800 transition-colors mb-8"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Zurück zur Übersicht
        </Link>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-pink-50 to-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gradient from-pink-600 to-pink-600 bg-clip-text bg-gradient-to-r mb-6">
                Heilung von innen nach außen
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-6"></div>
              <p className="text-2xl text-pink-800/90 italic max-w-2xl mx-auto mb-8">
                "Ganzheitliche Heilung durch Körperwahrnehmung und Selbstliebe"
              </p>
            </div>
            
            <div className="prose prose-lg text-gray-700 space-y-6 text-center mx-auto">
              <p>
                Wir arbeiten gemeinsam von innen nach außen, indem wir allen Anteilen in dir Raum schenken und Würdigung in durch tools wie geführte Meditationen, die Kraft der Stille, der Aufstellung deines inneren Teams und das bewusste hinfühlen und verkörpern all deiner Gefühle, Gedanken und Überzeugungen. 
              </p>
              
              <p>
                Dein System hat dadurch die Möglichkeit, sich neu zu ordnen und mit der Zeit festigt sich dein Vertrauen in dich selbst. Ein neuer Bewusstseinszustand stellt sich ein und selbstzerstörerische Verhaltensweisen können transformiert werden. 
              </p>
              
              <p>
                Gemeinsam erforschen wir, wie es sich anfühlt, im eigenen Körper präsent zu sein und sich dabei sicher zu fühlen und gehalten. 
              </p>
              
              <p>
                Anstatt zu verschwinden, dich zu verstecken oder im anderen zu verlieren, lernst du gesunde Grenzen zu setzen, indem wir gemeinsam Situationen aus deinem Alltag aufgreifen, die dich herausfordern oder triggern und energetisch damit arbeiten.
              </p>
              
              <div className="border-l-4 border-pink-200 pl-6 py-2 my-8">
                <h2 className="text-2xl font-semibold text-pink-700 mb-4">
                  Mein holistischer Ansatz
                </h2>
                <p>
                  Mein holistischer, spiritueller und systemischer Ansatz erkennt an, dass eine Essstörung nicht die eine Ursache hat und individuell ist. 
                </p>
                <p className="mt-4">
                  Ich unterstütze dich daher dabei, alle Dimensionen deines Seins unvoreingenommen, mit Neugierde und Offenheit zu ergründen, damit Heilung von innen heraus stattfinden kann. 
                </p>
              </div>
              
              <div className="bg-pink-50 p-6 rounded-lg mt-12">
                <h3 className="text-2xl font-semibold text-pink-800 mb-4">Dein nächster Schritt</h3>
                <p className="mb-6">
                  Du entscheidest über dein Leben. Nimm die Entscheidung jetzt in deine Hand. 
                  <br /><br />
                  Und ja, es bedarf der Annahme dessen, was ist, einem 100%igen Commitment und einem klaren, überzeugten „Ja zu dir. Ja zum Leben. Ja zur Heilung. Und ein unanfechtbares Warum“. 
                  <br /><br />
                  Dabei möchte ich dich gerne begleiten.
                </p>
                <Link 
                  href="/contact" 
                  className="inline-flex items-center px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors no-underline"
                >
                  Kostenloses Erstgespräch vereinbaren
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
