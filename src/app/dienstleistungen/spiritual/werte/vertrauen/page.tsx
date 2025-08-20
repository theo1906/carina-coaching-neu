import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vertrauen - Meine Werte & Prinzipien',
  description: 'Erfahren Sie, warum Vertrauen die Grundlage meiner Arbeit als spirituelle Coachin ist',
};

export default function VertrauenPage() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Vertrauen</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-amber-500 mx-auto mb-6"></div>
        </div>
        
        <div className="prose prose-lg text-gray-700 max-w-3xl mx-auto">
          <p className="text-xl text-gray-800 mb-6">
            Vertrauen ist die Grundlage jeder wertvollen Beziehung - auch der zwischen Coach und Klient. 
            In meiner Praxis schaffe ich einen sicheren Raum, in dem Sie sich öffnen und ganz Sie selbst sein können.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Mein Verständnis von Vertrauen</h2>
          <p>
            Vertrauen entsteht nicht einfach so - es wird aufgebaut. In meiner Arbeit lege ich größten Wert darauf, 
            eine Atmosphäre zu schaffen, in der Sie sich sicher und angenommen fühlen.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Absolute Vertraulichkeit</h3>
          <p>
            Alles, was Sie mir anvertrauen, bleibt absolut vertraulich. Ich unterliege der Schweigepflicht und 
            behandle Ihre persönlichen Informationen mit größter Diskretion.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Wertschätzende Haltung</h3>
          <p>
            Ich begegne Ihnen mit einer wertschätzenden und nicht-wertenden Haltung. 
            Jede Erfahrung, jedes Gefühl und jede Perspektive hat ihren Platz in unserem gemeinsamen Prozess.
          </p>
          
          <div className="bg-amber-50 p-6 rounded-xl my-10 border-l-4 border-amber-400">
            <p className="text-amber-800 italic font-medium">
              "Vertrauen ist die Grundlage, auf der wahre Veränderung geschehen kann. In einem geschützten Rahmen können wir uns öffnen und wachsen."
            </p>
          </div>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Wie ich Vertrauen in der Praxis lebe</h2>
          <p>
            Mein Ansatz basiert auf Respekt, Einfühlungsvermögen und absoluter Diskretion. 
            Ich begleite Sie auf Ihrem individuellen Weg, ohne zu bewerten oder zu urteilen.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Ihr Tempo, Ihr Weg</h3>
          <p>
            Sie bestimmen das Tempo unseres gemeinsamen Prozesses. Ich dränge Sie zu nichts, sondern unterstütze Sie 
            dabei, Ihren eigenen Weg zu finden und zu gehen.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Transparente Kommunikation</h3>
          <p>
            Offene und ehrliche Kommunikation ist mir wichtig. Ich stehe Ihnen mit meiner ganzen Erfahrung zur Seite, 
            während Sie Ihre eigenen Antworten und Lösungen finden.
          </p>
          
          <div className="mt-10 pt-6 border-t border-gray-200">
            <a 
              href="/kontakt" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            >
              Kostenloses Erstgespräch vereinbaren
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
