import { notFound } from 'next/navigation';
import { Metadata } from 'next';

// Import page components dynamically to improve performance
const pageComponents = {
  // Direct page routes that exist in the project
  'ist-ein-spirituelles-coaching-das-richtige-fuer-dich': () => import('../ist-ein-spirituelles-coaching-das-richtige-fuer-dich/page').then(mod => mod.default),
  'embodiment-und-heilung': () => import('../embodiment-und-heilung/page').then(mod => mod.default),
  'reise-zurueck-zu-dir': () => import('../reise-zurueck-zu-dir/page').then(mod => mod.default),
  'vorteile-system-coaching': () => import('../vorteile-system-coaching/page').then(mod => mod.default),
  'embodiment': () => import('../embodiment/page').then(mod => mod.default),
  'full-text': () => import('../full-text/page').then(mod => mod.default),
  'werte-und-prinzipien': () => import('../werte-und-prinzipien/page').then(mod => mod.default),
  
  // Nested routes under themen/
  'themen/herausforderungen': () => import('../themen/herausforderungen/page').then(mod => mod.default),
  'themen/bewusste-veraenderung': () => import('../themen/bewusste-veraenderung/page').then(mod => mod.default),
  'themen/innere-weisheit': () => import('../themen/innere-weisheit/page').then(mod => mod.default),
  'themen/mein-ansatz': () => import('../themen/mein-ansatz/page').then(mod => mod.default),
  'themen/power-embodied-change': () => import('../themen/power-embodied-change/page').then(mod => mod.default),
  
  // Nested routes under mehr-erfahren/
  'mehr-erfahren/trigger-verstehen': () => import('../mehr-erfahren/trigger-verstehen/page').then(mod => mod.default),
} as const;

// Define metadata for each route
const pageMetadata = {
  // Direct pages that exist in the project
  'ist-ein-spirituelles-coaching-das-richtige-fuer-dich': {
    title: 'Ist ein spirituelles Coaching das Richtige für dich?',
    description: 'Entdecke, ob ein spirituelles Coaching der richtige Weg für dich ist.'
  },
  'embodiment-und-heilung': {
    title: 'Embodiment & Heilung - Spirituelles Coaching',
    description: 'Erfahre, wie Embodiment dir bei deiner Heilung helfen kann.'
  },
  'reise-zurueck-zu-dir': {
    title: 'Reise zurück zu dir selbst - Spirituelles Coaching',
    description: 'Beginne deine Reise zurück zu deinem wahren Selbst.'
  },
  'vorteile-system-coaching': {
    title: 'Vorteile von System-Coaching - Spirituelles Coaching',
    description: 'Erfahre mehr über die Vorteile von systemischem Coaching.'
  },
  'embodiment': {
    title: 'Embodiment - Spirituelles Coaching',
    description: 'Lerne die Kraft von Embodiment für deine persönliche Entwicklung kennen.'
  },
  'full-text': {
    title: 'Spirituelles Coaching - Volltext',
    description: 'Umfassende Informationen zum spirituellen Coaching.'
  },
  'werte-und-prinzipien': {
    title: 'Werte und Prinzipien - Spirituelles Coaching',
    description: 'Lerne die Werte und Prinzipien meines spirituellen Coachings kennen.'
  },
  
  // Nested unter themen/
  'themen/herausforderungen': {
    title: 'Herausforderungen als Wachstumschance - Spirituelles Coaching',
    description: 'Erfahre, wie du Herausforderungen als Katalysatoren für persönliches Wachstum nutzen kannst.'
  },
  'themen/bewusste-veraenderung': {
    title: 'Bewusste Veränderung - Spirituelles Coaching',
    description: 'Lerne, wie du bewusste Veränderungen in deinem Leben willkommen heißen kannst.'
  },
  'themen/innere-weisheit': {
    title: 'Innere Weisheit entdecken - Spirituelles Coaching',
    description: 'Entdecke deine innere Weisheit und lerne, ihr zu vertrauen.'
  },
  'themen/mein-ansatz': {
    title: 'Mein Ansatz - Spirituelles Coaching',
    description: 'Lerne meinen einzigartigen Ansatz für spirituelles Coaching kennen.'
  },
  'themen/power-embodied-change': {
    title: 'Power of Embodied Change - Spirituelles Coaching',
    description: 'Entdecke die Kraft der verkörperten Veränderung in deinem Leben.'
  },
  
  // Nested unter mehr-erfahren/
  'mehr-erfahren/trigger-verstehen': {
    title: 'Trigger verstehen - Spirituelles Coaching',
    description: 'Lerne, wie du mit Triggern umgehen und sie als Wachstumschance nutzen kannst.'
  }
} as const;

type PageKey = keyof typeof pageComponents;

export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata> {
  // Get the full path from the slug array
  const fullPath = params.slug.join('/');
  console.log('Metadata path:', fullPath);
  
  // Try to find matching metadata
  const metadata = pageMetadata[fullPath as keyof typeof pageMetadata];
  
  if (!metadata) {
    console.warn('No metadata found for path:', fullPath);
    return {
      title: 'Seite nicht gefunden',
      description: 'Die angeforderte Seite konnte nicht gefunden werden.'
    };
  }
  
  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default async function SpiritualSubpage({ params }: { params: { slug: string[] } }) {
  // Get the full path from the slug array
  const fullPath = params.slug.join('/');
  console.log('Loading component for path:', fullPath);
  
  // Try to find matching component
  const pageLoader = pageComponents[fullPath as keyof typeof pageComponents];
  
  if (!pageLoader) {
    console.error('No component found for path:', fullPath);
    notFound();
  }
  
  try {
    const PageComponent = await pageLoader();
    return <PageComponent />;
  } catch (error) {
    console.error('Error loading component:', error);
    notFound();
  }
}

export async function generateStaticParams() {
  const paths = Object.keys(pageComponents).map(path => ({
    slug: path.split('/'),
  }));
  console.log('Generating static params for paths:', paths);
  return paths;
}
