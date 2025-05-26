/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    transpilePackages: ["@next-starter/db", "@next-starter/ui"], //bundle this packages,
    eslint: {
        ignoreDuringBuilds: true,
    },
    
};

export default nextConfig;
