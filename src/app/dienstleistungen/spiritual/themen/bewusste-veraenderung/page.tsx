import Link from 'next/link';

export default function BewussteVeraenderungPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-purple-700 mb-4">Bewusst Veränderungen willkommen heißen</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto mb-8"></div>
      </div>
      
      <div className="prose prose-purple max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          Veränderung wird möglich, wenn du dich diesen Herausforderungen liebevoll stellst - mit Bewusstsein, Mitgefühl, Neugierde und einem offenen Herzen, anstatt sie weg haben zu wollen, zu ignorieren oder davor weg zu rennen.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Mein Coaching setzt genau hier an: über aktives Hinfühlen und bewusste Körperwahrnehmung tauchen wir tief ein in dein Herz und damit in deine innere Weisheit und helfen dir dadurch von innen heraus zu heilen und damit auch im Außen ein erfülltes, gesundes und glückliches Leben zu kreieren. In dem du präsent bist in deinem Körper, mit dir verbunden und bewusste, klare Entscheidungen triffst - im Einklang mit deiner eigenen Wahrheit und dem, was du wirklich willst.
        </p>
        <p className="text-lg text-gray-700">
          Auf dem Weg dahin lernst du praktische Tools, wie du dich selbst regulieren und dabei emotionale Resilienz aufbauen kannst. Ich begleite dich darin, ein stärkeres Selbstwertgefühl zu entwickeln, in dem du dich sicher und geborgen in deinem Körper fühlst und damit bist du auch gefestigter und gleichzeitig freier in deinem Leben.
        </p>
      </div>
      
      <div className="mt-12 text-center">
        <Link 
          href="/dienstleistungen/spiritual" 
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 transition-colors duration-200"
        >
          Zurück zur Übersicht
        </Link>
      </div>
    </div>
  );
}
