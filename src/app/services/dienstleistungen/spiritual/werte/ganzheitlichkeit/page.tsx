import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ganzheitlichkeit - Meine Werte & Prinzipien',
  description: 'Erfahren Sie mehr über meinen ganzheitlichen Ansatz im spirituellen Coaching',
};

export default function GanzheitlichkeitPage() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ganzheitlichkeit</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-6"></div>
        </div>
        
        <div className="prose prose-lg text-gray-700 max-w-3xl mx-auto">
          <p className="text-xl text-gray-800 mb-6">
            In meiner Arbeit betrachte ich den Menschen als eine untrennbare Einheit von Körper, Geist und Seele. 
            Jeder Aspekt Ihres Seins ist wertvoll und trägt zu Ihrer ganzheitlichen Gesundheit und Zufriedenheit bei.
          </p>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-10 mb-4">Mein Ansatz der Ganzheitlichkeit</h2>
          <p>
            In unserer schnelllebigen Welt neigen wir oft dazu, uns auf einzelne Aspekte unseres Lebens zu konzentrieren 
            und andere zu vernachlässigen. Mein ganzheitlicher Ansatz hilft Ihnen, wieder in Balance zu kommen und alle 
            Bereiche Ihres Lebens in Einklang zu bringen.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Körperliche Ebene</h3>
          <p>
            Unser Körper ist das Gefäß, das uns durchs Leben trägt. Durch achtsame Körperarbeit und bewusste Bewegung 
            lernen Sie, wieder in Kontakt mit Ihrem Körper zu kommen und seine Weisheit zu verstehen.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Geistige Ebene</h3>
          <p>
            Unsere Gedanken und Überzeugungen prägen unsere Realität. Gemeinsam erkunden wir einschränkende Glaubenssätze 
            und entwickeln neue, stärkende Perspektiven.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-3">Seelische Ebene</h3>
          <p>
            Die Verbindung zu Ihrer inneren Weisheit und Ihrem wahren Selbst ist der Schlüssel zu dauerhafter Zufriedenheit. 
            Durch verschiedene Methoden helfe ich Ihnen, diese Verbindung zu stärken.
          </p>
          
          <div className="bg-pink-50 p-6 rounded-xl my-10 border-l-4 border-pink-400">
            <p className="text-pink-800 italic font-medium">
              "Wahre Heilung geschieht, wenn wir uns selbst in unserer Ganzheit annehmen und lieben lernen - mit all unseren Stärken und Schwächen, mit unserer Vergangenheit und unserer Gegenwart."
            </p>
          </div>
          
          <h2 className="text-2xl font-semibold text-gray-900 mt-12 mb-4">Wie wir zusammenarbeiten</h2>
          <p>
            In unseren gemeinsamen Sitzungen schaffen wir einen sicheren Raum, in dem Sie sich öffnen und ganz Sie selbst 
            sein können. Mit verschiedenen Methoden und Techniken unterstütze ich Sie dabei, Ihre persönlichen Ziele zu 
            erreichen und Ihr volles Potenzial zu entfalten.
          </p>
          
          <div className="mt-10 pt-6 border-t border-gray-200">
            <a 
              href="/kontakt" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Kostenloses Erstgespräch vereinbaren
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
