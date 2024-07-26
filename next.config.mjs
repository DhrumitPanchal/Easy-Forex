/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,

  images: {
    domains: [
      "www.bikramchoudhury.org",
      "forextradechennai.com",
      "i0.wp.com",
      "www.smallcase.com",
      "media.assettype.com",
      "cdn.pixabay.com",
      "static.vecteezy.com",
      "easyforexpips.com",
      "encrypted-tbn0.gstatic.com",
      "res.cloudinary.com",
    ],
  },
};

export default nextConfig;
