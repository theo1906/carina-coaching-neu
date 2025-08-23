import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary-50 to-pink-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
          Bereit für deine Transformation?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Heilung ist möglich — in jedem Moment. Du trägst bereits alles in dir, was du
          dazu brauchst. Ich bin hier, um dich daran zu erinnern. Dich auf deinem Weg
          zu unterstützen. Und dir zu helfen, deine ganze Herzensweisheit zu
          verkörpern und die Kraft in dir zu entfalten, die tiefe Heilung möglich macht.
          <br /><br />
          Du möchtest mehr über Embodiment Coaching erfahren?
        </p>
        <Link 
          href="/contact" 
          className="inline-flex items-center justify-center px-8 py-4 text-base font-medium text-white bg-primary-600 hover:bg-primary-700 rounded-full transition-all duration-300 hover:shadow-lg mx-auto"
        >
          Vereinbare jetzt dein kostenloses Erstgespräch
          <ArrowRightIcon className="ml-2 h-5 w-5" />
        </Link>
      </div>
    </section>
  );
}
