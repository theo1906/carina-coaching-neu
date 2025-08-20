import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const metadata = {
  title: 'Embodiment als Schlüssel auf deiner Heilungsreise | Carina Göb',
  description: 'Entdecke, wie du durch körperzentriertes Coaching wieder in Verbindung mit deinem Körper kommst und dein volles Potenzial entfaltest.',
};

export default function EmbodimentUndHeilungPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-white to-pink-50/30"></div>
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Embodiment als Schlüssel auf deiner Heilungsreise
            </h1>
            <div className="w-24 h-0.5 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto mb-6"></div>
            <p className="text-xl text-pink-800/90 italic">
              "OWN IT. FEEL IT. HEAL IT."
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg text-gray-700 max-w-none">
            <p className="text-2xl font-light text-gray-800 text-center mb-12">
              YOUR BODY IS YOUR BEST GUIDE AND A POWERFUL TEACHER.
              <br />
              <span className="text-pink-600">Vertraue der Weisheit deines Körpers.</span>
            </p>

            <p className="leading-relaxed">
              Embodiment ist für mich der Schlüssel für Heilung und Transformation, denn dein Körper speichert all deinen Schmerz und deine Verletzungen (auch die, die du nicht sehen kannst) und ist damit ein wertvoller Impulsgeber für die Anteile in dir, die noch heilen dürfen, um wieder in Verbindung mit dir selbst zu sein und im Vertrauen ins Leben.
            </p>

            <p className="leading-relaxed">
              Wenn eine Verletzung oder Wunde nicht geheilt ist, dann wird sie dir weiter weh tun und sich immer wieder bemerkbar machen - in den unterschiedlichsten Formen:
            </p>

            <ul className="space-y-3 pl-5 my-6">
              <li>Du lebst in Mustern, Überlebens- und Abwehrstrategien, im permanenten Kampf mit deinem Körper, in Unzufriedenheit, in Selbstsabotage-Mechanismen, hinter einer Maske.</li>
              <li>Du bist blockiert in deiner Freiheit, du selbst zu sein.</li>
            </ul>

            <p className="leading-relaxed">
              Oft läuft das unbewusst ab, es ist dein "Normal", aber ganz tief in dir spürst du doch irgendwie: du bist getrennt von dem, wonach du dich wirklich sehnst. Wonach wir Menschen uns alle sehnen - nach tiefer Verbindung. Und die beginnt immer bei dir selbst und in dir.
            </p>

            <div className="my-12 p-8 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl border-l-4 border-pink-400">
              <p className="text-gray-700 text-lg leading-relaxed">
                Der Fokus meiner Arbeit liegt daher auf dem Stärken deiner Körperwahrnehmung und dem aktiven Hinfühlen, um dadurch ein tieferes Verständnis für deine körperlichen und emotionalen Zustände zu entwickeln und dir so zu ermöglichen, bewusstere Entscheidungen für dich und dein Leben zu treffen.
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-center my-12">
              OWN IT. FEEL IT. HEAL IT.
            </h3>

            <p className="leading-relaxed">
              Es ist das mutige Zulassen und Spüren von allem, was ist, um das abzulegen, was du nicht bist und dorthin zurückzukehren, was du schon immer warst. In deine Vollständigkeit, in deine Essenz.
            </p>

            <ul className="space-y-4 pl-5 my-8">
              <li>• In dem du dir erlaubst, gesehen zu sein, wo du dich am liebsten verkriechen, abschotten und wegducken möchtest, weil du dich schämst oder dich schuldig fühlst.</li>
              <li>• In dem du dir erlaubst, deiner Unsicherheit, deiner Traurigkeit und deiner Angst nicht genug zu sein, mit offenem Herzen zu begegnen und liebevoll mitfühlend anstatt dich zu perfektionieren.</li>
              <li>• In dem du dir erlaubst, dich in deiner Verletzlichkeit zu zeigen, weich zu sein und offen zu bleiben, gerade dann, wenn es am schwierigsten ist, anstatt hart zu werden, distanziert oder kalt.</li>
            </ul>

            <p className="leading-relaxed font-medium text-gray-800">
              Überall dort ist eine tiefe Heilung möglich und ein nach Hause kommen zurück zu dir und in deine ganze Kraft.
            </p>

            <p className="leading-relaxed">
              Gemeinsam schaffen wir einen sicheren Raum, in dem du dich öffnen und zeigen kannst – ganz so, wie du bist. Ohne Maske, ohne Anpassung, ohne dich verstellen zu müssen.
            </p>

            <p className="leading-relaxed mt-8">
              <span className="font-semibold">Dein Körper ist dein Zuhause.</span> Wenn du dich darin nicht wohlfühlst, wirst du dich nirgendwo wirklich zu Hause fühlen. Deshalb lade ich dich ein, deinen Körper wieder als Verbündeten zu entdecken – als Ort der Weisheit, Kraft und Heilung.
            </p>

            <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-6">Dein Weg zur Ganzheit</h2>

            <p className="leading-relaxed">
              Ich helfe dir, deine Körperwahrnehmung zu stärken und ein tieferes Verständnis für deine körperlichen und emotionalen Zustände zu entwickeln.
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
                href="/dienstleistungen/spiritual#embodiment-und-heilung" 
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
