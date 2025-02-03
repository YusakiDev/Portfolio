import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',  // Enable static exports
    basePath: '/your-repo-name',  // Add if deploying to GitHub Pages
    images: {
        unoptimized: true,  // Required for static export
    },
};

export default nextConfig;
