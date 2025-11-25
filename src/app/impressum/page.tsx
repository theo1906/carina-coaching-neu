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
                  <p>CARINA COACHING - embodiment for women</p>
                </div>
              </div>
              
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Praxisadresse:</h3>
                <div className="space-y-1 text-gray-700">
                  <p>Rosenstrasse 7</p>
                  <p>Marienplatz</p>
                  <p>80331 München</p>
                </div>
              </div>
              
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Kontakt:</h3>
                <div className="space-y-1 text-gray-700">
                  <p>Mobil: +49 (0)157 58244237</p>
                  <p>E-Mail: <a href="mailto:carina.goeb@googlemail.com" className="text-pink-600 hover:underline transition-colors">carina.goeb@googlemail.com</a></p>
                </div>
              </div>
              
              <div className="border-b border-gray-100 pb-6">
                <h3 className="text-lg font-medium text-gray-800 mb-3">Angaben zum Unternehmen</h3>
                <p className="text-gray-700">Umsatzsteuer-ID:</p>
                <p className="text-gray-700">Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:</p>
                <p className="text-gray-700 font-medium">DE 427546710</p>
              </div>
            </div>
          </section>
          
          <section className="mb-12">
            <h2 className="text-2xl font-medium text-gray-800 mb-6 font-playfair">Haftungsausschluss für therapeutische und medizinische Beratung und rechtliche Hinweise</h2>
            <h3 className="text-lg font-medium text-gray-700 mb-4">(Verantwortungsvoller Umgang mit dem Thema Coaching)</h3>
            
            <div className="space-y-4 text-gray-700">
              <p>Meine Inhalte (auf der Webseite, in meiner Begleitung, auf Social Media, innerhalb meiner Produkte und Kurse etc.) werden zu Informations- und Bildungszwecken zur Verfügung gestellt. Sie dienen deiner Inspiration und persönlichen Weiterentwicklung. Ich bin kein Arzt, kein medizinischer Anbieter, kein Anbieter von psychiatrischer Betreuung oder eine medizinische Fachkraft.</p>
              
              <p>Das, was ich teile, ist liebevoll begleitetes Mentoring und auf achtsame Weise unterstützend.
              Die Inhalte stellen keine professionelle medizinische Beratung, Diagnose, Therapie oder Behandlung dar. Sie sind nicht als Ersatz für professionelle Dienstleistungen durch dafür speziell ausgebildete Personen in diesen Bereichen gedacht.
              Coaching ist keine Psychotherapie und grenzt sich klar hiervon ab. Im Coaching werden keine Diagnosen gestellt.</p>
              
              <p>Wenn du an einer schwerwiegenden psychischen Erkrankung leidest oder dich auf Grund von massivem Untergewicht in einem lebensbedrohlichen Zustand befindest, oder wenn du keinem geregelten Alltag (Arbeit, Studium, Familie, Schule etc) mehr nachgehen kannst auf Grund der psychischen Überlastung und der belastenden Einschränkung, ist eine Teilnahme an meinen Angeboten untersagt. In solchen Fällen ist eine fachärztliche oder therapeutische Begleitung zwingend notwendig. Bitte suche dir in diesem Fall unbedingt professionelle Unterstützung.</p>
              
              <p>Falls du aktuell in therapeutischer oder medikamentöser Behandlung bist – oder früher einmal warst – sprich die Teilnahme an meinem Angebot bitte vorher mit deinem Arzt oder deiner Therapeutin ab. So stellst du sicher, dass meine Sessions, bestimmte Inhalte oder Übungen dich nicht überfordern oder in Konflikt mit deiner Behandlung oder den Medikamenten stehen.</p>
              
              <p>Ganz wichtig: Wenn du gesundheitliche Beschwerden oder schwerwiegende psychische Probleme hast die dich in deinem Alltag einschränken und hindern, dann wende dich bitte immer an eine medizinische oder therapeutisch ausgebildete Fachperson. Mein Angebot kann dich begleiten, aber es kann niemals eine medizinische Beratung oder therapeutische Hilfe ersetzen.</p>
              
              <p>Wenn du körperliche oder psychische Gewalt erlebt hast oder dich in einer akuten Notlage befindest, zögere bitte nicht, dich direkt an die Polizei oder eine spezialisierte Beratungsstelle zu wenden. Weiter unten habe ich dir die wichtigsten Nummern dazu gleich angefügt. Du bist nicht allein und es gibt immer die Unterstützung, die genau dafür da ist.</p>
              
              <h3 className="text-xl font-medium text-gray-800 mt-8 mb-4">Wichtige Hinweise</h3>
              
              <h4 className="font-medium text-gray-800 mt-6 mb-2">Kein Ersatz für Therapie</h4>
              <p>Meine Begleitung, die Community, meine Videos und alle weiteren Inhalte sind liebevolle Impulse zur Selbstbegegnung, Stärkung und Heilung auf deinem Weg. Sie ersetzen jedoch keine psychotherapeutische oder medizinische Behandlung.
              Wenn du an einer tiefgreifenden psychischen Erkrankung leidest oder deinen Alltag nicht mehr meistern kannst, keinem Beruf nachgehen oder sonst in deiner Handlungsfähigkeit eingeschränkt bist, empfehle ich dir ausdrücklich, dich an einen erfahrenen Therapeut*in oder eine ärztliche Fachperson zu wenden, die dich professionell unterstützt.</p>
              
              <h4 className="font-medium text-gray-800 mt-6 mb-2">Eigenverantwortung</h4>
              <p>Alle Übungen, Reflexionen, Aufgaben, Tools oder Prozesse, die ich dir anbiete Online oder vor Ort, geschehen in deinem eigenen Tempo und in deiner ganz persönlichen Verantwortung.
              Die Arbeit kann tief berühren – manchmal auch alte Wunden öffnen. Bitte achte gut auf dich, und nimm dir Zeit für deine Bedürfnisse. Ich begleite dich mit aller Achtsamkeit – die Entscheidung, was und wie du es für dich anwendest, liegt ganz bei dir. Meine Begleitung ersetzt jedoch keine psychotherapeutische oder medizinische Behandlung. Die Entscheidung für eine Begleitung bei mir liegt ganz bei dir und in vollem Umfang in deiner eigenen Verantwortung. Bei Jugendlichen unter 18 ist in jedem Fall das ausdrückliche Einverständnis der Eltern bzw Erziehungsberechtigten zur Teilnahme an einer Begleitung zwingend und deren Interesse und Mitarbeit erforderlich.</p>
              
              <h4 className="font-medium text-gray-800 mt-6 mb-2">Vertraulichkeit und achtsamer Raum</h4>
              <p>In der Community und in meinen Angeboten (Einzelsessions oder Gruppensessions) gestalte ich für alle Beteiligten einen geschützten Raum, in dem alles, was du teilst, vertraulich bleibt. Ich achte diesen Raum mit grösster Sorgfalt. Gleichzeitig bitte ich dich, auch deine eigene Privatsphäre zu schützen, so dass du keine Inhalte nach aussen weitergibst oder diese mit anderen teilst.</p>
              
              <h4 className="font-medium text-gray-800 mt-6 mb-2">In Krisen oder bei starker Überforderung</h4>
              <p>Wenn du während oder nach einer Session/ Übung starke emotionale Reaktionen erlebst oder dich überfordert fühlst, suche dir bitte sofort professionelle Hilfe. Es ist ein Zeichen von Stärke, dir Unterstützung zu holen – und du bist damit nicht allein. Meine Begleitung ersetzt keine medizinisch oder therapeutische Hilfe.</p>
              
              <h4 className="font-medium text-gray-800 mt-6 mb-2">Haftungsausschluss</h4>
              <p>Alle Inhalte, Übungen und Impulse, die ich mit dir teile, sind mit viel Erfahrung, Sorgfalt und Herz gestaltet. Dennoch können sie keine individuelle Therapie oder medizinische Behandlung ersetzen.
              Bitte beachte: Meine Begleitung ist nicht geeignet, wenn du aktuell an einer schweren psychischen Erkrankung leidest, die einer therapeutischen Behandlung bedarf. Ich übernehme keine Haftung für direkte oder indirekte Folgen, die durch die Anwendung meines Angebots und meiner Inhalte entstehen können. Verlasse dich niemals ausschließlich auf die von mir bereitgestellten Informationen.</p>
              
              <h3 className="text-xl font-medium text-gray-800 mt-10 mb-6">Anlaufstellen in Krisen & Notfällen:</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">TelefonSeelsorge®️</h4>
                  <p className="text-gray-600">DE: 0800 1110111</p>
                  <p className="text-gray-600">AT: 142</p>
                  <p className="text-gray-600">CH: 143</p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Hilfetelefone</h4>
                  <p className="text-gray-600">Gewalt gegen Frauen DE: 116 016</p>
                  <p className="text-gray-600">Gewalt an Männern DE: 0800 123 9900</p>
                  <p className="text-gray-600">Frauenhelpline AT: 0800 222 555</p>
                  <p className="text-gray-600">Männerinfo-Hotline AT: 0800 400 77</p>
                  <p className="text-gray-600">Opferhilfe Schweiz: <a href="https://www.opferhilfe-schweiz.ch" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">www.opferhilfe-schweiz.ch</a></p>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-800 mb-2">Polizei Notruf</h4>
                  <p className="text-gray-600">Deutschland: 110</p>
                  <p className="text-gray-600">Österreich: 133</p>
                  <p className="text-gray-600">Schweiz: 117</p>
                </div>
              </div>
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
