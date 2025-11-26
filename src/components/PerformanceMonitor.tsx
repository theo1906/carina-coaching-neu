'use client';

import { useEffect } from 'react';

interface WebVitals {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

export default function PerformanceMonitor() {
  useEffect(() => {
    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'navigation':
            const navEntry = entry as PerformanceNavigationTiming;
            console.log('Navigation Performance:', {
              ttfb: navEntry.responseStart - navEntry.requestStart,
              domLoad: navEntry.loadEventEnd - navEntry.loadEventStart,
              fullLoad: navEntry.loadEventEnd - navEntry.fetchStart
            });
            break;
          case 'paint':
            console.log(`${entry.name}:`, entry.startTime);
            break;
          case 'largest-contentful-paint':
            console.log('LCP:', entry.startTime);
            break;
          case 'first-input':
            console.log('FID:', (entry as any).processingStart - entry.startTime);
            break;
          case 'layout-shift':
            if (!(entry as any).hadRecentInput) {
              console.log('CLS:', (entry as any).value);
            }
            break;
        }
      }
    });

    try {
      observer.observe({ entryTypes: ['navigation', 'paint', 'largest-contentful-paint', 'first-input', 'layout-shift'] });
    } catch (e) {
      console.log('Performance monitoring not fully supported');
    }

    return () => observer.disconnect();
  }, []);

  return null;
}
