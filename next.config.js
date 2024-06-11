// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: '/api/loadshedding',
          destination: 'https://loadshedding.eskom.co.za/LoadShedding/GetStatus',
        },
      ];
    },
  };
  
  module.exports = nextConfig;
  
