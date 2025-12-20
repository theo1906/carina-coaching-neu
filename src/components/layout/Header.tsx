'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef, useCallback, memo } from 'react';
import { usePathname } from 'next/navigation';
import { Bars3Icon, XMarkIcon, CalendarIcon, ChevronDownIcon, EnvelopeIcon } from '@heroicons/react/24/outline';

interface NavigationItem {
  name: string;
  href: string;
  className?: string;
  submenu?: (NavigationItem & { className?: string })[];
}

const navigation: NavigationItem[] = [
  { 
    name: 'Carina Coaching', 
    href: '/',
    className: 'hover:text-pink-600 transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium'
  },
  { 
    name: 'Mein Coaching Angebot', 
    href: '/dienstleistungen',
    className: 'group relative hover:text-pink-600 transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium',
    submenu: [
      { 
        name: 'Spirituelles Life Coaching', 
        href: '/dienstleistungen/spirituelles-life-coaching',
        className: 'block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-md transition-colors duration-150'
      },
      { 
        name: 'Coaching bei Essstörungen', 
        href: '/dienstleistungen/Systemisches-Coaching-fuer-Essstoerungen-ED-Recovery',
        className: 'block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-md transition-colors duration-150'
      },
    ]
  },
  { 
    name: 'Über mich', 
    href: '/ueber-mich',
    className: 'group relative hover:text-pink-600 transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium',
    submenu: [
      { 
        name: 'Mein Weg', 
        href: '/ueber-mich/mein-weg',
        className: 'block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-md transition-colors duration-150'
      },
      { 
        name: 'Preispakete', 
        href: '/services/angebot',
        className: 'block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-md transition-colors duration-150'
      },
    ]
  },

  { 
    name: 'Podcast', 
    href: '#',
    className: 'group relative hover:text-pink-600 transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium',
    submenu: [
      { 
        name: 'YouTube', 
        href: 'https://youtube.com/@carinacoaching?si=_IQW7siQ4lDE5kag',
        className: 'block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-md transition-colors duration-150'
      },
      { 
        name: 'Spotify', 
        href: 'https://open.spotify.com/show/1d0c0FfOIupxdRhactBGze?si=PlOTX_FbSkiB36e7fm4ABw',
        className: 'block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-md transition-colors duration-150'
      },
    ]
  },

];

