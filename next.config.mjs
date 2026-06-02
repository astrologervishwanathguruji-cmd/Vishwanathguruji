/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow HMR when opening the dev site via network IP (e.g. http://172.20.96.1:3000)
  allowedDevOrigins: ['172.20.96.1'],
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
    ],
  },
};

export default nextConfig;
