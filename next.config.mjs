/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/mendo",
                destination: "https://www.github.com/Juxhinb7/mendo",
                permanent: false,
                basePath: false
            },
            {
                source: "/VideoBot",
                destination: "https://www.github.com/Juxhinb7/VideoBot",
                permanent: false,
                basePath: false
            },
            {
                source: "/portfolio",
                destination: "https://github.com/Juxhinb7/portfolio",
                permanent: false,
                basePath: false
            },
            {
                source: "/github",
                destination: "https://www.github.com/Juxhinb7",
                permanent: false,
                basePath: false,
            },
            {
                source: "/linkedin",
                destination: "https://www.linkedin.com/in/juxhin-bazelli-0944b82b8",
                permanent: false,
                basePath: false
            }
        ]
    }
};

export default nextConfig;
