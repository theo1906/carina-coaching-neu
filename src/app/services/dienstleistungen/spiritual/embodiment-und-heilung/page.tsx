import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const metadata = {
  title: 'YOUR BODY IS YOUR BEST GUIDE AND A POWERFUL TEACHER | Carina Göb',
  description: 'Entdecke, wie du durch körperzentriertes Coaching wieder in Verbindung mit deinem Körper kommst und dein volles Potenzial entfaltest.',
};

export default function EmbodimentUndHeilungPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-32 md:pt-16">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-pink-50/30"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
              YOUR BODY IS YOUR BEST GUIDE AND A POWERFUL TEACHER
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto mb-6"></div>
            <p className="text-2xl text-pink-800/90 italic">
              "Vertraue der Weisheit deines Körpers"
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg text-gray-700 max-w-none">
            <div className="my-12 p-8 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl border-l-4 border-pink-400">
              <p className="text-gray-700 text-lg leading-relaxed">
                Embodiment ist für mich der Schlüssel für Heilung und Transformation. Der Fokus meiner Arbeit liegt daher auf dem Stärken deiner Körperwahrnehmung und dem aktiven Hinfühlen, um dadurch ein tieferes Verständnis für deine körperlichen und emotionalen Zustände zu entwickeln und dir so zu ermöglichen, bewusstere Entscheidungen für dich und dein Leben zu treffen.
              </p>
            </div>

            <div className="mt-12 mb-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                OWN IT. FEEL IT. HEAL IT.
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto mb-6"></div>
            </div>
            <p className="leading-relaxed">
              Heilung beginnt dort, wo wir uns erlauben, uns selbst in unserer ganzen Tiefe zu
              begegnen – mit all unseren Verletzungen, Ängsten und Sehnsüchten. Es ist ein Akt
              des Mutes, sich dem zu stellen, was ist, um zu dem zurückzukehren, was wir
              wahrhaftig sind.
            </p>

            <div className="my-8 space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center mr-4">
                  <span className="text-pink-600 text-sm">1</span>
                </div>
                <div>
                  <h3 className="text-base font-normal text-gray-900 mb-1">OWN IT.</h3>
                  <p className="text-gray-700">Nimm ehrlich an, was ist – deine Erfahrungen, dein Jetzt, deine Gefühle, deinen Körper.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center mr-4">
                  <span className="text-pink-600 text-sm">2</span>
                </div>
                <div>
                  <h3 className="text-base font-normal text-gray-900 mb-1">FEEL IT.</h3>
                  <p className="text-gray-700">Spüre in deinen Körper hinein, lass die Gefühle zu, ohne sie zu bewerten.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center mr-4">
                  <span className="text-pink-600 text-sm">3</span>
                </div>
                <div>
                  <h3 className="text-base font-normal text-gray-900 mb-1">HEAL IT.</h3>
                  <p className="text-gray-700">Erlaube dir, alte Muster loszulassen und neue, heilsame Wege zu gehen.</p>
                </div>
              </div>
            </div>

            <p className="leading-relaxed">
              In meiner Arbeit verbinden wir körperliche Wahrnehmungsübungen mit Ansätzen aus dem spirituellen System-Coaching, um die Wurzeln deiner Muster zu verstehen und aufzulösen. Du lernst, deinen Körper als Kompass zu nutzen und deine Bedürfnisse klarer zu erkennen.
            </p>

            <p className="leading-relaxed">
              Gemeinsam schaffen wir einen sicheren Raum, in dem du dich öffnen und zeigen kannst – ganz so, wie du bist. Ohne Maske, ohne Anpassung, ohne dich verstellen zu müssen.
            </p>

            <p className="leading-relaxed mt-8">
              <span className="font-semibold">Dein Körper ist dein Zuhause.</span> Wenn du dich darin nicht wohlfühlst, wirst du dich nirgendwo wirklich zu Hause fühlen. Deshalb lade ich dich ein, deinen Körper wieder als Verbündeten zu entdecken – als Ort der Weisheit, Kraft und Heilung.
            </p>

            {/* Back Button */}
            <div className="mt-16 text-center">
              <Link 
                href="/Services/spiritual#embodiment-und-heilung" 
                className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-full transition-all duration-300 hover:shadow-lg no-underline"
              >
                zurück
                <ArrowRightIcon className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
