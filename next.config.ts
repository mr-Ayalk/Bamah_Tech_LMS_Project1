/** @type {import('next').NextConfig} */
const nextConfig = {
   images: {
    domains: [
      'dqw30klgfb.ufs.sh', // your project's UFS image domain
      'utfs.io',  
      '4po4i39ymo.ufs.sh'   ,     // often used by UploadThing for app URLs
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
