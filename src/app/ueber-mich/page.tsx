import { SparklesIcon, HeartIcon, LightBulbIcon, UserGroupIcon, ArrowRightIcon, ClockIcon, FireIcon, ArrowUpRightIcon, GlobeAltIcon, MapPinIcon } from '@heroicons/react/24/outline';
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

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="relative py-20 md:py-32 bg-gradient-to-b from-white to-pink-50 overflow-hidden">
        <div className="absolute inset-0" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-100 rounded-full opacity-20 animate-float"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 rounded-full opacity-20 animate-float animation-delay-2000"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center py-12 md:py-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-900 mb-6 font-display">
              System-Coach für Essstörungen & ED-Recovery
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-8" aria-hidden="true"></div>
            <p className="text-lg sm:text-xl text-pink-800/90 italic max-w-3xl mx-auto">
              "Persönliche Erfahrung und professionelle Begleitung für deine Heilungsreise"
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Meine Geschichte Section */}
          <section className="mb-16 md:mb-24">
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-display">
                Meine Geschichte
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-6"></div>
              <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
                Meine persönliche Heilungsreise von der Essstörung zur Berufung
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
              
              <div className="space-y-12 md:space-y-16">
                {[
                  {
                    icon: <ClockIcon className="h-6 w-6" />,
                    title: "Mit 14 – Der Beginn",
                    text: "Ich war 14, als die Bulimie in mein Leben trat. Scham, Rückzug, Isolation – die Essstörung wurde zu meinem Geheimnis, meiner Strategie, um zu überleben. Ich eskalierte und funktionierte, aber innerlich war ich verloren."
                  },
                  {
                    icon: <FireIcon className="h-6 w-6" />,
                    title: "Die Jahre des Versteckens",
                    text: "Über 20 Jahre lang bestimmte die Bulimie mein Denken, Fühlen und Handeln. Ich lebte im ständigen Kampf mit mir selbst, sehnte mich nach Liebe, Sicherheit und Zugehörigkeit – fand sie aber nur in der Kontrolle durch die Krankheit."
                  },
                  {
                    icon: <HeartIcon className="h-6 w-6" />,
                    title: "Der Tiefpunkt",
                    text: "Trennung, Jobverlust, völliger emotionaler Zusammenbruch – in nur vier Wochen fiel alles auseinander. Das Leben schickte mir einen Weckruf. Zum ersten Mal sagte ich mir: Ich will leben. Anders. Wahrhaftig."
                  },
                  {
                    icon: <SparklesIcon className="h-6 w-6" />,
                    title: "Die Nacht der Heilung",
                    text: "Unerwartet kam sie – über Nacht. Ein inneres energetisches 'Cleansing', das alles veränderte. Der Zwang war weg. Ich wusste intuitiv: es ist vorbei. Für immer. Zum ersten Mal spürte ich Frieden in mir."
                  },
                  {
                    icon: <ArrowUpRightIcon className="h-6 w-6" />,
                    title: "Die ersten Schritte danach",
                    text: "Die Heilung war echt, aber ungewohnt. Wer bin ich ohne Bulimie? Ich lernte mich neu kennen, begegnete meinem Körper mit Achtsamkeit und in tiefer Verbundenheit. Yoga, Meditation und Stille wurden meine Anker."
                  },
                  {
                    icon: <GlobeAltIcon className="h-6 w-6" />,
                    title: "Reisen & Rückverbindung",
                    text: "In Indien begegnete ich dem Yoga. In Bali brach ich mein Schweigen – zum ersten Mal teilte ich meine Geschichte. Mein Körper wurde mein Lehrer. Ich fand Kraft im Frausein, Vertrauen ins Leben."
                  },
                  {
                    icon: <MapPinIcon className="h-6 w-6" />,
                    title: "Heute – Meine Berufung leben",
                    text: "Seit 2016 bin ich vollständig frei von der Bulimie. Ich lebe verbunden, klar, selbstbestimmt. Mein Weg wurde zu meiner Aufgabe: heute begleite ich Frauen auf ihrer Reise – mit Mitgefühl, Tiefe und echter Erfahrung."
                  }
                ].map((item, index) => (
                  <div key={index} className="relative pl-12 md:pl-0 md:grid md:grid-cols-2 md:gap-8">
                    {/* Left side - Date/Title */}
                    <div className="md:text-right md:pr-8 relative">
                      {index % 2 === 0 ? (
                        <div className="md:pr-8">
                          <div className="md:hidden absolute left-0 top-0 w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white -ml-12">
                            {item.icon}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                        </div>
                      ) : (
                        <div className="hidden md:block h-full">
                          <div className="h-full flex items-center justify-end">
                            <div className="text-right">
                              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Center dot */}
                    <div className="hidden md:flex items-center justify-center relative">
                      <div className="w-4 h-4 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 z-10"></div>
                    </div>
                    
                    {/* Right side - Content */}
                    <div className="mt-2 md:mt-0 md:pl-8 relative">
                      {index % 2 === 0 ? (
                        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                          <p className="text-gray-700">{item.text}</p>
                        </div>
                      ) : (
                        <div className="md:hidden">
                          <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white -ml-12">
                            {item.icon}
                          </div>
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mt-2">
                            <p className="text-gray-700">{item.text}</p>
                          </div>
                        </div>
                      )}
                      
                      {index % 2 === 1 && (
                        <div className="hidden md:block">
                          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                            <p className="text-gray-700">{item.text}</p>
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Mobile dot */}
                    <div className="md:hidden absolute left-0 top-0 w-8 h-8 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center text-white -ml-10">
                      {item.icon}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Mein Ansatz Section */}
          <section className="relative py-16 sm:py-24">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
              <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
              <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-yellow-50 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float animation-delay-4000"></div>
            </div>

            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="flex items-center justify-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center text-pink-600 shadow-md">
                    <SparklesIcon className="h-6 w-6" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900 ml-4">
                    Mein Ansatz
                  </h2>
                </div>
                <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto mb-6"></div>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                  Meine Arbeit ist ganzheitlich, systemisch, spirituell und basiert auf meiner eigenen Erfahrung sowie Ausbildungen als System-Coach, Holistic Counselor und Rebalancing Bodyworker. Im Zentrum meiner Arbeit steht Embodiment – das bewusste Spüren, Erforschen und Wiederverbinden mit deinem Körper, deiner Intuition und inneren Wahrheit.
                </p>
              </div>

              {/* Kernwerte und Methoden */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Kernwerte */}
                <div className="group relative bg-white/80 p-6 rounded-2xl shadow-sm border border-pink-100">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-pink-50 to-purple-50 flex items-center justify-center text-pink-600">
                      <LightBulbIcon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ml-4">Kernwerte</h3>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {/* Ganzheitlich */}
                    <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-4 rounded-xl border border-pink-100 text-center">
                      <div className="flex items-center justify-center h-12 w-12 bg-gradient-to-br from-pink-100 to-purple-100 rounded-full mb-2 mx-auto">
                        <svg className="h-6 w-6 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                      <h4 className="text-sm font-medium text-gray-900">Ganzheitlich</h4>
                      <p className="text-xs text-gray-600">Körper, Geist & Seele</p>
                    </div>

                    {/* Systemisch */}
                    <div className="bg-gradient-to-br from-purple-50 to-indigo-50 p-4 rounded-xl border border-purple-100 text-center">
                      <div className="flex items-center justify-center h-12 w-12 bg-gradient-to-br from-purple-100 to-indigo-100 rounded-full mb-2 mx-auto">
                        <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                      </div>
                      <h4 className="text-sm font-medium text-gray-900">Systemisch</h4>
                      <p className="text-xs text-gray-600">Zusammenhänge erkennen</p>
                    </div>

                    {/* Spirituell */}
                    <div className="bg-gradient-to-br from-amber-50 to-pink-50 p-4 rounded-xl border border-amber-100 text-center">
                      <div className="flex items-center justify-center h-12 w-12 bg-gradient-to-br from-amber-100 to-pink-100 rounded-full mb-2 mx-auto">
                        <svg className="h-6 w-6 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <h4 className="text-sm font-medium text-gray-900">Spirituell</h4>
                      <p className="text-xs text-gray-600">Tiefe Verbindung</p>
                    </div>
                  </div>
                </div>

                {/* Methoden */}
                <div className="group relative bg-white/80 p-6 rounded-2xl shadow-sm border border-pink-100">
                  <div className="flex items-center mb-6">
                    <div className="flex-shrink-0 h-12 w-12 rounded-full bg-gradient-to-br from-amber-50 to-pink-50 flex items-center justify-center text-amber-600">
                      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 ml-4">Methoden</h3>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    {/* Embodiment */}
                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-xl border border-blue-100 text-center">
                      <div className="flex items-center justify-center h-12 w-12 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full mb-2 mx-auto">
                        <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                      <h4 className="text-sm font-medium text-gray-900">Embodiment</h4>
                      <p className="text-xs text-gray-600">Körperliche Weisheit</p>
                    </div>

                    {/* Inquiry */}
                    <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100 text-center">
                      <div className="flex items-center justify-center h-12 w-12 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full mb-2 mx-auto">
                        <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <h4 className="text-sm font-medium text-gray-900">Inquiry</h4>
                      <p className="text-xs text-gray-600">Selbstreflexion</p>
                    </div>

                    {/* Integration */}
                    <div className="bg-gradient-to-br from-purple-50 to-violet-50 p-4 rounded-xl border border-purple-100 text-center">
                      <div className="flex items-center justify-center h-12 w-12 bg-gradient-to-br from-purple-100 to-violet-100 rounded-full mb-2 mx-auto">
                        <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                        </svg>
                      </div>
                      <h4 className="text-sm font-medium text-gray-900">Integration</h4>
                      <p className="text-xs text-gray-600">Ganzheitliche Heilung</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Warum ich Section */}
          <section className="relative py-24 overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
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

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    icon: <SparklesIcon className="h-8 w-8" />,
                    title: "Authentische Erfahrung",
                    description: "Ich kenne deinen Weg, weil ich ihn gegangen bin",
                    longDescription: "Ich habe selbst 20 Jahre Essstörung durchlebt und weiß genau, wie sich das anfühlt. Ich verstehe die ständige Angst vor dem eigenen Körper, das Gefühl nie genug zu sein und die endlose Schleife der Selbstkritik."
                  },
                  {
                    icon: <HeartIcon className="h-8 w-8" />,
                    title: "Sicherer Raum",
                    description: "Ich schaffe einen Raum ohne Bewertung",
                    longDescription: "Ich habe gelernt, wie wichtig es ist, in einem Raum ohne Urteile zu sein. Deshalb schaffe ich eine Atmosphäre, in der du dich wirklich sicher fühlen kannst. Wir arbeiten daran, dass du lernst, dich selbst zu akzeptieren."
                  },
                  {
                    icon: <LightBulbIcon className="h-8 w-8" />,
                    title: "Individueller Ansatz",
                    description: "Mein Ansatz ist ganzheitlich und alltagstauglich",
                    longDescription: "Ich habe gelernt, dass jeder Mensch einzigartig ist. Deshalb passe ich meinen Ansatz immer an deine Bedürfnisse an. Wir arbeiten gemeinsam daran, Lösungen zu finden, die in deinem Alltag funktionieren."
                  },
                  {
                    icon: <UserGroupIcon className="h-8 w-8" />,
                    title: "Community",
                    description: "Zugang zu einer Community starker Frauen",
                    longDescription: "Ich habe selbst erlebt, wie wichtig es ist, nicht allein zu bleiben. Deshalb schaffe ich eine Community von Frauen, die ähnliche Erfahrungen machen. Gemeinsam können wir uns stärken und voneinander lernen."
                  },
                  {
                    icon: <ClockIcon className="h-8 w-8" />,
                    title: "Effizienz",
                    description: "Ich spare dir wertvolle Lebenszeit",
                    longDescription: "Ich habe gelernt, dass wir Zeit nicht verschwenden sollten. Deshalb arbeite ich mit einem systemischen Ansatz, der direkt auf die Ursachen deiner Essstörung eingeht. Das spart dir wertvolle Zeit und Energie."
                  },
                  {
                    icon: <HeartIcon className="h-8 w-8" />,
                    title: "Begleitung",
                    description: "Ich begleite dich auf deinem Weg",
                    longDescription: "Ich habe selbst erlebt, wie wichtig es ist, nicht allein zu bleiben. Deshalb bleibe ich bei dir, durch dick und dünn. Ich begleite dich durch alle Phasen deiner Heilungsreise."
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="group relative bg-white/80 p-6 rounded-2xl shadow-sm border border-pink-100 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    {/* Animated Icon */}
                    <div className="absolute -top-4 -left-4 w-16 h-16 bg-pink-50 rounded-full flex items-center justify-center text-pink-600 transform transition-all duration-500 group-hover:scale-110">
                      {item.icon}
                    </div>
                    
                    <div className="relative pt-8">
                      <h3 className="text-xl font-semibold text-gray-900 mb-4">
                        {item.title}
                      </h3>
                      
                      {/* Description Card */}
                      <div className="mb-4">
                        <p className="text-gray-700 font-medium">
                          {item.description}
                        </p>
                      </div>
                      
                      {/* Long Description Card */}
                      <div className="bg-white/80 p-4 rounded-xl border border-pink-100">
                        <p className="text-gray-700 text-sm">
                          {item.longDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Call to Action */}
      <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-pink-50">
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
      </section>
    </div>
  );
}
