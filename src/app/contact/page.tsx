import { EnvelopeIcon, PhoneIcon, MapPinIcon, CalendarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export const metadata = {
  title: 'Kontakt & Terminbuchung | Carina Göb - Life & Mindset Coaching',
  description: 'Buche dein kostenloses Kennenlerngespräch oder nimm Kontakt mit mir auf. Ich freue mich, von dir zu hören!',
};

const contactMethods = [
  {
    name: 'E-Mail',
    value: 'info@carinagoeb.de',
    href: 'mailto:info@carinagoeb.de',
    icon: EnvelopeIcon,
  },
  {
    name: 'Telefon',
    value: '+49 123 456789',
    href: 'tel:+49123456789',
    icon: PhoneIcon,
  },
  {
    name: 'Standort',
    value: 'Musterstraße 123, 12345 Berlin',
    href: 'https://maps.google.com',
    icon: MapPinIcon,
  },
];

export default function Contact() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Kontakt & Terminbuchung</span>
            <span className="block text-primary-600 mt-4">Ich freue mich auf dich!</span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-xl text-gray-600">
            Buche dein kostenloses Kennenlerngespräch oder nimm direkt Kontakt mit mir auf.
          </p>
          
          <div className="mt-10 flex justify-center">
            <Link 
              href="/buchen" 
              className="inline-flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-primary-600 hover:bg-primary-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 hover:shadow-lg"
            >
              <CalendarIcon className="h-6 w-6 mr-2" />
              Termin vereinbaren
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      


      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-12 h-1 bg-primary-600 mx-auto mb-6 rounded-full"></div>
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Häufige Fragen
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Alles was du über mein Coaching wissen möchtest
            </p>
          </div>

          <div className="mt-12">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-12">
              {[
                {
                  question: 'Wie läuft ein Coaching ab?',
                  answer: 'Ein Coaching beginnt mit einem kostenlosen Erstgespräch auf Zoom, in dem wir uns kennenlernen und dein Anliegen besprechen und was du gerne erreichen möchtest. Danach erstelle ich ein individuelles Konzept für dich. Je nachdem wie intensiv eine Sitzung war, empfehle ich meist einen 2-4 Wochen Turnus zwecks Integration für dein System. Generell entscheidest du selbst wann und wie oft: deine Reise, dein Tempo. Je nach Packet hast du zusätzlich Email Support und wir haben Community Coaching calls in denen du teilnehmen kannst für Austausch & Rückfragen.'
                },
                {
                  question: 'Wie lange dauert ein Coaching?',
                  answer: 'Meine Zusammenarbeit mit dir beginnt bei einem Minimum von 4 Stunden. Darüberhinaus ist die Dauer des Coachings komplett abhängig von deinem individuellen Anliegen und wie tief du gehen möchtest. Nach Abschluss eines Coaching-Pakets besteht die Möglichkeit, bei Bedarf weitere Einzelsessions (120,00 EUR/Stunde) zu buchen. Wir bleiben hier im direkten Austausch, damit du dich jederzeit gut aufgehoben fühlst.'
                },
                {
                  question: 'Kann ich das Coaching auch online machen?',
                  answer: 'Ja, ich biete alle meine Coachings auch online per Video-Call an. Die Qualität der Beratung ist dabei genauso hoch wie bei einem Präsenztermin. Der einzige Unterschied ist, dass ich bei Präsenzterminen zusätzlich noch direkte Körperarbeit in Form von Rebalancing Massagen mit anbiete, wenn du das möchtest.'
                },
                {
                  question: 'Was kostet ein Coaching?',
                  answer: 'Ich biete 4\'er, 8\'er und 12\'er Packete an und je nach Größe wird der Preis pro Stunde günstiger für dich. Mein Angebot findest du auf der Webseite. Generell biete ich dir die Möglichkeit nach der ersten abgeschlossenen Session zu entscheiden, ob du mit mir weiter arbeiten möchtest und welches Packet du buchen möchtest. Die Rechnungsstellung erfolgt zeitgleich mit deiner Entscheidung, sodass wir beide Planungssicherheit haben und auch ein gegenseitiges Commitment.'
                },
              ].map((faq, index) => (
                <div key={index} className="relative bg-gray-50 p-6 rounded-2xl shadow-sm">
                  <dt className="text-lg font-medium text-gray-900">
                    <p className="flex items-center gap-2">
                      <span className="text-primary-600">{index + 1}.</span>
                      {faq.question}
                    </p>
                  </dt>
                  <dd className="mt-3 text-base text-gray-600">
                    {faq.answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-base text-gray-500">
              Du hast noch weitere Fragen?{' '}
              <a href="mailto:connect@carina-coaching.com?subject=Anfrage%20%C3%BCber%20Carina%20Coaching&body=Sehr%20geehrte%20Frau%20Goeb%2C%0D%0A%0D%0A" className="font-medium text-primary-600 hover:text-primary-500">
                Nachricht schreiben
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
