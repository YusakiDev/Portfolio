import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',  // Enable static exports
    basePath: '/portfolio',  // Your repo name
    images: {
      unoptimized: true,
    },
    // Add this to copy public files
    distDir: 'out',
    assetPrefix: 'https://yusakidev.github.io/portfolio/',  // Your repo name with trailing slash
};


export default nextConfig;
