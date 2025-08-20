import { Metadata } from 'next';
import Link from 'next/link';
import { CheckIcon } from '@heroicons/react/24/outline';

interface ServicePageProps {
  title: string;
  description: string;
  features: string[];
  benefits: {
    title: string;
    description: string;
    icon: React.ComponentType<{ className?: string }>;
  }[];
  coachingOptions: {
    id: string;
    name: string;
    description: string;
    price: string;
    features: string[];
    cta: string;
    popular: boolean;
  }[];
}

export function getMetadata({ title, description }: ServicePageProps): Metadata {
  return {
    title: `${title} | Carina Göb - Life & Mindset Coaching`,
    description,
  };
}

export default function ServicePage({
  title,
  description,
  features,
  benefits,
  coachingOptions,
}: ServicePageProps) {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-pink-50 to-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl sm:tracking-tight mb-6">
              {title}
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Was ich für dich tue
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={feature}
                className="p-6 bg-white rounded-lg shadow-sm"
              >
                <CheckIcon className="h-6 w-6 text-pink-600 mb-2" />
                <p className="text-lg text-gray-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Deine Vorteile
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {benefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="p-6 bg-white rounded-lg shadow-sm"
              >
                <benefit.icon className="h-8 w-8 text-pink-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Options Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Meine Angebote
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {coachingOptions.map((option) => (
              <div
                key={option.id}
                className={`p-6 rounded-lg shadow-lg ${
                  option.popular ? 'bg-pink-50 border border-pink-200' : 'bg-white'
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    {option.name}
                  </h3>
                  <span className="text-2xl font-bold text-pink-600">
                    {option.price}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <ul className="list-disc list-inside text-gray-600 mb-6">
                  {option.features.map((feature) => (
                    <li key={feature} className="mb-2">
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/buchen"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                >
                  {option.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
