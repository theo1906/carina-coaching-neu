import { ArrowRightIcon, CheckIcon, LightBulbIcon, HeartIcon, UserIcon, SparklesIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const metadata = {
  title: 'Embodiment – dein Körper als Wegweiser | Carina Göb',
  description: 'Entdecke die Weisheit deines Körpers und lerne, deine körperliche Präsenz als Tor zu tiefer Heilung und Transformation zu nutzen.',
};

export default function EmbodimentPage() {
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
              Embodiment – dein Körper als Wegweiser
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-6"></div>
            <p className="text-2xl text-pink-800/90 italic max-w-2xl mx-auto">
              "DEIN KÖRPER IST MEHR ALS NUR EIN GEFÄSS – ER IST DEIN ZUGANG ZU TIEFER WEISHEIT"
            </p>
          </div>
          
          <div className="prose prose-pink max-w-none text-gray-600 space-y-6">
            <p>Dein Körper ist mehr als nur ein Gefäß – er ist dein Zugang zu tiefer Weisheit und Heilung. Im Embodiment lernst du, deinen Körper als Kompass zu nutzen und seine Signale bewusst wahrzunehmen.</p>
            
            <p>Dein Körper trägt alle Antworten in sich, die du brauchst. Er ist der Schlüssel zu deiner inneren Weisheit und deinem wahren Potenzial. Durch achtsame Körperarbeit und bewusste Wahrnehmung kannst du den Dialog mit deinem Körper wieder aufnehmen und seine Botschaften verstehen lernen.</p>
            
            <p>In einer Welt, die oft vom Verstand dominiert wird, bietet das Embodiment einen kraftvollen Gegenpol. Es ist die Kunst, in deinem Körper zu Hause zu sein, seine Sprache zu verstehen und sein volles Potenzial zu entfalten. Wenn du lernst, deinen Körper als Verbündeten zu sehen, eröffnen sich dir völlig neue Wege der Heilung und Entfaltung.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8">Körperliche Präsenz</h2>
            <p>Dein Körper ist dein Zuhause in dieser Welt. Durch gezielte Übungen lernst du, dich wieder mit deiner körperlichen Präsenz zu verbinden. Du entdeckst, wie sich Anspannung und Entspannung in deinem Körper anfühlen und wie du bewusst in einen Zustand von Präsenz und Zentriertheit kommst.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8">Emotionale Intelligenz</h2>
            <p>Emotionen sind körperliche Phänomene. Im Embodiment lernst du, Emotionen in deinem Körper zu lokalisieren und zu verstehen. Du entwickelst die Fähigkeit, selbst intensive Emotionen zu spüren, ohne von ihnen überwältigt zu werden. So entsteht emotionale Freiheit und Flexibilität in deinem Leben.</p>
            
            <h2 className="text-2xl font-bold text-gray-900 mt-8">Intuitive Weisheit</h2>
            <p>Dein Körper weiß oft mehr als dein Verstand. Durch die Praxis des Embodiments lernst du, auf die feinen Signale deines Körpers zu hören und deiner Intuition zu vertrauen. Diese tiefe Verbindung zu deiner inneren Weisheit wird zu einem verlässlichen Kompass in deinem Leben.</p>
            
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
