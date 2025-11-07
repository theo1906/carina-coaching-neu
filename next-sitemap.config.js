/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://carina-coaching.de',
  generateRobotsTxt: true,
  outDir: 'out',
  exclude: ['/server-sitemap.xml', '/admin/*', '/api/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
  // Generate sitemap during build
  generateRobotsTxt: true,
}
