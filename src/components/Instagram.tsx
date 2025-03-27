import { useState } from "react";
import {
    MotionValue,
    useMotionTemplate,
    useMotionValue,
    useSpring,
    motion,
} from "framer-motion";
import { FaInstagram } from "react-icons/fa";
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
                className="card-hover relative flex w-full h-96 lg:h-full justify-center items-center"
            >
                <div className="w-full h-full absolute inset-0 flex flex-col bg-white border-[1px] border-gray-100 rounded-lg shadow-md shadow-indigo-900/5">
                    <div className="w-full h-66 3xl:h-80 rounded-md p-3">
                        <Image
                            alt="Polaroid Top"
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
                    <p className="card-header flex items-center gap-1 leading-tight px-3">
                        <FaInstagram className="w-4" />
                        Instagram
                        <span className="text-gray-500 text-sm">
                            @_karan.garg
                        </span>
                    </p>
                </div>
            </a>
        </motion.div>
    );
};

export default Instagram;
