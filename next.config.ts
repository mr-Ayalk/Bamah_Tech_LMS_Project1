/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    domains: [
      'dqw30klgfb.ufs.sh', // your project's UFS image domain
      'utfs.io',            // often used by UploadThing for app URLs
    ],
  },
  turbopack: {
    rules: {
      "*.md": ["ignore"],
      "*.LICENSE": ["ignore"],
    },
  },
};

export default nextConfig;
