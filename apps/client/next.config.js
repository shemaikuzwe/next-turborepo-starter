/** @type {import('next').NextConfig} */
const nextConfig = {
    output:"standalone",
    transpilePackages: ["@next-starter/ui","@next-starter/db"], //bundle this packages,
    eslint:{
        ignoreDuringBuilds:true,
    }
};

export default nextConfig;
