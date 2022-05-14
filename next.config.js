/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(conf) {
    conf.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });
    conf.resolve.modules.push(__dirname);
    return conf;
  },
  images: {
    domains: ['images.france.fr', 'user-images.githubusercontent.com'],
  },
};

module.exports = nextConfig;
