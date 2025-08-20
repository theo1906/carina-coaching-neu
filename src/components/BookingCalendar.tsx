'use client';

import { useState } from 'react';
import { format, addDays, isSameDay, isBefore, addWeeks, subWeeks } from 'date-fns';
import { de } from 'date-fns/locale';
import { Calendar as CalendarIcon, Clock, ChevronLeft, ChevronRight, CheckCircleIcon, XCircleIcon } from 'lucide-react';

interface DayType {
  date: Date;
  day: number;
  hasSlots: boolean;
  isPast: boolean;
  isSelected: boolean;
}

// Sample available time slots (in a real app, this would come from your backend)
const availableSlots = {
  [format(new Date(), 'yyyy-MM-dd')]: ['09:00', '11:00', '14:00', '16:00'],
  [format(addDays(new Date(), 1), 'yyyy-MM-dd')]: ['10:00', '13:00', '15:00', '17:00'],
  [format(addDays(new Date(), 2), 'yyyy-MM-dd')]: ['09:30', '11:30', '14:30', '16:30'],
  [format(addDays(new Date(), 3), 'yyyy-MM-dd')]: ['10:30', '13:30', '15:30'],
  [format(addDays(new Date(), 7), 'yyyy-MM-dd')]: ['09:00', '11:00', '14:00', '16:00'],
};

