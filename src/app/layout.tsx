'use client';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { metadata } from './metadata';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CookieConsentBanner from '@/components/CookieConsentBanner';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const ClientProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
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
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-HWHES3E515"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-HWHES3E515');
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans text-gray-900 antialiased`}>
        <ClientProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <CookieConsentBanner />
        </ClientProvider>
      </body>
    </html>
  );
}
