const Contact = () => {
    return (
        <div className="p-8 w-full text-gray-600">
            <p className="card-header gap-2 flex items-center">
                <svg
                    className="w-5 h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                >
                    <path
                        d="M4.03075 5.00018C4.52664 13.04 10.9599 19.4734 18.9998 19.9692C19.5511 20.0032 20 19.5523 20 19V15.944C20 15.5024 19.7103 15.1131 19.2873 14.9862L16.5721 14.1716C16.2197 14.0659 15.8378 14.1622 15.5777 14.4223L14.8131 15.1869C14.5113 15.4887 14.0492 15.569 13.6765 15.3611C11.5654 14.1835 9.81645 12.4346 8.6389 10.3235C8.43099 9.95076 8.51129 9.48871 8.81308 9.18692L9.57765 8.42235C9.83778 8.16222 9.93408 7.78026 9.82837 7.4279L9.0138 4.71265C8.8869 4.28967 8.49758 4 8.05597 4H5C4.44772 4 3.99675 4.44894 4.03075 5.00018Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinejoin="round"
                    ></path>
                </svg>
                CONTACT
            </p>
            <div className="">
                If you want to chat, feel free to reach out to me on{" "}
                <span>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        className="font-bold text-blue-500 hover:text-blue-600 transition-colors"
                        href="/twitter"
                    >
                        Twitter
                    </a>
                </span>{" "}
                or on{" "}
                <span>
                    <a
                        target="_blank"
                        rel="noreferrer"
                        className="font-bold text-indigo-500 hover:text-indigo-600 transition-colors"
                        href="/discord"
                    >
                        {" "}
                        Discord
                    </a>
                </span>
                .
                <span>
                    {" "}
                    You can also email me at{" "}
                    <span>
                        <a
                            target="_blank"
                            rel="noreferrer"
                            className="font-bold text-[#5b155c] hover:text-fuchsia-600 transition-colors"
                            href="mailto:karan.agr9034@gmail.com"
                        >
                            karan.agr9034@gmail.com
                        </a>
                    </span>
                    .
                </span>
            </div>
        </div>
    );
};

export default Contact;
