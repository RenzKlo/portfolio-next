import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimize for performance and mobile
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
  
  // Image optimizations
  images: {
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // Compiler optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // PoweredByHeader
  poweredByHeader: false,
  
  // Compression
  compress: true,
};

export default nextConfig;
