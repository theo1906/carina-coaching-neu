'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  {
    src: '/images/Mood Körperarbeit_2.JPG',
    alt: 'Spirituelles Coaching - Körperarbeit und Heilung',
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

export default function SpiritualCoachingCarousel() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full">
      <div className="relative w-full">
        {images.map((image, index) => (
          <div 
            key={image.src}
            className={`w-full transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0 absolute top-0 left-0 right-0'
            }`}
          >
            <div className="flex justify-center">
              <div className="relative w-full max-w-4xl">
                <div className="relative w-full rounded-2xl overflow-hidden">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover rounded-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="flex justify-center mt-4 space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentImageIndex ? 'bg-pink-600' : 'bg-pink-200'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
