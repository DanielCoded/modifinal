/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",
  images: {
    domains: ["images.unsplash.com", "v0.blob.com", "cdn.prod.website-files.com", "photos.zillowstatic.com"],
  },
  // Add this if you're deploying to GitHub Pages
  basePath: process.env.GITHUB_PAGES ? "/modia-properties" : "",
}

module.exports = nextConfig

