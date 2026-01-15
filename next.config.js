/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['carina-coaching.com', 'localhost'],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    minimumCacheTTL: 60,
  },

  // For static exports - disabled for now to support dynamic routes
  // output: process.env.NODE_ENV === 'production' ? 'export' : undefined,
  trailingSlash: true,
  
  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  
  async redirects() {
    return [
      {
        source:
          '/dienstleistungen/essstoerung/meine-heilungsreise/embodiment/:path*',
        destination: '/dienstleistungen/essstoerung',
        permanent: true,
      },
      {
        source:
          '/dienstleistungen/spirituelles-life-coaching/embodiment-und-heilung/:path*',
        destination: '/dienstleistungen/spirituelles-life-coaching',
        permanent: true,
      },
      {
        source:
          '/dienstleistungen/spirituelles-life-coaching/ist-ein-spirituelles-coaching-das-richtige-fuer-dich/:path*',
        destination: '/dienstleistungen/spirituelles-life-coaching',
        permanent: true,
      },
      {
        source:
          '/dienstleistungen/spirituelles-life-coaching/mehr-erfahren/:path*',
        destination: '/dienstleistungen/spirituelles-life-coaching',
        permanent: true,
      },
      {
        source:
          '/dienstleistungen/spirituelles-life-coaching/themen/:path*',
        destination: '/dienstleistungen/spirituelles-life-coaching',
        permanent: true,
      },
      {
        source:
          '/dienstleistungen/spirituelles-life-coaching/vorteile-system-coaching/:path*',
        destination: '/dienstleistungen/spirituelles-life-coaching',
        permanent: true,
      },
    ];
  },
  
  // Disable the file-system routing for these files
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        path: false,
      };
    }
    return config;
  }
};

module.exports = nextConfig;
