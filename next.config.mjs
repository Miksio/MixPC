/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  basePath: "/MixPC",
  assetPrefix: "/MixPC/",
  trailingSlash: true,
  turbopack: {
    // Ensure Turbopack selects this project root when multiple lockfiles exist
    root: './',
  },
  // Allow the dev server to serve assets / HMR to other devices on the LAN
  // Add your phone's origin (shown in the console) if needed.
  allowedDevOrigins: [
    'http://localhost:3000',
    'http://127.0.0.1:3000',
    'http://192.168.101.9:3000',
    'http://192.168.101.9:3001'
  ],
  env: {
    NEXT_PUBLIC_BASE_PATH: "/MixPC",
  },
}

export default nextConfig
