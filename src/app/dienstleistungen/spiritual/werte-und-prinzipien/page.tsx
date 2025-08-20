import Link from 'next/link';
import { ArrowLeftIcon, HeartIcon, ShieldCheckIcon, SparklesIcon } from '@heroicons/react/24/outline';

export default function WerteUndPrinzipienPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="mb-12">
          <Link 
            href="/dienstleistungen/spiritual" 
            className="inline-flex items-center text-pink-600 hover:text-pink-700 mb-8 group"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Zurück zur Übersicht
          </Link>
          
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-6">
            Meine Werte und Prinzipien
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mb-10"></div>
        </div>

        <div className="prose prose-lg max-w-none text-gray-700">
          <blockquote className="border-l-4 border-pink-400 pl-6 italic text-xl text-gray-700 my-10">
            <p className="mb-4">„Wenn dir jemand wirklich zuhört, ohne über dich zu urteilen, ohne zu versuchen, Verantwortung für dich zu übernehmen, ohne zu versuchen, dich zu formen, fühlt sich das verdammt gut an …"</p>
            <footer className="not-italic text-lg text-gray-600">— Carl Rogers</footer>
          </blockquote>

          <p className="text-lg mb-8 leading-relaxed">
            Das Herz meiner Arbeit und meine grundlegende Haltung als Coach ist es, dir mit Offenheit, Neugierde und in Absichtslosigkeit zu begegnen – gepaart mit meiner Liebe zur Wahrheit. Wertfrei, ohne Rettungsversuche oder Heilungsversprechen, dafür mit viel Mitgefühl und Menschlichkeit.
          </p>

          <p className="text-lg mb-12 leading-relaxed">
            Meine feste Überzeugung, basierend auf meiner eigenen Selbsterfahrung, ist, dass tiefe Heilung in jedem Moment möglich ist – durch die Kraft, die in jedem von uns wohnt.
          </p>

          <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-8 mb-12 border border-pink-100">
            <blockquote className="text-xl italic text-gray-700 mb-6">
              "Courage starts with showing up and letting ourselves be seen."
              <footer className="mt-2 text-lg not-italic text-gray-600">— Brené Brown</footer>
            </blockquote>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mt-16 mb-6 flex items-center">
            <span className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-4">
              <HeartIcon className="h-5 w-5 text-pink-600" />
            </span>
            Heilung von innen
          </h2>
          <p className="text-lg mb-12 leading-relaxed">
            In meiner Arbeit gehe ich davon aus, dass tiefe Heilung in jedem Moment möglich ist – durch die Kraft, die in jedem von uns wohnt. Basierend auf meiner eigenen Selbsterfahrung vertraue ich darauf, dass wir alle über eine innere Weisheit und Heilkraft verfügen, die uns dabei unterstützt, zu wachsen und zu heilen.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-16 mb-6 flex items-center">
            <span className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-4">
              <ShieldCheckIcon className="h-5 w-5 text-purple-600" />
            </span>
            Mut zur Verletzlichkeit
          </h2>
          <p className="text-lg mb-6 leading-relaxed">
            Echte Veränderung beginnt mit Mut – dem Mut, sich zu zeigen, wie man wirklich ist. Dafür braucht es:
          </p>
          <ul className="space-y-4 mb-12 pl-6">
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">1</span>
              <span>Mut, dich in deiner Verletzlichkeit zu zeigen</span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">2</span>
              <span>Radikale Ehrlichkeit dir selbst gegenüber</span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">3</span>
              <span>Die Bereitschaft, für dich loszugehen und Eigenverantwortung zu leben</span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 rounded-full bg-pink-100 text-pink-600 flex items-center justify-center text-sm font-medium mr-3 mt-0.5 flex-shrink-0">4</span>
              <span>Dich von alten Geschichten und Glaubenssätzen zu lösen</span>
            </li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-16 mb-6 flex items-center">
            <span className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-4">
              <SparklesIcon className="h-5 w-5 text-amber-600" />
            </span>
            Bewusste Wahrnehmung
          </h2>
          <p className="text-lg mb-12 leading-relaxed">
            Ein zentraler Aspekt meiner Arbeit ist es, die Realität so zu sehen, wie sie wirklich ist – frei von den Filtern vergangener Erfahrungen und des Mangels. Indem wir lernen, die Dinge klarer zu betrachten, können wir uns von alten Mustern befreien und neue Wege des Seins und Handelns entdecken.
          </p>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link 
              href="/kontakt" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 shadow-sm hover:shadow-md transition-all duration-200"
            >
              Jetzt unverbindliches Gespräch vereinbaren
              <svg className="ml-2 -mr-1 h-5 w-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
