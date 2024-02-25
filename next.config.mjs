/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: '*',
                // hostname: 'assets.example.com',
                // port: '',
                // pathname: '/account123/**',
            },
        ],
    },
};

export default nextConfig;
