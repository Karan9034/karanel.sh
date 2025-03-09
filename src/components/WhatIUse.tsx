const WhatIUse = () => {
    return (
        <div className="h-full w-full [perspective:800px] col-span-2 w-full h-full ">
            <div className="card-hover w-full h-full map-border rounded-md bg-gray-50 shadow-md shadow-indigo-900/5">
                <div className="w-full h-full p-6 border-[1px] border-gray-100 rounded-md">
                    <div className="flex gap-2 items-center card-header leading-tight">
                        <svg
                            className="w-5"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M12.0002 4.99693V2.99609M16 5V3M8.00018 5V2.99609M12 21V19M16 21V19M8 21V19M19 16H21M19 8H21M19 12H21M3 12H5M3 16H5M3 8H5M15.0013 12.0003C15.0013 13.6578 13.6576 15.0015 12 15.0015C10.3425 15.0015 8.99878 13.6578 8.99878 12.0003C8.99878 10.3427 10.3425 8.99902 12 8.99902C13.6576 8.99902 15.0013 10.3427 15.0013 12.0003ZM6 19H18C18.5523 19 19 18.5523 19 18V6C19 5.44772 18.5523 5 18 5H6C5.44772 5 5 5.44772 5 6V18C5 18.5523 5.44772 19 6 19Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                        WHAT I USE
                    </div>
                    <div className="w-full h-full items-start py-6  flex-col sm:flex-row flex gap-10 text-gray-500 font-medium">
                        <div className="flex flex-col gap-3 text-sm">
                            Hardware
                            <div className="flex flex-col gap-2 px-1 text-xs font-normal text-gray-500">
                                <p className="flex gap-2 items-center leading-tight">
                                    <svg
                                        className="w-4 text-gray-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M4 5C4 4.44772 4.44772 4 5 4H19C19.5523 4 20 4.44772 20 5V15C20 15.5523 19.5523 16 19 16H5C4.44772 16 4 15.5523 4 15V5Z"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="square"
                                            strokeLinejoin="round"
                                        ></path>
                                        <path
                                            d="M2 16H22V19C22 19.5523 21.5523 20 21 20H3C2.44772 20 2 19.5523 2 19V16Z"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="square"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                    MacBook Pro M3 Max
                                </p>
                                <p className="flex gap-2 items-center leading-tight">
                                    <svg
                                        className="w-4 text-gray-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M11 5H13M7 22H17C17.5523 22 18 21.5523 18 21V3C18 2.44772 17.5523 2 17 2H7C6.44772 2 6 2.44772 6 3V21C6 21.5523 6.44772 22 7 22Z"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                    iPhone 15 Pro Max
                                </p>
                                <p className="flex gap-2 items-center leading-tight">
                                    <svg
                                        className="w-4 text-gray-600"
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M5.125 13C5.125 13.4832 5.51675 13.875 6 13.875C6.48325 13.875 6.875 13.4832 6.875 13C6.875 12.5168 6.48325 12.125 6 12.125C5.51675 12.125 5.125 12.5168 5.125 13ZM17.125 13C17.125 13.4832 17.5168 13.875 18 13.875C18.4832 13.875 18.875 13.4832 18.875 13C18.875 12.5168 18.4832 12.125 18 12.125C17.5168 12.125 17.125 12.5168 17.125 13ZM13.125 13C13.125 13.4832 13.5168 13.875 14 13.875C14.4832 13.875 14.875 13.4832 14.875 13C14.875 12.5168 14.4832 12.125 14 12.125C13.5168 12.125 13.125 12.5168 13.125 13ZM9.125 13C9.125 13.4832 9.51675 13.875 10 13.875C10.4832 13.875 10.875 13.4832 10.875 13C10.875 12.5168 10.4832 12.125 10 12.125C9.51675 12.125 9.125 12.5168 9.125 13ZM5.125 17C5.125 17.4832 5.51675 17.875 6 17.875C6.48325 17.875 6.875 17.4832 6.875 17C6.875 16.5168 6.48325 16.125 6 16.125C5.51675 16.125 5.125 16.5168 5.125 17ZM17.125 17C17.125 17.4832 17.5168 17.875 18 17.875C18.4832 17.875 18.875 17.4832 18.875 17C18.875 16.5168 18.4832 16.125 18 16.125C17.5168 16.125 17.125 16.5168 17.125 17Z"
                                            fill="currentColor"
                                            stroke="currentColor"
                                            strokeWidth="0.75"
                                            strokeLinecap="square"
                                        ></path>
                                        <path
                                            d="M10 17H14M6 9V6C6 5.44772 6.44772 5 7 5H17C17.5523 5 18 4.55228 18 4V3M3 9H21C21.5523 9 22 9.44772 22 10V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V10C2 9.44772 2.44772 9 3 9Z"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        ></path>
                                    </svg>
                                    Zoom65 V2
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col text-sm gap-3">
                            Software
                            <div className="flex flex-col sm:flex-row gap-3 md:gap-2 items-start">
                                <div className="flex flex-col gap-3 px-1 text-xs font-normal text-gray-500">
                                    <p className="flex gap-2 items-center leading-tight">
                                        <svg
                                            className="w-4 h-4 text-gray-600"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M8.66146 2C6.82146 2 5.32812 3.49333 5.32812 5.33333C5.32812 7.16852 6.81365 8.65884 8.64701 8.66664C6.81366 8.67445 5.32815 10.1648 5.32815 11.9999C5.32815 13.8399 6.82148 15.3333 8.66148 15.3333H11.9948V12.0205C12.0059 13.851 13.4949 15.3333 15.3281 15.3333C17.1681 15.3333 18.6614 13.8399 18.6614 11.9999C18.6614 10.1646 17.1757 8.67424 15.3422 8.66664C17.1757 8.65904 18.6614 7.16864 18.6614 5.33333C18.6614 3.49333 17.1681 2 15.3281 2H8.66146ZM15.3076 8.66667H11.9948V11.9794C12.0058 10.1557 13.4838 8.67769 15.3076 8.66667Z"
                                                fill="currentColor"
                                            ></path>
                                            <path
                                                d="M8.66148 22C10.5015 22 11.9948 20.5067 11.9948 18.6667V15.3333H8.66148C6.82148 15.3333 5.32815 16.8267 5.32815 18.6667C5.32815 20.5067 6.82148 22 8.66148 22Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                        Figma
                                    </p>
                                    <p className="flex gap-2 items-center leading-tight">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            viewBox="0 0 16 16"
                                            className="w-4 h-4    text-gray-600"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M10.8634 13.9195C10.6568 14.0195 10.4233 14.0246 10.2185 13.9444C10.1162 13.9044 10.021 13.843 9.93997 13.7614L4.81616 9.06268L2.58433 10.7656C2.37657 10.9241 2.08597 10.9111 1.89301 10.7347L1.17719 10.0802C0.941168 9.86437 0.940898 9.49112 1.17661 9.27496L3.11213 7.5L1.17661 5.72504C0.940898 5.50888 0.941168 5.13563 1.17719 4.91982L1.89301 4.2653C2.08597 4.08887 2.37657 4.07588 2.58433 4.2344L4.81616 5.93732L9.93997 1.23855C9.97037 1.20797 10.0028 1.18023 10.0368 1.15538C10.2748 0.981429 10.5922 0.949298 10.8634 1.08048L13.5399 2.37507C13.8212 2.5111 14 2.79721 14 3.11109V8H10.752V4.53356L6.86419 7.5L10.752 10.4664V8H14V11.8889C14 12.2028 13.8211 12.4889 13.5399 12.625L10.8634 13.9195Z"></path>
                                        </svg>
                                        VSCode
                                    </p>
                                    <p className="flex gap-2 items-center leading-tight">
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            strokeWidth="0"
                                            role="img"
                                            viewBox="0 0 24 24"
                                            className="w-4 h-4 text-gray-600"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M13.966 22.624l-1.69-4.281H8.122l3.892-9.144 5.662 13.425zM8.884 1.376H0v21.248zm15.116 0h-8.884L24 22.624Z"></path>
                                        </svg>
                                        Adobe Suite
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 h-full items-start pl-1 md:pl-3 text-xs font-normal text-gray-500">
                                    <p className="flex gap-2 items-center leading-tight">
                                        <svg
                                            className="w-4 h-4 text-gray-600"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="24"
                                            height="24"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M11.4501 2.15012C12.2833 2.15012 13.0451 2.6209 13.4177 3.3662L17.0526 10.6359C17.8496 9.68859 18.4078 8.53381 18.6339 7.26428C18.8468 6.06811 19.9892 5.27108 21.1853 5.48406C22.3815 5.69704 23.1785 6.83938 22.9656 8.03555C22.4889 10.7128 21.0971 13.073 19.1249 14.7807L20.5675 17.6657C21.1108 18.7524 20.6703 20.0738 19.5836 20.6172C18.4969 21.1605 17.1755 20.7201 16.6321 19.6333L15.3068 16.9827C14.1195 17.3916 12.8451 17.6136 11.5186 17.6136C10.1485 17.6136 8.83407 17.3765 7.61391 16.9415L6.26798 19.6333C5.72462 20.7201 4.40319 21.1605 3.31648 20.6172C2.22976 20.0738 1.78929 18.7524 2.33264 17.6657L3.81704 14.6969C2.78424 13.7831 1.91555 12.6888 1.26053 11.4643C0.687446 10.3929 1.09136 9.05988 2.16269 8.48679C3.23403 7.91371 4.56709 8.31763 5.14017 9.38896C5.35736 9.79497 5.61195 10.1776 5.89929 10.5324L9.48238 3.3662C9.85503 2.6209 10.6168 2.15012 11.4501 2.15012ZM9.60567 12.958C10.2151 13.1248 10.8566 13.2137 11.5186 13.2137C12.137 13.2137 12.7373 13.136 13.3104 12.9898L11.4501 9.26921L9.60567 12.958Z"
                                                fill="currentColor"
                                            ></path>
                                        </svg>
                                        Arc Browser
                                    </p>
                                    <p className="flex gap-2 items-center leading-tight">
                                        <svg
                                            className="w-4 text-gray-600 fill-current"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="currentColor"
                                            viewBox="0 0 48 48"
                                        >
                                            <path
                                                fill="currentColor"
                                                fillRule="evenodd"
                                                d="M12 30.99V36L-.01 23.99l2.516-2.499zM17.01 36H12l12.011 12.01 2.506-2.505zm28.487-9.497L48 24 24 0l-2.503 2.503L30.98 12h-5.732l-6.62-6.614-2.506 2.503 4.122 4.122h-2.869v18.625H36V27.77l4.122 4.122 2.503-2.506L36 22.747v-5.732zM13.253 10.747l-2.503 2.506 2.686 2.686 2.503-2.506zm21.314 21.314-2.495 2.503 2.686 2.686 2.506-2.503zM7.878 16.121l-2.503 2.504L12 25.253v-5.012zM27.756 36h-5.009l6.628 6.625 2.503-2.503z"
                                                clipRule="evenodd"
                                            ></path>
                                        </svg>
                                        Raycast
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhatIUse;
