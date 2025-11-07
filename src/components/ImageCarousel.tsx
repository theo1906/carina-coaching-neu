'use client';

import Image from 'next/image';

// Image path
const meditationImage = "/images/Mood Meditation_2.JPG..jpeg";

export default function ImageCarousel() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative">
        <div className="w-full">
          <div className="relative w-full">
            <div className="relative w-full rounded-2xl overflow-hidden">
              <Image
                src={meditationImage}
                alt="Spirituelles Coaching - Meditation und Achtsamkeit"
                width={650}
                height={406}
                className="w-full max-w-lg mx-auto h-auto object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
