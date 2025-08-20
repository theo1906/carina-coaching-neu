import { ArrowRightIcon, HeartIcon, LightBulbIcon, SparklesIcon, UserIcon, WrenchScrewdriverIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const metadata = {
  title: 'Spirituelles Coaching | Vollständiger Text | Carina Göb',
  description: 'Erfahre mehr über den ganzheitlichen Ansatz des spirituellen Coachings mit Carina Göb.',
};

export default function SpiritualFullTextPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-white to-pink-50">
        <div className="absolute inset-0">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute top-1/3 -right-8 w-24 h-24 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
          <div className="absolute -top-8 -left-8 w-24 h-24 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient from-pink-600 to-pink-600 bg-clip-text bg-gradient-to-r mb-6">
              Spirituelles Life Coaching
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-6"></div>
          </div>

          <div className="prose prose-pink prose-lg max-w-none text-gray-600 space-y-6">
            <h2 className="text-3xl font-bold text-pink-700">Ist ein spirituelles Coaching das Richtige für Dich?</h2>
            
            <p>Deine spirituelle Coaching Reise ist eine innere Reise. Eine Reise zu dir, in deine Kraft, in deinen Körper, in dein Herz, in die Verbindung mit deiner Seele und mit deinem Frausein.</p>
            
            <p>Entdecke deine Essenz, deinen wahren Wesenskern, und die Qualitäten deiner Weiblichkeit auf ganz natürliche Art und Weise von innen heraus zu entfalten.</p>
            
            <p>Erforsche deine Muster und Strategien, um tiefer in dein Bewusstsein einzutauchen - in den Raum in dir, in dem du genau richtig bist, so wie du bist.</p>
            
            <p>Erfahre, wie es sich anfühlt, mehr und mehr in allen Bereichen deines Lebens als auch in deinem Körper in Präsenz und Verbundenheit mit dir zu sein und die Kraft und die Ressourcen deines Frauseins in Balance mit deiner männlichen Energie zu leben.</p>
            
            <p>Verkörpere das, was du dir wünschst und bring deine Energie in das, was dir wichtig ist. Erkenne, dass du es bist, die immer die Wahl hat und die entscheiden kann, mutig für sich loszugehen und inspiriere andere dasselbe zu tun.</p>
            
            <p>Ich teile das hier mit dir aus eigener, erlebter und gefühlter Erfahrung und vollständiger Recovery nach 20 Jahren Krankheit.</p>
            
            <p>Mein Weg in die Selbstheilung und auch der Prozess danach auf der Suche nach meiner eigenen Identität und was mir in meinem Leben wirklich wichtig ist, nachdem ich mich 20 Jahre in meiner Essstörung verloren hatte, ist meine größte Stärke und Super-Power.</p>
            
            <p>Die gesammelten Erfahrungen sind die Essenz meiner Arbeit und mein Ansatz für ein erfülltes SEIN im eigenen Körper, dem Zuhause deiner Seele und damit für ein erfülltes Leben.</p>
            
            <p>Ich bin hier, um all das mit dir zu teilen. Du musst diesen Weg nicht alleine gehen.</p>
            
            <p>Spirituelles Coaching unterstützt dich dabei, dein Herz zu öffnen und wieder ganz in Verbindung mit dir selbst zu sein - mit deinem Körper und mit deiner weiblichen Kraft.</p>
            
            <div className="mt-12 text-center">
              <Link 
                href="/kontakt" 
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              >
                Kostenloses Kennenlerngespräch buchen
                <ArrowRightIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
