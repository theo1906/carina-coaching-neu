import Link from 'next/link';

export default function InnereWeisheitPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-black mb-4">Verbinde dich mit deiner inneren Weisheit</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-8"></div>
      </div>
      
      <div className="prose prose-pink max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          Als spiritueller Coach halte ich einen sicheren, wertfreien Raum für dich. Ich helfe dir dich über die Kraft und die Energie von verkörperter Präsenz mit deiner inneren Weisheit zu verbinden, die dir die Antworten schenkt auf wichtige Fragen in deinem Leben:
        </p>
        <ul className="list-disc pl-6 mb-6 space-y-4 text-lg text-gray-700">
          <li>Warum bin ich hier? Wie lebe ich ein erfülltes Leben?</li>
          <li>Was ist meine Wahrheit? Und wie kann ich diese Wahrheit in meinen Beziehungen authentisch leben ohne Angst vor Zurückweisung oder Ausgrenzung?</li>
          <li>Wie kann ich meine Spiritualität im Alltag leben und wie kann ich mit dieser Quelle in Verbindung sein, um mein ganzes Potenzial zu entfalten?</li>
          <li>Wer bin ich jenseits meiner Rollen und Verantwortlichkeiten? Jenseits meiner Ängste, meiner Verletzungen, meiner Krankheiten, meiner Schwächen, meiner Stärken?</li>
          <li>Wie kann ich mehr im Einklang mit meinen eigenen Werten und wahren Wünschen leben?</li>
        </ul>
      </div>
      
      <div className="mt-12 text-center">
        <Link 
          href="/Services/spiritual#was-ist-spiritual-life-coaching" 
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 transition-colors duration-200"
        >
          Zurück zur Übersicht
        </Link>
      </div>
    </div>
  );
}
