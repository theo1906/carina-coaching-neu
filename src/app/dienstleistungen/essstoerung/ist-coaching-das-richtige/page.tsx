
'use client';

import Link from 'next/link';
import { ArrowRightIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function IstCoachingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-pink-50 pt-48 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ist ein Coaching bei Essstörungen das Richtige für dich?
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-8"></div>
            <p className="text-2xl text-pink-800/90 italic max-w-2xl mx-auto mb-8">
              Dein Weg in ein freies und selbstbestimmtes Leben
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="prose prose-pink prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            Du hast dich bereits auf den Weg gemacht, die Verantwortung für dein Leben zu übernehmen. 
            Das heißt auch, du hast für dich anerkannt, dass du Hilfe brauchst oder zumindest bist du auf dem Weg dahin, 
            dich für ein Coaching bei Essstörungen zu öffnen. Du möchtest dich von deiner Bulimie, Magersucht, 
            deinen Essattacken oder emotionalem Essen befreien und suchst nach Unterstützung? Dann bist du hier richtig. 
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Das ist ein riesen Schritt, den du da gerade machst! Das braucht Mut und den hast du. 
            Sonst wärst du nicht hier auf meiner Seite.
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Du möchtest gerne für dich losgehen und für alles, was in deinem Leben und auch in deinem Körper passiert? 
            Dann bleib' neugierig und lies weiter. Ich weiss wovon ich spreche und kann sehr gut mit dir mitfühlen, 
            wie es dir gerade geht, da ich selbst 20 Jahre meinen Weg mit einer Essstörung gegangen bin. 
            Und ich dachte, ich gehe ihn bis an mein Lebensende gemeinsam mit meiner Bulimie. Das war meine Realität. 
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Heute lebe ich mein Leben vollkommen frei von der Essstörung. Dafür in einer liebevollen Beziehung mit meinem Körper, 
            in tiefer Verbindung mit meinem Herzen und mit kraftvollen Überzeugungen, die mich stärken und von innen heraus leiten. 
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-10">
            Mit meiner Selbstheilungs-Erfahrung und all meinen Erkenntnissen kann ich dich empowern, 
            ein gesundes, selbstbestimmtes und glückliches Leben zu führen. 
            Jetzt, hier und heute. Heilung ist möglich - in jedem Moment. 
          </p>

          <h2 className="text-2xl font-bold text-pink-800 mt-12 mb-6">
            Warum ich geeignet bin, auch mit Menschen aus deinem Familiensystem zu arbeiten
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Meine Mama war damals bei mir in jener Nacht der Heilung und heute bin ich mir aufgrund meiner Erfahrung bewusst darüber, 
            wie ausschlaggebend, v.a. die Verletzungen und die emotionalen Schmerzen der Eltern sind, wenn es um die Entwicklung 
            einer Essstörung geht und die Befreiung davon. Im größeren Kontext spricht man hier oft von der "Mother Wound" 
            und auch "Mother Hunger". 
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Für mich mein größter Beweggrund, warum ich gerne mit dir als Betroffenen von einer Essstörung wie Bulimie, 
            Magersucht oder Essanfällen/ Essattacken in Form von Heißhungerattacken, aber auch mit Eltern und / oder 
            Angehörigen aus dem engsten Umfeld bzw. Familiensystem arbeiten und meine persönlichen Erkenntnisse teilen möchte. 
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            Ebenso wie mein zertifiziertes Ausbildungswissen als spiritueller System-Coach, Holistic Counselor und meine 
            Körper- und Energiearbeit als Rebalancing Bodyworker. 
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-6">
            In einem sicheren Raum voller Mitgefühl, ohne Bewertungen und mit der Intention mit zu unterstützen, 
            auf dem Weg in deine Heilung und in dein erfülltes, selbstbestimmtes Leben in Leichtigkeit und Freude. 
          </p>
          
          <p className="text-gray-700 leading-relaxed mb-12">
            Ein Leben, in dem Essen ganz natürlich für dich ist, ein purer Genuss und ein Ausdruck von Liebe, 
            die du dir selbst schenkst. 
          </p>

          <div className="mt-16 text-center">
            <Link 
              href="/dienstleistungen/essstoerung#heilungsreise" 
              className="inline-flex items-center text-pink-600 hover:text-pink-800 transition-colors duration-300 group text-lg no-underline"
              scroll={false}
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
              Zurück zur Übersicht
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
