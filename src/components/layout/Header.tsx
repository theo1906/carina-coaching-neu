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
    name: 'Home', 
    href: '/',
    className: 'hover:text-pink-600 transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium'
  },
  { 
    name: 'Services', 
    href: '/dienstleistungen',
    className: 'group relative hover:text-pink-600 transition-colors duration-200 px-3 py-2 rounded-md text-sm font-medium',
    submenu: [
      { 
        name: 'Spirituelles Life Coaching', 
        href: '/dienstleistungen/spiritual',
        className: 'block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 rounded-md transition-colors duration-150'
      },
      { 
        name: 'Coaching für Essstörungen', 
        href: '/dienstleistungen/essstorung',
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
        name: 'Preise', 
        href: '/services/angebot',
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
            {submenu.map((subItem) => (
              <Link
                key={subItem.name}
                href={subItem.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-150"
                onClick={handleLinkClick}
                prefetch={false}
              >
                {subItem.name}
              </Link>
            ))}
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
    <header 
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out bg-white shadow-sm ${
        scrolled ? 'py-2' : 'py-4'
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6" aria-label="Global">
        <div className="flex items-center justify-between h-16 sm:h-20">
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
        className={`fixed inset-0 bg-white/95 backdrop-blur-sm z-50 transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
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
        <div className="pt-2 pb-6 px-4 overflow-y-auto h-[calc(100%-4rem)]">
          <div className="space-y-1 py-2">
            {navigation.map((item) => (
              <div key={item.name} className="mobile-menu-item">
                {item.submenu ? (
                  <>
                    <button
                      type="button"
                      className="w-full flex justify-between items-center rounded-lg px-3 py-3 text-base font-medium text-gray-900 hover:bg-pink-50 hover:text-pink-600"
                      onClick={() => toggleMobileSubmenu(item.name)}
                      aria-expanded={mobileSubmenuOpen === item.name}
                    >
                      {item.name}
                      <ChevronDownIcon 
                        className={`ml-1 h-4 w-4 transition-transform duration-200 ${mobileSubmenuOpen === item.name ? 'transform rotate-180' : ''}`} 
                        aria-hidden="true" 
                      />
                    </button>
                    <div 
                      className={`overflow-hidden transition-all duration-200 ${mobileSubmenuOpen === item.name ? 'max-h-96' : 'max-h-0'}`}
                    >
                      <div className="pl-4 py-1 space-y-1">
                        {item.submenu.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block rounded-lg px-3 py-2 text-base font-medium text-gray-700 hover:bg-pink-50 hover:text-pink-600"
                            onClick={() => setMobileMenuOpen(false)}
                            prefetch={false}
                          >
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-gray-900 hover:bg-pink-50 hover:text-pink-600"
                    onClick={() => setMobileMenuOpen(false)}
                    prefetch={false}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <div className="pt-4">
            <Link
              href="/contact"
              className="block w-full text-center px-4 py-3 border border-transparent text-base font-medium rounded-full text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
              onClick={() => setMobileMenuOpen(false)}
              prefetch={false}
            >
              Kostenloses Gespräch
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
