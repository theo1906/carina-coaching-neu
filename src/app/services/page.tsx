'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { CalendarIcon, CheckIcon } from 'lucide-react';

// Mock data for podcasts
const podcasts = [
  {
    title: 'Episode 1 - Thema der Woche',
    date: '15. Juli 2025',
    description: 'In dieser Episode sprechen wir über Thema X und geben praktische Tipps.',
    audioUrl: '/audio/episode1.mp3',
    duration: '30:00',
  },
  {
    title: 'Episode 2 - Thema der Woche',
    date: '8. Juli 2025',
    description: 'In dieser Episode sprechen wir über Thema Y und geben praktische Tipps.',
    audioUrl: '/audio/episode2.mp3',
    duration: '25:00',
  },
  {
    title: 'Episode 3 - Thema der Woche',
    date: '1. Juli 2025',
    description: 'In dieser Episode sprechen wir über Thema Z und geben praktische Tipps.',
    audioUrl: '/audio/episode3.mp3',
    duration: '32:00',
  },
];

// Current weekly question
const weeklyQuestion = {
  question: 'Wie fühlst du dich heute?',
  week: 'Woche 28/2025',
  options: [
    'Sehr gut',
    'Gut',
    'Neutral',
    'Nicht so gut',
    'Schlecht',
  ],
};

export default function BlogPage() {
  const [selectedMood, setSelectedMood] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedMood) return;

    setIsSubmitting(true);
    try {
      // In a real application, you would send this data to your backend
      console.log('Submitting mood:', selectedMood);
      // Reset form after successful submission
      setSelectedMood('');
    } catch (error) {
      console.error('Error submitting mood:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-24 bg-gradient-to-b from-white to-pink-50 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-white to-transparent z-10"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">Blog & Podcast</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-fuchsia-400 mx-auto mb-6"></div>
            <p className="text-xl text-rose-800/90 italic max-w-3xl mx-auto">
              Hier findest du meine Podcast-Episoden und die Frage der Woche
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Podcast Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Podcast</h2>
          <div className="grid grid-cols-1 gap-8">
            {podcasts.map((podcast, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{podcast.title}</h3>
                  <div className="flex items-center text-gray-500 mb-4">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    <span>{podcast.date}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{podcast.description}</p>
                  <div className="flex items-center justify-between">
                    <audio controls className="w-full mb-4">
                      <source src={podcast.audioUrl} type="audio/mpeg" />
                      Your browser does not support the audio element.
                    </audio>
                    <span className="text-sm text-gray-500">{podcast.duration}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Weekly Question Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frage der Woche</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{weeklyQuestion.question}</h3>
              <p className="text-sm text-gray-500">{weeklyQuestion.week}</p>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                {weeklyQuestion.options.map((option) => (
                  <label key={option} className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="mood"
                      value={option}
                      checked={selectedMood === option}
                      onChange={() => setSelectedMood(option)}
                      className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300"
                    />
                    <span className="text-gray-700">{option}</span>
                  </label>
                ))}
              </div>
              <button
                type="submit"
                disabled={isSubmitting || !selectedMood}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-gradient-to-r from-rose-600 to-fuchsia-600 hover:from-rose-700 hover:to-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-md"
              >
                {isSubmitting ? 'Absenden...' : 'Antwort senden'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
