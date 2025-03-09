const Spotify = () => {
    return (
        <div className="h-full w-full [perspective:800px] sm:col-span-1 col-span-2">
            <div className="card-hover h-full w-full rounded-xl shadow-inner shadow-indigo-700/5 map-border">
                <a
                    target="_blank"
                    rel="noreferrer"
                    className="h-full flex flex-col justify-between w-full bg-gray-50 border-[1px] border-gray-100 p-[18px] rounded-md"
                    href="https://open.spotify.com/track/2LHrjE4VT99HBa9LdkSBT3"
                >
                    <div className="h-full w-full">
                        <h1 className="card-header flex gap-2 items-center">
                            <svg
                                className="w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <g>
                                    <path
                                        d="M8 4V20"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        transform-origin="8px 12px"
                                    ></path>
                                    <path
                                        d="M4 10V14"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        transform-origin="4px 12px"
                                    ></path>
                                    <path
                                        d="M12 8V16"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        transform-origin="12px 12px"
                                    ></path>
                                    <path
                                        d="M16 6V18"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        transform-origin="16px 12px"
                                    ></path>
                                    <path
                                        d="M20 10V14"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        transform-origin="20px 12px"
                                    ></path>
                                </g>
                            </svg>
                            CURRENTLY LISTENING
                        </h1>
                    </div>
                    <div className="flex flex-col gap-6 2xl:gap-2 h-full w-full items-end">
                        <div className="relative z-10 flex items-center justify-end xl:h-32 xl:w-32 2xl:h-36 2xl:w-36 3xl:w-56 3xl:h-56 aspect-square">
                            <img
                                aria-placeholder="empty"
                                alt=""
                                fetchPriority="high"
                                width="128"
                                height="128"
                                decoding="async"
                                data-nimg="1"
                                className="z-20 rounded-lg h-full w-full border-[1px] border-white"
                                style={{ color: "transparent" }}
                                srcSet=""
                                src=""
                            />
                            <img
                                aria-placeholder="empty"
                                alt=""
                                loading="lazy"
                                width="128"
                                height="128"
                                decoding="async"
                                data-nimg="1"
                                className="-z-10 h-full w-full rounded-lg absolute blur-xl saturate-[10] translate-y-2 opacity-75 sm:opacity-50 overflow-visible"
                                style={{ color: "transparent" }}
                                srcSet=""
                                src=""
                            />
                            <div className="absolute z-10 h-full w-full rounded-lg skeleton top-0 right-0"></div>
                        </div>
                        <div className="w-full flex items-end justify-end text-end">
                            <div className="flex flex-col h-full items-end justify-end">
                                <h1 className="text-lg font-medium text-gray-700 z-20">
                                    as long as i'm by your side
                                </h1>
                                <p className="text-sm font-normal text-gray-500">
                                    Endie
                                </p>
                            </div>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Spotify;