const NavItem = memo(({ name, href, submenu, className }: NavigationItem) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen, handleClickOutside]);

  const handleMouseEnter = useCallback(() => {
    if (submenu) setIsOpen(true);
  }, [submenu]);

  const handleMouseLeave = useCallback(() => {
    // Small delay to allow moving to submenu
    setTimeout(() => {
      if (isOpen) setIsOpen(false);
    }, 200);
  }, [isOpen]);

  const handleLinkClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  const handleToggleClick = useCallback((e: React.MouseEvent) => {
    if (submenu) {
      e.preventDefault();
      setIsOpen(prev => !prev);
    }
  }, [submenu]);

  if (!submenu) {
    return (
      <li>
        <Link
          href={href}
          className="text-gray-900 hover:text-pink-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
          prefetch={false}
        >
          {name}
        </Link>
      </li>
    );
  }

  return (
    <li 
      className="relative group" 
      ref={ref}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex items-center h-full">
        <Link
          href={href}
          className={`relative flex items-center h-full px-3 py-2 text-sm font-medium text-gray-700 hover:text-pink-600 transition-colors duration-200 ${isOpen ? 'text-pink-600' : ''} ${className || ''}`}
          onClick={handleToggleClick}
          onMouseEnter={handleMouseEnter}
          prefetch={false}
        >
          <span className="relative">
            {name}
            <span className={`absolute -bottom-1 left-0 w-full h-0.5 bg-pink-500 transform scale-x-0 transition-transform duration-200 ${isOpen ? 'scale-x-100' : 'group-hover:scale-x-100'}`}></span>
          </span>
          {submenu && (
            <ChevronDownIcon 
              className={`ml-1 h-4 w-4 transition-transform duration-200 ${isOpen ? 'transform rotate-180 text-pink-600' : 'text-gray-500'}`} 
              aria-hidden="true" 
            />
          )}
        </Link>
      </div>
      {submenu && (
        <div 
          className={`absolute left-0 z-50 mt-0 w-56 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-all duration-200 ease-out ${
            isOpen 
              ? 'opacity-100 scale-100 visible' 
              : 'opacity-0 scale-95 invisible pointer-events-none'
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="py-1">
            {submenu.map((subItem) => {
              const isExternal = subItem.href.startsWith('http');
              const getIcon = (name: string) => {
                if (name === 'YouTube') {
                  return (
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  );
                } else if (name === 'Spotify') {
                  return (
                    <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.349c-.26.371-.713.465-1.084.205-2.98-1.822-6.732-2.233-11.156-1.224-.416.094-.832-.166-.926-.582-.094-.416.166-.832.582-.926 4.896-1.099 9.06-.642 12.438 1.417.371.23.466.713.146 1.11zm1.445-3.203c-.324.467-.972.607-1.438.283-3.416-2.103-8.614-2.712-12.637-1.484-.536.147-1.084-.14-1.231-.677-.147-.536.14-1.084.677-1.231 4.517-1.364 10.199-.696 14.096 1.721.466.324.607.972.283 1.438zm.124-3.348c-4.092-2.431-10.828-2.656-14.727-1.468-.642.187-1.314-.187-1.501-.782-.187-.642.187-1.314.782-1.501 4.379-1.278 11.66-1.006 16.254 1.721.563.324.749 1.053.425 1.616-.28.516-1.009.749-1.616.425z"/>
                    </svg>
                  );
                }
                return null;
              };
              
              return (
                <Link
                  key={subItem.name}
                  href={subItem.href}
                  className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-150"
                  onClick={handleLinkClick}
                  prefetch={false}
                  target={isExternal ? '_blank' : '_self'}
                  rel={isExternal ? 'noopener noreferrer' : ''}
                >
                  {getIcon(subItem.name)}
                  {subItem.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </li>
  );
});

NavItem.displayName = 'NavItem';

const Header = () => {
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const scrollTimeout = useRef<NodeJS.Timeout>();

  // Optimized toggle function
  const toggleMobileSubmenu = useCallback((name: string) => {
    setMobileSubmenuOpen(prev => prev === name ? null : name);
  }, []);

  // Optimized scroll handler with debounce
  const handleScroll = useCallback(() => {
    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }
    
    scrollTimeout.current = setTimeout(() => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    }, 10);
  }, [scrolled]);

  // Initialize scroll state and event listeners
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setScrolled(window.scrollY > 10);
      window.addEventListener('scroll', handleScroll, { passive: true });
      
      return () => {
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [handleScroll]);
  
  // Close mobile menu when route changes
  useEffect(() => {
    const handleRouteChange = () => {
      setMobileMenuOpen(false);
      setMobileSubmenuOpen(null);
    };
    
    window.addEventListener('popstate', handleRouteChange);
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md' : 'bg-white/90 backdrop-blur-md'}`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="flex w-full items-center justify-between py-3 lg:border-none">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 relative" prefetch={false}>
              <div className="relative h-16 w-64 sm:h-20 sm:w-80">
                <div className="relative w-full h-full flex items-center">
                  <Image
                    src={isHomePage ? 
                      `/images/logo-home.png?t=${new Date().getTime()}` : 
                      `/images/logo-other.png?t=${new Date().getTime()}`
                    }
                    alt="Carina Göb Life & Mindset Coaching"
                    fill
                    priority
                    sizes="(max-width: 768px) 300px, 600px"
                    className="object-contain object-left"
                    style={{
                      objectFit: 'contain',
                      width: '100%',
                      height: '100%',
                      maxWidth: '240px',
                      maxHeight: '80px'
                    }}
                  />
                </div>
              </div>
            </Link>
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <ul className="flex items-center space-x-6">
              {navigation.map((item) => (
                <NavItem key={item.name} {...item} />
              ))}
            </ul>
            <Link
              href="/buchen"
              className="ml-6 inline-flex items-center justify-center px-6 py-2.5 border border-transparent text-sm font-medium rounded-full text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 shadow-sm transition-all duration-300 hover:shadow-md"
            >
              <EnvelopeIcon className="h-5 w-5 mr-2" />
              Kontakt
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-full text-neutral-700 hover:text-pink-600 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-300 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(true)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <span className="sr-only">Hauptmenü öffnen</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div 
        className={`fixed inset-0 bg-white/95 backdrop-blur-sm z-[9999] transition-all duration-300 ${mobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        style={{ display: mobileMenuOpen ? 'block' : 'none' }}
        id="mobile-menu"
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex items-center justify-between h-16 px-6">
          <Link 
            href="/" 
            className="flex-shrink-0" 
            onClick={() => setMobileMenuOpen(false)}
            prefetch={false}
          >
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
              Carina Göb
            </span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link
              href="/buchen"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              prefetch={false}
            >
              <CalendarIcon className="h-4 w-4 mr-1" />
              Termin
            </Link>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-pink-500"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Menü schließen"
            >
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="pt-2 pb-6 overflow-y-auto h-[calc(100vh-4rem)]">
          <div className="space-y-2 bg-white">
            {navigation.map((item) => (
              <div key={item.name} className="mobile-menu-item border-b border-gray-100 last:border-b-0">
                {item.submenu ? (
                  <>
                    <div className="overflow-hidden">
                      <div className="px-4 py-3">
                        <button
                          type="button"
                          className="w-full flex justify-between items-center text-base font-medium text-gray-900 hover:text-pink-600"
                          onClick={() => toggleMobileSubmenu(item.name)}
                          aria-expanded={mobileSubmenuOpen === item.name}
                        >
                          {item.name}
                          <ChevronDownIcon 
                            className={`ml-1 h-4 w-4 transition-transform duration-200 ${mobileSubmenuOpen === item.name ? 'transform rotate-180' : ''}`} 
                            aria-hidden="true" 
                          />
                        </button>
                      </div>
                      <div 
                        className={`overflow-hidden transition-all duration-200 ${mobileSubmenuOpen === item.name ? 'max-h-96' : 'max-h-0'}`}
                      >
                        <div className="divide-y divide-gray-100">
                          {item.submenu.map((subItem) => {
                            const isExternal = subItem.href.startsWith('http');
                            const getIcon = (name: string) => {
                              if (name === 'YouTube') {
                                return (
                                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                                  </svg>
                                );
                              } else if (name === 'Spotify') {
                                return (
                                  <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.349c-.26.371-.713.465-1.084.205-2.98-1.822-6.732-2.233-11.156-1.224-.416.094-.832-.166-.926-.582-.094-.416.166-.832.582-.926 4.896-1.099 9.06-.642 12.438 1.417.371.23.466.713.146 1.11zm1.445-3.203c-.324.467-.972.607-1.438.283-3.416-2.103-8.614-2.712-12.637-1.484-.536.147-1.084-.14-1.231-.677-.147-.536.14-1.084.677-1.231 4.517-1.364 10.199-.696 14.096 1.721.466.324.607.972.283 1.438zm.124-3.348c-4.092-2.431-10.828-2.656-14.727-1.468-.642.187-1.314-.187-1.501-.782-.187-.642.187-1.314.782-1.501 4.379-1.278 11.66-1.006 16.254 1.721.563.324.749 1.053.425 1.616-.28.516-1.009.749-1.616.425z"/>
                                  </svg>
                                );
                              }
                              return null;
                            };
                            
                            return (
                              <Link
                                key={subItem.name}
                                href={subItem.href}
                                className="flex items-center px-4 py-3 text-base font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                                onClick={() => setMobileMenuOpen(false)}
                                prefetch={false}
                                target={isExternal ? '_blank' : '_self'}
                                rel={isExternal ? 'noopener noreferrer' : ''}
                              >
                                {getIcon(subItem.name)}
                                {subItem.name}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-4 py-3 text-base font-medium text-gray-900 hover:bg-pink-50 hover:text-pink-600 border-b border-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                    prefetch={false}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 px-4 pb-4 bg-white">
              <div className="bg-white">
              <Link
                href="/contact"
                className="block w-full text-center px-4 py-3 border border-transparent text-base font-medium rounded-full text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                onClick={() => setMobileMenuOpen(false)}
                prefetch={false}
              >
                Kontakt
              </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
