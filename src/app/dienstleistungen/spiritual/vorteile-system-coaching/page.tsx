import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Vorteile von körperzentriertem, spirituellem System-Coaching',
  description: 'Entdecken Sie die vielfältigen Vorteile eines körperzentrierten, spirituellen System-Coachings speziell für Frauen',
};

export default function VorteileSystemCoachingPage() {
  const benefits = [
    {
      title: 'Wahre Selbstfindung von Innen heraus',
      description: 'Lerne dich selbst und deinen Körper besser kennen. Entdecke deine Ressourcen in dir, anstatt sie im Außen zu suchen. Befreie dich von Konditionierungen, alten Verletzungen und limitierenden Glaubenssätzen über dich, um wieder mehr in Verbindung mit dir selbst zu sein und deiner Weiblichkeit. Owne deinen Zyklus, sei schmerzfrei und in Verbindung mit deinem Hara und deiner Lebensenergie. Finde die Kraft in dir, dein Leben nach deinen Wünschen zu kreieren und dein volles Potential zu entfalten.'
    },
    {
      title: 'Verkörperte Präsenz',
      description: 'Spüre dich in deinem Körper, und trainiere bewusste Körperwahrnehmung und damit die Fähigkeit, voll und ganz im gegenwärtigen Moment zu sein. Verkörperte Präsenz schenkt dir ehrlichen Kontakt mit dir selbst und in deinen Beziehungen. Erlaubt dir, gesunde Grenzen zu setzen und bringt dir Klarheit und Zentriertheit für deine Entscheidungen und in deinen Reaktionen, statt überfordert, reaktiv oder kontrollierend zu sein.'
    },
    {
      title: 'Reduzierung von Leistungsdruck',
      description: 'Durch spürbare, innere Stabilität und Urvertrauen: Sei in Verbindung mit deinem Urvertrauen, der Sicherheit und Stabilität in dir und gehe mit der entspannten Zuversicht durch dein Leben, dass du alles in dir trägst, was es braucht - bei großen Herausforderungen, aber auch im Alltag und in deinem Job.'
    },
    {
      title: 'Gesundes Selbstbild & Körperakzeptanz',
      description: 'Entwickle einen stabilen Selbstwert für liebevolle Körperakzeptanz und wahre Verbundenheit in Beziehungen: Erkenne deinen Selbstwert und befreie dich von Schuld- und Schamgefühlen für eine liebevolle und gesunde Beziehung zu dir selbst und deinem Körper, um echte Intimität, Verbindung und Zugehörigkeit auch in der Beziehung mit anderen Menschen zu ermöglichen.'
    },
    {
      title: 'Authentizität als Superkraft',
      description: 'Klarheit und Einklang im Leben: Deine innere Haltung und deine Gefühle spiegeln sich in deiner äußeren Erscheinung und deinem Verhalten wider. Es gibt keine Diskrepanz zwischen dem, was du fühlst und dem, was du zeigst, wer du bist. Durch deine gelebte und verkörperte Authentizität ziehst du weniger ambivalentes Verhalten in deinen Beziehungen an und erkennst sehr viel schneller, wer wahres Interesse an dir hat.'
    },
    {
      title: 'Zielgerichtetes, sinnerfülltes Handeln',
      description: 'Richte deine täglichen Entscheidungen und langfristigen Ziele an deinem inneren Wertekompass aus und erschaffe dir ein Leben voller Integrität, Wirksamkeit und Erfüllung. Verkörpere du selbst die Veränderung, die du dir wünschst und inspiriere andere, das Gleiche zu tun.'
    },
    {
      title: 'Integration moderner Spiritualität im Business',
      description: 'Entdecke, wie du moderne Spiritualität in deiner Arbeit oder in deinem Unternehmen integrieren kannst, um nachhaltigen Erfolg zu erzielen, der dich tief in dir drin nährt und dir Energie schenkt, anstatt dich zu erschöpfen. Erfolg, der inspiriert und kraftvolle Räume öffnet für weibliche Qualitäten wie in Co-Creation zu sein, mit deinem Team und auch mit anderen Business Partner/-innen.'
    },
    {
      title: 'Mentale Stärke',
      description: 'Entwickle deine eigene spirituelle Praxis, die dich die Kraft deiner Gedanken erkennen und nutzen lässt und die dich durch die Ups and Downs in deinem Leben trägt und Blockaden in Chancen für Wachstum und Weisheit verwandelt.'
    },
    {
      title: 'Integrierte Ganzheitlichkeit',
      description: 'Heile deine Verletzungen und die von dir (unbewusst) getrennten Anteile, um zurückzukehren in deine Essenz und den Flow von: '
    }
  ];


  return (
    <div className="bg-white pt-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Die Vorteile von körperzentriertem, spirituellem System-Coaching
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-500 to-purple-500 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Entdecke, wie du durch gezielte Methoden zu mehr Lebensqualität und innerer Harmonie findest
          </p>
        </div>
        
        <div className="w-full mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const colors = [
                { bg: 'from-pink-50 to-pink-100', border: 'border-pink-200', accent: 'from-pink-400 to-pink-500' },
                { bg: 'from-purple-50 to-purple-100', border: 'border-purple-200', accent: 'from-purple-400 to-purple-500' },
                { bg: 'from-blue-50 to-blue-100', border: 'border-blue-200', accent: 'from-blue-400 to-blue-500' },
                { bg: 'from-teal-50 to-teal-100', border: 'border-teal-200', accent: 'from-teal-400 to-teal-500' },
                { bg: 'from-amber-50 to-amber-100', border: 'border-amber-200', accent: 'from-amber-400 to-amber-500' },
                { bg: 'from-emerald-50 to-emerald-100', border: 'border-emerald-200', accent: 'from-emerald-400 to-emerald-500' },
              ][index % 6];
              
              return (
                <div key={index} className="group relative overflow-hidden h-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.bg} rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  <div className={`relative h-full bg-white rounded-xl border ${colors.border} p-6 transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-lg`}>
                    <div className={`w-12 h-1 bg-gradient-to-r ${colors.accent} mb-4 rounded-full transform group-hover:scale-110 origin-left transition-transform duration-300`}></div>
                    <h2 className="text-lg font-bold text-gray-900 mb-3 relative z-10">{benefit.title}</h2>
                    <p className="text-gray-600 text-sm relative z-10 leading-relaxed">{benefit.description}</p>
                    <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-full bg-white opacity-10 group-hover:opacity-20 transition-opacity duration-300"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Bereit für deine Reise zu dir selbst?</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Entdecke, wie du mit einem persönlichen Coaching dein volles Potential entfalten und ein erfülltes Leben in Einklang mit deiner wahren Natur führen kannst.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 transition-colors shadow-md hover:shadow-lg"
          >
            <span>Kostenloses Kennenlerngespräch vereinbaren</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
