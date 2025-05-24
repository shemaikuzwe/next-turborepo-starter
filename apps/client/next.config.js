/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"standalone",
    transpilePackages: ["@next-starter/ui","@next-starter/db"], //bundle this packages
};

export default nextConfig;
