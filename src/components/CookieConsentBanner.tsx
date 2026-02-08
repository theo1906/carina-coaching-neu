'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieConsentBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [cookies, setCookies] = useState({
    essential: true,
    analytics: false
  });

  useEffect(() => {
    // Check if user has made a choice before
    const consentGiven = localStorage.getItem('cookieConsentGiven');
    if (!consentGiven) {
      setShowBanner(true);
      
      // Load any previously saved preferences
      const savedCookies = localStorage.getItem('cookiePreferences');
      if (savedCookies) {
        setCookies(JSON.parse(savedCookies));
      }
    }
  }, []);

  const toggleCookie = (type: 'essential' | 'analytics') => {
    if (type === 'essential') return; // Essential cookies can't be disabled
    
    const newCookies = {
      ...cookies,
      [type]: !cookies[type]
    };
    setCookies(newCookies);
  };

  const savePreferences = () => {
    localStorage.setItem('cookieConsentGiven', 'true');
    localStorage.setItem('cookiePreferences', JSON.stringify(cookies));
    setShowBanner(false);
    
    // Here you would typically initialize/remove analytics based on preferences
    console.log('Cookie preferences saved:', cookies);
    window.dispatchEvent(new Event('cookie-preferences-changed'));
  };

  const acceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true
    };
    setCookies(allAccepted);
    localStorage.setItem('cookieConsentGiven', 'true');
    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
    setShowBanner(false);
    
    // Here you would typically initialize analytics
    console.log('All cookies accepted');
    window.dispatchEvent(new Event('cookie-preferences-changed'));
  };

  const acceptEssential = () => {
    const essentialOnly = {
      essential: true,
      analytics: false
    };
    setCookies(essentialOnly);
    localStorage.setItem('cookieConsentGiven', 'true');
    localStorage.setItem('cookiePreferences', JSON.stringify(essentialOnly));
    setShowBanner(false);
    
    // Here you would typically remove analytics if they were previously accepted
    console.log('Only essential cookies accepted');
    window.dispatchEvent(new Event('cookie-preferences-changed'));
  };

  if (!showBanner) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <div className="p-6 space-y-6">
          {/* Header */}
          <div className="text-center mb-2">
            <h3 className="text-xl font-medium text-gray-900">Cookie-Einstellungen</h3>
            <p className="text-gray-600 mt-2">
              Wir verwenden Cookies, um Inhalte und Funktionen optimal bereitzustellen und die Nutzererfahrung zu verbessern.
            </p>
          </div>
          
          {/* Cookie Options */}
          <div className="space-y-4">
            {/* Essential Cookies */}
            <div className="flex items-start p-4 rounded-lg border border-gray-200">
              <div className="flex-1 mr-4">
                <div className="flex items-center">
                  <h4 className="font-medium text-gray-900">Essenzielle Cookies</h4>
                  <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-pink-100 text-pink-800">Immer aktiv</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">
                  Notwendig für die Grundfunktionen der Website (z.B. Navigation, Buchungsfunktion).
                </p>
              </div>
              <button 
                className={`w-6 h-6 rounded border-2 flex-shrink-0 flex items-center justify-center ${
                  cookies.essential 
                    ? 'bg-pink-600 border-pink-600' 
                    : 'border-gray-300'
                }`}
                disabled
              >
                {cookies.essential && (
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            </div>
            
            {/* Analytics Cookies */}
            <div className="flex items-start p-4 rounded-lg border border-gray-200">
              <div className="flex-1 mr-4">
                <h4 className="font-medium text-gray-900">Statistik-Cookies</h4>
                <p className="text-sm text-gray-600 mt-1">
                  Ermöglichen uns zu verstehen, wie Besucher mit der Website interagieren.
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  Eingesetzte Dienste: Google Analytics
                </p>
              </div>
              <button 
                onClick={() => toggleCookie('analytics')}
                className={`w-6 h-6 rounded border-2 flex-shrink-0 flex items-center justify-center ${
                  cookies.analytics 
                    ? 'bg-pink-600 border-pink-600' 
                    : 'border-gray-300 hover:border-pink-400'
                }`}
              >
                {cookies.analytics && (
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
          
          {/* Footer */}
          <div className="pt-4">
            <p className="text-sm text-gray-600 mb-4">
              Weitere Informationen finden Sie in unserer{' '}
              <Link href="/datenschutz" className="text-pink-600 hover:underline">Datenschutzerklärung</Link>.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-end">
              <button
                onClick={acceptEssential}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-full hover:bg-gray-50 transition-colors"
              >
                Nur notwendige
              </button>
              <button
                onClick={savePreferences}
                className="px-4 py-2 text-sm font-medium text-white bg-pink-600 rounded-full hover:bg-pink-700 transition-colors"
              >
                Auswahl bestätigen
              </button>
              <button
                onClick={acceptAll}
                className="px-4 py-2 text-sm font-medium text-white bg-pink-800 rounded-full hover:bg-pink-900 transition-colors"
              >
                Alle akzeptieren
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
