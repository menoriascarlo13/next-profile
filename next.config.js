/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true
  },
  async redirects() {
    return [
      {
        source: '/index',
        destination: '/',
        permanent: true
      }
    ];
  }
};

module.exports = nextConfig;
