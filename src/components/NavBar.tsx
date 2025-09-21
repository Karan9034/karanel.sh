"use client";

import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
    return (
        <nav
            className="w-full sm:static fixed flex items-center py-4 px-8 bg-white border-b-[1px] border-gray-200 justify-between z-50 invisible md:visible"
            style={{ backgroundColor: "#6746b4ff", color: "white" }}
        >
            <Link href="/">
                <Image
                    alt="Logo"
                    loading="lazy"
                    width="128"
                    height="128"
                    decoding="async"
                    data-nimg="1"
                    className="cursor-pointer w-16"
                    style={{ color: "transparent" }}
                    src="/pfp-round.jpeg"
                />
            </Link>
            <div className="w-full flex justify-end -mb-1">
                <div className="flex w-full relative justify-end md:mr-10">
                    <div className="flex gap-12">
                        <Link
                            className="text-lg font-medium hover:text-gray-700"
                            href="/"
                        >
                            Home
                        </Link>
                        <Link
                            className="text-lg font-medium hover:text-gray-700"
                            href="/linkedin"
                            target="_blank"
                        >
                            LinkedIn
                        </Link>
                        <Link
                            className="text-lg font-medium hover:text-gray-700"
                            href="/resume"
                            target="_blank"
                        >
                            Resume
                        </Link>
                        <Link
                            className="text-lg font-medium hover:text-gray-700"
                            href="/github"
                            target="_blank"
                        >
                            GitHub
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
