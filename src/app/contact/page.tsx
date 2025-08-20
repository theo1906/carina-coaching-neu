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
                  answer: 'Ein Coaching beginnt mit einem kostenlosen Kennenlerngespräch, in dem wir uns kennenlernen und dein Anliegen besprechen. Danach erstelle ich ein individuelles Konzept für dich. Die Sitzungen finden in der Regel wöchentlich oder alle zwei Wochen statt und dauern 60-90 Minuten.'
                },
                {
                  question: 'Wie lange dauert ein Coaching?',
                  answer: 'Die Dauer des Coachings hängt von deinem individuellen Anliegen ab. Manche Themen lassen sich in wenigen Sitzungen klären, während andere eine längere Begleitung erfordern. In der Regel umfasst ein Coaching zwischen 5 und 15 Sitzungen.'
                },
                {
                  question: 'Kann ich das Coaching auch online machen?',
                  answer: 'Ja, ich biete alle meine Coachings auch online per Video-Call an. Die Qualität der Beratung ist dabei genauso hoch wie bei einem Präsenztermin.'
                },
                {
                  question: 'Was kostet ein Coaching?',
                  answer: 'Die Kosten richten sich nach Art und Umfang des Coachings. Einzelcoaching beginnt bei 120€ pro Stunde. Im Rahmen eines kostenlosen Erstgesprächs können wir deine Bedürfnisse besprechen und dir ein individuelles Angebot unterbreiten.'
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
              <a href="mailto:info@carinagoeb.de" className="font-medium text-primary-600 hover:text-primary-500">
                Nachricht schreiben
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
