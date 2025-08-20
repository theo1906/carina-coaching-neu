# Carina Göb - Life & Mindset Coaching

Eine moderne, responsive Website für Carina Göb, Life & Mindset Coach. Die Website wurde mit Next.js, TypeScript und Tailwind CSS erstellt.

## Features

- Moderne, benutzerfreundliche Oberfläche
- Vollständig responsiv für alle Geräte
- Schnelle Ladezeiten durch statische Generierung
- Suchmaschinenoptimiert (SEO)
- Kontaktformular
- Blog-Bereich
- Podcast-Integration
- Newsletter-Anmeldung

## Technologien

- [Next.js](https://nextjs.org/) - React Framework
- [TypeScript](https://www.typescriptlang.org/) - Typensicheres JavaScript
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS Framework
- [Heroicons](https://heroicons.com/) - Icons
- [Framer Motion](https://www.framer.com/motion/) - Animationen

## Voraussetzungen

- Node.js 14.6.0 oder neuer
- npm oder yarn

## Installation

1. Repository klonen:
   ```bash
   git clone [repository-url]
   cd carina-coaching
   ```

2. Abhängigkeiten installieren:
   ```bash
   npm install
   # oder
   yarn install
   ```

3. Entwicklungsserver starten:
   ```bash
   npm run dev
   # oder
   yarn dev
   ```

4. Die Anwendung ist unter [http://localhost:3000](http://localhost:3000) erreichbar.

## Produktionsbuild

Um einen Produktionsbuild zu erstellen:

```bash
npm run build
# oder
yarn build

# Starten des Produktionsservers
npm start
# oder
yarn start
```

## Projektstruktur

```
carina-coaching/
├── public/                 # Statische Dateien
├── src/
│   ├── app/               # App-Router Seiten
│   │   ├── about/          # Über mich Seite
│   │   ├── blog/           # Blog Bereich
│   │   ├── contact/        # Kontaktseite
│   │   ├── podcast/        # Podcast Bereich
│   │   ├── services/       # Dienstleistungen
│   │   ├── layout.tsx      # Hauptlayout
│   │   └── page.tsx        # Startseite
│   ├── components/         # Wiederverwendbare Komponenten
│   │   └── layout/         # Layout-Komponenten
│   └── styles/             # Globale Styles
├── .gitignore
├── next.config.js
├── package.json
├── postcss.config.js
├── README.md
└── tailwind.config.js
```

## Umgebungsvariablen

Erstelle eine `.env.local` Datei im Hauptverzeichnis mit folgenden Variablen:

```
NEXT_PUBLIC_SITE_URL=https://www.carinagoeb.de
# Weitere Umgebungsvariablen hier einfügen
```

## Deployment

Die Anwendung kann auf folgenden Plattformen deployed werden:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- Jeder andere Hosting-Anbieter mit Node.js Unterstützung

## Lizenz

Dieses Projekt ist lizenziert unter der MIT-Lizenz - siehe die [LICENSE](LICENSE) Datei für Details.

---

Erstellt mit ❤️ für Carina Göb Coaching
