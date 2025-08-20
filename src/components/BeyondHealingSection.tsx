import React from "react";

function Bullet() {
  return (
    <svg
      className="mt-1 h-4 w-4 flex-none"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
    </svg>
  );
}

export default function BeyondHealingSection() {
  return (
    <section
      aria-labelledby="beyond-healing-title"
      className="relative overflow-hidden bg-white py-16 md:py-24"
    >
      {/* Hintergrund-Accent */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06]"
        style={{
          background:
            "radial-gradient(600px 300px at 20% 0%, #f59e0b 0, transparent 60%), radial-gradient(600px 300px at 80% 100%, #6366f1 0, transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold tracking-widest text-amber-600">
            Mein Weg
          </p>
          <h2
            id="beyond-healing-title"
            className="mt-2 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
          >
            Jenseits der Heilung
          </h2>
          <p className="mt-3 text-lg italic text-rose-800/90">
            „Heilung ist der Anfang, nicht das Ende“
          </p>

          <p className="mt-6 text-base text-gray-600">
            Meine persönliche Heilung war erst der Anfang. Danach begann mein
            Weg des Lernens, Lehrens und Erforschens. Internationale
            Erfahrungen in Bali, Italien und der Schweiz haben meinen Horizont
            erweitert und meinen Ansatz geprägt.
          </p>
        </div>

        {/* Zweispaltige Feature-Gruppen */}
        <div className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-2">
          {/* Gruppe: Körperarbeit */}
          <div className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.75}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 11v2a5 5 0 0010 0v-1M12 4v7m-5 0h10"
                  />
                </svg>
              </span>
              <h3 className="text-lg font-semibold text-gray-900">
                Körperarbeit
              </h3>
            </div>
            <p className="mt-3 text-gray-600">
              Sanfte Methoden für tiefe körperliche Heilung und Wohlbefinden
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <Bullet />
                <span>Somatische Körperarbeit</span>
              </li>
              <li className="flex items-start gap-2">
                <Bullet />
                <span>Rebalancing</span>
              </li>
              <li className="flex items-start gap-2">
                <Bullet />
                <span>Atemarbeit</span>
              </li>
            </ul>
          </div>

          {/* Gruppe: Spirituelle Entwicklung */}
          <div className="rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white shadow-sm">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-gray-900"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.75}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3l2.5 5.5L20 11l-5.5 2L12 19l-2.5-6L4 11l5.5-2L12 3z"
                  />
                </svg>
              </span>
              <h3 className="text-lg font-semibold text-gray-900">
                Spirituelle Entwicklung
              </h3>
            </div>
            <p className="mt-3 text-gray-600">
              Tiefe Verbindung zu deinem inneren Selbst und höherem Bewusstsein
            </p>
            <ul className="mt-4 space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <Bullet />
                <span>Meditation</span>
              </li>
              <li className="flex items-start gap-2">
                <Bullet />
                <span>Bewusstseinsarbeit</span>
              </li>
              <li className="flex items-start gap-2">
                <Bullet />
                <span>Energiearbeit</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Internationale Erfahrung */}
        <div className="mt-10">
          <h4 className="text-base font-semibold tracking-tight text-gray-900">
            Internationale Erfahrung
          </h4>
          <p className="mt-2 text-sm text-gray-600">
            Geprägt von Lehren aus Bali, Italien, der Schweiz und darüber
            hinaus
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {["Bali", "Italien", "Schweiz"].map((place) => (
              <span
                key={place}
                className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm font-medium text-gray-800 shadow-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                {place}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-center gap-3 text-center">
          <p className="text-sm text-gray-600">
            Entdecke deinen Heilungsweg
          </p>
          <a
            href="/termin"
            className="inline-flex items-center justify-center rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:translate-y-[-1px] hover:shadow md:text-base"
          >
            Jetzt kostenloses Erstgespräch vereinbaren
            <svg
              className="ml-2 h-4 w-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.75}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
