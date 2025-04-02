/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api-solution-r8zk.onrender.com',
        port: '',
        pathname: '/uploads/**',
      },
    ],
    domains: ['images.pexels.com'],
  },
}

module.exports = nextConfig
