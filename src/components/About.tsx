import FingerprintIcon from "@mui/icons-material/Fingerprint";
import TwitterIcon from "@mui/icons-material/Twitter";
import Image from "next/image";

const About = () => {
    return (
        <div className="flex flex-col gap-6">
            <div className="relative justify-between w-full flex px-6 pt-6">
                <div className="w-full justify-between flex">
                    <h1 className="card-header flex gap-2 items-center text-gray-600">
                        <div>
                            <FingerprintIcon className="w-5" />
                        </div>
                        ABOUT ME
                    </h1>
                </div>
                <div className="">
                    <div className="flex gap-3 items-center">
                        <a target="_blank" rel="noreferrer" href="/twitter">
                            <TwitterIcon className="w-4 h-4 text-gray-400 hover:text-gray-600 transition-all fill-current" />
                        </a>
                        <a target="_blank" rel="noreferrer" href="/discord">
                            <svg
                                className="text-gray-400 hover:text-gray-600 transition-all w-6"
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
                        <a target="_blank" rel="noreferrer" href="/resume">
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
                        <Image
                            alt="Avatar"
                            priority
                            fetchPriority="high"
                            width="128"
                            height="128"
                            decoding="async"
                            data-nimg="1"
                            className="rounded-2xl h-32 w-32 border-[1px] border-gray-100 z-10"
                            style={{ color: "transparent" }}
                            src="/pfp.jpeg"
                        />
                        <Image
                            alt="Avatar"
                            priority
                            fetchPriority="high"
                            width="128"
                            height="128"
                            decoding="async"
                            data-nimg="1"
                            className="rounded-2xl h-32 w-32 absolute blur-lg opacity-70 saturate-[6] translate-y-2 -z-10"
                            style={{ color: "transparent" }}
                            src="/pfp.jpeg"
                        />
                    </div>
                </div>
                <div className="flex items-start w-full">
                    <div className="w-full flex flex-wrap sm:flex-col lg:flex-wrap gap-1 items-start justify-between">
                        <div className="w-max">
                            <p className="text-gray-700 text-xl animate-typing overflow-hidden whitespace-nowrap pr-1 border-r-4 border-brand-500">
                                Konnichiwa! I&apos;m{" "}
                                <span className="font-bold text-[#5b155c] leading-tight">
                                    Karan
                                </span>{" "}
                            </p>
                        </div>
                        <p className="text-gray-600 text-base">
                            A software developer and smart contract security
                            researcher based out of Bengaluru, India.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
