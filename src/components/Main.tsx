import GitHub from "./GitHub";
import Map from "./Map";
import Online from "./Online";
import Photos from "./Photos";
import ReachOut from "./ReachOut";
import Spotify from "./Spotify";
import Weather from "./Weather";
import WhatIUse from "./WhatIUse";

const Main = () => {
    return (
        <div className="w-full h-full flex flex-col col-span-6 gap-6 md:col-span-5 lg:col-span-6 sm:grid md:gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 grid-flow-row p-3 shadow-inner shadow-brand-900/5">
            <div className="h-full col-span-2 sm:col-span-1 row-span-1 flex sm:flex-col flex-row gap-3">
                <Online />
                <Weather />
            </div>
            <Map />
            <Photos />
            <Spotify />
            <WhatIUse />
            <GitHub />
            <ReachOut />
        </div>
    );
};

export default Main;
