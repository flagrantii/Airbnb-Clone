/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: [
            'avatars.githubusercontent.com',
            'lh3.googleusercontent.com',
            'res.cloudinary.com',
            'cf.bstatic.com',
            'i.pinimg.com',
            'img.freepik.com',
        ],
    },
};

export default nextConfig;
