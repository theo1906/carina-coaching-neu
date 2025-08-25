'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';
import DropdownQuestions from './DropdownQuestions';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-pink-50">
      
      <div className="relative w-full h-screen max-h-[800px]" style={{ marginBottom: '6rem' }}>
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <Image
            src={`/images/home-hero-section.jpg?updated=${Date.now()}`}
            alt="Carina - Life Coach"
            fill
            priority
            className="object-cover object-center"
            quality={85}
            onError={(e) => {
              console.error('Error loading hero image:', e);
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
            <div className="bg-white p-8 rounded-t-2xl rounded-b-2xl shadow-sm text-center relative z-20" style={{ marginBottom: '-6rem' }}>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-black mb-8 leading-tight mx-auto">
                Hi, ich bin{' '}
                <span className="font-semibold text-pink-600">
                  Carina!
                </span>
              </h2>
              <p className="text-lg md:text-xl text-black leading-relaxed max-w-3xl mx-auto mb-8">
                Als spiritueller Life Coach und Systemischer Coach für Essstörungen und ED Recovery unterstütze ich Frauen dabei, ihre eigene Heilkraft und Herzensweisheit wiederzuentdecken und mutig zu verkörpern.
              </p>
              <DropdownQuestions />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
