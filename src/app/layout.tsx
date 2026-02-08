'use client';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { metadata } from './metadata';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieConsentBanner from '@/components/CookieConsentBanner';
import PerformanceMonitor from '@/components/PerformanceMonitor';
import AnalyticsConsentGate from '@/components/AnalyticsConsentGate';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {process.env.NODE_ENV === 'development' && <PerformanceMonitor />}
      {children}
    </>
  );
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo-other.png" type="image/png" sizes="512x512" />
        <link rel="apple-touch-icon" href="/logo-other.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans text-gray-900 antialiased`}>

        <ClientProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <CookieConsentBanner />
          <AnalyticsConsentGate />
        </ClientProvider>
      </body>
    </html>
  );
}
