import { SparklesIcon, HeartIcon, LightBulbIcon, UserGroupIcon, CheckIcon, ArrowRightIcon, ChevronRightIcon, UserCircleIcon, AcademicCapIcon, BookOpenIcon, ClockIcon, FireIcon, ArrowUpRightIcon, GlobeAltIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export function generateMetadata({ params }: { params: { slug?: string } }) {
  // Default metadata for the main Über mich page
  const defaultMetadata = {
    title: 'Über mich | Carina Göb - System-Coach für Essstörungen',
    description: 'Erfahre mehr über meine Geschichte als System-Coach für Essstörungen und ED-Recovery. Persönliche Erfahrung und professionelle Begleitung für deine Heilungsreise.',
    openGraph: {
      title: 'Über mich | Carina Göb - System-Coach für Essstörungen',
      description: 'Erfahre mehr über meine Geschichte als System-Coach für Essstörungen und ED-Recovery. Persönliche Erfahrung und professionelle Begleitung für deine Heilungsreise.',
      url: 'https://www.carina-goeb.com/ueber-mich',
      siteName: 'Carina Göb - System-Coach für Essstörungen',
      locale: 'de_DE',
      type: 'website',
    },
    alternates: {
      canonical: 'https://www.carina-goeb.com/ueber-mich',
    },
  };

  // If we're on the 'mein-weg' subpage
  if (params?.slug === 'mein-weg') {
    return {
      title: 'Mein Weg | Carina Göb - Life & Mindset Coaching',
      description: 'Meine persönliche Reise von 20 Jahren Kampf zur spontanen Heilung und wie ich heute andere auf ihrem Weg begleite.',
      openGraph: {
        ...defaultMetadata.openGraph,
        title: 'Mein Weg | Carina Göb - Life & Mindset Coaching',
        description: 'Meine persönliche Reise von 20 Jahren Kampf zur spontanen Heilung und wie ich heute andere auf ihrem Weg begleite.',
        url: 'https://www.carina-goeb.com/ueber-mich/mein-weg',
      },
      alternates: {
        canonical: 'https://www.carina-goeb.com/ueber-mich/mein-weg',
      },
    };
  }
  
  return defaultMetadata;
}

const sections = [
  {
    title: 'System-Coach für Essstörungen & ED-Recovery',
    content: 'Wenn du das hier liest, darfst du stolz auf dich sein – du möchtest Veränderung. Vielleicht suchst du einen Ausweg aus Bulimie, Magersucht, Binge Eating oder emotionalem Essen. Ich begleite dich auf deinem Weg – einfühlsam, mutig, echt. Ich kenne den Weg, denn ich habe selbst 20 Jahre mit einer Essstörung gelebt und erfahren, dass Heilung möglich ist. Heute bin ich frei davon und lebe in liebevoller Verbindung mit mir und meinem Körper.'
  },
  {
    title: 'Für wen mein Coaching gedacht ist',
    content: '• Menschen mit Essstörungen (Bulimie, Anorexie, Binge Eating, emotionales Essen)\n• Genesende auf der Suche nach Identität ohne Essstörung\n• Eltern oder Partner:innen Betroffener\n• Menschen, die mehr Körperakzeptanz und Selbstverbindung suchen'
  },
  {
    title: 'Meine Arbeit',
    content: 'Meine Arbeit ist ganzheitlich, systemisch, spirituell und basiert auf meiner eigenen Erfahrung sowie Ausbildungen als System-Coach, Holistic Counselor und Rebalancing Bodyworker.'
  },
  {
    title: 'Embodiment als Schlüssel',
    content: 'Im Zentrum meiner Arbeit steht Embodiment – das bewusste Spüren, Erforschen und Wiederverbinden mit deinem Körper, deiner Intuition und inneren Wahrheit. Symptome sind für mich Botschaften, keine Gegner. Über Körperbewusstsein, Inquiry (gezielte Selbstreflexion) und emotionale Integration findest du zurück in dein natürliches Sein. Dabei unterstützen dich u.a. Meditation, Visualisierung, Berührung, Chanting und Healing Movements.'
  },
  {
    title: 'Meine Geschichte',
    content: 'Mit 14 begann meine Bulimie. Ich versteckte sie, schämte mich, funktionierte – bis ein radikales Ereignis 20 Jahre später mein Leben erschütterte und meine Selbstheilung einleitete. In einer Nacht war der Zwang weg – vollständig. Ich spürte tiefen inneren Frieden und begann, meine Geschichte zu verstehen und zu transformieren. Heute bin ich frei, bewusst und lebe mein authentisches Selbst – nicht mehr fremdgesteuert.'
  },
  {
    title: 'Der Weg danach',
    content: 'Die Heilung war ein Geschenk, aber auch eine Herausforderung. Wer bin ich ohne Bulimie? Yoga, Meditation, Reisen und Traumaseminare halfen mir, meine Identität neu zu formen. Heute begleite ich Frauen auf ihrer Reise zurück zu sich – mit Empathie, Tiefe und echter Erfahrung.'
  },
  {
    title: 'Warum du JA sagen kannst',
    content: '• Ich kenne deinen Weg, weil ich ihn gegangen bin\n• Ich teile meine Erkenntnisse und spare dir wertvolle Lebenszeit\n• Ich schaffe einen sicheren Raum ohne Bewertung\n• Mein Ansatz ist individuell, ganzheitlich, nahbar und alltagstauglich\n• Du erhältst Zugang zu einer Community starker Frauen\n• Ganz gleich, wo du gerade stehst – ob am Anfang deiner Heilung oder mitten im Prozess – ich begleite dich. Dein Leben darf leicht, frei und erfüllt sein.'
  }
];

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-gradient-to-b from-white to-pink-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-100 rounded-full opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 rounded-full opacity-20"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-pink-900 mb-4">
              System-Coach für Essstörungen & ED-Recovery
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-xl text-pink-800/90 italic max-w-3xl mx-auto mb-8">
              "Persönliche Erfahrung und professionelle Begleitung für deine Heilungsreise"
            </p>
          </div>
        </div>
      </section>

      {/* Meine Geschichte */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Meine Geschichte
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Meine persönliche Heilungsreise von der Essstörung zur Berufung
            </p>
          </div>
          
          <div className="space-y-16">
            {[
              {
                icon: <ClockIcon className="h-8 w-8" />,
                title: "Mit 14 – Der Beginn",
                text: "Ich war 14, als die Bulimie in mein Leben trat. Scham, Rückzug, Isolation – die Essstörung wurde zu meinem Geheimnis, meiner Strategie, um zu überleben. Ich eskalierte und funktionierte, aber innerlich war ich verloren."
              },
              {
                icon: <FireIcon className="h-8 w-8" />,
                title: "Die Jahre des Versteckens",
                text: "Über 20 Jahre lang bestimmte die Bulimie mein Denken, Fühlen und Handeln. Ich lebte im ständigen Kampf mit mir selbst, sehnte mich nach Liebe, Sicherheit und Zugehörigkeit – fand sie aber nur in der Kontrolle durch die Krankheit."
              },
              {
                icon: <HeartIcon className="h-8 w-8" />,
                title: "Der Tiefpunkt",
                text: "Trennung, Jobverlust, völliger emotionaler Zusammenbruch – in nur vier Wochen fiel alles auseinander. Das Leben schickte mir einen Weckruf. Zum ersten Mal sagte ich mir: Ich will leben. Anders. Wahrhaftig."
              },
              {
                icon: <SparklesIcon className="h-8 w-8" />,
                title: "Die Nacht der Heilung",
                text: "Unerwartet kam sie – über Nacht. Ein inneres energetisches 'Cleansing', das alles veränderte. Der Zwang war weg. Ich wusste intuitiv: es ist vorbei. Für immer. Zum ersten Mal spürte ich Frieden in mir."
              },
              {
                icon: <ArrowUpRightIcon className="h-8 w-8" />,
                title: "Die ersten Schritte danach",
                text: "Die Heilung war echt, aber ungewohnt. Wer bin ich ohne Bulimie? Ich lernte mich neu kennen, begegnete meinem Körper mit Achtsamkeit und in tiefer Verbundenheit. Yoga, Meditation und Stille wurden meine Anker."
              },
              {
                icon: <GlobeAltIcon className="h-8 w-8" />,
                title: "Reisen & Rückverbindung",
                text: "In Indien begegnete ich dem Yoga. In Bali brach ich mein Schweigen – zum ersten Mal teilte ich meine Geschichte. Mein Körper wurde mein Lehrer. Ich fand Kraft im Frausein, Vertrauen ins Leben."
              },
              {
                icon: <MapPinIcon className="h-8 w-8" />,
                title: "Heute – Meine Berufung leben",
                text: "Seit 2016 bin ich vollständig frei von der Bulimie. Ich lebe verbunden, klar, selbstbestimmt. Mein Weg wurde zu meiner Aufgabe: heute begleite ich Frauen auf ihrer Reise – mit Mitgefühl, Tiefe und echter Erfahrung."
              }
            ].map((item, index) => (
              <div key={index} className="relative group">
                {/* Timeline line */}
                {index !== 0 && (
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-1 bg-gray-200" />
                )}
                
                {/* Timeline item */}
                <div className="relative flex flex-col sm:flex-row items-start sm:items-center">
                  {/* Icon */}
                  <div className="relative flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white shadow-lg">
                    {item.icon}
                  </div>

                  {/* Content */}
                  <div className="ml-0 sm:ml-8 mt-4 sm:mt-0 flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-700 text-lg leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mein Ansatz */}
      <section className="relative py-16 sm:py-24">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-50 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float animation-delay-4000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Mein Ansatz
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Meine Arbeit ist ganzheitlich, systemisch, spirituell und basiert auf meiner eigenen Erfahrung sowie Ausbildungen als System-Coach, Holistic Counselor und Rebalancing Bodyworker. Im Zentrum meiner Arbeit steht Embodiment – das bewusste Spüren, Erforschen und Wiederverbinden mit deinem Körper, deiner Intuition und inneren Wahrheit. Symptome sind für mich Botschaften, keine Gegner. Über Körperbewusstsein, Inquiry (gezielte Selbstreflexion) und emotionale Integration findest du zurück in dein natürliches Sein. Dabei unterstützen dich u.a. Meditation, Visualisierung, Berührung, Chanting und Healing Movements. Ich arbeite mit dir systemisch und spirituell, führe dich durch Inquiry-Fragen zu deiner inneren Wahrheit und helfe dir, Fremdenergien zu lösen. Gemeinsam schaffen wir Raum für Heilung – von innen nach außen. Wir würdigen alle Anteile in dir, lösen Blockaden und fördern dein Selbstvertrauen und deine emotionale Resilienz.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Kernwerte */}
            <div className="group relative bg-white/80 p-6 rounded-2xl shadow-sm border border-pink-100">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center text-pink-600">
                  <LightBulbIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Kernwerte</h3>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {/* Ganzheitlicher Ansatz */}
                <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-4 rounded-xl border border-pink-100">
                  <div className="flex items-center justify-center h-16 w-16 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full mb-4">
                    <svg className="h-8 w-8 text-pink-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v8" />
                      <path d="M8 12h8" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-medium text-white mb-2">Ganzheitlich</h4>
                  <p className="text-xs text-white/90">Körper, Geist & Seele</p>
                </div>

                {/* Systemisches Arbeiten */}
                <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-xl border border-purple-100">
                  <div className="flex items-center justify-center h-16 w-16 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full mb-4">
                    <svg className="h-8 w-8 text-purple-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M12 2L2 7L12 12L22 7L12 2z" />
                      <path d="M2 17L12 12L22 17" />
                      <path d="M2 12L12 12" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-medium text-white mb-2">Systemisch</h4>
                  <p className="text-xs text-white/90">Beziehungen & Systeme</p>
                </div>

                {/* Spirituelle Perspektive */}
                <div className="bg-gradient-to-br from-yellow-50 to-pink-50 p-4 rounded-xl border border-yellow-100">
                  <div className="flex items-center justify-center h-16 w-16 bg-gradient-to-br from-yellow-100 to-pink-100 rounded-full mb-4">
                    <svg className="h-8 w-8 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M12 2L2 7L12 12L22 7L12 2z" />
                      <path d="M12 17L2 12L12 7L22 12L12 17z" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-medium text-white mb-2">Spirituell</h4>
                  <p className="text-xs text-white/90">Tiefe Bedeutung</p>
                </div>
              </div>
            </div>

            {/* Methoden */}
            <div className="group relative bg-white/80 p-6 rounded-2xl shadow-sm border border-pink-100">
              <div className="flex items-center mb-6">
                <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-amber-50 to-pink-50 flex items-center justify-center text-amber-600">
                  <BookOpenIcon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 ml-4">Methoden</h3>
              </div>

              <div className="grid grid-cols-3 gap-6">
                {/* Embodiment */}
                <div className="bg-gradient-to-br from-amber-50 to-pink-50 p-4 rounded-xl border border-amber-100">
                  <div className="flex items-center justify-center h-16 w-16 bg-gradient-to-br from-amber-100 to-pink-100 rounded-full mb-4">
                    <svg className="h-8 w-8 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 8v8" />
                      <path d="M8 12h8" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-medium text-white mb-2">Embodiment</h4>
                  <p className="text-xs text-white/90">Körperliche Weisheit</p>
                </div>

                {/* Inquiry */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-100">
                  <div className="flex items-center justify-center h-16 w-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full mb-4">
                    <svg className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M12 2L2 7L12 12L22 7L12 2z" />
                      <path d="M12 17L2 12L12 7L22 12L12 17z" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-medium text-white mb-2">Inquiry</h4>
                  <p className="text-xs text-white/90">Wahrheit erkennen</p>
                </div>

                {/* Emotionale Integration */}
                <div className="bg-gradient-to-br from-green-50 to-teal-50 p-4 rounded-xl border border-green-100">
                  <div className="flex items-center justify-center h-16 w-16 bg-gradient-to-br from-green-100 to-teal-100 rounded-full mb-4">
                    <svg className="h-8 w-8 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M12 2L2 7L12 12L22 7L12 2z" />
                      <path d="M12 17L2 12L12 7L22 12L12 17z" />
                    </svg>
                  </div>
                  <h4 className="text-sm font-medium text-white mb-2">Emotional</h4>
                  <p className="text-xs text-white/90">Gefühlskontakt</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Warum ich? */}
      <section className="relative py-24 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-50 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float animation-delay-4000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Floating Card Header */}
          <div className="relative bg-white/90 backdrop-blur-md p-8 rounded-3xl shadow-2xl border border-white/20 mb-16 transform transition-all duration-500 hover:shadow-2xl hover:shadow-pink-100/50 hover:-translate-y-1">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600">
                  Warum ich?
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-6"></div>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                Warum ich die richtige Begleitung für deine Heilungsreise bin.
              </p>
            </div>
          </div>

          {/* Interactive Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: SparklesIcon,
                title: "Authentische Erfahrung",
                description: "Ich kenne deinen Weg, weil ich ihn gegangen bin",
                longDescription: "Ich habe selbst 20 Jahre Essstörung durchlebt und weiß genau, wie sich das anfühlt. Ich verstehe die ständige Angst vor dem eigenen Körper, das Gefühl nie genug zu sein und die endlose Schleife der Selbstkritik. Diese persönliche Erfahrung ermöglicht es mir, dich wirklich zu verstehen und dir auf Augenhöhe zu begegnen."
              },
              {
                icon: HeartIcon,
                title: "Sicherer Raum",
                description: "Ich schaffe einen Raum ohne Bewertung",
                longDescription: "Ich habe gelernt, wie wichtig es ist, in einem Raum ohne Urteile zu sein. Deshalb schaffe ich eine Atmosphäre, in der du dich wirklich sicher fühlen kannst. Wir arbeiten daran, dass du lernst, dich selbst zu akzeptieren - auch mit all deinen Schwächen und Stärken."
              },
              {
                icon: LightBulbIcon,
                title: "Individueller Ansatz",
                description: "Mein Ansatz ist ganzheitlich und alltagstauglich",
                longDescription: "Ich habe gelernt, dass jeder Mensch einzigartig ist. Deshalb passe ich meinen Ansatz immer an deine Bedürfnisse an. Wir arbeiten gemeinsam daran, Lösungen zu finden, die in deinem Alltag funktionieren. Keine Standardlösungen, sondern eine individuelle Begleitung auf deinem Weg."
              },
              {
                icon: UserGroupIcon,
                title: "Community",
                description: "Zugang zu einer Community starker Frauen",
                longDescription: "Ich habe selbst erlebt, wie wichtig es ist, nicht allein zu bleiben. Deshalb schaffe ich eine Community von Frauen, die ähnliche Erfahrungen machen. Gemeinsam können wir uns stärken, voneinander lernen und einander unterstützen."
              },
              {
                icon: SparklesIcon,
                title: "Effizient",
                description: "Ich spare dir wertvolle Lebenszeit",
                longDescription: "Ich habe gelernt, dass wir Zeit nicht verschwenden sollten. Deshalb arbeite ich mit einem systemischen Ansatz, der direkt auf die Ursachen deiner Essstörung eingeht. Das spart dir wertvolle Zeit und Energie - Zeit, die du stattdessen für dich und dein Leben nutzen kannst."
              },
              {
                icon: HeartIcon,
                title: "Begleitung",
                description: "Ich begleite dich auf deinem Weg",
                longDescription: "Ich habe selbst erlebt, wie wichtig es ist, nicht allein zu bleiben. Deshalb bleibe ich bei dir, durch dick und dünn. Ich begleite dich durch alle Phasen deiner Heilungsreise - von der ersten Erkenntnis bis zur Integration. Du wirst nie allein bleiben."
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="group relative bg-white/80 p-6 rounded-2xl shadow-sm border border-pink-100 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                {/* Animated Icon */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center text-pink-600 transform transition-all duration-500 group-hover:scale-110">
                  <item.icon className="h-8 w-8" />
                </div>
                
                <div className="relative">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {item.title}
                  </h3>
                  
                  {/* Description Card */}
                  <div className="bg-white/80 p-4 rounded-xl border border-pink-100 mb-4">
                    <p className="text-gray-700">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Long Description Card */}
                  <div className="bg-white/80 p-4 rounded-xl border border-pink-100">
                    <p className="text-gray-700">
                      {item.longDescription}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <div className="py-12 sm:py-16 bg-gradient-to-b from-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Bereit für deine Heilungsreise?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Lass uns gemeinsam deinen Weg zurück in dein authentisches Selbst finden.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
              Termin vereinbaren
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
