'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ModernHero = () => {
  const questions = [
    "Möchtest du deine Weiblichkeit neu entdecken und leben?",
    "Bist du bereit, dein volles Potenzial zu entfalten?",
    "Suchst du nach tiefer Verbindung zu dir selbst?"
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuestionIndex((prevIndex) => 
        prevIndex === questions.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[600px] md:h-[700px] overflow-hidden bg-white">
      <div className="absolute inset-0 w-full h-full">
        {/* Left side with question */}
        <div className="absolute left-0 top-0 h-full w-1/2 flex items-center justify-center p-8">
          <div className="max-w-md">
            <AnimatePresence mode="wait">
              <motion.h2
                key={currentQuestionIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="text-2xl md:text-3xl lg:text-4xl font-medium text-gray-800 text-center"
              >
                {questions[currentQuestionIndex]}
              </motion.h2>
            </AnimatePresence>
            
            <div className="flex justify-center mt-8 space-x-2">
              {questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestionIndex(index)}
                  className={`h-1 w-8 rounded-full transition-all ${
                    currentQuestionIndex === index ? 'bg-gray-800' : 'bg-gray-300'
                  }`}
                  aria-label={`Question ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Right side with image */}
        <div className="absolute right-0 top-0 h-full w-1/2">
          <img
            src="/images/hero-new.jpg"
            alt="Carina Coaching"
            className="w-full h-full object-contain"
            style={{
              objectPosition: 'right center',
              maxHeight: '100%',
              width: 'auto',
              height: 'auto',
              maxWidth: '100%'
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default ModernHero;
