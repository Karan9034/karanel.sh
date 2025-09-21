import {
    motion,
    MotionValue,
    useMotionValue,
    useSpring,
    useMotionTemplate,
} from "framer-motion";
import { useState } from "react";

interface DiscordProps {
    status: string;
    bgClass: string;
    handleMouseMove: (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        ref: DOMRect | null,
        x: MotionValue<number>,
        y: MotionValue<number>,
    ) => void;
    handleMouseLeave: (x: MotionValue<number>, y: MotionValue<number>) => void;
}

const Discord = ({
    status,
    bgClass,
    handleMouseLeave,
    handleMouseMove,
}: DiscordProps) => {
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
            className="h-full w-full [perspective:800px] flex h-full"
        >
            <div
                style={{
                    transformStyle: "preserve-3d",
                    transform: `translateZ(10px)`,
                }}
                className="card-hover w-full h-full map-border shadow-md shadow-indigo-900/5"
            >
                <div className="w-full h-full flex p-6 border-[1px] border-gray-100 bg-gray-50 rounded-md flex-col">
                    <h2 className="card-header flex items-center gap-2">
                        <svg
                            className="w-4 h-4"
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                        >
                            <path
                                d="M6.34315 6.34334C6.73367 5.95281 6.73367 5.31965 6.34315 4.92912C5.95262 4.5386 5.31946 4.5386 4.92893 4.92912L6.34315 6.34334ZM9.17157 9.17176C9.5621 8.78124 9.5621 8.14808 9.17157 7.75755C8.78105 7.36703 8.14788 7.36703 7.75736 7.75755L9.17157 9.17176ZM7.75736 16.2428C8.14788 16.6334 8.78105 16.6334 9.17157 16.2428C9.5621 15.8523 9.5621 15.2191 9.17157 14.8286L7.75736 16.2428ZM14.8284 14.8286C14.4379 15.2191 14.4379 15.8523 14.8284 16.2428C15.219 16.6334 15.8521 16.6334 16.2426 16.2428L14.8284 14.8286ZM16.2426 7.75755C15.8521 7.36703 15.219 7.36703 14.8284 7.75755C14.4379 8.14808 14.4379 8.78124 14.8284 9.17176L16.2426 7.75755ZM4.92893 19.0713C5.31946 19.4618 5.95262 19.4618 6.34315 19.0713C6.73367 18.6807 6.73367 18.0476 6.34315 17.657L4.92893 19.0713ZM17.6569 17.657C17.2663 18.0476 17.2663 18.6807 17.6569 19.0713C18.0474 19.4618 18.6805 19.4618 19.0711 19.0713L17.6569 17.657ZM19.0711 4.92912C18.6805 4.5386 18.0474 4.5386 17.6569 4.92912C17.2663 5.31965 17.2663 5.95281 17.6569 6.34334L19.0711 4.92912ZM4 12.0002C4 9.79078 4.89434 7.79215 6.34315 6.34334L4.92893 4.92912C3.12038 6.73767 2 9.23904 2 12.0002H4ZM8 12.0002C8 10.8953 8.44662 9.89672 9.17157 9.17176L7.75736 7.75755C6.67267 8.84224 6 10.3436 6 12.0002H8ZM9.17157 14.8286C8.44662 14.1037 8 13.105 8 12.0002H6C6 13.6568 6.67267 15.1581 7.75736 16.2428L9.17157 14.8286ZM16 12.0002C16 13.105 15.5534 14.1037 14.8284 14.8286L16.2426 16.2428C17.3273 15.1581 18 13.6568 18 12.0002H16ZM14.8284 9.17176C15.5534 9.89672 16 10.8953 16 12.0002H18C18 10.3436 17.3273 8.84224 16.2426 7.75755L14.8284 9.17176ZM6.34315 17.657C4.89434 16.2082 4 14.2096 4 12.0002H2C2 14.7613 3.12038 17.2627 4.92893 19.0713L6.34315 17.657ZM20 12.0002C20 14.2096 19.1057 16.2082 17.6569 17.657L19.0711 19.0713C20.8796 17.2627 22 14.7613 22 12.0002H20ZM17.6569 6.34334C19.1057 7.79215 20 9.79078 20 12.0002H22C22 9.23904 20.8796 6.73767 19.0711 4.92912L17.6569 6.34334ZM12 12.0002V14.0002C13.1046 14.0002 14 13.1048 14 12.0002H12ZM12 12.0002H10C10 13.1048 10.8954 14.0002 12 14.0002V12.0002ZM12 12.0002V10.0002C10.8954 10.0002 10 10.8956 10 12.0002H12ZM12 12.0002H14C14 10.8956 13.1046 10.0002 12 10.0002V12.0002Z"
                                fill="currentColor"
                            ></path>
                        </svg>
                        STATUS
                    </h2>
                    <div className="h-full flex flex-col pt-2 justify-center gap-2">
                        <div className="flex gap-1 w-fit h-full items-center justify-center px-1">
                            <div className="relative h-fill w-4">
                                <div
                                    className={`w-2 h-2 rounded-full ${bgClass}`}
                                ></div>
                                <div
                                    className={`w-2 h-2 rounded-full inset-0 ${bgClass} absolute animate-ping`}
                                ></div>
                            </div>
                            <p className="text-gray-500 font-medium text-3xl">
                                {status}
                            </p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <p className="text-xs text-gray-500"></p>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default Discord;
