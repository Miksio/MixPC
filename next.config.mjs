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
  env: {
    NEXT_PUBLIC_BASE_PATH: "/MixPC",
  },
}

export default nextConfig
