import { useState } from "react";
import {
    MotionValue,
    useMotionTemplate,
    useMotionValue,
    useSpring,
    motion,
} from "framer-motion";
import Image from "next/image";

interface InstagramProps {
    handleMouseMove: (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        ref: DOMRect | null,
        x: MotionValue<number>,
        y: MotionValue<number>,
    ) => void;
    handleMouseLeave: (x: MotionValue<number>, y: MotionValue<number>) => void;
}

const Instagram = ({ handleMouseLeave, handleMouseMove }: InstagramProps) => {
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
            className="h-full w-full [perspective:800px] relative w-full h-full z-10 col-span-1"
        >
            <a
                style={{
                    transformStyle: "preserve-3d",
                    transform: `translateZ(10px)`,
                }}
                href="https://www.instagram.com/_karan.garg/"
                className="card-hover flex w-full lg:h-full justify-center items-center"
            >
                <div className="w-full h-full inset-0 flex flex-col bg-gray-50 border-[1px] border-gray-100 rounded-lg shadow-md shadow-indigo-900/5">
                    <div className="w-full h-54 3xl:h-80 rounded-md p-3">
                        <Image
                            alt="Karan's Instagram"
                            loading="lazy"
                            width="3432"
                            height="2288"
                            decoding="async"
                            data-nimg="1"
                            className="rounded-md h-full object-cover overflow-hidden"
                            style={{ color: "transparent" }}
                            src="/pic-1.jpg"
                        />
                    </div>
                    <div className="flex items-center w-full gap-4 mt-3 mx-3">
                        <div className="flex items-center justify-center">
                            <svg
                                stroke="currentColor"
                                fill="currentColor"
                                strokeWidth="0"
                                role="img"
                                viewBox="0 0 36 36"
                                className="rounded-lg w-10 h-10 text-white drop-shadow-md"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                            >
                                <defs>
                                    <linearGradient id="b">
                                        <stop offset="0" stopColor="#3771c8" />
                                        <stop
                                            stopColor="#3771c8"
                                            offset=".128"
                                        />
                                        <stop
                                            offset="1"
                                            stopColor="#60f"
                                            stopOpacity="0"
                                        />
                                    </linearGradient>
                                    <linearGradient id="a">
                                        <stop offset="0" stopColor="#fd5" />
                                        <stop offset=".1" stopColor="#fd5" />
                                        <stop offset=".5" stopColor="#ff543e" />
                                        <stop offset="1" stopColor="#c837ab" />
                                    </linearGradient>
                                    <radialGradient
                                        id="c"
                                        cx="158.429"
                                        cy="578.088"
                                        r="65"
                                        xlinkHref="#a"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="matrix(0 -1.98198 1.8439 0 -1031.402 454.004)"
                                        fx="158.429"
                                        fy="578.088"
                                    />
                                    <radialGradient
                                        id="d"
                                        cx="147.694"
                                        cy="473.455"
                                        r="65"
                                        xlinkHref="#b"
                                        gradientUnits="userSpaceOnUse"
                                        gradientTransform="matrix(.17394 .86872 -3.5818 .71718 1648.348 -458.493)"
                                        fx="147.694"
                                        fy="473.455"
                                    />
                                </defs>
                                <g transform="scale(.26458)">
                                    <path
                                        fill="url(#c)"
                                        d="M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z"
                                        transform="translate(1.004 1)"
                                    />
                                    <path
                                        fill="url(#d)"
                                        d="M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z"
                                        transform="translate(1.004 1)"
                                    />
                                    <path
                                        fill="#fff"
                                        d="M66.004 18c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C18.06 51.327 18 52.964 18 66s.058 14.667.29 19.787c.235 5.11 1.044 8.598 2.23 11.65 1.227 3.157 2.867 5.835 5.536 8.503 2.667 2.67 5.345 4.314 8.5 5.54 3.054 1.187 6.543 1.996 11.652 2.23 5.12.233 6.755.29 19.79.29 13.037 0 14.668-.057 19.788-.29 5.11-.234 8.602-1.043 11.656-2.23 3.156-1.226 5.83-2.87 8.497-5.54 2.67-2.668 4.31-5.346 5.54-8.502 1.18-3.053 1.99-6.542 2.23-11.65.23-5.12.29-6.752.29-19.788 0-13.036-.06-14.672-.29-19.792-.24-5.11-1.05-8.598-2.23-11.65-1.23-3.157-2.87-5.835-5.54-8.503-2.67-2.67-5.34-4.31-8.5-5.535-3.06-1.187-6.55-1.996-11.66-2.23-5.12-.233-6.75-.29-19.79-.29zm-4.306 8.65c1.278-.002 2.704 0 4.306 0 12.816 0 14.335.046 19.396.276 4.68.214 7.22.996 8.912 1.653 2.24.87 3.837 1.91 5.516 3.59 1.68 1.68 2.72 3.28 3.592 5.52.657 1.69 1.44 4.23 1.653 8.91.23 5.06.28 6.58.28 19.39s-.05 14.33-.28 19.39c-.214 4.68-.996 7.22-1.653 8.91-.87 2.24-1.912 3.835-3.592 5.514-1.68 1.68-3.275 2.72-5.516 3.59-1.69.66-4.232 1.44-8.912 1.654-5.06.23-6.58.28-19.396.28-12.817 0-14.336-.05-19.396-.28-4.68-.216-7.22-.998-8.913-1.655-2.24-.87-3.84-1.91-5.52-3.59-1.68-1.68-2.72-3.276-3.592-5.517-.657-1.69-1.44-4.23-1.653-8.91-.23-5.06-.276-6.58-.276-19.398s.046-14.33.276-19.39c.214-4.68.996-7.22 1.653-8.912.87-2.24 1.912-3.84 3.592-5.52 1.68-1.68 3.28-2.72 5.52-3.592 1.692-.66 4.233-1.44 8.913-1.655 4.428-.2 6.144-.26 15.09-.27zm29.928 7.97c-3.18 0-5.76 2.577-5.76 5.758 0 3.18 2.58 5.76 5.76 5.76 3.18 0 5.76-2.58 5.76-5.76 0-3.18-2.58-5.76-5.76-5.76zm-25.622 6.73c-13.613 0-24.65 11.037-24.65 24.65 0 13.613 11.037 24.645 24.65 24.645C79.617 90.645 90.65 79.613 90.65 66S79.616 41.35 66.003 41.35zm0 8.65c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16 0-8.837 7.163-16 16-16z"
                                    />
                                </g>
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm text-gray-700 font-bold">
                                Karan Agrawal
                            </p>
                            <p className="text-xs text-gray-500">
                                @_karan.garg
                            </p>
                        </div>
                    </div>
                </div>
            </a>
        </motion.div>
    );
};

export default Instagram;
