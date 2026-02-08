"use client";

import { useEffect, useRef } from 'react';

const GA_ID = 'G-HWHES3E515';

function injectGAScriptOnce() {
  if (typeof window === 'undefined') return;
  if ((window as any).__gaInjected) return;

  // Set disable flag based on existing preference before load
  const prefsRaw = localStorage.getItem('cookiePreferences');
  const prefs = prefsRaw ? JSON.parse(prefsRaw) : { analytics: false };
  (window as any)[`ga-disable-${GA_ID}`] = !prefs.analytics;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  document.head.appendChild(script);

  const inline = document.createElement('script');
  inline.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);} 
    gtag('js', new Date());
    gtag('config', '${GA_ID}', { anonymize_ip: true });
  `;
  document.head.appendChild(inline);

  (window as any).__gaInjected = true;
}

export default function AnalyticsConsentGate() {
  const initialized = useRef(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const applyFromPrefs = () => {
      try {
        const raw = localStorage.getItem('cookiePreferences');
        const prefs = raw ? JSON.parse(raw) : { analytics: false };
        // Set or unset GA disable flag
        (window as any)[`ga-disable-${GA_ID}`] = !prefs.analytics;
        if (prefs.analytics) {
          injectGAScriptOnce();
        }
      } catch (e) {
        // no-op
      }
    };

    // Initial apply
    if (!initialized.current) {
      applyFromPrefs();
      initialized.current = true;
    }

    const onPrefsChanged = () => applyFromPrefs();
    window.addEventListener('cookie-preferences-changed', onPrefsChanged as any);
    window.addEventListener('storage', (ev) => {
      if (ev.key === 'cookiePreferences') applyFromPrefs();
    });

    return () => {
      window.removeEventListener('cookie-preferences-changed', onPrefsChanged as any);
    };
  }, []);

  return null;
}
