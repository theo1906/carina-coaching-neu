'use client';

import Image from 'next/image';

export default function ImageCarousel() {
  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <div className="relative">
        <div className="w-full">
          <div className="relative w-full">
            <div className="relative w-full rounded-2xl overflow-hidden">
              <Image
                src="/images/Mood Meditation_2.JPG..jpeg"
                alt="Spirituelles Coaching - Meditation und Achtsamkeit"
                width={800}
                height={500}
                className="w-full h-auto object-cover rounded-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
