import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Achtsamkeit - Meine Werte & Prinzipien',
  description: 'Entdecken Sie die transformative Kraft der Achtsamkeit in meinem spirituellen Coaching',
};

export default function AchtsamkeitPage() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Achtsamkeit</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-500 mx-auto mb-6"></div>
        </div>
        
        <div className="prose prose-lg text-gray-700 max-w-3xl mx-auto">
          <p className="text-xl text-gray-800 mb-6">
            Bewusstes Wahrnehmen des gegenwärtigen Augenblicks ist der Schlüssel zu tiefer Transformation. 
            Ich unterstütze Sie dabei, präsenter zu werden und Ihre innere Stimme klarer zu hören.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Die Kraft der Gegenwart</h2>
          <p>
            In unserer hektischen Welt verlieren wir uns oft in Gedanken an die Vergangenheit oder Sorgen um die Zukunft. 
            Achtsamkeit hilft uns, im Hier und Jetzt anzukommen und das Leben in seiner ganzen Fülle zu erleben.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Achtsamkeit im Alltag</h3>
          <p>
            Achtsamkeit ist keine Technik, die man nur auf dem Meditationskissen praktiziert. Ich zeige Ihnen, wie Sie 
            Achtsamkeit in Ihren Alltag integrieren können - bei der Arbeit, in Beziehungen und in schwierigen Momenten.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Körperwahrnehmung</h3>
          <p>
            Unser Körper ist unser wichtigster Verbündeter auf dem Weg zu mehr Achtsamkeit. Durch gezielte Übungen 
            lernen Sie, die Signale Ihres Körpers besser zu verstehen und darauf zu hören.
          </p>
          
          <div className="bg-purple-50 p-6 rounded-xl my-10 border-l-4 border-purple-400">
            <p className="text-purple-800 italic font-medium">
              "Im gegenwärtigen Augenblick liegt die Kraft, das Leben bewusst zu gestalten. Achtsamkeit ist der Schlüssel zu dieser Kraft."
            </p>
          </div>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Mein Ansatz der Achtsamkeit</h2>
          <p>
            In meiner Arbeit verbinde ich traditionelle Achtsamkeitspraktiken mit modernen psychologischen Erkenntnissen. 
            Gemeinsam entwickeln wir individuelle Übungen, die genau zu Ihrem Leben und Ihren Bedürfnissen passen.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Praktische Übungen</h3>
          <p>
            Sie erhalten konkrete, alltagstaugliche Übungen, die Ihnen helfen, auch in stressigen Zeiten bei sich zu bleiben 
            und Klarheit zu bewahren.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Individuelle Begleitung</h3>
          <p>
            Jeder Mensch ist einzigartig. Deshalb passe ich meine Methoden individuell an Sie und Ihre Lebenssituation an.
          </p>
          
          <div className="mt-10 pt-6 border-t border-gray-200">
            <a 
              href="/kontakt" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
            >
              Kostenloses Erstgespräch vereinbaren
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
