import type { NextConfig } from 'next';

const assetPrefix =
  process.env.NODE_ENV === 'production' ? 'https://tokyun02.github.io/' : '';
const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  assetPrefix,
};

export default nextConfig;
