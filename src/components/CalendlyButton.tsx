'use client';

import { useEffect } from 'react';
import { CalendarIcon } from 'lucide-react';

export default function CalendlyButton() {
  useEffect(() => {
    // Load Calendly script
    const head = document.querySelector('head');
    const script = document.createElement('script');
    script.setAttribute(
      'src',
      'https://assets.calendly.com/assets/external/widget.js'
    );
    head?.appendChild(script);

    return () => {
      head?.removeChild(script);
    };
  }, []);

  const openCalendly = () => {
    // @ts-ignore
    if (window.Calendly) {
      // @ts-ignore
      window.Calendly.initPopupWidget({
        url: 'https://calendly.com/carina-goeb/30min',
        prefill: {},
        pageSettings: {}
      });
      return false;
    }
  };

  return (
    <>
      <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      <button 
        onClick={openCalendly}
        className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full shadow-sm text-white bg-pink-600 hover:bg-pink-700 md:py-4 md:text-lg md:px-10 transition-colors duration-200"
      >
        <CalendarIcon className="h-6 w-6 mr-2" />
        Termin vereinbaren
      </button>
    </>
  );
}
