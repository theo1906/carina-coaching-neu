'use client';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import { metadata } from './metadata';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

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
    <html lang="de" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-gray-50">
        <ClientProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ClientProvider>
      </body>
    </html>
  );
}
