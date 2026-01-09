/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.electric-wheelchair.my',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'electric-wheelchair.my',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
