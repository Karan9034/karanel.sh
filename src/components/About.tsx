const About = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="relative justify-between w-full flex px-6 pt-6">
                <div className="w-full justify-between flex">
                    <h1 className="card-header flex gap-2 items-center text-gray-600">
                        <div>
                            <svg
                                className="w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M7.60432 8.13491L6.86929 4.13131L7.51863 3.59433C8.93283 2.42484 11.0996 3.0614 11.6333 4.80313M15.141 14.4185C16.1348 13.6216 17.5974 13.7463 18.4312 14.7051C19.2943 15.6975 19.1596 17.1954 18.1329 18.0228L16.3602 19.4514C13.4126 21.8267 9.07509 21.4254 6.62767 18.5508C4.15811 15.6503 4.54199 11.3259 7.4851 8.89209L13.7274 3.72992C14.7023 2.92376 16.1557 3.04908 16.9737 4.00982C17.7917 4.97057 17.6645 6.40293 16.6897 7.20909L12.9633 10.2906L13.5517 9.80407C14.5265 8.99791 15.9799 9.12323 16.7979 10.084C17.6159 11.0447 17.4887 12.4771 16.5139 13.2832L15.9255 13.7698"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                ></path>
                            </svg>
                        </div>
                        ABOUT ME
                    </h1>
                </div>
                <div className="">
                    <div className="flex gap-3 items-center">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://twitter.com/_karanel"
                        >
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                role="img"
                                viewBox="0 0 24 24"
                                className="text-gray-400 hover:text-gray-600 transition-all fill-current w-4 h-4"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M21.543 7.104c.015.211.015.423.015.636 0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041 4.93 4.93 0 0 1-4.6-3.42 4.916 4.916 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.887 4.887 0 0 0 2.235.616A4.928 4.928 0 0 1 1.67 3.148 13.98 13.98 0 0 0 11.82 8.292a4.929 4.929 0 0 1 8.39-4.49 9.868 9.868 0 0 0 3.128-1.196 4.941 4.941 0 0 1-2.165 2.724A9.828 9.828 0 0 0 24 4.555a10.019 10.019 0 0 1-2.457 2.549z"></path>
                            </svg>
                        </a>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://discordapp.com/users/716322492586655795"
                        >
                            <svg
                                className="text-gray-400 hover:text-gray-600 transition-all w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    d="M19.6361 5.0228C18.1907 4.35756 16.6648 3.88561 15.0973 3.61902C14.8828 4.00447 14.6888 4.40105 14.5159 4.8071C12.8463 4.55418 11.1484 4.55418 9.47881 4.8071C9.30587 4.4011 9.1118 4.00452 8.8974 3.61902C7.32897 3.88786 5.80205 4.36093 4.35518 5.02628C1.48276 9.29851 0.70409 13.4646 1.09342 17.5716C2.77558 18.821 4.6584 19.7712 6.66003 20.3809C7.11074 19.7715 7.50956 19.1251 7.85226 18.4483C7.20135 18.2039 6.57311 17.9024 5.9748 17.5473C6.13227 17.4325 6.28627 17.3142 6.43508 17.1994C8.17601 18.0224 10.0761 18.4491 12 18.4491C13.9238 18.4491 15.8239 18.0224 17.5648 17.1994C17.7154 17.3229 17.8694 17.4412 18.0251 17.5473C17.4257 17.903 16.7963 18.2051 16.1442 18.4501C16.4865 19.1265 16.8853 19.7724 17.3364 20.3809C19.3398 19.7737 21.224 18.8239 22.9065 17.5734C23.3633 12.8106 22.1261 8.68273 19.6361 5.0228ZM8.34541 15.0459C7.26047 15.0459 6.36414 14.0561 6.36414 12.8384C6.36414 11.6208 7.22932 10.6223 8.34195 10.6223C9.45458 10.6223 10.344 11.6208 10.325 12.8384C10.3059 14.0561 9.45112 15.0459 8.34541 15.0459ZM15.6545 15.0459C14.5678 15.0459 13.675 14.0561 13.675 12.8384C13.675 11.6208 14.5401 10.6223 15.6545 10.6223C16.7689 10.6223 17.6514 11.6208 17.6323 12.8384C17.6133 14.0561 16.7602 15.0459 15.6545 15.0459Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </a>
                        <a target="_blank" rel="noreferrer" href="#">
                            <svg
                                className="text-gray-400 hover:text-gray-600 transition-all w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M12 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V10H14C12.8954 10 12 9.10457 12 8V2ZM8 14C8 13.4477 8.44772 13 9 13H12C12.5523 13 13 13.4477 13 14C13 14.5523 12.5523 15 12 15H9C8.44772 15 8 14.5523 8 14ZM9 17C8.44772 17 8 17.4477 8 18C8 18.5523 8.44772 19 9 19H15.5C16.0523 19 16.5 18.5523 16.5 18C16.5 17.4477 16.0523 17 15.5 17H9Z"
                                    fill="currentColor"
                                ></path>
                                <path
                                    d="M19.4142 8L14 2.58579V8H19.4142Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col mdd:flex-col 2xl:flex-row items-start 2xl:items-center gap-6 px-6">
                <div className="flex items-center justify-center aspect-square h-32 z-10 [perspective:800px]">
                    <div className="relative flex items-center justify-center aspect-square h-32 z-10 hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))]">
                        <img
                            alt="Avatar"
                            loading="lazy"
                            width="128"
                            height="128"
                            decoding="async"
                            data-nimg="1"
                            className="rounded-2xl h-32 w-32 border-[1px] border-gray-100 z-10"
                            style={{ color: "transparent" }}
                            srcSet="pfp.jpeg"
                            src="pfp.jpeg"
                        />
                        <img
                            alt="Avatar"
                            loading="lazy"
                            width="128"
                            height="128"
                            decoding="async"
                            data-nimg="1"
                            className="rounded-2xl h-32 w-32 absolute blur-lg opacity-70 saturate-[6] translate-y-2 -z-10"
                            style={{ color: "transparent" }}
                            srcSet="pfp.jpeg"
                            src="pfp.jpeg"
                        />
                    </div>
                </div>
                <div className="flex items-start w-full">
                    <div className="w-full flex flex-wrap sm:flex-col lg:flex-wrap gap-1 items-start justify-between">
                        <div className="w-max">
                            <p className="text-gray-700 text-xl animate-typing overflow-hidden whitespace-nowrap pr-1 border-r-4 border-brand-500">
                                Arigatō! I'm{" "}
                                <span className="font-bold text-[#5b155c] leading-tight">
                                    Karan
                                </span>{" "}
                            </p>
                        </div>
                        <p className="text-gray-600 text-base">
                            A software developer and smart contract security
                            researcher from India.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
