import Image from 'next/image';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Über mich | Carina - Spiritual Life Coach',
  description: 'Mein Weg von 20 Jahren Krankheit zur vollständigen Heilung und wie ich heute Frauen dabei unterstütze, ihre innere Kraft zu entdecken und ein erfülltes Leben zu führen.',
};

export default function About() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Meine Reise</span>
              <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Von der Heilung zur Berufung</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Wie ich nach 20 Jahren Krankheit meine wahre Bestimmung gefunden habe.
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="mb-12 lg:mb-0">
              <div className="relative h-64 w-full rounded-lg shadow-xl overflow-hidden sm:h-96 lg:h-full">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100 to-primary-200"></div>
                <div className="relative h-full flex items-center justify-center">
                  <div className="h-48 w-48 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30"></div>
                </div>
              </div>
            </div>
            <div className="lg:pl-12">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Meine Botschaft an dich
              </h2>
              <div className="mt-6 text-gray-600 space-y-6">
                <p className="text-lg">
                  Verkörpere das, was du dir wünschst und bring deine Energie in das, was dir wichtig ist. Erkenne, dass du es bist, die immer die Wahl hat und die entscheiden kann, mutig für sich loszugehen und inspiriere andere, dasselbe zu tun.
                </p>
                <div className="bg-pink-50 p-6 rounded-xl border-l-4 border-pink-300">
                  <p className="italic text-pink-800">
                    "Ich teile das hier mit dir aus eigener, erlebter und gefühlter Erfahrung und vollständiger Recovery nach 20 Jahren Krankheit."
                  </p>
                </div>
                <p>
                  Mein Weg in die Selbstheilung – und auch der Prozess danach auf der Suche nach meiner eigenen Identität und was mir im Leben wichtig ist – ist meine größte Stärke und Super-Power. Nachdem ich mich 20 Jahre in meiner Essstörung verloren hatte, sind die gesammelten Erfahrungen die Essenz meiner Arbeit geworden.
                </p>
                <p>
                  Mein Ansatz ist ein erfülltes SEIN im eigenen Körper, dem Zuhause der Seele, und damit für ein erfülltes Leben. Ich bin hier, um all das mit dir zu teilen. <span className="font-medium text-gray-800">Du musst das nicht alleine herausfinden.</span>
                </p>
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                  <p className="font-medium text-gray-800 mb-3">Meine Coachings unterstützen dich dabei:</p>
                  <ul className="space-y-2">
                    {[
                      'Dein Herz zu heilen',
                      'Wieder in Verbindung mit dir selbst zu kommen',
                      'Deine Beziehung zu deinem Körper zu transformieren',
                      'Deine weibliche Kraft zu entfalten',
                      'Nicht perfekt, dafür menschlich, intuitiv und von innen heraus'
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-5 w-5 text-pink-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-xl text-center">
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Bereit für deine Reise?</h3>
                  <p className="mb-4">Investiere jetzt in dich und vereinbare deine kostenlose 30-minütige Schnupper-Session.</p>
                  <Link 
                    href="/contact" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Jetzt kostenloses Erstgespräch vereinbaren
                    <ArrowRightIcon className="ml-2 -mr-1 h-5 w-5" />
                  </Link>
                </div>
                <p className="text-lg font-medium text-gray-900">
                  Der Wendepunkt kam, als ich erkannte, dass ich nicht meine Essstörung besiegen musste, sondern lernen durfte, mich selbst zu lieben.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Section */}
      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="lg:order-last lg:pl-12">
              <div className="relative h-64 w-full rounded-lg shadow-xl overflow-hidden sm:h-96 lg:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary-100 to-secondary-200"></div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Die innere Heilung
              </h2>
              <div className="mt-6 text-gray-500 space-y-6">
                <p>
                  Der Durchbruch kam nicht über Nacht, aber er kam. Ich begann, mich mit meinen inneren Wunden auseinanderzusetzen, verstand die Zusammenhänge zwischen meinen Kindheitserfahrungen und meinem Essverhalten, und lernte nach und nach, mich selbst mit anderen Augen zu sehen.
                </p>
                <p>
                  Ich entdeckte Werkzeuge und Methoden, die mir halfen, mein Denken zu verändern und ein neues Verhältnis zu meinem Körper und zu mir selbst aufzubauen. Mit der Zeit verlor die Bulimie ihre Macht über mich – nicht durch Kontrolle, sondern durch Bewusstheit und Selbstannahme.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Mein Weg zum Coaching
            </h2>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Wie aus meiner Heilung meine Berufung wurde
            </p>
          </div>
          
          <div className="mt-16">
            <div className="relative">
              <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                <div>
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <span className="text-xl font-bold">1</span>
                  </div>
                  <div className="mt-5">
                    <h3 className="text-lg font-medium text-gray-900">Die Erkenntnis</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Nachdem ich meinen eigenen Heilungsweg gegangen war, wurde mir klar, dass ich dieses Wissen mit anderen teilen wollte. Ich begann, mich intensiv mit Psychologie, Persönlichkeitsentwicklung und Coaching-Methoden zu beschäftigen.
                    </p>
                  </div>
                </div>
                
                <div className="mt-10 lg:mt-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <span className="text-xl font-bold">2</span>
                  </div>
                  <div className="mt-5">
                    <h3 className="text-lg font-medium text-gray-900">Die Ausbildung</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Ich absolvierte eine fundierte Coaching-Ausbildung und bildete mich in verschiedenen therapeutischen Ansätzen weiter. Besonders wichtig war mir dabei der systemische Ansatz, der den Menschen in seiner Ganzheit betrachtet.
                    </p>
                  </div>
                </div>
                
                <div className="mt-10 lg:mt-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                    <span className="text-xl font-bold">3</span>
                  </div>
                  <div className="mt-5">
                    <h3 className="text-lg font-medium text-gray-900">Die Berufung</h3>
                    <p className="mt-2 text-base text-gray-500">
                      Heute begleite ich Frauen auf ihrem eigenen Weg zu mehr Selbstliebe und innerer Freiheit. Mein Ansatz verbindet psychologisches Wissen mit spiritueller Tiefe und praktischen Werkzeugen für den Alltag.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-primary-700">
        <div className="max-w-4xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Meine Philosophie
            </h2>
            <blockquote className="mt-8">
              <p className="text-xl text-primary-100">
                "Heilung beginnt nicht damit, dass wir perfekt werden, sondern damit, dass wir uns selbst so annehmen, wie wir sind – mit all unseren vermeintlichen Unzulänglichkeiten und Makeln. Erst wenn wir aufhören, gegen uns selbst zu kämpfen, können wir wahrhaft frei sein."
              </p>
              <footer className="mt-6">
                <p className="text-base font-medium text-primary-200">
                  Carina Göb
                </p>
              </footer>
            </blockquote>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            <span className="block">Bereit für deine Reise?</span>
            <span className="block text-primary-600">Ich begleite dich gerne.</span>
          </h2>
          <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
              >
                Kostenloses Gespräch vereinbaren
                <ArrowRightIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
