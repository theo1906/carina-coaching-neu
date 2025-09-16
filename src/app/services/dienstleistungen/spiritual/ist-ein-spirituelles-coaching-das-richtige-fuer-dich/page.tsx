import { ArrowRightIcon, SparklesIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SpiritualCoachingCarousel from '@/components/SpiritualCoachingCarouselAlt';

export const metadata = {
  title: 'Ist ein spirituelles Coaching das Richtige für dich? | Carina Göb',
  description: 'Entdecke, ob ein spirituelles Coaching der richtige Weg für dich ist, um deine innere Kraft zu entfalten und dein volles Potenzial zu leben.',
};

export default function IstEinSpirituellesCoachingDasRichtigeFuerDichPage() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-white via-pink-50 to-pink-100 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-32 bg-gradient-to-t from-pink-50 to-transparent z-10"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16 md:pt-40 md:pb-24">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6 [text-shadow:0_2px_4px_rgba(0,0,0,0.1)]">
              Ist ein spirituelles Coaching das Richtige für dich?
            </h1>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative pt-12 pb-16 md:pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Animated decorative elements */}
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-slow"></div>
            <div className="absolute bottom-1/3 -right-8 w-16 h-16 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse-medium"></div>
            <div className="absolute top-1/4 right-1/4 w-20 h-20 bg-pink-50 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-float-slow"></div>
            
            <div className="max-w-none relative z-10">
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div className="space-y-6">
                  <p className="text-gray-700">
                    Deine spirituelle Coaching Reise ist eine innere Reise. Eine Reise zu dir, in deine Kraft, in deinen Körper, in dein Herz, in die Verbindung mit deiner Seele und mit deinem Frausein.
                  </p>

                  <p className="text-gray-700">
                    Entdecke deine Essenz, deinen wahren Wesenskern, und die Qualitäten deiner Weiblichkeit auf ganz natürliche Art und Weise von innen heraus zu entfalten.
                  </p>

                  <p className="text-gray-700">
                    Erforsche deine Muster und Strategien, um tiefer in dein Bewusstsein einzutauchen - in den Raum in dir, in dem du genau richtig bist, so wie du bist.
                  </p>

                  <p className="text-gray-700">
                    Erfahre, wie es sich anfühlt, mehr und mehr in allen Bereichen deines Lebens als auch in deinem Körper in Präsenz und Verbundenheit mit dir zu sein und die Kraft und die Ressourcen deines Frauseins in Balance mit deiner männlichen Energie zu leben.
                  </p>

                  <p className="text-gray-700">
                    Verkörpere das, was du dir wünschst und bring deine Energie in das, was dir wichtig ist. Erkenne, dass du es bist, die immer die Wahl hat und die entscheiden kann, mutig für sich loszugehen und inspiriere andere dasselbe zu tun.
                  </p>

                  <p className="text-gray-700">
                    Ich teile das hier mit dir aus eigener, erlebter und gefühlter Erfahrung und vollständiger Recovery nach 20 Jahren Krankheit.
                  </p>

                  <div className="relative my-12 p-8 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl border-l-4 border-pink-400 shadow-lg transform hover:scale-[1.01] transition-all duration-300 hover:shadow-xl hover:border-pink-500 group">
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center shadow-md group-hover:bg-pink-200 transition-colors duration-300">
                      <SparklesIcon className="h-6 w-6 text-pink-500 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <p className="text-gray-700 italic text-lg relative z-10 group-hover:text-gray-800 transition-colors duration-300">
                      "Mein Weg in die spirituelle Heilung und auch der Prozess danach auf der Suche nach meiner eigenen Identität und was mir in meinem Leben wirklich wichtig ist, nachdem ich mich 20 Jahre in meiner Essstörung verloren hatte, ist meine größte Stärke und Super-Power."
                    </p>
                  </div>

                  <p className="text-gray-700">
                    Die gesammelten Erfahrungen sind die Essenz meiner Arbeit und mein Ansatz für ein erfülltes SEIN im eigenen Körper, dem Zuhause deiner Seele und damit für ein erfülltes Leben.
                  </p>

                  <p className="text-gray-700">
                    Ich bin hier, um all das mit dir zu teilen. Du musst diesen Weg nicht alleine gehen. Spirituelles Coaching unterstützt dich dabei, dein Herz zu öffnen und wieder ganz in Verbindung mit dir selbst zu sein - mit deinem Körper und mit deiner weiblichen Kraft.
                  </p>

                  <p className="text-gray-700 mb-12">
                    Geh' los für dich und entdecke was möglich ist in einer kostenfreien, unverbindlichen 30-minütigen Kennenlern-Session mit mir.
                  </p>

                  <div className="mt-16 text-center">
                    <Link 
                      href="/Services/spiritual#ist-ein-spirituelles-coaching-das-richtige-fuer-dich" 
                      className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-full transition-all duration-300 hover:shadow-lg no-underline"
                    >
                      zurück
                      <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
