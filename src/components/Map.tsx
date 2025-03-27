import {
    motion,
    MotionValue,
    useMotionValue,
    useSpring,
    useMotionTemplate,
} from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface MapProps {
    handleMouseMove: (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        ref: DOMRect | null,
        x: MotionValue<number>,
        y: MotionValue<number>,
    ) => void;
    handleMouseLeave: (x: MotionValue<number>, y: MotionValue<number>) => void;
}

const Map = ({ handleMouseMove, handleMouseLeave }: MapProps) => {
    const [rect, setRect] = useState<DOMRect | null>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const xSpring = useSpring(x);
    const ySpring = useSpring(y);
    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    return (
        <motion.div
            onMouseMove={(e) => handleMouseMove(e, rect, x, y)}
            onMouseLeave={() => handleMouseLeave(x, y)}
            onMouseEnter={(e) => {
                setRect(e.currentTarget.getBoundingClientRect());
            }}
            style={{
                transformStyle: "preserve-3d",
                transform,
            }}
            className="h-full w-full [perspective:800px] h-full w-full col-span-2"
        >
            <div
                style={{
                    transformStyle: "preserve-3d",
                    transform: `translateZ(10px)`,
                }}
                className="card-hover h-72 md:h-full w-full rounded-xl shadow-md shadow-indigo-900/5 map-border md:overflow-hidden flex items-end justify-end"
            >
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
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            ></path>
                        </svg>
                        <p className="leading-tight">Bengaluru, India</p>
                    </div>
                    <div className="absolute inset-0 w-full h-full">
                        <div className="relative w-full h-full overflow-hidden">
                            <Image
                                alt=""
                                loading="lazy"
                                width="1479"
                                height="1500"
                                decoding="async"
                                data-nimg="1"
                                className="w-full h-full absolute object-cover z-10 bg-blend-overlay mix-blend-overlay opacity-10 sm:opacity-40"
                                style={{ color: "transparent" }}
                                src="/#"
                            />
                            <Image
                                alt=""
                                fetchPriority="high"
                                width="680"
                                height="400"
                                decoding="async"
                                data-nimg="1"
                                className="w-full h-full absolute saturate-[150%] border-[1px] border-gray-200 object-cover scale-[120%]"
                                style={{ color: "transparent" }}
                                src="/#"
                            />
                            {/* <iframe
                                width="640"
                                height="400"
                                src="https://www.openstreetmap.org/export/embed.html?bbox=77.66312599182129%2C12.911885049973801%2C77.74346351623537%2C12.965421993914006&amp;layer=P"
                            ></iframe> */}
                            <br />
                            <Image
                                alt=""
                                loading="lazy"
                                width="1116"
                                height="674"
                                decoding="async"
                                data-nimg="1"
                                className="w-full h-full absolute inset-0 saturate-200 -z-5 object-fill"
                                style={{ color: "transparent" }}
                                src="/#"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Map;
