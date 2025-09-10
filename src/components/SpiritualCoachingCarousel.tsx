'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  {
    src: '/images/Mood Körperarbeit_2.JPG',
    alt: 'Spirituelles Coaching - Körperarbeit und Heilung',
  },
  {
    src: '/images/Mood Spiritual Coaching.JPG',
    alt: 'Spirituelles Coaching - Persönliche Entwicklung',
  },
  {
    src: '/images/Mood Services_Spiritual C.JPG',
    alt: 'Spirituelles Coaching - Ganzheitliche Heilung',
  },
];

export default function SpiritualCoachingCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const goToImage = (index: number) => {
    setCurrentImageIndex(index);
  };

  if (!isMounted) {
    return (
      <div className="relative w-full h-[500px] bg-gray-100 rounded-2xl flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Lade Bilder...</div>
      </div>
    );
  }

  return (
    <div className="relative w-full">
      {/* Images container - Removed fixed aspect ratio */}
      <div className="relative w-full max-w-4xl mx-auto">
        {images.map((image, index) => (
          <div 
            key={image.src}
            className={`w-full transition-opacity duration-500 ease-in-out ${
              index === currentImageIndex ? 'opacity-100 z-10' : 'opacity-0 absolute top-0 left-0 right-0'
            }`}
          >
            <div className="relative w-full rounded-2xl overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="w-full h-auto object-contain rounded-2xl"
                priority={index === 0}
              />
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation dots */}
      <div className="flex justify-center mt-6 space-x-3 z-20 relative">
        {images.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={(e) => {
              e.preventDefault();
              goToImage(index);
            }}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-pink-600 w-8' 
                : 'w-3 bg-pink-200 hover:bg-pink-300'
            }`}
            aria-label={`Bild ${index + 1} anzeigen`}
            aria-current={index === currentImageIndex ? 'true' : 'false'}
          >
            <span className="sr-only">Bild {index + 1} anzeigen</span>
          </button>
        ))}
      </div>
    </div>
  );
}
