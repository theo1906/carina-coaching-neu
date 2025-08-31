'use client';

import { useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function ScrollToSectionLink({ 
  href, 
  children,
  className = ''
}: { 
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  const router = useRouter();
  const pathname = usePathname();
  const [path, hash] = href.split('#');

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    if (pathname === path) {
      // If we're already on the page, just scroll to the section
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Otherwise, navigate to the page and then scroll
      router.push(href);
      // The scroll will be handled by the useEffect below
    }
  };

  // Handle scroll after navigation
  useEffect(() => {
    if (window.location.hash === `#${hash}`) {
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return (
    <a 
      href={href} 
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}
