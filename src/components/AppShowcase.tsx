'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { SparklesIcon, HeartIcon, ChatBubbleLeftRightIcon, DevicePhoneMobileIcon, ArrowRightIcon } from '@heroicons/react/24/solid';

const features = [
  {
    icon: <DevicePhoneMobileIcon className="h-6 w-6" />,
    title: 'Tägliche Motivation',
    description: 'Erhalte täglich inspirierende Nachrichten und Übungen für mehr Selbstliebe und Achtsamkeit.'
  },
  {
    icon: <SparklesIcon className="h-6 w-6" />,
    title: 'Meditationen',
    description: 'Entdecke geführte Meditationen für mehr innere Ruhe und Ausgeglichenheit.'
  },
  {
    icon: <ChatBubbleLeftRightIcon className="h-6 w-6" />,
    title: 'Frage der Woche',
    description: 'Antworte auf die Frage der Woche und teile deine Erfahrungen mit der Community.'
  },
  {
    icon: <HeartIcon className="h-6 w-6" />,
    title: 'Schreib mir wie du dich fühlst',
    description: 'Trage deine Gedanken und Fortschritte in dein digitales Tagebuch ein und verfolge deine Entwicklung.'
  }
];

// Questions will rotate weekly (52 weeks in a year)
const weeklyQuestions = [
  "Was ist der wichtigste Schritt auf deinem Weg zur Heilung?",
  "Wofür bist du heute dankbar?",
  "Was würdest du tun, wenn du keine Angst hättest?",
  "Was bedeutet Selbstfürsorge für dich?",
  "Welche kleine Freude hat dich heute zum Lächeln gebracht?",
  "Was möchtest du in dieser Woche loslassen?",
  "Was hat dich diese Woche stark gemacht?"
];

// Get a consistent question for the current week
const getCurrentQuestion = () => {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const weekNumber = Math.ceil((((now.getTime() - startOfYear.getTime()) / 86400000) + startOfYear.getDay() + 1) / 7);
  return weeklyQuestions[weekNumber % weeklyQuestions.length];
};

