/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Enable static image optimization
  images: {
    unoptimized: true,
  },
  // Disable React StrictMode if causing issues
  reactStrictMode: false,
  // Optionally add basePath if your site is not at the root of your domain
  // basePath: '/my-v0-project',
};

module.exports = nextConfig;