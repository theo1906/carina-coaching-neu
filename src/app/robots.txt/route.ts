export async function GET() {
  const robots = `# Allow all search engines to crawl the entire site
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

# Sitemap location
Sitemap: https://carina-coaching.com/sitemap.xml`;

  return new Response(robots, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
