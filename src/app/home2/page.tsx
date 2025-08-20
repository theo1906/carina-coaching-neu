import Hero from '@/components/Hero';
import StorySection from '@/components/StorySection';
import CoachingOfferings from '@/components/CoachingOfferings';
import AppShowcase from '@/components/AppShowcase';
import Testimonials from '@/components/Testimonials';
import CallToAction from '@/components/CallToAction';
import { Leaf, Heart, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function Home2() {
  return (
    <div className="bg-white">
      <Hero />
      
      {/* Embodiment Section */}
      <section className="relative py-16 bg-gradient-to-b from-white to-pink-50 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-100 rounded-full opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 rounded-full opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-900 mb-4">
              Embodiment als Schlüssel auf deiner Heilungsreise
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-xl text-pink-800/90 italic max-w-3xl mx-auto mb-8">
              "YOUR BODY IS YOUR BEST GUIDE AND A POWERFUL TEACHER."
            </p>
            <p className="text-xl font-medium text-pink-700">
              Vertraue der Weisheit deines Körpers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Embodiment ist für mich der Schlüssel für Heilung und Transformation, denn dein Körper speichert all deinen Schmerz und deine Verletzungen (auch die, die du nicht sehen kannst) und ist damit ein wertvoller Impulsgeber für die Anteile in dir, die noch heilen dürfen.
              </p>
              
              <div className="bg-white/80 p-6 rounded-xl shadow-sm border border-pink-100">
                <p className="font-medium text-pink-800 mb-3">Wenn eine Verletzung oder Wunde nicht geheilt ist, dann wird sie dir weiter weh tun und sich immer wieder bemerkbar machen:</p>
                <ul className="space-y-3">
                  {[
                    'Du lebst in Mustern, Überlebens- und Abwehrstrategien',
                    'Im permanenten Kampf mit deinem Körper',
                    'In Unzufriedenheit und Selbstsabotage',
                    'Hinter einer Maske, getrennt von deinem wahren Selbst'
                  ].map((item, index) => (
                    <li key={index} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-pink-100 flex items-center justify-center mr-3 mt-0.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-pink-600"></div>
                      </div>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                Oft läuft das unbewusst ab, es ist dein "Normal", aber tief in dir spürst du: Du bist getrennt von dem, wonach du dich wirklich sehnst. Wonach wir uns alle sehnen - nach tiefer Verbindung. Und die beginnt immer bei dir selbst.
              </p>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-pink-100">
              <h3 className="text-2xl font-bold text-pink-800 mb-4">OWN IT. FEEL IT. HEAL IT.</h3>
              <p className="text-gray-700 mb-6">
                Es ist das mutige Zulassen und Spüren von allem, was ist, um das abzulegen, was du nicht bist und dorthin zurückzukehren, was du schon immer warst. In deine Vollständigkeit, in deine Essenz.
              </p>
              
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-600 font-bold mr-4">1</div>
                  <div>
                    <h4 className="font-medium text-gray-800">Sei sichtbar</h4>
                    <p className="text-gray-600 text-sm">Erlaube dir, gesehen zu werden, auch in deiner Verletzlichkeit.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-600 font-bold mr-4">2</div>
                  <div>
                    <h4 className="font-medium text-gray-800">Nimm an, was ist</h4>
                    <p className="text-gray-600 text-sm">Begegne deinen Gefühlen mit Mitgefühl statt Perfektionismus.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0 h-10 w-10 rounded-full bg-pink-50 flex items-center justify-center text-pink-600 font-bold mr-4">3</div>
                  <div>
                    <h4 className="font-medium text-gray-800">Bleibe offen</h4>
                    <p className="text-gray-600 text-sm">Auch wenn es schwerfällt - gerade dann ist Heilung möglich.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-pink-100">
                <p className="text-center text-pink-800 font-medium mb-4">Überall dort ist eine tiefe Heilung möglich und ein nach Hause kommen zurück zu dir.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <StorySection />

      {/* Coaching Offerings */}
      <CoachingOfferings />

      {/* App Showcase */}
      <AppShowcase />

      {/* Testimonials */}
      <Testimonials />

      {/* Call to Action */}
      <CallToAction />
    </div>
  );
}
