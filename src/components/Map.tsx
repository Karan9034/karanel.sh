const Map = () => {
    return (
        <div className="h-full w-full [perspective:800px] h-full w-full col-span-2">
            <div className="hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))] h-72 md:h-full w-full rounded-xl shadow-md shadow-indigo-900/5 map-border md:overflow-hidden flex items-end justify-end">
                <div className="relative h-full w-full border-gray-100 border-[1px] rounded-sm bg-gray-50 overflow-hidden">
                    <div className="absolute bottom-0 right-0 m-2 font-medium flex items-end gap-2 z-50 text-base 2xl:text-lg text-gray-600 px-4 bg-white/20 backdrop-blur-md backdrop-saturate-200 shadow-md shadow-indigo-900/10 py-1 rounded-full border-white border-[1px]">
                        <svg
                            className="w-4 text-brand-600"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M8 14.3643C5.03656 14.937 3 16.1262 3 17.5004C3 19.4334 7.02944 21.0004 12 21.0004C16.9706 21.0004 21 19.4334 21 17.5004C21 16.1262 18.9634 14.937 16 14.3643M12 9V17M14.1211 3.87854C15.293 5.0505 15.293 6.95064 14.1211 8.12146C12.9492 9.29227 11.0492 9.29342 9.87848 8.12146C8.70775 6.9495 8.7066 5.04936 9.87848 3.87854C11.0504 2.70773 12.9492 2.70658 14.1211 3.87854Z"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                            ></path>
                        </svg>
                        <p className="leading-tight">Bengaluru, India</p>
                    </div>
                    <div className="absolute inset-0 w-full h-full">
                        <div className="relative w-full h-full overflow-hidden">
                            <img
                                alt=""
                                loading="lazy"
                                width="1479"
                                height="1500"
                                decoding="async"
                                data-nimg="1"
                                className="w-full h-full absolute object-cover z-10 bg-blend-overlay mix-blend-overlay opacity-10 sm:opacity-40 pointer-events-none"
                                style={{ color: "transparent" }}
                                srcSet=""
                                src=""
                            />
                            <img
                                alt=""
                                fetchPriority="high"
                                width="680"
                                height="400"
                                decoding="async"
                                data-nimg="1"
                                className="w-full h-full absolute saturate-[150%] border-[1px] border-gray-200 object-cover scale-[120%]"
                                style={{ color: "transparent" }}
                                srcSet=""
                                src=""
                            />
                            <img
                                alt=""
                                loading="lazy"
                                width="1116"
                                height="674"
                                decoding="async"
                                data-nimg="1"
                                className="w-full h-full absolute inset-0 saturate-200 -z-5 object-fill"
                                style={{ color: "transparent" }}
                                srcSet=""
                                src=""
                            />
                            <div className="w-full h-full absolute">
                                <div className="relative w-full h-full flex items-center justify-center translate-x-2 translate-y-2">
                                    <div className="bg-blue-500/80 opacity-30 w-36 h-36 blur-lg rounded-full -z-5 absolute"></div>
                                    <div className="overflow-hidden absolute rounded-full bg-white/10 backdrop-blur-sm backdrop-saturate-200 p-2 border-[6px] border-white shadow-lg shadow-indigo-800/20 z-10 flex items-center justify-center">
                                        <div>
                                            <img
                                                alt=""
                                                loading="lazy"
                                                width="34"
                                                height="33"
                                                decoding="async"
                                                data-nimg="1"
                                                className="w-16 h-16 drop-shadow-sm"
                                                style={{ color: "transparent" }}
                                                src=""
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Map;
