/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'images.unsplash.com',
      'source.unsplash.com',
      'tailwindui.com',
      'localhost',
      'via.placeholder.com',
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Copy the og directory to the static export
  async exportPathMap(defaultPathMap, { dev, dir, outDir, distDir, buildId }) {
    if (!dev) {
      const fs = require('fs');
      const path = require('path');
      
      // Ensure the out directory exists
      const ogDir = path.join(outDir || 'out', 'og');
      if (!fs.existsSync(ogDir)) {
        fs.mkdirSync(ogDir, { recursive: true });
      }
      
      // Copy the og-image.png
      fs.copyFileSync(
        path.join(dir, 'public', 'og', 'og-image.png'),
        path.join(ogDir, 'og-image.png')
      );
    }
    return defaultPathMap;
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
