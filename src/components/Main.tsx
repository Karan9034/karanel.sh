import GitHub from "./GitHub";
import Discord from "./Discord";
import ReachOut from "./ReachOut";
import Spotify from "./Spotify";
import Weather from "./Weather";
import WhatIUse from "./WhatIUse";
import useSWR from "swr";
import { useMemo } from "react";
import { MotionValue } from "framer-motion";
import { ROTATION_RANGE } from "@/data/const";
import Audit from "./Audit";
import Instagram from "./Instagram";
import RandomFact from "./RandomFact";

const Main = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const storeSpotifyData = (data: any) => {
        fetch("/api/spotify", {
            method: "POST",
            body: JSON.stringify(data),
        });
    };

    const { data, isLoading } = useSWR(
        `/api/discord`,
        (url) => fetch(url).then((res) => res.json()),
        { refreshInterval: 10000 },
    );

    const [status, bgClass] = useMemo(() => {
        switch (data?.data?.discord_status) {
            case "idle":
                return ["Idle", "bg-[#f7ec4d] dark:bg-[#f7ec4d]"];
            case "dnd":
                return ["DND", "bg-[#b00b0b] dark:bg-[#b00b0b]"];
            case "online":
                return ["Online", "bg-[#6DD2B7] dark:bg-[#35AC8C]"];
            case "offline":
                return ["Offline", "bg-[#FFADC6] dark:bg-[#FF477E]"];
            default:
                return ["Loading", "bg-gray-400"];
        }
    }, [data]);

    const [spotifyData] = useMemo(() => {
        if (isLoading) return [null];
        if (
            data?.data?.spotify &&
            data?.data?.spotify != JSON.parse(data?.data?.kv?.spotifyData)
        ) {
            storeSpotifyData(data?.data?.spotify);
        }

        switch (data?.data?.listening_to_spotify) {
            case true:
                return [data?.data?.spotify];
            case false:
                return [JSON.parse(data?.data?.kv?.spotifyData)];
            default:
                return [null];
        }
    }, [data, isLoading]);

    const handleMouseMove = (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        rect: DOMRect | null,
        x: MotionValue<number>,
        y: MotionValue<number>,
    ) => {
        if (!rect) return [0, 0];

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const rX = mouseY / height;
        const rY = mouseX / width;

        x.set((0.5 - rX) * ROTATION_RANGE);
        y.set((rY - 0.5) * ROTATION_RANGE);
    };

    const handleMouseLeave = (
        x: MotionValue<number>,
        y: MotionValue<number>,
    ) => {
        x.set(0);
        y.set(0);
    };

    return (
        <div className="w-full h-full flex flex-col col-span-6 gap-6 md:col-span-5 lg:col-span-6 sm:grid md:gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grid-flow-row p-3 shadow-inner shadow-brand-900/5">
            {/* <Work
                handleMouseLeave={handleMouseLeave}
                handleMouseMove={handleMouseMove}
            /> */}
            <Spotify
                spotifyData={spotifyData}
                handleMouseMove={handleMouseMove}
                handleMouseLeave={handleMouseLeave}
            />
            <div className="h-full col-span-2 sm:col-span-1 row-span-1 flex sm:flex-col flex-row gap-3">
                <Discord
                    status={status}
                    bgClass={bgClass}
                    handleMouseMove={handleMouseMove}
                    handleMouseLeave={handleMouseLeave}
                />
                <Weather
                    handleMouseMove={handleMouseMove}
                    handleMouseLeave={handleMouseLeave}
                />
            </div>
            <RandomFact
                handleMouseMove={handleMouseMove}
                handleMouseLeave={handleMouseLeave}
            />
            <Instagram
                handleMouseMove={handleMouseMove}
                handleMouseLeave={handleMouseLeave}
            />
            <Audit />
            {/* <IPFS
                handleMouseMove={handleMouseMove}
                handleMouseLeave={handleMouseLeave}
            /> */}
            <GitHub
                handleMouseMove={handleMouseMove}
                handleMouseLeave={handleMouseLeave}
            />
            <WhatIUse
                handleMouseMove={handleMouseMove}
                handleMouseLeave={handleMouseLeave}
            />
            <ReachOut />
        </div>
    );
};

export default Main;
