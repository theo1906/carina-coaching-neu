'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  {
    src: '/images/Mood Meditation_2.JPG',
    alt: 'Spirituelles Coaching - Meditation und Achtsamkeit',
    className: 'rounded-2xl',
  },
  {
    src: '/images/Mood Spiritual Coaching.JPG',
    alt: 'Spirituelles Coaching - Persönliche Entwicklung',
    className: 'rounded-2xl',
  },
  {
    src: '/images/Mood Services_Spiritual C.JPG',
    alt: 'Spirituelles Coaching - Ganzheitliche Heilung',
    className: 'rounded-2xl',
  },
];

export default function ImageCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative">
        {images.map((image, index) => (
          <div 
            key={image.src}
            className={`w-full transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0 absolute top-0 left-0 right-0'
            }`}
          >
            <div className="relative w-full">
              <div className="relative w-full rounded-2xl overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 80vw"
                  className="w-full h-auto rounded-2xl"
                  priority={index === 0}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentImageIndex ? 'bg-white' : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Bild ${index + 1} anzeigen`}
          />
        ))}
      </div>
    </div>
  );
}
