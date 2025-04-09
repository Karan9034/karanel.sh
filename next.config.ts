import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "i.scdn.co",
                port: "",
                pathname: "/image/**",
                search: "",
            },
        ],
    },
    redirects: async () => {
        return [
            {
                source: "/home",
                destination: "/",
                permanent: true,
            },
            {
                source: "/resume",
                destination:
                    "https://drive.google.com/file/d/1KHiI5fXVjZMY0gQ0P3117QiTURdIS5QG/view?usp=drive_link",
                permanent: false,
            },
            {
                source: "/linkedin",
                destination: "https://linkedin.com/in/karanel",
                permanent: true,
            },
            {
                source: "/github",
                destination: "https://github.com/Karan9034",
                permanent: true,
            },
            {
                source: "/twitter",
                destination: "https://twitter.com/_karanel",
                permanent: true,
            },
            {
                source: "/instagram",
                destination: "https://instagram.com/_karan.garg",
                permanent: true,
            },
            {
                source: "/discord",
                destination: "https://discordapp.com/users/716322492586655795",
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
