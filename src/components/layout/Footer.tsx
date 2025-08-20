'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { Fragment } from 'react';

const navigation = {
  main: [
    { name: 'Home', href: '/' },
    { name: 'Dienstleistungen', href: '/dienstleistungen' },
    { name: 'Über mich', href: '/ueber-mich/mein-weg' },
    { name: 'Kontakt', href: '/kontakt' },
  ],
  legal: [
    { name: 'Impressum', href: '/legal' },
    { name: 'Datenschutz', href: '/privacy' },
    { name: 'AGB', href: '/terms' },
    { name: 'Widerrufsrecht', href: '/cancellation' },
  ],
  social: [
    {
      name: 'Instagram',
      href: 'https://instagram.com',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.415-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'Facebook',
      href: 'https://facebook.com',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: 'https://youtube.com',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path
            fillRule="evenodd"
            d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
            clipRule="evenodd"
          />
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);

  const toggleMenu = (menuName: string) => {
    setExpandedMenu((prev: string | null) => prev === menuName ? null : menuName);
  };

  // Initialize state only on client side
  useEffect(() => {
    // No-op - just ensuring this is a client component
  }, []);

  return (
    <Fragment>
      <footer className="bg-gradient-to-b from-white to-neutral-50 border-t border-neutral-100">
        <div className="container mx-auto px-6 py-16 md:py-20 lg:py-24">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
            {/* Brand info */}
            <div className="space-y-6">
              <div>
                <Link href="/" className="inline-block">
                  <span className="text-2xl font-display font-bold bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
                    Carina Göb
                  </span>
                  <span className="block text-sm font-medium text-neutral-500 mt-1">
                    Embodiment for Women
                  </span>
                </Link>
              </div>
              <p className="text-neutral-600">
                Begleite mich auf deiner Reise zu mehr Selbstliebe, innerer Stärke und einem erfüllten Leben.
              </p>
            </div>

            {/* Navigation */}
            <div className="space-y-6">
              <h3 className="text-sm font-semibold text-neutral-900 tracking-wider uppercase mb-6">
                Hauptmenü
              </h3>
              <div className="space-y-4">
                {navigation.main.map((item) => (
                  <div key={item.name} className="group">
                    <button
                      type="button"
                      onClick={() => toggleMenu(item.name)}
                      className="flex items-center justify-between w-full text-neutral-500 hover:text-primary-600 transition-colors duration-300"
                    >
                      {item.name}
                      {item.name === 'Dienstleistungen' || item.name === 'Über mich' ? (
                        <svg
                          className={`ml-2 w-4 h-4 transition-transform duration-300 ${expandedMenu === item.name ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      ) : null}
                    </button>
                    {(item.name === 'Dienstleistungen' || item.name === 'Über mich') && (
                      <div className={`mt-2 pl-4 space-y-2 ${expandedMenu === item.name ? 'block' : 'hidden'}`}>
                        {item.name === 'Dienstleistungen' ? (
                          <>
                            <Link
                              href="/dienstleistungen/essstorung"
                              className="text-neutral-500 hover:text-primary-600 transition-colors duration-300"
                            >
                              Essstörung Coaching
                            </Link>
                            <Link
                              href="/dienstleistungen/spiritual"
                              className="text-neutral-500 hover:text-primary-600 transition-colors duration-300"
                            >
                              Spiritual Life Coaching
                            </Link>
                            <Link
                              href="/dienstleistungen/embodiment-und-heilung"
                              className="text-neutral-500 hover:text-primary-600 transition-colors duration-300"
                            >
                              Körperzentriertes Coaching
                            </Link>
                          </>
                        ) : (
                          <>
                            <Link
                              href="/ueber-mich/mein-weg"
                              className="text-neutral-500 hover:text-primary-600 transition-colors duration-300"
                            >
                              Mein Weg
                            </Link>
                            <Link
                              href="/ueber-mich/meine-vision"
                              className="text-neutral-500 hover:text-primary-600 transition-colors duration-300"
                            >
                              Meine Vision
                            </Link>
                          </>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="space-y-6">
              <h3 className="text-sm font-semibold text-neutral-900 tracking-wider uppercase mb-6">
                Kontakt
              </h3>
              <address className="not-italic space-y-4">
                <div className="flex">
                  <EnvelopeIcon className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-sm text-neutral-500">E-Mail</span>
                    <a 
                      href="mailto:info@carinagoeb.de" 
                      className="text-neutral-700 hover:text-primary-600 transition-colors duration-300"
                    >
                      info@carinagoeb.de
                    </a>
                  </div>
                </div>

                <div className="flex">
                  <MapPinIcon className="h-5 w-5 text-primary-500 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="block text-sm text-neutral-500">Adresse</span>
                    <span className="text-neutral-700">
                      Rosenstraße 17
                      <br />
                      80331 München

                    </span>
                  </div>
                </div>
              </address>
            </div>

            {/* Legal */}
            <div className="space-y-6">
              <h3 className="text-sm font-semibold text-neutral-900 tracking-wider uppercase mb-6">
                Legal
              </h3>
              <ul className="space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-neutral-500 hover:text-primary-600 transition-colors duration-300"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </Fragment>
  );
}
