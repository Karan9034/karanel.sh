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
                    "https://1drv.ms/b/c/b4d0294a179b4114/ETz8Gsb1EwJGjzcapfvA7PwB8Mhig_Allu4JZtiKITDTzQ?e=gvMdAa",
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
