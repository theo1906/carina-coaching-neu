'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { motion, AnimatePresence } from 'framer-motion';
import DropdownQuestions from './DropdownQuestions';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-pink-50 pt-16">
      
      <div className="relative w-full min-h-[40vh] flex items-center">
        {/* Mobile Image */}
        <div className="md:hidden absolute inset-x-0 top-0 w-full h-full">
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <Image
              src={"/images/home-hero-section-mobile.png"}
              alt="Carina - Life Coach"
              fill
              priority
              className="object-cover w-full h-full"
              quality={90}
              sizes="100vw"
              style={{ objectPosition: 'center 50%' }}
              onError={(e) => {
                console.error('Error loading mobile hero image:', e);
                const target = e.target as HTMLImageElement;
                target.src = "/images/home-hero-section.jpg";
              }}
            />
          </div>
        </div>
        
        {/* Desktop Image */}
        <div className="hidden md:block relative w-full -mt-8">
          <div className="relative w-full" style={{ paddingTop: '50%' }}>
            <Image
              src={"/images/home-hero-section.jpg"}
              alt="Carina - Life Coach"
              fill
              priority
              className="object-cover w-full h-full"
              quality={90}
              sizes="100vw"
              style={{ objectPosition: 'center 50%' }}
              onError={(e) => {
                console.error('Error loading desktop hero image:', e);
                const target = e.target as HTMLImageElement;
                target.src = "/images/hero-new.jpg";
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative -mt-16 md:-mt-48">
            <div className="bg-white px-6 pt-6 pb-4 md:px-8 md:pt-8 md:pb-5 rounded-t-2xl rounded-b-2xl shadow-sm text-center">
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
                  Als spiritueller Life Coach und systemischer Coach unterstütze ich Frauen dabei, ihre eigene Heilkraft und Wahrheit wiederzufinden und mutig zu verkörpern.
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
