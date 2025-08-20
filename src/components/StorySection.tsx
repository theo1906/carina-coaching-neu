import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export default function StorySection() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-white via-pink-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1 bg-gradient-to-r from-transparent via-pink-200 to-transparent"></div>
      </div>
      
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Section label */}
        <div className="relative inline-flex items-center justify-center mb-8 group">
          <span className="absolute inset-0 w-full h-full rounded-full bg-pink-100 transform scale-0 group-hover:scale-100 transition-transform duration-300"></span>
          <span className="relative z-10 px-6 py-2 text-sm font-medium text-pink-700">
            Meine Geschichte
          </span>
        </div>
        
        {/* Main heading */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-900 mb-12 leading-tight">
          <span className="block">20 Jahre Bulimie.</span>
          <span className="font-semibold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
            Und dann?
          </span>
        </h2>
        
        {/* Quote box */}
        <div className="relative max-w-2xl mx-auto mb-16">
          <div className="relative z-10 px-8 py-10 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-pink-50">
            <svg className="absolute top-6 left-8 w-8 h-8 text-pink-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <p className="relative z-10 text-xl text-gray-700 leading-relaxed mb-4">
              Ein Moment der Klarheit. Ein inneres Ja zur Heilung.
            </p>
            <p className="text-lg font-medium text-pink-700">
              Und heute? Bin ich frei.
            </p>
          </div>
          <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-200 to-purple-200 rounded-2xl opacity-70 blur-lg -z-10"></div>
        </div>
        
        {/* CTA Button */}
        <Link 
          href="/ueber-mich/mein-weg" 
          className="group relative inline-flex items-center px-10 py-4 overflow-hidden rounded-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-medium text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
        >
          <span className="relative z-10">Mehr über meine Reise</span>
          <ArrowRightIcon className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
        </Link>
      </div>
      
      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="w-full h-16 text-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="currentColor"></path>
        </svg>
      </div>
    </section>
  );
}
