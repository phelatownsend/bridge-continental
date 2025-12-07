import type { NextConfig } from "next";

// Check if we are running the special GoDaddy build command
const isGodaddy = process.env.IS_GODADDY === 'true';

const nextConfig: NextConfig = {
  // If building for GoDaddy, force static export. Otherwise, let Vercel handle it.
  output: isGodaddy ? 'export' : undefined,

  // If building for GoDaddy, turn off image optimization (server required).
  images: {
    unoptimized: isGodaddy,
  },
};

export default nextConfig;