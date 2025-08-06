/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['xmpekrrgfakmakecbmyj.supabase.co'],
  },
  webpack: (config) => {
    config.cache = false;
    return config;
  },
}

module.exports = nextConfig
