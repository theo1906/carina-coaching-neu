import { getServerSideSitemap } from 'next-sitemap';

export async function getServerSideProps(context) {
  const baseUrl = 'https://carina-coaching.com';
  const lastmod = new Date().toISOString();
  
  const pages = [
    { loc: '/', lastmod, changefreq: 'daily', priority: '1.0' },
    { loc: '/ueber-mich/mein-weg', lastmod, changefreq: 'weekly', priority: '0.9' },
    { loc: '/dienstleistungen', lastmod, changefreq: 'weekly', priority: '0.9' },
    { loc: '/buchen', lastmod, changefreq: 'weekly', priority: '0.9' },
    { loc: '/kontakt', lastmod, changefreq: 'monthly', priority: '0.8' },
    { loc: '/dienstleistungen/spirituelles-life-coaching', lastmod, changefreq: 'weekly', priority: '0.9' },
    { loc: '/dienstleistungen/spirituelles-life-coaching/themen/mein-ansatz', lastmod, changefreq: 'monthly', priority: '0.7' },
    { loc: '/dienstleistungen/essstoerungen-coaching/meine-heilungsreise', lastmod, changefreq: 'monthly', priority: '0.7' },
    { loc: '/dienstleistungen/Systemisches-Coaching-fuer-Essstoerungen-ED-Recovery', lastmod, changefreq: 'weekly', priority: '0.9' },
    { loc: '/impressum', lastmod, changefreq: 'yearly', priority: '0.3' },
    { loc: '/datenschutz', lastmod, changefreq: 'yearly', priority: '0.3' },
    { loc: '/agb', lastmod, changefreq: 'yearly', priority: '0.3' },
    { loc: '/widerrufsbelehrung', lastmod, changefreq: 'yearly', priority: '0.1' },
    { loc: '/cookie-einstellungen', lastmod, changefreq: 'yearly', priority: '0.1' },
  ];

  const fields = pages.map(page => ({
    loc: `${baseUrl}${page.loc}`,
    lastmod: page.lastmod,
    changefreq: page.changefreq,
    priority: page.priority,
  }));

  return getServerSideSitemap(context, fields);
}

export default function Sitemap() {}
