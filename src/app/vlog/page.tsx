'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { CalendarIcon, CheckIcon, SpeakerIcon, UsersIcon, SparklesIcon } from 'lucide-react';
import { motion } from 'framer-motion';

// Mock data for podcasts
const podcasts = [
  {
    title: 'Episode 1 - Thema der Woche',
    date: '15. Juli 2025',
    description: 'In dieser Episode sprechen wir über Thema X und geben praktische Tipps.',
    audioUrl: '/audio/episode1.mp3',
    duration: '30:00',
    thumbnail: 'https://via.placeholder.com/1280x720/000000/ffffff?text=Podcast+Episode+1',
    topics: ['Mindset', 'Selbstbewusstsein', 'Persönliche Entwicklung']
  },
  {
    title: 'Episode 2 - Thema der Woche',
    date: '8. Juli 2025',
    description: 'In dieser Episode sprechen wir über Thema Y und geben praktische Tipps.',
    audioUrl: '/audio/episode2.mp3',
    duration: '25:00',
    thumbnail: 'https://via.placeholder.com/1280x720/000000/ffffff?text=Podcast+Episode+2',
    topics: ['Lebensqualität', 'Glück', 'Zufriedenheit']
  },
  {
    title: 'Episode 3 - Thema der Woche',
    date: '1. Juli 2025',
    description: 'In dieser Episode sprechen wir über Thema Z und geben praktische Tipps.',
    audioUrl: '/audio/episode3.mp3',
    duration: '32:00',
    thumbnail: 'https://via.placeholder.com/1280x720/000000/ffffff?text=Podcast+Episode+3',
    topics: ['Ziele', 'Motivation', 'Erfolg', 'Persönliche Entwicklung']
  },
];

// Current weekly question
const weeklyQuestion = {
  question: 'Was ist der größte Erfolg, den du in den letzten 7 Tagen erlebt hast?',
  week: 'Woche 28/2025',
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
          <div className="absolute top-1/3 -right-20 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">Podcast & Frage der Woche</h1>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-fuchsia-400 mx-auto mb-6"></div>
            <p className="text-xl text-rose-800/90 italic max-w-3xl mx-auto mb-4">
              Entdecke meine Podcast-Episoden und teile deine Gedanken in der Frage der Woche
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Podcast Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Neueste Podcast-Episoden</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {podcasts.map((podcast, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="group relative bg-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-w-16 aspect-h-9 relative">
                  <div className="absolute inset-0 bg-gray-200">
                    <div className="absolute inset-0 bg-gray-300/30 animate-pulse" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center text-white">
                      <span className="text-sm">{podcast.duration}</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{podcast.title}</h3>
                  <div className="flex items-center text-gray-500 mb-4">
                    <CalendarIcon className="h-4 w-4 mr-2" />
                    <span>{podcast.date}</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{podcast.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {podcast.topics.map((topic, index) => (
                      <span
                        key={topic}
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          index === podcast.topics.length - 1 ? 'bg-pink-200 text-pink-900' : 'bg-pink-100 text-pink-800'
                        }`}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <audio controls className="w-full mt-4">
                    <source src={podcast.audioUrl} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8">
            <button
              type="button"
              className="w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-gradient-to-r from-rose-600 to-fuchsia-600 hover:from-rose-700 hover:to-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-all duration-300 hover:shadow-md"
            >
              <div className="flex items-center gap-2">
                <span>Jetzt reinhören</span>
                <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM10 4a6 6 0 110 12 6 6 0 010-12zM10 12.5a.5.5 0 01-.5-.5H6a.5.5 0 010-1h3.5a.5.5 0 010 1H6a1.5 1.5 0 000 3h3.5a1.5 1.5 0 000-3H10a.5.5 0 01.5-.5z" clipRule="evenodd" />
                </svg>
              </div>
            </button>
          </div>
        </div>

        {/* Weekly Question Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Frage der Woche</h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-8">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-rose-600" />
                  <h3 className="text-xl font-semibold text-gray-900">{weeklyQuestion.question}</h3>
                </div>
                <p className="text-sm text-gray-500">{weeklyQuestion.week}</p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <SpeakerIcon className="h-6 w-6 text-rose-600" />
                        <h4 className="text-lg font-semibold text-gray-800">Podcast-Gemeinschaft</h4>
                      </div>
                      <p className="mt-2 text-gray-600">
                        Deine Antworten werden anonym in meiner Podcast-Episode der nächsten Woche vorgestellt und diskutiert. Ich wähle einige besonders interessante Antworten aus und gebe praktische Tipps und Einsichten dazu.
                      </p>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <UsersIcon className="h-6 w-6 text-rose-600" />
                        <h4 className="text-lg font-semibold text-gray-800">Gemeinsam wachsen</h4>
                      </div>
                      <p className="mt-2 text-gray-600">
                        Deine Ehrlichkeit und Offenheit sind sehr wichtig für diese Gemeinschaft. Jede Antwort hilft anderen, sich besser zu verstehen und zu wachsen.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <SparklesIcon className="h-6 w-6 text-rose-600" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">Dein Beitrag zählt</h4>
                      <p className="mt-2 text-gray-600">
                        Jede Woche stelle ich eine neue Frage, die sich mit verschiedenen Aspekten deines Lebens und deiner Entwicklung befasst. Deine Antworten helfen anderen, sich besser zu verstehen und zu wachsen.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="answer" className="block text-sm font-medium text-gray-700">
                    Deine Antwort
                  </label>
                  <div className="mt-1">
                    <textarea
                      id="answer"
                      rows={4}
                      className="shadow-sm focus:ring-rose-500 focus:border-rose-500 block w-full sm:text-sm border-gray-300 rounded-md p-3"
                      placeholder="Teile hier deine Gedanken und Gefühle zu der Frage..."
                      onChange={(e) => setSelectedMood(e.target.value)}
                      value={selectedMood}
                      required
                    />
                  </div>
                  <p className="text-sm text-gray-500">
                    Deine Antwort wird anonym verarbeitet und in der nächsten Podcast-Episode vorgestellt.
                  </p>
                </div>
              </div>
              <button
                type="submit"
                disabled={isSubmitting || !selectedMood}
                className="w-full flex justify-center py-3 px-6 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-gradient-to-r from-rose-600 to-fuchsia-600 hover:from-rose-700 hover:to-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-md"
              >
                <div className="flex items-center gap-2">
                  <CheckIcon className="h-5 w-5" />
                  {isSubmitting ? 'Absenden...' : 'Antwort senden'}
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
