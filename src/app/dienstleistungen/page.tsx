import { Metadata } from 'next';
import Link from 'next/link';
import { HeartIcon, SparklesIcon } from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Ganzheitliches Coaching-Angebot für Frauen | Carina Coaching',
  description:
    'Entdecke mein Coaching-Angebot: systemisches Coaching bei Essstörungen & spirituelles Life Coaching für Frauen – finde den Weg, der zu dir passt.',
  alternates: {
    canonical: 'https://carina-coaching.com/dienstleistungen/',
  },
  openGraph: {
    title: 'Ganzheitliches Coaching-Angebot für Frauen | Carina Coaching',
    description:
      'Entdecke mein Coaching-Angebot: systemisches Coaching bei Essstörungen & spirituelles Life Coaching für Frauen – finde den Weg, der zu dir passt.',
    url: 'https://carina-coaching.com/dienstleistungen/',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ganzheitliches Coaching-Angebot für Frauen | Carina Coaching',
    description:
      'Entdecke mein Coaching-Angebot: systemisches Coaching bei Essstörungen & spirituelles Life Coaching für Frauen – finde den Weg, der zu dir passt.',
  },
};

const services = [
  {
    title: 'Coaching bei Essstörungen',
    description: 'Systemisches Coaching bei Essstörungen & ED Recovery. Heilung durch Körperweisheit und emotionale Befreiung.',
    href: '/dienstleistungen/essstoerung',
    icon: HeartIcon,
    color: 'from-rose-500 to-pink-600',
    bgColor: 'bg-gradient-to-br from-rose-50 to-pink-50'
  },
  {
    title: 'Spirituelles Life Coaching',
    description: 'Entdecke deine innere Kraft und finde deinen Weg zu einem erfüllten Leben.',
    href: '/dienstleistungen/spirituelles-life-coaching',
    icon: SparklesIcon,
    color: 'from-purple-500 to-fuchsia-600',
    bgColor: 'bg-gradient-to-br from-purple-50 to-fuchsia-50'
  }
];

export default function DienstleistungenPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-b from-white to-rose-50">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-rose-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-fuchsia-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute top-1/3 -right-20 w-48 h-48 bg-gradient-to-br from-rose-100 to-fuchsia-100 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
          <div className="absolute -top-20 left-1/4 w-64 h-64 bg-gradient-to-br from-fuchsia-100 to-rose-100 rounded-full mix-blend-multiply filter blur-2xl opacity-15"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gradient from-pink-600 to-purple-600 bg-clip-text bg-gradient-to-r mb-6">
              Dienstleistungen
            </h1>
            <div className="w-32 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8"></div>
            <p className="text-xl text-pink-800/90 italic max-w-3xl mx-auto mb-8">
              "Entdecke meine Coaching-Angebote und finde den Weg, der zu dir passt"
            </p>
          </div>
        </div>
      </section>

      {/* Service Tiles Section */}
      <section className="py-16 bg-gradient-to-br from-white to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 to-transparent opacity-10"></div>
        <div className="absolute -top-24 -right-40 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        
        <div className="max-w-7xl mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={index}
                  href={service.href}
                  className="group block"
                >
                  <div className={`${service.bgColor} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-white/50`}>
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pink-600 group-hover:to-purple-600 transition-all duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    
                    {/* Arrow indicator */}
                    <div className="flex items-center text-pink-600 font-medium group-hover:text-pink-700 transition-colors duration-200">
                      <span>Mehr erfahren</span>
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
