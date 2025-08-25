'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieSettings() {
  const [cookies, setCookies] = useState({
    essential: true,
    analytics: false
  });

  // Load saved preferences on component mount
  useEffect(() => {
    const savedCookies = localStorage.getItem('cookiePreferences');
    if (savedCookies) {
      setCookies(JSON.parse(savedCookies));
    } else {
      // Default state
      setCookies({
        essential: true,
        analytics: false
      });
    }
  }, []);

  // Toggle cookie preference
  const toggleCookie = (type: 'essential' | 'analytics') => {
    if (type === 'essential') return; // Essential cookies can't be disabled
    
    const newCookies = {
      ...cookies,
      [type]: !cookies[type]
    };
    setCookies(newCookies);
    localStorage.setItem('cookiePreferences', JSON.stringify(newCookies));
    
    // Here you would typically also set/remove the actual cookies
    console.log('Updated cookie preferences:', newCookies);
  };

  // Handle save button click
  const handleSave = () => {
    // Show confirmation message
    const message = document.createElement('div');
    message.className = 'fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg z-50 flex items-center';
    message.innerHTML = `
      <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
      </svg>
      Einstellungen gespeichert
    `;
    document.body.appendChild(message);
    
    // Remove message after 3 seconds
    setTimeout(() => {
      message.style.opacity = '0';
      message.style.transition = 'opacity 0.5s';
      setTimeout(() => message.remove(), 500);
    }, 3000);
  };

  // Handle accept all
  const acceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true
    };
    setCookies(allAccepted);
    localStorage.setItem('cookiePreferences', JSON.stringify(allAccepted));
    handleSave();
  };

  // Handle accept essential only
  const acceptEssential = () => {
    const essentialOnly = {
      essential: true,
      analytics: false
    };
    setCookies(essentialOnly);
    localStorage.setItem('cookiePreferences', JSON.stringify(essentialOnly));
    handleSave();
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 pt-28 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-light text-gray-900 mb-4 font-playfair">Cookie-Einstellungen</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-pink-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10 border border-gray-100">
          <div className="mb-12">
            <h2 className="text-2xl font-medium text-gray-800 mb-6 font-playfair">Diese Website verwendet Cookies</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                Wir verwenden Cookies, um Inhalte und Funktionen optimal bereitzustellen, die Zugriffe auf unsere Website zu analysieren und unsere Inhalte zu verbessern. 
                Einige Cookies sind essenziell für den Betrieb der Seite, andere benötigen Ihre ausdrückliche Zustimmung.
              </p>
              <p>
                Sie können Ihre Auswahl jederzeit anpassen oder widerrufen.
              </p>
            </div>
          </div>
            
          <div className="space-y-8">
            <h3 className="text-xl font-medium text-gray-800 mb-4 font-playfair">Cookie-Einstellungen</h3>
            <p className="text-gray-700 mb-6">Bitte wählen Sie aus, welche Arten von Cookies Sie zulassen möchten:</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Essential Cookies Card */}
              <div className={`p-6 rounded-xl border-2 ${
                cookies.essential ? 'border-pink-200 bg-pink-50' : 'border-gray-200 bg-white'
              } transition-all duration-200`}>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-3 flex-shrink-0">
                        <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                        </svg>
                      </div>
                      <h4 className="text-lg font-medium text-gray-900">Essenzielle Cookies</h4>
                    </div>
                    <p className="text-gray-600 text-sm">
                      Notwendig für die Grundfunktionen der Website (z.B. Navigation, Buchungsfunktion). Diese können nicht deaktiviert werden.
                    </p>
                  </div>
                  <button 
                    className={`w-7 h-7 rounded border-2 flex items-center justify-center transition-colors duration-200 ml-4 flex-shrink-0 ${
                      cookies.essential 
                        ? 'bg-pink-600 border-pink-600' 
                        : 'border-gray-300 hover:border-pink-400'
                    }`}
                    disabled
                  >
                    {cookies.essential && (
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

                {/* Analytics Cookies Card */}
                <div className={`p-6 rounded-xl border-2 ${
                  cookies.analytics ? 'border-pink-200 bg-pink-50' : 'border-gray-200 bg-white'
                } transition-all duration-200`}>
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center mr-3">
                          <svg className="w-5 h-5 text-pink-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                          </svg>
                        </div>
                        <h4 className="text-lg font-medium text-gray-900">Statistik-Cookies</h4>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">
                        Ermöglichen uns zu verstehen, wie Besucher mit der Website interagieren, indem Informationen anonym gesammelt und gemeldet werden.
                      </p>
                      <p className="text-xs text-gray-500">
                        Eingesetzte Dienste: Google Analytics
                      </p>
                    </div>
                    <button 
                      onClick={() => toggleCookie('analytics')}
                      className={`w-7 h-7 rounded border-2 flex items-center justify-center transition-colors duration-200 ml-4 flex-shrink-0 ${
                        cookies.analytics 
                          ? 'bg-pink-600 border-pink-600' 
                          : 'border-gray-300 hover:border-pink-400'
                      }`}
                    >
                      {cookies.analytics && (
                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      )}
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-6">
                <button 
                  onClick={handleSave}
                  className="px-6 py-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors duration-200 flex items-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Auswahl bestätigen
                </button>
                <button 
                  onClick={acceptAll}
                  className="px-6 py-3 bg-white border border-pink-600 text-pink-600 rounded-full hover:bg-pink-50 transition-colors duration-200"
                >
                  Alle akzeptieren
                </button>
                <button 
                  onClick={acceptEssential}
                  className="px-6 py-3 bg-white border border-gray-300 text-gray-700 rounded-full hover:bg-gray-50 transition-colors duration-200"
                >
                  Nur notwendige
                </button>
              </div>
              
              <div className="mt-16 pt-8 border-t border-gray-200">
                <Link 
                  href="/" 
                  className="inline-flex items-center text-pink-600 hover:text-pink-800 font-medium transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Zurück zur Startseite
                </Link>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <h2 className="text-2xl font-medium text-gray-800 mb-4">Datenschutzerklärung – Ergänzung zu Google Analytics & Cookies</h2>
            
            <h3 className="text-xl font-medium text-gray-800 mt-8 mb-4">Google Analytics</h3>
            <p className="mb-4">
              Diese Website verwendet Google Analytics, einen Webanalysedienst der Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p className="mb-4">
              Google Analytics verwendet Cookies, die eine Analyse der Benutzung der Website durch dich ermöglichen. Die durch den Cookie erzeugten Informationen über deine Benutzung dieser Website (einschließlich deiner IP-Adresse) werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
            </p>
            <p className="mb-6">
              IP-Anonymisierung ist auf dieser Website aktiviert. Deine IP-Adresse wird daher von Google innerhalb der Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum zuvor gekürzt.
            </p>
            <p className="mb-6">
              <strong>Rechtsgrundlage:</strong> Die Verarbeitung erfolgt auf Grundlage deiner Einwilligung gemäß Art. 6 Abs. 1 lit. a DSGVO.
            </p>
            <p className="mb-8">
              Du kannst deine Einwilligung jederzeit widerrufen oder anpassen – etwa über die Cookie-Einstellungen am Seitenende.
            </p>
            
            <div className="space-y-2">
              <p>Weitere Informationen findest du unter:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  <a 
                    href="https://policies.google.com/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:underline"
                  >
                    Google Datenschutzerklärung
                  </a>
                </li>
                <li>
                  <a 
                    href="https://support.google.com/analytics/answer/6004245" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-pink-600 hover:underline"
                  >
                    Google Analytics Nutzungsbedingungen
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-16 pt-8 border-t border-gray-200">
            <Link 
              href="/" 
              className="inline-flex items-center text-pink-600 hover:text-pink-800 font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Zurück zur Startseite
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
