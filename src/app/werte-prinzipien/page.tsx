import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Werte & Prinzipien | Carina - Spiritual Life Coach',
  description: 'Die Grundwerte und Prinzipien, die meinen Coaching-Ansatz leiten und dir helfen, dein volles Potenzial zu entfalten.',
};

export default function WertePrinzipien() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Werte & Prinzipien</span>
              <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Mein Kompass im Coaching
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Die Grundüberzeugungen, die meine Arbeit mit dir leiten
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Einleitung */}
          <div className="mb-16 text-center">
            <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100"></div>
              <div className="relative h-full flex items-center justify-center p-8">
                <p className="text-xl italic text-gray-700">
                  "Das Geheimnis der Veränderung besteht darin, die ganze Energie darauf zu konzentrieren, 
                  das Alte zu bekämpfen, sondern darauf, das Neue aufzubauen."
                  <span className="block mt-2 text-gray-600">- Sokrates</span>
                </p>
              </div>
            </div>
          </div>

          {/* Kernwerte */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meine Kernwerte</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Wert 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-pink-700 mb-4">Ganzheitlichkeit</h3>
                <p className="text-gray-600 mb-4">
                  Ich betrachte den Menschen in seiner Gesamtheit – Körper, Geist und Seele. 
                  Nur wenn alle Ebenen im Einklang sind, kann wahre Heilung und Transformation geschehen.
                </p>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <p className="text-sm text-pink-700 italic">
                    "Der Körper erreicht, was der Geist glaubt."
                    <span className="block mt-1 text-pink-600">- Unbekannt</span>
                  </p>
                </div>
              </div>

              {/* Wert 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-pink-700 mb-4">Authentizität</h3>
                <p className="text-gray-600 mb-4">
                  Echtheit und Transparenz bilden die Basis jeder wertvollen Begegnung. 
                  Ich begegne dir als Mensch – mit meiner ganzen Erfahrung und meinem vollen Herzen.
                </p>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <p className="text-sm text-pink-700 italic">
                    "Sei du selbst, alle anderen gibt es schon."
                    <span className="block mt-1 text-pink-600">- Oscar Wilde</span>
                  </p>
                </div>
              </div>

              {/* Wert 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-pink-700 mb-4">Wachstum</h3>
                <p className="text-gray-600 mb-4">
                  Jede Herausforderung ist eine Einladung zum Wachsen. 
                  Ich unterstütze dich darin, über dich hinauszuwachsen und dein volles Potenzial zu entfalten.
                </p>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <p className="text-sm text-pink-700 italic">
                    "Das größte Abenteuer ist die Reise zu sich selbst."
                    <span className="block mt-1 text-pink-600">- Hermann Hesse</span>
                  </p>
                </div>
              </div>

              {/* Wert 4 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-pink-700 mb-4">Mitgefühl</h3>
                <p className="text-gray-600 mb-4">
                  Ich begegne dir mit bedingungsloser Wertschätzung und tiefem Verständnis. 
                  In meinem Raum darfst du ganz du selbst sein – mit allem, was dazugehört.
                </p>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <p className="text-sm text-pink-700 italic">
                    "Mitgefühl bedeutet, den Schmerz des anderen zu spüren und ihn zu deinem eigenen zu machen."
                    <span className="block mt-1 text-pink-600">- Dalai Lama</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Prinzipien */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meine Prinzipien</h2>
            
            <div className="space-y-8">
              {/* Prinzip 1 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-pink-700 mb-4">1. Du bist die Expertin deines Lebens</h3>
                <p className="text-gray-600">
                  Ich sehe mich als Wegbegleiterin, nicht als Expertin für dein Leben. 
                  Du triffst die Entscheidungen und bestimmst die Richtung. 
                  Ich stelle dir Fragen, gebe Impulse und zeige dir Möglichkeiten auf – 
                  aber die Antworten trägst du bereits in dir.
                </p>
              </div>

              {/* Prinzip 2 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-pink-700 mb-4">2. Jede Veränderung beginnt mit Akzeptanz</h3>
                <p className="text-gray-600">
                  Bevor wir etwas verändern können, müssen wir es erst einmal annehmen, wie es ist. 
                  Ohne Bewertung, ohne Widerstand. Aus diesem Ort der Akzeptanz heraus entsteht 
                  die Kraft für echte und nachhaltige Veränderung.
                </p>
              </div>

              {/* Prinzip 3 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-pink-700 mb-4">3. Der Körper weiß den Weg</h3>
                <p className="text-gray-600">
                  Unser Körper trägt alle Antworten in sich. Wenn wir lernen, 
                  ihm zuzuhören, führt er uns zu unseren wahren Bedürfnissen und Wünschen. 
                  Im Coaching nutzen wir die Weisheit deines Körpers als Kompass.
                </p>
              </div>

              {/* Prinzip 4 */}
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold text-pink-700 mb-4">4. Jeder Moment ist eine neue Chance</h3>
                <p className="text-gray-600">
                  Wir sind nicht gefangen in unserer Vergangenheit. 
                  In jedem Augenblick haben wir die Möglichkeit, neu zu wählen 
                  und einen anderen Weg einzuschlagen. Die Vergangenheit darf uns prägen, 
                  aber nicht bestimmen.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-pink-600 to-purple-600 rounded-2xl p-12 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Bereit für deine Reise zu dir selbst?</h2>
            <p className="mb-6 text-pink-100 max-w-2xl mx-auto">
              Entdecke, wie wir gemeinsam dein volles Potenzial entfalten können – 
              basierend auf Werten, die dich wirklich tragen.
            </p>
            <Link
              href="/buchen"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-pink-600 bg-white hover:bg-pink-50 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Jetzt Kennenlerngespräch vereinbaren
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
