import Link from 'next/link';

export default function PowerEmbodiedChangePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-indigo-700 mb-4">The Power of embodied Change</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 mx-auto mb-8"></div>
      </div>
      
      <div className="prose prose-indigo max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          Was ich aus meiner Heilungserfahrung gelernt habe: Veränderung passiert nicht nur im Kopf. Veränderung passiert vor allem im Körper. Im Herzen. Im Energiesystem. In der Stille.
        </p>
        <p className="text-lg text-gray-700">
          Durch unsere gemeinsame Arbeit entwickelst du eine tiefere Verbindung zu dir und zu deinen Gefühlen, indem wir deine Körperwahrnehmung trainieren und sensibilisieren und damit über deine Körperpräsenz den Zugang zu deiner Intuition stärken. Du kommst vom Denken ins Fühlen. Emotionale Blockaden werden zugänglich und intuitive Antworten werden aktiviert, wo der Verstand nicht mehr weiter weiss, um Veränderung nicht nur zu besprechen, sondern spürbar zu verankern.
        </p>
        <p className="text-lg text-gray-700 mt-6">
          Das ermöglicht dir zu heilen und abgespaltene Anteile zurück zu dir zu holen für mehr Präsenz und Empowerment in deinem Leben. Du bist selbstsicher und triffst Entscheidungen, die im Einklang mit deinem Herzen und deinen Wünschen stehen, für die du bisher aber vielleicht noch nicht den Mut hattest.
        </p>
      </div>
      
      <div className="mt-12 text-center">
        <Link 
          href="/dienstleistungen/spiritual" 
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-colors duration-200"
        >
          Zurück zur Übersicht
        </Link>
      </div>
    </div>
  );
}
