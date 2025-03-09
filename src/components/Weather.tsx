const Weather = () => {
    return (
        <div className="h-full w-full [perspective:800px] col-span-1 row-span-1">
            <div className="card-hover w-full h-full rounded-md bg-gray-50 map-border shadow-md shadow-brand-900/5">
                <div className="w-full h-full p-6 border-[1px] border-gray-100 rounded-md">
                    <p className="card-header flex items-center gap-2">
                        <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M7 19C4.23858 19 2 16.7614 2 14C2 11.4673 3.88316 9.37436 6.32568 9.04508C7.13649 6.69118 9.37075 5 12 5C15.3137 5 18 7.68629 18 11C20.2091 11 22 12.7909 22 15C22 17.2091 20.2091 19 18 19H7Z"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                        WEATHER
                    </p>
                    <p className="text-3xl 3xl:text-4xl font-medium text-gray-600">
                        15.2°C
                    </p>
                    <p className="text-sm 3xl:text-base  text-gray-500">
                        Sunny
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Weather;
