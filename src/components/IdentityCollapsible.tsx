'use client';

import { useState } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

export default function IdentityCollapsible() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-t border-pink-100 pt-6 mt-6">
      <button
        onClick={toggleOpen}
        className="flex items-center justify-center w-full text-center group"
        aria-expanded={isOpen}
        aria-controls="identity-content"
      >
        <span className="text-lg font-medium text-pink-600 group-hover:text-pink-700 transition-colors flex items-center gap-2">
          Mehr erfahren
          {isOpen ? (
            <ChevronUpIcon className="h-5 w-5" />
          ) : (
            <ChevronDownIcon className="h-5 w-5" />
          )}
        </span>
      </button>
      
      {isOpen && (
        <div 
          id="identity-content"
          className="mt-6 prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-4 animate-in slide-in-from-top-2 duration-300"
        >
          <p className="text-lg">
            Mit dem Moment der Heilung wurde ich auch immer mehr zum bewussten Beobachter von mir selbst und ich war zunehmend in Verbindung mit mir und dem Raum, in dem alles einfach nur IST. Einem ungewohnten, aber sehr interessanten und freudigen Zustand des Gelöst-SEINS.
          </p>
          
          <p className="text-lg">
            Mein System war dennoch tief geprägt von der jahrelangen Scham, Unsicherheit und inneren Alarmbereitschaft. Körperliche Symptome wie Hyperhidrose, Verdauungsprobleme, Rastlosigkeit, Panikattacken waren nach wie vor da. Auch wenn das Symptom von Erbrechen weg war, spürte ich, dass es meine Aufgabe war oder vielmehr eine Sehnsucht in mir, mich auch hier vollkommen zu befreien.
          </p>
          
          <p className="text-lg">
            Die 2 darauffolgenden Jahre habe ich noch unter der gewohnten Maske des Schweigens verbracht und mich niemandem anvertraut.
          </p>
          
          <p className="text-lg">
            Gleichzeitig war da aber nach wie vor diese Kraft in mir, die mich sanft und doch powervoll geleitet hat. Sie ist bis heute wie ein innerer Kompass, der mich auf meinem Lebensweg führt.
          </p>
          
          <p className="text-lg">
            Über eine Reise in Indien kam ich zum Yoga, was seitdem zu meinem täglichen Begleiter wurde.
          </p>
          
          <p className="text-lg">
            Ich war weiter im Aufbruch Richtung Neuorientierung und im zarten, noch ungewohnten, aber deutlich spürbaren und täglich intensiveren Kontakt mit mir. Mein Körper wurde und ist bis heute mein bester Freund und eine Art Sensor mit deutlichen Signalen: was tut mir gut, wer tut mir gut.
          </p>
          
          <p className="text-lg">
            Ab Jahr 3 nach der Heilung war ich in tiefem Vertrauen in mich selbst, meiner Intuition und ins Leben.
          </p>
          
          <p className="text-lg">
            Ich habe begonnen mein Schweigen zu brechen und meine Geschichte zu teilen. Das war auf Bali bei meinem ersten Traumaseminar zu Beginn 2019. Dort hatte ich auch mein erstes großes Meditationserlebnis. Ich war pure Energie, durchflutet von Leichtigkeit und Licht. Es war unbeschreiblich. Ich konnte meine Augen nicht öffnen, mein Körper war wie schwebend. Gefühlt durchflossen alle Töne der Musik meine Adern, jeder einzelne so pur und rein. Ich war wie eine Quelle aus lichtdurchfluteter Energie.
          </p>
          
          <p className="text-lg">
            Ich war eins mit allem. Und alles war eins mit mir. Ich war den ganzen Tag noch so in Verbindung mit mir und meiner Essenz aus Liebe, Freude und Leichtigkeit. Purem SEIN.
          </p>
          
          <p className="text-lg">
            Ich habe durch diese Erfahrung verstanden: DAS ist mein natürlicher Zustand und der ist in mir. Das heißt auch: ich habe Zugang dazu. Das war so unbeschreiblich, dass ich beschlossen habe, dass Meditation Teil meines Alltags wird und so ist es bis heute.
          </p>
          
          <p className="text-lg">
            Ich begann mir große Fragen zu stellen: Wer bin ich? Was ist der Sinn meines Lebens? Warum bin ich hier? Was ist meine Aufgabe?
          </p>
          
          <p className="text-lg">
            Die Antworten kamen nach und nach und waren irgendwann sehr klar und auch deutlich spürbar für mich von innen heraus.
          </p>
          
          <p className="text-lg">
            Auch wenn ich riesigen Respekt davor hatte, mich dem hinzugeben und mich daher weiterhin jahrelang versucht habe als Marketing-und Projekt-Managerin im Konzern zu sehen, hat das Leben immer wieder Kurskorrektur für mich vorgenommen, um mich sanft, aber doch bestimmend in den Weg der Selbstständigkeit zu geleiten und meinem calling der Heilarbeit zu folgen.
          </p>
          
          <p className="text-lg">
            Da bin ich jetzt und freue mich darauf, meine Erfahrungen, Erkenntnisse und auch Herausforderungen auf dieser Heilungsreise aus der Tiefe meines Herzens weiterzugeben, mit der Intention dich dabei zu unterstützen, mutig für dich und deine Wahrheit loszugehen.
          </p>
          
          <p className="text-lg">
            Größer zu denken, dir zu erlauben, in eine neue Realität einzutreten. Bewusst die Entscheidung zu treffen, sich auf den Fahrersitz in deinem Leben zu setzen, die Verantwortung zu übernehmen und sich dafür zu öffnen, dass Heilung möglich ist. In jedem Moment.
          </p>
          
          <p className="text-lg">
            Ich musste das ganz alleine herausfinden und habe 20 Jahre dafür gebraucht. Aber ehrlich gesagt möchte ich das nicht für dich.
          </p>
          
          <p className="text-lg">
            Ich möchte dir wertvolle Lebenszeit schenken und unterstütze dich gerne dabei, deine Reise jetzt, hier und heute anzutreten, indem wir gemeinsam in dir den Raum entdecken, in dem alles in dir entspannt ist, du dich sicher fühlst, gesehen, gehört und verstanden.
          </p>
          
          <p className="text-lg">
            Mit anderen Worten: JUST BE. Dort in der Quelle deines Seins bist du vollkommen. Und dadurch auch vollkommen verbunden mit deiner Schöpferkraft. Hier kannst du alles kreieren. Auch deine Heilerfahrung.
          </p>
        </div>
      )}
    </div>
  );
}
