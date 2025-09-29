'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export default function AufDerSucheNachIdentitaetPage() {
  const router = useRouter();
  
  const handleBackClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Store the scroll position in session storage
    sessionStorage.setItem('shouldScrollToSection', 'warum-ja-sagen-zu-meinem-coaching');
    // Navigate to the main page
    router.push('/dienstleistungen/essstorung');
  };
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50 pt-48 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Auf der Suche nach Identität
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto mb-8"></div>
            <p className="text-2xl text-pink-800/90 italic max-w-2xl mx-auto mb-8">
              "Persönliche Einblicke in die Zeit nach meiner Essstörung"
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="prose prose-pink prose-lg max-w-none">
          <p className="text-gray-700 mb-6">
            Gerne möchte ich dir an dieser Stelle auch persönliche Einblicke geben, wie es für mich war, plötzlich ohne Krankheit zu sein. Vor allem nachdem ich meine Queen (so nenne ich meine Bulimie heute als meine größte Lehrerin) Tag für Tag begleitet hat. Essen-Streifzüge, Essattacken, Erbrechen … bis zur kompletten Erschöpfung. Und dann das Ganze wieder von vorne. Die Bulimie wurde zu meiner Identität, dem Mittelpunkt meines Lebens, seit meinem 14. Lebensjahr, bis ich 34 Jahre alt war.
          </p>
          
          <p className="text-gray-700 mb-6">
            Um ehrlich zu sein, hat mich damals der Moment der plötzlichen Heilung und sofortigen Symptomfreiheit ganz schön überfordert. Auch wenn ich es mir gewünscht habe. Aber als die Heilung dann da war, war es erst einmal ungewohnt. Und ja, auch befremdlich, so viel Freiheit zu haben und vor allem so viel Zeit nach 20 Jahren, in denen ich komplett fremdgesteuert und kontrolliert war. Beeindruckend war für mich und ist es bis heute, dass ich sofort wusste und vor allem gespürt habe von ganz tief drinnen in mir: meine Bulimie ist vorbei - für immer.
          </p>

          <p className="text-gray-700 mb-6">
            Mit dem Moment der Heilung wurde ich auch immer mehr zum bewussten Beobachter von mir selbst und ich war zunehmend in Verbindung mit mir und dem Raum, in dem alles einfach nur IST. Einem ungewohnten, aber sehr interessanten und freudigen Zustand des Gelöst-SEINS.
          </p>

          <p className="text-gray-700 mb-6">
            Mein System war dennoch tief geprägt von der jahrelangen Scham, Unsicherheit und innerer Alarmbereitschaft. Körperliche Symptome wie Hyperhidrose, Verdauungsprobleme, Rastlosigkeit, Panikattacken waren nach wie vor da. Auch wenn das Symptom von Erbrechen weg war, spürte ich, dass es meine Aufgabe war oder vielmehr eine Sehnsucht in mir, mich auch hier vollkommen zu befreien.
          </p>

          <p className="text-gray-700 mb-6">
            Die 2 darauffolgenden Jahre habe ich noch unter der gewohnten Maske des Schweigens verbracht und mich niemandem anvertraut.
          </p>

          <p className="text-gray-700 mb-6">
            Gleichzeitig war da aber nach wie vor diese Kraft in mir, die mich sanft und doch powervoll geleitet hat. Sie ist bis heute wie ein innerer Kompass, der mich auf meinem Lebensweg führt.
          </p>

          <p className="text-gray-700 mb-6">
            Über eine Reise in Indien kam ich zum Yoga, was seitdem zu meinem täglichen Begleiter wurde.
          </p>

          <p className="text-gray-700 mb-6">
            Ich war weiter im Aufbruch Richtung Neuorientierung und im zarten, noch ungewohnten, aber deutlich spürbaren und täglich intensiveren Kontakt mit mir. Mein Körper wurde und ist bis heute mein bester Freund und eine Art Sensor mit deutlichen Signalen: was tut mir gut, wer tut mir gut.
          </p>

          <p className="text-gray-700 mb-6">
            Ab Jahr 3 nach der Heilung war ich in tiefem Vertrauen in mich selbst, meiner Intuition und ins Leben.
          </p>

          <p className="text-gray-700 mb-6">
            Ich habe begonnen mein Schweigen zu brechen und meine Geschichte zu teilen. Das war auf Bali bei meinem ersten Traumaseminar zu Beginn 2019. Dort hatte ich auch mein erstes großes Meditationserlebnis. Ich war pure Energie, durchflutet von Leichtigkeit und Licht. Es war unbeschreiblich. Ich konnte meine Augen nicht öffnen, mein Körper war wie schwebend. Gefühlt durchflossen alle Töne der Musik meine Adern, jeder einzelne so pur und rein. Ich war wie eine Quelle aus lichtdurchfluteter Energie.
          </p>

          <p className="text-gray-700 mb-6">
            Ich war eins mit allem. Und alles war eins mit mir. Ich war den ganzen Tag noch so in Verbindung mit mir und meiner Essenz aus Liebe, Freude und Leichtigkeit. Purem SEIN.
          </p>

          <p className="text-gray-700 mb-6">
            Ich habe durch diese Erfahrung verstanden: DAS ist mein natürlicher Zustand und der ist in mir. Das heißt auch: ich habe Zugang dazu. Das war so unbeschreiblich, dass ich beschlossen habe, dass Meditation Teil meines Alltags wird und so ist es bis heute.
          </p>

          <p className="text-gray-700 mb-6">
            Ich begann mir große Fragen zu stellen: Wer bin ich? Was ist der Sinn meines Lebens? Warum bin ich hier? Was ist meine Aufgabe?
          </p>

          <p className="text-gray-700 mb-6">
            Die Antworten kamen nach und nach und waren irgendwann sehr klar und auch deutlich spürbar für mich von innen heraus.
          </p>

          <p className="text-gray-700 mb-6">
            Auch wenn ich riesigen Respekt davor hatte, mich dem hinzugeben und mich daher weiterhin jahrelang versucht habe als Marketing-und Projekt- Managerin im Konzern zu sehen, hat das Leben immer wieder Kurskorrektur für mich vorgenommen, um mich sanft, aber doch bestimmend in den Weg der Selbstständigkeit zu geleiten und meinem calling der Heilarbeit zu folgen.
          </p>

          <p className="text-gray-700 mb-6">
            Da bin ich jetzt und freue mich darauf, meine Erfahrungen, Erkenntnisse und auch Herausforderungen auf dieser Heilungsreise aus der Tiefe meines Herzens weiterzugeben, mit der Intention dich dabei zu unterstützen, mutig für dich und deine Wahrheit loszugehen.
          </p>

          <p className="text-gray-700 mb-6">
            Größer zu denken, dir zu erlauben, in eine neue Realität einzutreten. Bewusst die Entscheidung zu treffen, sich auf den Fahrersitz in deinem Leben zu setzen, die Verantwortung zu übernehmen und sich dafür zu öffnen, dass Heilung möglich ist. In jedem Moment.
          </p>

          <p className="text-gray-700 mb-6">
            Ich musste das ganz alleine herausfinden und habe 20 Jahre dafür gebraucht. Aber ehrlich gesagt möchte ich das nicht für dich.
          </p>

          <p className="text-gray-700 mb-6">
            Ich möchte dir wertvolle Lebenszeit schenken und unterstütze dich gerne dabei, deine Reise jetzt, hier und heute anzutreten, indem wir gemeinsam in dir den Raum entdecken, in dem alles in dir entspannt ist, du dich sicher fühlst, gesehen, gehört und verstanden.
          </p>

          <p className="text-gray-700">
            Mit anderen Worten: JUST BE. Dort in der Quelle deines Seins bist du vollkommen. Und dadurch auch vollkommen verbunden mit deiner Schöpferkraft. Hier kannst du alles kreieren. Auch deine Heilerfahrung.
          </p>
        </div>

        {/* Back Button */}
        <div className="mt-16 text-center">
          <a 
            href="/dienstleistungen/essstorung#warum-ja-sagen-zu-meinem-coaching" 
            className="inline-flex items-center text-pink-600 hover:text-pink-800 transition-colors duration-300 group text-lg no-underline"
            onClick={handleBackClick}
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Zurück zur Übersicht
          </a>
        </div>
      </div>
    </div>
  );
}
