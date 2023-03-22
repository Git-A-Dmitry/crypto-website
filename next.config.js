/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// module.exports = nextConfig

// This way we give permission to fetch an image from API
module.exports = {
  images: {
    domains: ['static.coinstats.app'],
    // reactStrictMode: true,
  },
};