export default function AppShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(600); // 10 minutes in seconds
  const [isRunning, setIsRunning] = useState(false);
  const [answer, setAnswer] = useState('');
  const [diaryEntry, setDiaryEntry] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isDiarySubmitted, setIsDiarySubmitted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState('');
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Set the current question on component mount and initialize audio
  useEffect(() => {
    setCurrentQuestion(getCurrentQuestion());
    
    // Initialize audio when component mounts
    if (typeof Audio !== 'undefined') {
      audioRef.current = new Audio('/sounds/Meditation-Gong.mp3');
      // Preload the audio
      audioRef.current.preload = 'auto';
      // Set volume to 50% to prevent it from being too loud
      audioRef.current.volume = 0.5;
    }
    
    // Cleanup audio on unmount
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            setIsRunning(false);
            clearInterval(timerRef.current as NodeJS.Timeout);
            // Play sound when timer reaches zero
            if (audioRef.current) {
              audioRef.current.currentTime = 0; // Rewind to start
              const playPromise = audioRef.current.play();
              
              // Handle browsers that don't support promises
              if (playPromise !== undefined) {
                playPromise.catch(error => {
                  console.error('Error playing sound:', error);
                  // Try alternative method for Safari
                  if (error.name === 'NotAllowedError' || error.name === 'NotSupportedError') {
                    console.log('Trying alternative audio play method for Safari');
                    audioRef.current?.play().catch(e => console.error('Second attempt failed:', e));
                  }
                });
              }
            }
            return 0;
          }
          return prevTime - 1;
        });
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isRunning, timeLeft]);

  const startTimer = () => {
    // This ensures audio can play in Safari by being triggered by user interaction
    if (audioRef.current) {
      try {
        const playPromise = audioRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch(error => {
            console.log('Audio play failed, will retry when timer ends:', error);
          });
        }
        // Immediately pause after starting to make it ready for later
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      } catch (error) {
        console.error('Error initializing audio:', error);
      }
    }
    
    if (timeLeft === 0) {
      setTimeLeft(10); // Reset to 10 seconds if timer is done
    }
    setIsRunning(true);
  };

  const pauseTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setTimeLeft(600); // Reset to 10 minutes
    setIsRunning(false);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + features.length) % features.length);
  };
  
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % features.length);
  };
  
  const goToIndex = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-gray-900">
            <span className="block">Dein Begleiter für</span>
            <span className="font-medium bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
              mehr Wohlbefinden
            </span>
          </h2>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Nimm dir 15 Minuten Zeit für dich
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Feature Cards - Left Side */}
          <motion.div 
            className="space-y-3 sm:space-y-4"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-300 group ${
                  activeIndex === index 
                    ? 'bg-gradient-to-r from-pink-50 to-pink-100 border-l-4 border-pink-500 shadow-lg' 
                    : 'bg-white hover:bg-pink-50/80 border-l-4 border-transparent hover:border-pink-100 shadow-sm hover:shadow-md'
                }`}
                onClick={() => setActiveIndex(index)}
                whileHover={{ y: -3, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex items-start">
                  <div className={`h-10 w-10 rounded-xl flex-shrink-0 flex items-center justify-center mr-4 transition-all ${
                    activeIndex === index 
                      ? 'bg-gradient-to-br from-pink-500 to-pink-600 shadow-md' 
                      : 'bg-pink-100 group-hover:bg-pink-200/80'
                  }`}>
                    {React.cloneElement(feature.icon, { 
                      className: `h-5 w-5 ${activeIndex === index ? 'text-white' : 'text-pink-600'}`,
                      strokeWidth: activeIndex === index ? 2.2 : 2
                    })}
                  </div>
                  <div className="py-0.5 flex-1">
                    <h3 className={`text-[15px] font-semibold leading-tight ${
                      activeIndex === index ? 'text-pink-700' : 'text-pink-800/90'
                    }`}>
                      {feature.title}
                    </h3>
                    <p className={`text-[13.5px] leading-snug mt-1.5 ${
                      activeIndex === index ? 'text-pink-600' : 'text-pink-600/80'
                    }`}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Phone Mockup - Right Side */}
          <motion.div 
            className="relative flex justify-center lg:sticky lg:top-24 mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative w-72 h-[580px] mx-auto">
              {/* Phone Mockup */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-[40px] p-2 shadow-2xl ring-2 ring-gray-700/50">
                <div className="relative h-full bg-white rounded-[32px] overflow-hidden transition-all duration-300 hover:shadow-[0_20px_50px_rgba(0,0,0,0.15)]">
                  {/* App Screen Content */}
                  <div className="h-full flex flex-col">
                    {/* Status Bar */}
                    <div className="h-12 bg-gradient-to-r from-pink-500 to-pink-600 flex items-center justify-between px-4 text-white text-xs">
                      <span>9:41</span>
                      <div className="flex space-x-2">
                        <span>5G</span>
                        <span>100%</span>
                      </div>
                    </div>
                    
                    {/* App Content */}
                    <div className="flex-1 p-4 overflow-hidden relative">
                      {activeIndex === 0 && (
                        <motion.div
                          key="motivation"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          className="h-full flex flex-col"
                        >
                          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4 mb-4 border border-pink-100 shadow-sm">
                            <h3 className="text-lg font-medium text-pink-800">Tagesmotivation</h3>
                            <p className="text-sm text-gray-700 mt-1">
                              "Jeder neue Tag ist eine neue Chance, dein bestes Ich zu sein."
                            </p>
                          </div>
                          <div className="mt-4">
                            <h4 className="text-sm font-medium text-gray-900">Heutige Übung</h4>
                            <p className="text-sm text-gray-600 mt-1">
                              Nimm dir 5 Minuten Zeit für eine kurze Achtsamkeitsübung: Beobachte deinen Atem, ohne ihn zu verändern.
                            </p>
                          </div>
                        </motion.div>
                      )}
                      
                      {activeIndex === 1 && (
                        <motion.div
                          key="meditation"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          className="h-full flex flex-col"
                        >
                          <h3 className="text-lg font-medium text-gray-900 mb-3">Meditation</h3>
                          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4 flex-1 flex flex-col items-center justify-center border border-pink-100 shadow-sm">
                            <div className="w-24 h-24 rounded-full bg-white shadow-inner border-2 border-pink-200 flex items-center justify-center mb-4">
                              <div className="w-20 h-20 rounded-full bg-pink-100 flex items-center justify-center">
                                <SparklesIcon className="h-10 w-10 text-pink-600 animate-pulse" />
                              </div>
                            </div>
                            <h4 className="text-lg font-medium text-gray-900 mb-2">Tiefenentspannung</h4>
                            <div className="text-3xl font-mono font-medium text-pink-600 mb-6">
                              {formatTime(timeLeft)}
                            </div>
                            <div className="flex flex-col space-y-2 w-full">
                              {!isRunning ? (
                                <button 
                                  onClick={startTimer}
                                  className="px-6 py-2 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors w-full"
                                >
                                  {timeLeft === 0 ? 'Neustart' : 'Starten'}
                                </button>
                              ) : (
                                <button 
                                  onClick={pauseTimer}
                                  className="px-6 py-2 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors w-full"
                                >
                                  Pause
                                </button>
                              )}
                              {timeLeft < 600 && (
                                <button 
                                  onClick={resetTimer}
                                  className="px-6 py-2 text-sm text-pink-600 hover:text-pink-700 transition-colors"
                                >
                                  Zurücksetzen
                                </button>
                              )}
                            </div>
                          </div>
                        </motion.div>
                      )}
                      
                      {activeIndex === 2 && (
                        <motion.div
                          key="weekly-question"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          className="h-full flex flex-col"
                        >
                          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4 mb-4 border border-pink-100 shadow-sm">
                            <h3 className="text-lg font-medium text-pink-800">Frage der Woche</h3>
                            <p className="text-sm text-gray-700 mt-1 italic">
                              "{currentQuestion}"
                            </p>
                          </div>
                          
                          {isSubmitted ? (
                            <div className="flex-1 flex flex-col">
                              <div className="bg-white p-4 rounded-lg border border-gray-200 flex-1">
                                <p className="text-sm text-gray-700 mb-2">Deine Antwort:</p>
                                <p className="text-gray-800 whitespace-pre-line">{answer || '(Keine Antwort gegeben)'}</p>
                              </div>
                              <div className="mt-4 text-center">
                                <span className="text-sm text-pink-600">Deine Antwort wurde gesendet.</span>
                              </div>
                            </div>
                          ) : (
                            <form 
                              className="flex-1 flex flex-col"
                              onSubmit={(e) => {
                                e.preventDefault();
                                setIsSubmitted(true);
                                // In the future, we'll add email sending logic here
                              }}
                            >
                              <label htmlFor="answer" className="block text-sm font-medium text-gray-700 mb-2">
                                Deine Antwort:
                              </label>
                              <textarea
                                id="answer"
                                rows={6}
                                className="flex-1 w-full p-3 text-sm border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent mb-4"
                                placeholder="Schreibe hier deine Gedanken..."
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                              />
                              <button 
                                type="submit" 
                                className="px-6 py-2 bg-gradient-to-r from-pink-600 to-pink-700 text-white text-sm font-medium rounded-lg hover:from-pink-700 hover:to-pink-800 transition-colors w-full"
                              >
                                Antwort speichern
                              </button>
                            </form>
                          )}
                        </motion.div>
                      )}
                      
                      {activeIndex === 3 && (
                        <motion.div
                          key="diary"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          transition={{ duration: 0.3 }}
                          className="h-full flex flex-col"
                        >
                          <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-4 mb-4 border border-pink-100 shadow-sm">
                            <h3 className="text-lg font-medium text-pink-800">Schreib mir wie du dich fühlst</h3>
                            <p className="text-sm text-gray-700 mt-1 italic">
                              Teile deine Gedanken und Gefühle mit mir.
                            </p>
                          </div>
                          
                          {isDiarySubmitted ? (
                            <div className="flex-1 flex flex-col">
                              <div className="bg-white p-4 rounded-lg border border-gray-200 flex-1">
                                <p className="text-sm text-gray-700 mb-2">Dein Tagebucheintrag:</p>
                                <p className="text-gray-800 whitespace-pre-line">{diaryEntry || '(Kein Eintrag vorhanden)'}</p>
                              </div>
                              <div className="mt-4 text-center">
                                <span className="text-sm text-pink-600">Dein Eintrag wurde gespeichert.</span>
                              </div>
                            </div>
                          ) : (
                            <form 
                              className="flex-1 flex flex-col"
                              onSubmit={(e) => {
                                e.preventDefault();
                                if (diaryEntry.trim()) {
                                  setIsDiarySubmitted(true);
                                  // In the future, we'll add saving logic here
                                }
                              }}
                            >
                              <label htmlFor="diary-entry" className="block text-sm font-medium text-gray-700 mb-2">
                                Wie fühlst du dich heute?
                              </label>
                              <textarea
                                id="diary-entry"
                                rows={8}
                                className="flex-1 w-full p-3 text-sm border rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent mb-4"
                                placeholder="Schreibe hier, was dich bewegt..."
                                value={diaryEntry}
                                onChange={(e) => setDiaryEntry(e.target.value)}
                              />
                              <button 
                                type="submit" 
                                disabled={!diaryEntry.trim()}
                                className={`px-6 py-2 text-sm font-medium rounded-lg transition-colors w-full ${
                                  diaryEntry.trim() 
                                    ? 'bg-gradient-to-r from-pink-600 to-pink-700 text-white hover:from-pink-700 hover:to-pink-800' 
                                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                                }`}
                              >
                                Eintrag speichern
                              </button>
                            </form>
                          )}
                        </motion.div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
