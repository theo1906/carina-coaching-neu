'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

const navigation = {
  main: [
    { name: 'Carina Coaching', href: '/' },
    { 
      name: 'Mein Coaching Angebot', 
      href: '/dienstleistungen',
      subItems: [
        { name: 'Spirituelles Life Coaching', href: '/dienstleistungen/spirituelles-life-coaching' },
        { name: 'Coaching bei Essstörungen', href: '/dienstleistungen/Systemisches-Coaching-fuer-Essstoerungen-ED-Recovery' },
        { name: 'Angebot & Preise', href: '/services/angebot' }
      ]
    },
    { 
      name: 'Über mich', 
      href: '/ueber-mich',
      subItems: [
        { name: 'Mein Weg', href: '/ueber-mich/mein-weg' }
      ]
    },
    {
      name: 'Podcast',
      href: '#',
      subItems: [
        { name: 'YouTube', href: 'https://youtube.com/@carinacoaching?si=_IQW7siQ4lDE5kag' },
        { name: 'Spotify', href: 'https://open.spotify.com/show/1d0c0FfOIupxdRhactBGze?si=PlOTX_FbSkiB36e7fm4ABw' },
        { name: 'Apple Podcasts', href: 'https://podcasts.apple.com/de/podcast/carina-coaching-der-podcast/id1877652805' }
      ]
    }
  ],
  legal: [
    { name: 'Impressum', href: '/impressum' },
    { name: 'Datenschutz', href: '/datenschutz' },
    { name: 'Cookie-Einstellungen', href: '/cookie-einstellungen' },
  ],
  social: [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/carinacoaching_/',
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
      name: 'YouTube',
      href: 'https://youtube.com/@carinacoaching?si=_IQW7siQ4lDE5kag',
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
    {
      name: 'Spotify',
      href: 'https://open.spotify.com/show/1d0c0FfOIupxdRhactBGze?si=PlOTX_FbSkiB36e7fm4ABw',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.349c-.26.371-.713.465-1.084.205-2.98-1.822-6.732-2.233-11.156-1.224-.416.094-.832-.166-.926-.582-.094-.416.166-.832.582-.926 4.896-1.099 9.06-.642 12.438 1.417.371.23.466.713.146 1.11zm1.445-3.203c-.324.467-.972.607-1.438.283-3.416-2.103-8.614-2.712-12.637-1.484-.536.147-1.084-.14-1.231-.677-.147-.536.14-1.084.677-1.231 4.517-1.364 10.199-.696 14.096 1.721.466.324.607.972.283 1.438zm.124-3.348c-4.092-2.431-10.828-2.656-14.727-1.468-.642.187-1.314-.187-1.501-.782-.187-.642.187-1.314.782-1.501 4.379-1.278 11.66-1.006 16.254 1.721.563.324.749 1.053.425 1.616-.28.516-1.009.749-1.616.425z"/>
        </svg>
      ),
    },
    {
      name: 'Apple Podcasts',
      href: 'https://podcasts.apple.com/de/podcast/carina-coaching-der-podcast/id1877652805',
      icon: (props: any) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M5.34 0A5.328 5.328 0 000 5.34v13.32A5.328 5.328 0 005.34 24h13.32A5.328 5.328 0 0024 18.66V5.34A5.328 5.328 0 0018.66 0zm6.525 2.568c2.336 0 4.448.902 6.056 2.587 1.224 1.272 1.912 2.619 2.264 4.392.12.59.12 2.2.007 2.864a8.506 8.506 0 01-3.24 5.296c-.608.46-2.096 1.261-2.336 1.261-.088 0-.096-.091-.056-.46.072-.592.144-.715.48-.856.536-.224 1.448-.874 2.008-1.435a7.644 7.644 0 002.008-3.536c.208-.824.184-2.656-.048-3.504-.728-2.696-2.928-4.792-5.624-5.352-.784-.16-2.208-.16-3 0-2.728.56-4.984 2.76-5.672 5.528-.184.752-.184 2.584 0 3.336.456 1.832 1.64 3.512 3.192 4.512.304.2.672.408.824.472.336.144.408.264.472.856.04.36.03.464-.056.464-.056 0-.464-.176-.896-.384l-.04-.03c-2.472-1.216-4.056-3.274-4.632-6.012-.144-.706-.168-2.392-.03-3.04.36-1.74 1.048-3.1 2.192-4.304 1.648-1.737 3.768-2.656 6.128-2.656zm.134 2.81c.409.004.803.04 1.106.106 2.784.62 4.76 3.408 4.376 6.174-.152 1.114-.536 2.03-1.216 2.88-.336.43-1.152 1.15-1.296 1.15-.023 0-.048-.272-.048-.603v-.605l.416-.496c1.568-1.878 1.456-4.502-.256-6.224-.664-.67-1.432-1.064-2.424-1.246-.64-.118-.776-.118-1.448-.008-1.02.167-1.81.562-2.512 1.256-1.72 1.704-1.832 4.342-.264 6.222l.413.496v.608c0 .336-.027.608-.06.608-.03 0-.264-.16-.512-.36l-.034-.011c-.832-.664-1.568-1.842-1.872-2.997-.184-.698-.184-2.024.008-2.72.504-1.878 1.888-3.335 3.808-4.019.41-.145 1.133-.22 1.814-.211zm-.13 2.99c.31 0 .62.06.844.178.488.253.888.745 1.04 1.259.464 1.578-1.208 2.96-2.72 2.254h-.015c-.712-.331-1.096-.956-1.104-1.77 0-.733.408-1.371 1.112-1.745.224-.117.534-.176.844-.176zm-.011 4.728c.988-.004 1.706.349 1.97.97.198.464.124 1.932-.218 4.302-.232 1.656-.36 2.074-.68 2.356-.44.39-1.064.498-1.656.288h-.003c-.716-.257-.87-.605-1.164-2.644-.341-2.37-.416-3.838-.218-4.302.262-.616.974-.966 1.97-.97z"/>
        </svg>
      ),
    },
  ],
};

