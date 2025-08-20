'use client';
import { HeartIcon, SparklesIcon, LightBulbIcon } from '@heroicons/react/24/solid';

export default function Hero() {
  const questions = [
    {
      text: "Möchtest du in liebevoller Verbindung zu deinem Körper sein?",
      icon: HeartIcon,
      color: "from-pink-400 to-pink-600"
    },
    {
      text: "Sehnst du dich nach mehr Leichtigkeit?",
      icon: SparklesIcon,
      color: "from-amber-400 to-pink-500"
    },
    {
      text: "Bist du bereit, dir in deiner Wahrheit zu begegnen?",
      icon: LightBulbIcon,
      color: "from-purple-400 to-pink-500"
    }
  ];

  return (
    <section className="relative bg-gradient-to-br from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="relative">
              <p className="text-2xl md:text-3xl leading-relaxed md:leading-relaxed text-pink-900/90 font-normal tracking-normal max-w-3xl">
                <span className="text-pink-600 font-medium">Ich unterstütze Frauen</span> dabei, ihre <span className="relative inline-block">
                  <span className="relative z-10">eigene Heilkraft</span>
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-pink-100/70 -z-0 transform -rotate-1"></span>
                </span> und <span className="relative inline-block">
                  <span className="relative z-10">Herzensweisheit</span>
                  <span className="absolute bottom-0 left-0 w-full h-3 bg-amber-100/60 -z-0 transform rotate-1"></span>
                </span> wiederzuentdecken und mutig zu verkörpern – durch <span className="font-medium text-pink-700">spirituelles Coaching</span> und <span className="font-medium text-pink-700">Systemisches-Coaching</span> für Essstörungen und ED Recovery.
              </p>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-300 mt-6 rounded-full"></div>
            </div>
            
            <div className="space-y-4 pt-2">
              {questions.map(({ text, icon: Icon, color }, index) => (
                <div 
                  key={index} 
                  className="group relative overflow-hidden bg-white/70 backdrop-blur-sm p-5 rounded-2xl border border-pink-100 hover:border-transparent transition-all duration-500 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01]"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 -z-10`}></div>
                  <div className="flex items-start">
                    <div className={`flex-shrink-0 h-12 w-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center mr-4 mt-0.5 group-hover:scale-110 transition-all duration-500 shadow-lg`}>
                      <Icon className="h-6 w-6 text-white transform group-hover:rotate-12 transition-transform duration-500" />
                    </div>
                    <div className="flex-1">
                      <p className="text-lg font-medium text-pink-900/90 group-hover:text-pink-900 transition-colors duration-300">
                        {text}
                      </p>
                      <div className="mt-2 h-1 w-8 bg-gradient-to-r from-pink-200 to-transparent group-hover:w-16 transition-all duration-500"></div>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 h-1 w-0 group-hover:w-full bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-700"></div>
                  <div className="absolute -right-10 -bottom-10 h-20 w-20 rounded-full bg-gradient-to-br from-pink-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Image Section */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-all duration-500">
              <div className="relative w-full h-full min-h-[360px] lg:min-h-[450px] bg-pink-50 rounded-2xl overflow-hidden border border-pink-100">
                <div className="absolute inset-y-0 left-0 w-64 bg-gradient-to-r from-white/90 via-white/30 to-transparent z-10 h-full"></div>
                <img 
                  src="/images/hero-new.jpg"
                  alt="Carina Göb - Spiritueller Life Coach"
                  className="w-full h-full object-cover object-top"
                  style={{ objectPosition: 'center 40%' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
