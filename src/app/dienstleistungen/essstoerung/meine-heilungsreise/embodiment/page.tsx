import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import ScrollToSectionLink from '@/components/ScrollToSectionLink';

export default function EmbodimentPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-4">
        <Link 
          href="/dienstleistungen/essstoerung" 
          className="inline-flex items-center text-pink-600 hover:text-pink-800 transition-colors"
        >
          <ArrowLeftIcon className="w-5 h-5 mr-2" />
          Zurück zur Übersicht
        </Link>
      </div>
      
      {/* Title Section with Pink Background */}
      <div className="bg-pink-50 py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-center">
          <div className="text-center w-full">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient from-pink-600 to-pink-600 bg-clip-text bg-gradient-to-r mb-6">
              Embodiment & Heilungsreise
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-6"></div>
            <p className="text-2xl text-pink-800/90 italic max-w-2xl mx-auto">
              Dein Weg in die Heilung
            </p>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="prose prose-pink max-w-none text-gray-700">
          <p>
            Der Fokus in meinem Coaching für Essstörungen mit dir und generell in meiner
            Heilarbeit mit Menschen liegt darin, das Vertrauen in dich selbst, die eigenen
            Fähigkeiten und das Vertrauen in die natürliche Intelligenz deines Körpers zu stärken
            bzw. wieder zu entdecken. Das ist meine große Vision. Meine eigene Heilungsreise
            ist dabei sowohl mein größter Lehrer und Motivator als auch Inspiration in meinem
            Leben.
          </p>
          
          <p>
            Dein Körper ist für mich Botschafter und spricht mit der Stimme deines Herzens, dem Ort deiner Seele. Symptome sind daher für mich Nachrichten von hoher Bedeutung, denen es gilt, mit Neugierde und Offenheit zu begegnen, anstatt sie zu ignorieren, zu betäuben oder zu bekämpfen. Embodiment und Selbsterkenntnis durch Inquiry sind hierbei für mich der Schlüssel zur nachhaltigen Transformation. 
          </p>
          
          <h2 className="text-2xl font-semibold text-pink-700 mt-8 mb-4">Was ist Embodiment?</h2>
          
          <p>
            Embodiment bedeutet, die Verbindung zu deinem eigenen Körper zu stärken, um deine weibliche Intuition und innere Kraft zu entfalten. Embodiment beschreibt auch die Fähigkeit, präsent, sicher und geerdet in deinem Körper zu sein sowie deine Bereitschaft, Entscheidungen für dein Leben im Einklang mit den Bedürfnissen und der Weisheit deines Körpers zu treffen, dem Zuhause deiner Seele. 
          </p>
          
          <p>
            Wenn es um deinen Weg in die Heilung aus deiner Essstörung geht, liegt meine Unterstützung darin, dir diese Fähigkeit bewusst zu machen und auch zu trainieren. Für mehr Präsenz in deinem Leben, für dein SEIN im HIER und JETZT und für die Entfaltung deiner ganzen Kraft. 
          </p>
          
          <p>
            Ein essentieller Teil dabei ist, blockierende Glaubenssätze zu transformieren und dir zu erlauben, neu zu denken. 
          </p>
          
          <p>
            Zudem halte ich für dich einen Raum, der es dir ermöglicht, dich mit der Heilungskraft deines Körpers zu verbinden und mit deinem Frausein, deiner Weiblichkeit. Beides sind wertvolle Ressourcen, die du bereits in dir trägst und die wir gemeinsam freilegen, indem wir deine Essstörung (wie Bulimie, Magersucht oder emotionale Essattacken) mit einbeziehen anstatt sie weg haben zu wollen über liebevolle Inquiry (eine Methode im Coaching, die nachhaltige Selbstreflektions-Prozesse anstösst und Zugang ermöglicht zu tiefliegenden Verletzungen).
          </p>
          
          <h2 className="text-2xl font-semibold text-pink-700 mt-8 mb-4">Meine Erfahrung</h2>
          
          <p>
            Basierend auf meiner eigenen Erfahrung kann ich sagen, dass eine Essstörung zur Entfremdung und Abkopplung vom eigenen Körper führt. Körperliche Empfindungen, Emotionen und Körpersignale werden dadurch nicht mehr oder wenn überhaupt nur distanziert wahrgenommen wie hinter einer Mauer. Es entsteht ein verzerrtes Selbstbild. 
          </p>
          
          <p>
            Oftmals verlierst du jegliches Körpergefühl. Du bist ab dem Brustkorb komplett von dir selbst abgeschnitten und daher nicht präsent im eigenen Körper. Und selbst das passiert total unbewusst. Du merkst es gar nicht. Es ist dein Normal. 
          </p>
          
          <p>
            Das ist ein Schutzmechanismus, dem wir in deinen Sessions neugierig, offen und mit Hingabe begegnen und lernen zu entdecken, mit Hilfe von Embodiment. 
          </p>
          
          <p className="mt-8">
            Ich begleite dich auf deinem Weg in die Klarheit und das Bewusstsein darüber, dass du zu 100% über dein Leben entscheiden kannst und über alles, was darin geschieht. 
          </p>
          
          <p>
            Das bedeutet auch, dass du es bist, die immer die Wahl hat und jederzeit beschließen kann, etwas zu verändern. Das braucht Mut und den hast du, sonst wärst du nicht hier. 
          </p>
        </div>
        
        <div className="mt-12 text-center">
          <ScrollToSectionLink 
            href="/dienstleistungen/essstoerung#wahrhaftig"
            className="inline-flex items-center text-pink-600 hover:text-pink-800 transition-colors group"
          >
            <ArrowLeftIcon className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            Zurück zur Übersicht
          </ScrollToSectionLink>
        </div>
      </div>
    </div>
  );
}
