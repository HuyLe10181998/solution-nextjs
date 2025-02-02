/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'sky-solution.up.railway.app',
        port: '',
        pathname: '/uploads/**',
      },
     
    ],
    domains: ['images.pexels.com'],
  },
};

module.exports = nextConfig; 