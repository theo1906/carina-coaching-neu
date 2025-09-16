import Link from 'next/link';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Meine Heilungsreise - Carina Coaching',
  description: 'Meine persönliche Reise durch 20 Jahre Essstörung hin zu einem Leben in Freiheit und Selbstbestimmung.',
};

export default function MeineHeilungsreisePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-pink-100 to-white pt-32 pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-15"></div>
        </div>
        
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Meine Heilungsreise aus 20 Jahren Essstörung
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-500 mx-auto mb-8"></div>
            <p className="text-2xl text-pink-800/90 italic max-w-2xl mx-auto mb-8">
              Ein ehrlicher Rückblick auf meinen Weg in die Freiheit
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-gray-700 text-lg leading-relaxed">
            <p className="mb-6">
              Mit dem ehrlichen Eingeständnis mir selbst gegenüber, dass ich krank bin und an Bulimie leide, hat damals 2015 meine eigene Heilungsreise begonnen. Das ist auch der Grund, warum ich hier meine Geschichte teile und Coaching für Essstörungen anbiete. 
              <br /><br />
              Ich weiss, wie wichtig es ist, für sich selbst anzuerkennen, was ist und sich damit zu zeigen. 
            </p>
            <p className="mb-6 pl-6 border-l-4 border-pink-400">
              "Angst mit Mut zu begegnen und bedingungslos zu sich selbst zu stehen. Vielleicht kann ich ja dadurch auch dich heute, hier und jetzt in diesem Moment dazu inspirieren, das Gleiche zu tun."
            </p>
            
            <p>
              Das ist bereits der erste große Schritt in die Heilung. Du bist nicht alleine.
            </p>
            
            <p>
              Um Hilfe zu fragen, eine Therapie zu machen oder spezielle stationäre Einrichtungen aufzusuchen, war mit meinem damaligen Mindset keine Option. Für mich hat sich das so angefühlt, als ob mir dadurch ein Stempel aufgedrückt würde. Das hat meine Gefühle von Scham, Schuld und Ekel zusätzlich zur eh schon im Kopf vorhandenen "Abspaltung"/ Trennung von den anderen, den "Normalen", verstärkt. 
            </p>
            
            <p>
              Für mich gab es damals nur einen Weg: mich verstecken und irgendwie alleine klar kommen. Bloß nicht auffallen, Ärger verursachen, anstrengend sein, um Hilfe bitten oder gar Raum einnehmen für mich und meine Bedürfnisse. Ich bin zu viel. Das war mein stärkster Glaubenssatz seit frühester Kindheit. Auch schon vor der Bulimie. 
            </p>
            
            <p className="mb-6 pl-6 border-l-4 border-pink-400">
              "Heute weiss ich, um Unterstützung zu fragen und Hilfe anzunehmen ist eine Superpower und eine der größten Ressourcen für Heilung."
            </p>
            
            <p>
              Damals war ich da nicht. Der Preis war hoch: ich war über 20 Jahre lang nie ehrlich, mir selbst gegenüber nicht und keinem anderen. 
            </p>
            
            <p>
              Damals mit Beginn der Krankheit war ich 14 Jahre alt. Ich habe mich so sehr geschämt, dass ich mich lieber habe schlagen und demütigen lassen als zu erzählen, was mit mir los ist. 
            </p>
            
            <p>
              Die Essstörung hat mich, meinen Körper und mein Leben vollkommen vereinnahmt und das in einer rasanten Geschwindigkeit. Die Bulimie wurde zu meiner Identität und mit ihr kam meine Wesensveränderung, ein radikaler Leistungsabfall in der Schule und das Wiederholen vom Abitur, Diebstahl, betrunkenes Fahren und ein Autounfall nach dem anderen bis hin zur MPU. 
            </p>
            
            <p>
              Als junge Frau war ich so abgeschnitten von mir und meinem Körper, dass ich keinerlei Grenzen gespürt und auch nicht gesetzt habe - weder in Beziehungen noch in meinen sexuellen Erfahrungen. 
            </p>
            
            <p>
              Übergriffe, Drogen, Ambivalenz, Co-Abhängigkeit und eine 9 Jahre lang narzisstische On and Off Beziehung waren die Folge. 
            </p>
            
            <p>
              Neben dem täglichen Kampf von Isolation und Erschöpfung durch Erbrechen und der Suche nach Liebe, Anerkennung und Zugehörigkeit durch Leistung. 
            </p>
            
            <p>
              Bis ich im Alter von 27 Jahren einem Menschen begegnet bin, der mich hat so lieben lassen wie noch nie zuvor und von dem ich so sehr geliebt wurde wie nie zuvor. Wir wollten zusammen alt werden. Gemeinsam haben wir uns ein Zuhause geschaffen, in dem ich mich zum ersten Mal in meinem Leben komplett sicher gefühlt habe und geborgen. 
            </p>
            
            <p>
              Aber auch hier war die Scham über meine Krankheit größer, hat mich "gefangen" gehalten in meinen Überlebens- und Schutzstrategien und damit die Beziehung und den Weg, sich ein gemeinsames Leben aufzubauen, sabotiert. 
            </p>
            
            <p>
              Ein sehr plötzliches Ende der Beziehung nach 5 Jahren hat mein Herz gebrochen. Ich musste ausziehen und zudem kam gleichzeitig die betriebsbedingte Kündigung aus meinem Job. Alles innerhalb von 4 Wochen. 
            </p>
            
            <p>
              Das Leben hat mir einen Weckruf geschickt, der nicht mehr zu ignorieren war. 
            </p>
            
            <p>
              Der Schmerz, meine Verzweiflung und Suizidgedanken haben mich so tief berührt, dass ich nicht mehr anders konnte als für mich in die radikale Selbstverantwortung zu gehen und anzunehmen, was mir passiert ist. 
            </p>
            
            <p>
              Das hat in mir eine Kraft geweckt, die mich angefangen hat zu leiten. Diese Stimme in mir wurde immer deutlicher und mit ihr kam meine tiefe Herzensentscheidung zu leben: gesund, selbstbestimmt und glücklich. 
            </p>
            
            <p>
              Ich war fest entschlossen. 
            </p>
            
            <p>
              Die Heilung kam über Nacht. Unerwartet und ohne jegliche Vorankündigung. 
            </p>
            
            <p>
              Es war wie eine Art "energetisches Cleansing", das stattgefunden hat und mein System befreit hat von Fremdenergien und Emotionen, die ich all die Jahre unterdrückt und dadurch bei mir gehalten habe. 
            </p>
            
            <p>
              Ich erinnere mich noch wie heute an den Tag danach. Das erste Mal nach 20 Jahren hatte ich nicht mehr den Zwang, mich zu übergeben nach dem Essen. 
            </p>
            
            <p>
              Im Gegenteil: alles in mir hat sich verbunden angefühlt und so friedlich. Es war magisch und ist es bis heute. 
            </p>
            
            <p>
              Rückblickend weiss ich: es war kein Zufall, ich war bereit. 
            </p>
            
            <p>
              Ich habe angefangen, mir Fragen zu stellen, die mich das Große Ganze haben erkennen lassen. Ich bin raus aus der Opferrolle und in die Eigenverantwortung und habe begonnen, aktiv mein Leben zu gestalten. Ich habe meine Realität verändert, indem ich mein Bewusstsein erweitert und mich für Heilung geöffnet habe. 
            </p>
            
            <p>
              Ich bin heute als erwachsene, gesunde Frau sehr dankbar und im Frieden mit allem, genauso wie es war, denn meine Erfahrungen zeigen, wie unglaublich kraftvoll unsere Überzeugungen (negative oder positive) sich auf die Heilkraft unseres Körpers auswirken können. 
            </p>
            
            <p>
              Seit 2016 bin ich vollkommen frei von der Bulimie, lebe in tiefer Verbindung mit mir und meinem Körper und kann mit meiner Geschichte Inspiration und Hoffnung schenken. Was ich geschafft habe, kannst du auch. 
            </p>
            
            <p>
              In meiner Arbeit möchte ich dich bestärken, loszugehen für dich und deine Heilung und dir auch Schritte aufzeigen, wenn es darum geht, dich wieder zu entdecken in einem Leben ohne Essstörung. Das ist ein sehr wichtiger Teil des Prozesses. 
            </p>
            
          </div>
        </div>
      </section>

      {/* Back Button at Bottom */}
      <div className="py-8 text-center">
        <Link 
          href="/Services/essstorung#embodiment" 
          className="inline-flex items-center text-pink-600 hover:text-pink-800 transition-colors duration-300 group text-lg"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2 group-hover:-translate-x-1 transition-transform" />
          Zurück zur Übersicht
        </Link>
      </div>
    </div>
  );
}
