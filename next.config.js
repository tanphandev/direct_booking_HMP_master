/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['hmp-cdn-01.sgp1.digitaloceanspaces.com'],
  },
  i18n: {
    locales: ['en', 'th', 'vi'],
    defaultLocale: 'vi',
  },
};

module.exports = nextConfig;
