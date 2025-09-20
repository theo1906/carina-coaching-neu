'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';
import DropdownQuestions from './DropdownQuestions';

export default function Hero() {
  return (
    <section className="relative bg-pink-50 pt-16 md:pt-0">
      <div className="relative w-full h-[40vh] md:h-screen max-h-[800px]" style={{ marginBottom: '16rem' }}>
        <div className="absolute inset-0 w-full h-full overflow-visible">
          <div className="relative w-full h-full">
            <div style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              right: 'auto',
              width: '100vw',
              height: '100%',
              overflow: 'hidden',
              transform: 'translateX(-50%)',
              margin: 0,
              padding: 0
            }}>
              <Image
                src={"/images/home-hero-section.jpg"}
                alt="Carina - Life Coach"
                fill
                priority
                className="object-cover"
                sizes="100vw"
                quality={85}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center center',
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  minWidth: '100%',
                  minHeight: '100%'
                }}
                onError={(e) => {
                  console.error('Error loading hero image:', e);
                  const target = e.target as HTMLImageElement;
                  target.src = "/images/hero-new.jpg";
                }}
              />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full relative z-10">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl px-4">
            <div className="bg-white px-6 pt-6 pb-4 md:px-8 md:pt-8 md:pb-5 rounded-t-2xl rounded-b-2xl shadow-sm text-center relative z-20 mb-[-13rem] mt-[30rem] md:mb-[-6rem] md:mt-0">
              <div className="-mt-2">
                <h2 className="flex items-center justify-center gap-2 text-3xl md:text-4xl lg:text-5xl font-extralight text-black leading-tight mx-auto">
                  <div className="flex items-center gap-2">
                    <span>Hi, ich bin</span>
                    <div className="relative w-24 h-24 md:w-40 md:h-40 ml-2">
                      <Image
                        src={"/images/carina-portrait.png?v=3"}
                        alt="Carina"
                        fill
                        className="object-contain"
                        sizes="(max-width: 768px) 6rem, 10rem"
                        priority
                      />
                    </div>
                  </div>
                </h2>
                <p className="text-lg md:text-xl text-black leading-relaxed max-w-3xl mx-auto -mt-4">
                  Als spiritueller Life Coach und systemischer Coach für Essstörungen unterstütze ich Frauen dabei, ihre eigene Heilkraft und Wahrheit wiederzufinden und mutig zu verkörpern.
                </p>
              </div>
              <div className="mt-8">
                <DropdownQuestions />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