export default function BookingCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    concern: '',
    message: '',
    marketingOptIn: false,
  });
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    concern: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const startDate = new Date(currentDate);
  startDate.setDate(1);
  const startDay = startDate.getDay();
  
  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();

  const days: DayType[] = [];
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), i);
    const dateKey = format(date, 'yyyy-MM-dd');
    const hasSlots = availableSlots[dateKey as keyof typeof availableSlots]?.length > 0;
    const isPast = isBefore(date, new Date());
    
    days.push({
      date,
      day: i,
      hasSlots: !!hasSlots,
      isPast,
      isSelected: selectedDate ? isSameDay(date, selectedDate) : false
    });
  }

  const weekDays = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
  const emptyDays = Array(startDay === 0 ? 6 : startDay - 1).fill(null);
  
  const allDays = [...emptyDays, ...days];
  
  const handleDateSelect = (day: DayType) => {
    if (day.isPast || !day.hasSlots) return;
    setSelectedDate(day.date);
    setSelectedTime(null);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
  };

  const validateForm = () => {
    const errors = {
      firstName: !formData.firstName ? 'Bitte geben Sie Ihren Vornamen ein' : '',
      lastName: !formData.lastName ? 'Bitte geben Sie Ihren Nachnamen ein' : '',
      email: !formData.email ? 'Bitte geben Sie Ihre E-Mail ein' : 
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email) ? 'Bitte geben Sie eine gültige E-Mail ein' : '',
      concern: !formData.concern ? 'Bitte beschreiben Sie Ihr Anliegen' : '',
      message: !formData.message ? 'Bitte geben Sie eine Nachricht ein' : '',
    };
    setFormErrors(errors);
    return Object.values(errors).every(error => !error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // In a real application, you would send this data to your backend
      // For now, we'll just show a success message
      setSubmissionSuccess(true);
      // Reset form after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        concern: '',
        message: '',
        marketingOptIn: false,
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleBooking = () => {
    if (!selectedDate || !selectedTime) return;
    setIsModalOpen(true);
  };

  const nextMonth = () => {
    setCurrentDate(addWeeks(currentDate, 4));
  };

  const prevMonth = () => {
    setCurrentDate(subWeeks(currentDate, 4));
  };

  const getAvailableTimes = () => {
    if (!selectedDate) return [];
    const dateKey = format(selectedDate, 'yyyy-MM-dd');
    return availableSlots[dateKey as keyof typeof availableSlots] || [];
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
      <div className="p-6 sm:p-8">
        {/* Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
            <div className="bg-white rounded-xl p-8 w-full max-w-2xl mx-4 shadow-xl">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Termin bestätigen</h2>
                  <div className="w-12 h-1 bg-gradient-to-r from-rose-400 to-fuchsia-400 rounded-full mt-3"></div>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <XCircleIcon className="h-6 w-6" />
                </button>
              </div>

              {submissionSuccess ? (
                <div className="bg-gradient-to-r from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                  <div className="flex items-center">
                    <CheckCircleIcon className="h-6 w-6 text-green-500 mr-3" />
                    <div>
                      <h3 className="text-lg font-medium text-green-800">Vielen Dank!</h3>
                      <p className="mt-2 text-green-700">Ihr Termin wurde erfolgreich gebucht. Sie erhalten in Kürze eine Bestätigung per E-Mail.</p>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Date and Time */}
                  <div className="mb-6">
                    <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="h-5 w-5 text-pink-600" />
                        <span className="text-pink-700 font-semibold">
                          {format(selectedDate!, 'EEEE, d. MMMM yyyy')}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-5 w-5 text-pink-600" />
                        <span className="text-pink-700 font-semibold">
                          {selectedTime}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {/* First Name */}
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                        Vorname
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={`mt-0.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm ${
                          formErrors.firstName ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500' : ''
                        }`}
                        placeholder="Ihr Vorname"
                      />
                      {formErrors.firstName && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.firstName}</p>
                      )}
                    </div>

                    {/* Last Name */}
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                        Nachname
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={`mt-0.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm ${
                          formErrors.lastName ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500' : ''
                        }`}
                        placeholder="Ihr Nachname"
                      />
                      {formErrors.lastName && (
                        <p className="mt-1 text-sm text-red-600">{formErrors.lastName}</p>
                      )}
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                      E-Mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`mt-0.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm ${
                        formErrors.email ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500' : ''
                      }`}
                      placeholder="Ihre E-Mail-Adresse"
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.email}</p>
                    )}
                  </div>

                  {/* Concern */}
                  <div>
                    <label htmlFor="concern" className="block text-sm font-medium text-gray-700">
                      Ihr Anliegen
                    </label>
                    <input
                      type="text"
                      id="concern"
                      name="concern"
                      value={formData.concern}
                      onChange={handleChange}
                      className={`mt-0.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm ${
                        formErrors.concern ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500' : ''
                      }`}
                      placeholder="Beschreiben Sie Ihr Anliegen"
                    />
                    {formErrors.concern && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.concern}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                      Ihre Nachricht
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`mt-0.5 block w-full rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500 sm:text-sm ${
                        formErrors.message ? 'border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500' : ''
                      }`}
                      placeholder="Bitte geben Sie hier Ihre Nachricht ein..."
                    />
                    {formErrors.message && (
                      <p className="mt-1 text-sm text-red-600">{formErrors.message}</p>
                    )}
                  </div>

                  {/* Marketing Opt-In */}
                  <div className="flex items-center">
                    <input
                      id="marketingOptIn"
                      name="marketingOptIn"
                      type="checkbox"
                      checked={formData.marketingOptIn}
                      onChange={handleChange}
                      className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300 rounded"
                    />
                    <label htmlFor="marketingOptIn" className="ml-2 block text-sm text-gray-700">
                      Ich stimme zu, dass meine Daten für Marketingzwecke verwendet werden dürfen.
                    </label>
                  </div>

                  <div className="mt-8">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex justify-center py-3 px-6 border border-transparent rounded-full shadow-sm text-sm font-medium text-white bg-gradient-to-r from-rose-600 to-fuchsia-600 hover:from-rose-700 hover:to-fuchsia-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 hover:shadow-md"
                    >
                      <div className="flex items-center gap-2">
                        <CalendarIcon className="h-5 w-5" />
                        {isSubmitting ? 'Absenden...' : 'Absenden'}
                      </div>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <CalendarIcon className="h-8 w-8 text-pink-600 mr-3" />
            <h2 className="text-2xl font-light text-gray-900">Termin auswählen</h2>
          </div>
          <div className="flex items-center space-x-2">
            <button 
              onClick={prevMonth}
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label="Vorheriger Monat"
            >
              <ChevronLeft className="h-5 w-5 text-gray-600" />
            </button>
            <span className="text-lg font-medium text-gray-700">
              {format(currentDate, 'MMMM yyyy')}
            </span>
            <button 
              onClick={nextMonth}
              className="p-2 rounded-full hover:bg-gray-100"
              aria-label="Nächster Monat"
            >
              <ChevronRight className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1 mb-6">
          {weekDays.map((day) => (
            <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
              {day}
            </div>
          ))}
          {allDays.map((day, index) => {
            if (!day) {
              return <div key={`empty-${index}`} className="h-12" />;
            }

            const isAvailable = day.hasSlots && !day.isPast;
            const isSelected = day.isSelected;

            return (
              <button
                key={day.day}
                onClick={() => handleDateSelect(day)}
                disabled={!isAvailable}
                className={`
                  h-12 rounded-lg flex items-center justify-center
                  ${isSelected ? 'bg-pink-600 text-white' : ''}
                  ${!isAvailable ? 'text-gray-300 cursor-not-allowed' : 'hover:bg-gray-100'}
                  ${isAvailable && !isSelected ? 'text-gray-700' : ''}
                  transition-colors
                `}
              >
                {day.day}
              </button>
            );
          })}
        </div>

        {selectedDate && (
          <div className="mt-8 border-t pt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">
              Verfügbare Zeiten am {format(selectedDate, 'EEEE, d. MMMM yyyy')}
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {getAvailableTimes().map((time) => {
                const [hour] = time.split(':');
                const timeSlot = `${time} - ${parseInt(hour) + 1}:00`;
                const isSelected = selectedTime === time;
                
                return (
                  <button
                    key={time}
                    onClick={() => handleTimeSelect(time)}
                    className={`
                      py-3 px-4 rounded-lg border text-center
                      ${isSelected 
                        ? 'bg-pink-50 border-pink-500 text-pink-700' 
                        : 'border-gray-200 hover:border-pink-300 text-gray-700'}
                      transition-colors
                    `}
                  >
                    {timeSlot} Uhr
                  </button>
                );
              })}
            </div>

            <div className="mt-8 flex justify-end">
              <button
                onClick={handleBooking}
                disabled={!selectedTime}
                className={`
                  px-6 py-3 rounded-full font-medium
                  ${selectedTime 
                    ? 'bg-pink-600 text-white hover:bg-pink-700' 
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'}
                  transition-colors
                `}
              >
                Termin buchen
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
