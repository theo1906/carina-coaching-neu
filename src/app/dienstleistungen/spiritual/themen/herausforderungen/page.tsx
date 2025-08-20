import Link from 'next/link';

export default function HerausforderungenPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-pink-700 mb-4">Wie Herausforderungen uns wachsen lassen</h1>
        <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-8"></div>
      </div>
      
      <div className="prose prose-pink max-w-none">
        <p className="text-lg text-gray-700 mb-6">
          Herausforderungen – die sich als Schmerz, Leid oder immer wiederkehrende Muster in unserem Leben manifestieren, in denen sich nichts zu verändern scheint – können uns als kraftvolle Katalysatoren für tiefgreifendes Wachstum und Transformation dienen.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          In schwierigen Zeiten, wenn uns alles zu viel wird, wir uns verloren fühlen, überfordert vom eigenen Leben und mit den eigenen Gefühlen, sind wir gezwungen, unsere Überzeugungen in Frage zu stellen, neue Möglichkeiten zu erkunden und uns auf eine Reise zurück zu uns selbst zu begeben.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          Aus eigener Erfahrung weiß ich, dass dieser Weg nicht einfach ist, wenn du dich mitten in einer Krise befindest und jede Menge Mut bedarf. Ich habe jedoch selbst erlebt, als ich komplett am Ende war und nicht mehr weiterleben wollte, dass unsere emotionalen und physischen Verletzungen als auch unsere größten Ängste, Türen sind, hinter denen unser größtes Potenzial schlummert, zu heilen und uns für unsere eigene Wahrhaftigkeit zu öffnen.
        </p>
        <p className="text-lg text-gray-700">
          Vielleicht bist du aktuell in einer ähnlichen Situation oder du fühlst dich wie festgefahren in deinen Beziehungen, in deiner Arbeit oder mit dir selbst.
        </p>
      </div>
      
      <div className="mt-12 text-center">
        <Link 
          href="/dienstleistungen/spiritual" 
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 transition-colors duration-200"
        >
          Zurück zur Übersicht
        </Link>
      </div>
    </div>
  );
}