export default function Footer() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (name: string) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };
  return (
    <>
      <footer className="bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-6 overflow-hidden sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            {/* Brand info */}
            <div className="space-y-6">
              <div className="space-y-2">
                <Link href="/" className="inline-block">
                  <h3 className="text-xl font-bold text-black">
                    CARINA COACHING
                  </h3>
                  <span className="block text-sm font-medium text-pink-600 mt-1">
                    embodiment for women
                  </span>
                </Link>
                <p className="text-neutral-600 ml-0">
                  Ich begleite dich auf deiner Reise zu wahrer Selbstliebe, innerer Stärke und einem erfüllten Leben in einem gesunden Körper.
                </p>
                <div className="pt-2">
                  <div className="inline-flex items-center gap-2">
                    {navigation.social.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.name}
                        className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-neutral-200 text-neutral-600 hover:text-primary-600 hover:border-primary-200 transition-colors"
                      >
                        {item.icon({ className: 'h-5 w-5' })}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="space-y-6">
              <h3 className="text-sm font-semibold text-neutral-900 tracking-wider uppercase mb-6">
                Hauptmenü
              </h3>
              <ul className="space-y-4">
                {navigation.main.map((item) => (
                  <li key={item.name} className="relative group">
                    <div className="flex items-center">
                      {item.subItems ? (
                        <button
                          onClick={() => toggleDropdown(item.name)}
                          className="text-base text-neutral-600 hover:text-primary-600 transition-colors duration-200 text-left flex items-center"
                        >
                          {item.name}
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-base text-neutral-600 hover:text-primary-600 transition-colors duration-200"
                        >
                          {item.name}
                        </Link>
                      )}
                      {item.subItems && (
                        <svg
                          className="w-4 h-4 ml-1 text-neutral-500 group-hover:text-primary-600 transition-colors duration-200"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </div>
                    {item.subItems && openDropdown === item.name && (
                      <ul className="pl-4 mt-2 space-y-2">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.name}>
                            <Link
                              href={subItem.href}
                              className="text-sm text-neutral-500 hover:text-primary-600 transition-colors duration-200"
                            >
                              {subItem.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div className="space-y-6">
              <h3 className="text-sm font-semibold text-neutral-900 tracking-wider uppercase mb-6">
                Rechtliches
              </h3>
              <ul className="space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-base text-neutral-600 hover:text-primary-600 transition-colors duration-200"
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
    </>
  );
}
