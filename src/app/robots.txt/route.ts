export async function GET() {
  const robots = `# Allow all search engines to crawl the entire site
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

# Sitemap location
Sitemap: https://www.carinacoaching.com/sitemap.xml`;

  return new Response(robots, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
    },
  });
}
