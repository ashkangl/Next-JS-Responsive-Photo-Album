/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode:false,
    images: {
        domains: ['https://picsum.photos'],
        loader: 'custom',
    },
};

export default nextConfig;