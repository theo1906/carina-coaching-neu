import React from "react";

/**
 * Jenseits der Heilung – 1:1 Recreation in React/TSX + Tailwind
 * - Nutzt nur Tailwind-Klassen + ein paar inline-Styles für weiche Schatten/Verläufe
 * - Passt sich mobil → Desktop an (2-spaltig ab md)
 * - Falls deine Projektfarben/Fonts global gesetzt sind, übernimmt die Section diese automatisch
 */
export default function BeyondHealingExact() {
  return (
    <>
      <section
        aria-labelledby="beyond-heading"
        className="relative overflow-hidden bg-white"
      >
        {/* zarter Hintergrundschimmer oben rechts */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background: "radial-gradient(600px 300px at 90% 0%, rgba(255, 228, 236, .55), transparent 60%)"
          }}
        />

        <div className="mx-auto max-w-7xl px-4 pt-10 pb-16 sm:px-6 lg:px-8 lg:pb-24">
        {/* Header */}
        <div className="text-center">
          <span className="inline-flex items-center rounded-full bg-[#fde7ef] px-4 py-1 text-sm font-semibold text-[#b2153f] shadow-sm">
            Mein Weg
          </span>

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
              Jenseits der Heilung
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-400 to-rose-400 mx-auto mb-6"></div>
            <p className="text-xl text-rose-800/90 italic max-w-2xl mx-auto">
              "AUTHENTIZITÄT VERBINDET – AUF AUGENHÖHE"
            </p>
          </div>

          <p className="mt-4 text-lg italic text-[#c95373]">
            "Heilung ist der Anfang, nicht das Ende"
          </p>
        </div>

        {/* Inhalt: zwei Spalten */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
          {/* Linke Karte: Text + 2 Subcards */}
          <article
            className="relative rounded-[28px] bg-white p-6 sm:p-8"
            style={{
              boxShadow:
                "0 8px 20px rgba(16,24,40,.06), 0 20px 60px rgba(16,24,40,.08)",
              border: "1px solid rgba(0,0,0,0.04)",
              width: '100%',
              maxWidth: '100%'
            }}
          >
            <div className="flex items-start gap-4">
              {/* Sparkles-Icon */}
              <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#fde7ef]">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-[#b2153f]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.7}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3l1.6 3.6L17 8.2l-3.4 1.2L12 13l-1.6-3.6L7 8.2l3.4-1.2L12 3zM6 15l.8 1.8L8.7 18l-1.9.7L6 20.5l-.8-1.8L3.3 18l1.9-.7L6 15zM18 14l1.2 2.6 2.6 1.2-2.6 1.2L18 21.6l-1.2-2.6-2.6-1.2 2.6-1.2L18 14z"
                  />
                </svg>
              </span>

              <div>
                <h3 className="text-xl font-semibold text-[#232323]">
                  Meine Reise des Lernens
                </h3>
                <p className="mt-2 text-[15px] leading-7 text-[#3c3c3c]">
                  Meine Reise zurück zu mir hat nicht mit der Heilung meiner Bulimie geendet. 
                  Sie war der Anfang. Fasziniert von meiner eigenen spirituellen Heilerfahrung 
                  war ich fest entschlossen, mich auf meinen Weg des Lernens, Lehrens und 
                  Erforschens zu begeben, über diese Kraft in mir, die jeden Tag stärker wurde 
                  und mich angefangen hat zu leiten.
                </p>
              </div>
            </div>

            {/* Subcards */}
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {/* Körperarbeit */}
              <div className="rounded-[20px] border border-[#f6cfd9] bg-[#fdecef] p-5">
                <div className="mb-2 flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#ffdbe6]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5 text-[#b2153f]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 12l4 4L19 6"
                      />
                    </svg>
                  </span>
                  <h4 className="text-lg font-semibold text-[#7a1735]">
                    Körperarbeit
                  </h4>
                </div>
                <p className="text-[15px] leading-6 text-[#6b6b6b]">
                  Sanfte Methoden für tiefe körperliche Heilung und Wohlbefinden
                </p>
              </div>

              {/* Spirituelle Entwicklung */}
              <div className="rounded-[20px] border border-[#e9d3ef] bg-[#f8eefb] p-5">
                <div className="mb-2 flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#f2e6fb]">
                    <svg
                      viewBox="0 0 24 24"
                      className="h-3.5 w-3.5 text-[#a14ad1]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3l2.5 5.5L20 11l-5.5 2L12 19l-2.5-6L4 11l5.5-2L12 3z"
                      />
                    </svg>
                  </span>
                  <h4 className="text-lg font-semibold text-[#5b2a69]">
                    Spirituelle Entwicklung
                  </h4>
                </div>
                <p className="text-[15px] leading-6 text-[#6b6b6b]">
                  Tiefe Verbindung zu deinem inneren Selbst und höherem
                  Bewusstsein
                </p>
              </div>
            </div>
          </article>

          {/* Rechte Karte: Gradient / Icon / Chips */}
          <div className="flex justify-center items-center w-full">
            <article
              className="relative overflow-hidden rounded-[28px] p-6 sm:p-8 w-full max-w-[90%] flex flex-col items-center justify-center"
              style={{
                background:
                  "linear-gradient(135deg, #fde7ef 0%, #f8e9f2 40%, #f6eef6 100%)",
                boxShadow:
                  "0 8px 20px rgba(16,24,40,.05), 0 20px 60px rgba(16,24,40,.08)",
                border: "1px solid rgba(255, 192, 203, .35)",
                minHeight: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
            {/* Deko Herz oben rechts */}
            <div className="absolute right-4 top-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/70 backdrop-blur">
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5 text-[#d74268]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.7}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21s-7-4.4-7-10a4 4 0 017-2.5A4 4 0 0119 11c0 5.6-7 10-7 10z"
                  />
                </svg>
              </span>
            </div>

            {/* große, zarte Kreise hinter dem Icon */}
            <div
              aria-hidden
              className="pointer-events-none absolute left-1/2 top-1/3 -z-0 h-[260px] w-[260px] -translate-x-1/2 rounded-full opacity-60"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(255,255,255,.7), rgba(255,255,255,0) 70%)",
              }}
            />
            <div
              aria-hidden
              className="pointer-events-none absolute left-[55%] top-[46%] -z-0 h-[340px] w-[340px] -translate-x-1/2 rounded-full opacity-50"
              style={{
                background:
                  "radial-gradient(closest-side, rgba(255, 185, 204, .35), rgba(255, 185, 204, 0) 70%)",
              }}
            />

            <div className="relative z-[1] text-center">
              {/* Icon Bubble */}
              <div className="mx-auto mb-6 flex h-32 w-32 items-center justify-center rounded-full bg-white/70 shadow-sm backdrop-blur flex-shrink-0">
                <svg
                  viewBox="0 0 24 24"
                  className="h-14 w-14 text-[#d74268]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.7}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12a9 9 0 1018 0A9 9 0 003 12zm9-9v18M3.6 9h16.8M3.6 15h16.8"
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-semibold text-[#7a1735]">
                Internationale Erfahrung
              </h3>
              <p className="mt-2 text-[15px] leading-7 text-[#3c3c3c]">
                Geprägt von Lehren aus Bali, Italien, der Schweiz und darüber
                hinaus
              </p>

              {/* Country Chips */}
              <div className="mt-5 flex flex-wrap gap-2 justify-center">
                {/* Bali */}
                <div className="rounded-full border border-[#f6cfd9] bg-[#fdecef] px-4 py-1.5">
                  <span className="text-sm font-medium text-[#7a1735]">Bali</span>
                </div>

                {/* Indien */}
                <div className="rounded-full border border-[#e9d3ef] bg-[#f8eefb] px-4 py-1.5">
                  <span className="text-sm font-medium text-[#5b2a69]">Indien</span>
                </div>

                {/* Costa Rica */}
                <div className="rounded-full border border-[#d3e3ef] bg-[#eef5fb] px-4 py-1.5">
                  <span className="text-sm font-medium text-[#1a4b7a]">Costa Rica</span>
                </div>

                {/* Schweiz */}
                <div className="rounded-full border border-[#f6e6d3] bg-[#fef5e9] px-4 py-1.5">
                  <span className="text-sm font-medium text-[#8a5a1a]">Schweiz</span>
                </div>
              </div>
            </div>
            </article>
          </div>
        </div>

        {/* CTA unten */}
        <div className="mt-10 text-center">
          <a
            href="/termin"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-600 to-rose-600 px-8 py-3 text-base font-medium text-white shadow-sm hover:from-pink-700 hover:to-rose-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Entdecke deinen Heilungsweg
          </a>
        </div>
      </div>
    </section>

    {/* Meine Qualifikationen und Corporate Jobs */}
    <section className="py-16 bg-gradient-to-b from-white to-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-rose-900 mb-4">
            Meine Qualifikationen und Corporate Jobs
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-fuchsia-400 to-rose-400 mx-auto mb-6"></div>
          <p className="text-xl text-rose-800/90 italic max-w-3xl mx-auto">
            "Mein Weg von der Wirtschaft in die ganzheitliche Begleitung"
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Akademische Ausbildung & Corporate Karriere */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-rose-100">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-rose-800 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
                Akademische Ausbildung & Corporate Karriere
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-rose-400 mr-3"></span>
                  <span className="text-gray-700">
                    <span className="font-semibold">2004-2010:</span> Business Administration and Cultural Studies, Diplom Kulturwirt; Universität Passau & Universitat Pompeo Fabra (zwei Auslandssemester in Barcelona, Spanien)
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-rose-400 mr-3"></span>
                  <span className="text-gray-700">
                    <span className="font-semibold">Apr-Jun 2010:</span> Masterarbeit: "The Importance of Change Management and Communication in Organizational Change"; Johannesburg, Südafrika
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-rose-400 mr-3"></span>
                  <span className="text-gray-700">
                    <span className="font-semibold">Jun 2015 - Dez 2020 und Jul 2022-Dez 2024:</span> Marketing & Sales Manager BMW AG
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-rose-400 mr-3"></span>
                  <span className="text-gray-700">
                    <span className="font-semibold">2011 - 2015:</span> Marketing- und Eventmanagerin in diversen Agenturen
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Zertifizierte Ausbildungen */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-rose-100">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-rose-800 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
                Zertifizierte Ausbildungen
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-rose-400 mr-3"></span>
                  <span className="text-gray-700">
                    <span className="font-semibold">Okt 2024 - Heute:</span> Assistenz Spirituelles System-Coaching Training, Dr Klaus Peter Horn Coaching & Training; München, Deutschland
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-rose-400 mr-3"></span>
                  <span className="text-gray-700">
                    <span className="font-semibold">Sep 2023 - Juli 2024:</span> Spirituelles System-Coaching Training (7 Module), Dr Klaus Peter Horn Coaching & Training; München, Deutschland
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-rose-400 mr-3"></span>
                  <span className="text-gray-700">
                    <span className="font-semibold">Okt 2021 - Dez 2022:</span> Meditation Teacher Training (190 Stunden), Karsten Spaderna; Online
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-rose-400 mr-3"></span>
                  <span className="text-gray-700">
                    <span className="font-semibold">Okt 2020 - Juli 2022:</span> Silence of Touch - Psychosomatic Bodywork & Trauma-Informed Massage Therapy Training (264 Stunden), Academy for Rebalancing Psychosomatic Bodywork; Anu & Gyana Cain; München, Deutschland
                  </span>
                </li>
                <details className="group">
                  <summary className="flex items-center cursor-pointer list-none p-2 -mx-2 rounded-lg hover:bg-rose-50 transition-colors">
                    <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-rose-400 mr-3"></span>
                    <span className="text-rose-600 font-medium">Weitere Ausbildungen anzeigen</span>
                    <svg className="w-4 h-4 ml-2 text-rose-400 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="ml-5 mt-2 space-y-4">
                    <div className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-rose-400 mr-3"></span>
                      <span className="text-gray-700">
                        <span className="font-semibold">Jun 2020 - Nov 2021:</span> Working With People Training - Holistic Counselling and Trauma Work (250 Stunden), Turiya Hanover & Rafia Morgan; Mandali Retreat Center, Italien
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-rose-400 mr-3"></span>
                      <span className="text-gray-700">
                        <span className="font-semibold">Mai 2020 - Okt 2020:</span> The UPGRADE: Sequencing (25 Stunden), Eva Klein Yoga; The Studio Academy, München, Deutschland
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-rose-400 mr-3"></span>
                      <span className="text-gray-700">
                        <span className="font-semibold">Mai 2019 - Aug 2020:</span> Dimensions of Being - Essence Training and Trauma Work (160 Stunden), Turiya Hanover & Vasumati Hancock; Köln, Deutschland
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-rose-400 mr-3"></span>
                      <span className="text-gray-700">
                        <span className="font-semibold">Juli - Aug 2020:</span> Yoga Teacher Training (200 Stunden), Elias Katirtsigiano & Persefoni Aishwarya; Karpathos, Griechenland
                      </span>
                    </div>
                    <div className="flex items-start">
                      <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-rose-400 mr-3"></span>
                      <span className="text-gray-700">
                        <span className="font-semibold">April 2018:</span> "Alltagsbegleiter" Zertifikat - Volunteer, (40 Stunden), DEIN NACHBAR e.V. Thomas Oeben; Munich, Germany
                      </span>
                    </div>
                  </div>
                </details>
              </ul>
            </div>
          </div>
        </div>

        {/* Weiterführende Trainings */}
        <div className="mt-12 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-rose-100">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-rose-800 mb-6 flex items-center">
                <svg className="w-6 h-6 mr-2 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                </svg>
                Weiterführende Trainings in Trauma- & Persönlichkeitsarbeit und "Conscious Relating"
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-rose-400 mr-3"></span>
                    <span className="text-gray-700">
                      <span className="font-semibold">Juli 2025:</span> From Shame and Guilt to Selflove - Intensive Trauma Workshop (56 Stunden), Amana & Krish Torbe; Italy
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-rose-400 mr-3"></span>
                    <span className="text-gray-700">
                      <span className="font-semibold">Dez 2024 - Jan 2025:</span> The Learning Love Intensive Workshop - Training for Trauma, Childhood Wounds & Conscious Relating. The somatic approach to healing trauma, and working with issues of shame (96 Stunden), Amana & Krish Torbe; Bali
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-rose-400 mr-3"></span>
                    <span className="text-gray-700">
                      <span className="font-semibold">Dez 2023:</span> Who Is In Awareness Intensive Retreat & 10-Day Silent Retreat mit Tyohar in PachaMama (100 Stunden); Nosara, Costa Rica
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-rose-400 mr-3"></span>
                    <span className="text-gray-700">
                      <span className="font-semibold">Dez 2022 - Jan 2023:</span> The Learning Love Intensive Workshop (96 Stunden), Amana & Krish Torbe; Bali
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-rose-400 mr-3"></span>
                    <span className="text-gray-700">
                      <span className="font-semibold">Jan - März 2021:</span> Rise Up & Shine University - Innere Kindheilung & Persönlichkeitsentwicklung (60 Stunden), Laura Malina Seiler; Online
                    </span>
                  </li>
                </ul>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-rose-400 mr-3"></span>
                    <span className="text-gray-700">
                      <span className="font-semibold">Aug 2019:</span> Healing Shock and Trauma - Intensive Workshop (56 Stunden), Amana & Krish Torbe; Schweiz
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-rose-400 mr-3"></span>
                    <span className="text-gray-700">
                      <span className="font-semibold">Dez 2018 - Jan 2019:</span> The Learning Love Intensive Workshop (96 Stunden), Amana & Krish Torbe, Bali
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-rose-400 mr-3"></span>
                    <span className="text-gray-700">
                      <span className="font-semibold">Mai 2019 - Juni 2022:</span> private 1:1 Einzelcoaching Sessions mit Gyana Cain, Holistic Counselor
                    </span>
                  </li>
                  <li className="flex items-start">
                    <span className="flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-rose-400 mr-3"></span>
                    <span className="text-gray-700">
                      <span className="font-semibold">2019 - Heute:</span> zahlreiche weitere Workshops und Retreats in feminine awakening, a woman's worth, womb healing, Yoga und Persönlichkeitsentwicklung.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a
            href="/contact#kontakt"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-pink-600 to-rose-600 px-8 py-3 text-base font-medium text-white shadow-sm hover:from-pink-700 hover:to-rose-700 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Kostenloses Erstgespräch vereinbaren
          </a>
        </div>
        </div>
      </section>
    </>
  );
}
