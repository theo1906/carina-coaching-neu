'use client';

export default function FridaQuote() {
  return (
    <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-2xl p-6 my-4 border border-rose-100">
      <blockquote className="text-center">
        <p className="text-lg md:text-xl font-serif italic text-rose-900 leading-relaxed">
          "Verliebe dich in dich selbst, in das Leben und dann in wen du willst."
        </p>
        <footer className="text-rose-800 font-medium mt-2">
          — Frida Kahlo
        </footer>
      </blockquote>
    </div>
  );
}
