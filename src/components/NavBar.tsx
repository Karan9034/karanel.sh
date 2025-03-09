"use client";

const NavBar = () => {
    return (
        <nav className="w-full sm:static fixed flex items-center py-4 px-8 bg-white border-b-[1px] border-gray-200 justify-between z-50">
            <a href="/">
                <img
                    alt="Logo"
                    loading="lazy"
                    width="128"
                    height="128"
                    decoding="async"
                    data-nimg="1"
                    className="cursor-pointer w-16"
                    style={{ color: "transparent" }}
                    src="pfp-round.jpeg"
                ></img>
            </a>
            <div className="w-full flex justify-end -mb-1">
                <div className="flex w-full relative text-gray-500 justify-end md:mr-10">
                    <div className="flex gap-12 invisible md:visible">
                        <a
                            className="text-lg font-medium text-gray-500 hover:text-gray-700"
                            href="/"
                        >
                            Home
                        </a>
                        <a
                            className="text-lg font-medium text-gray-500 hover:text-gray-700"
                            href="/blog"
                        >
                            Blog
                        </a>
                        <a
                            className="text-lg font-medium text-gray-500 hover:text-gray-700"
                            href="#"
                        >
                            Photos
                        </a>
                    </div>
                    <div className="block md:hidden">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            height="20"
                            width="20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fill="none"
                                strokeLinecap="round"
                                strokeMiterlimit="10"
                                strokeWidth="48"
                                d="M88 152h336M88 256h336M88 360h336"
                            ></path>
                        </svg>
                    </div>
                    <div className="invisible overflow-visible fixed z-10 top-12 left-0 w-full bg-white border-b-[1px] border-gray-200 p-4 flex flex-col gap-6 pb-10 transition-all">
                        <a
                            className="px-4 font-medium text-gray-500 hover:text-gray-700 transition-colors w-fit"
                            href="/"
                        >
                            Home
                        </a>
                        <a
                            className="px-4 font-medium text-gray-500 hover:text-gray-700 transition-colors w-fit"
                            href="/blog"
                        >
                            Blog
                        </a>
                        <a
                            className="px-4 font-medium text-gray-500 hover:text-gray-700 transition-colors w-fit"
                            href="#"
                        >
                            Photos
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
