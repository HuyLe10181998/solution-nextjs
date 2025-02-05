/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api-solution-production.up.railway.app',
        port: '',
        pathname: '/uploads/**',
      },
    ],
    domains: ['images.pexels.com'],
  },
}

module.exports = nextConfig
