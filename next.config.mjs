/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  // basePath: process.env.BASE_PATH || "", // Fallback to empty string if BASE_PATH is not set
  // assetPrefix:
  //   process.env.URL || "https://saddlebrown-cod-609937.hostingersite.com/", // Fallback URL if not set
  images: {
    unoptimized: true, // Disable image optimization
  },
};

export default nextConfig;
// (file name)
// .env.local
// (content inside)
//   BASE_PATH=""
// URL="https://saddlebrown-cod-609937.hostingersite.com/"
