/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    images: {
        formats: ['image/webp', 'image/avif'],
        unoptimized: true,
        domains: ['https://fastly.picsum.photos'],
    },
};

export default nextConfig;
