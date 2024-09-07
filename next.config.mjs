const basePath = process.env.BASE_PATH || ""
const assetPrefix = basePath + '/';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: basePath,
  assetPrefix: assetPrefix,
  output: "standalone",
  env: {
    API_URL: process.env.API_URL,
  },
  webpack: (config) => {
    config.resolve.alias.canvas = false;
    return config;
  },
  images: {
    unoptimized: true
  }
};


export default nextConfig;
