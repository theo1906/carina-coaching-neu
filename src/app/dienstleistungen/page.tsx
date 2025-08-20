import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Dienstleistungen | Carina Göb',
  description: 'Unsere Dienstleistungen für Life & Mindset Coaching',
};

export default function DienstleistungenPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">Dienstleistungen</h1>
      
      <nav className="mb-12">
        <ul className="flex flex-col gap-4">
          <li>
            <Link 
              href="/dienstleistungen/essstorung"
              className="text-lg font-medium text-gray-900 hover:text-pink-600 transition-colors duration-200"
            >
              Essstörung Coaching
            </Link>
          </li>
          <li>
            <Link 
              href="/dienstleistungen/spiritual"
              className="text-lg font-medium text-gray-900 hover:text-pink-600 transition-colors duration-200"
            >
              Spiritual Life Coaching
            </Link>
          </li>
        </ul>
      </nav>

      <p className="text-lg text-gray-700 mb-6">
        Hier finden Sie eine Übersicht unserer Coaching-Dienstleistungen.
      </p>
      {/* Add your content here */}
    </div>
  );
}
