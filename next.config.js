// /** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: ['hmp-cdn-01.sgp1.digitaloceanspaces.com'],
  },
  async prepare() {
    const { data: dbEnableLanguages } = await fetch('/api/mock-data/db_enable_languages');
    const { data: dbLanguages } = await fetch('/api/mock-data/db_languages');


    const locales = dbEnableLanguages.map((language) => language.id);
    const defaultLocale = dbLanguages.id;

    return {
      i18n: {
        locales,
        defaultLocale,
      },
    };
  },
};

module.exports = nextConfig;