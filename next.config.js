/** @type {import('next').NextConfig} */
const isProductionBuild = process.env.NODE_ENV === 'production';

const nextConfig = {
  // `output: 'export'` is only set for real builds. Next 14's dev server throws
  // "missing generateStaticParams()" for dynamic app routes whenever export is
  // enabled, regardless of the page exporting it (vercel/next.js#64906).
  ...(isProductionBuild ? { output: 'export' } : {}),
  trailingSlash: true,
  images: { unoptimized: true },
};

module.exports = nextConfig;
