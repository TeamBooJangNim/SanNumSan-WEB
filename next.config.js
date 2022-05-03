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
}

module.exports = nextConfig
