import { useState, useEffect } from "react";
import {
    MotionValue,
    useMotionTemplate,
    useMotionValue,
    useSpring,
    motion,
} from "framer-motion";
import { MdOutlineFactCheck } from "react-icons/md";

interface RandomFactProps {
    handleMouseMove: (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        ref: DOMRect | null,
        x: MotionValue<number>,
        y: MotionValue<number>,
    ) => void;
    handleMouseLeave: (x: MotionValue<number>, y: MotionValue<number>) => void;
}

const RandomFact = ({ handleMouseLeave, handleMouseMove }: RandomFactProps) => {
    const [rect, setRect] = useState<DOMRect | null>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const xSpring = useSpring(x);
    const ySpring = useSpring(y);
    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const [fact, setFact] = useState<string>("");

    useEffect(() => {
        fetch("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en")
            .then((res) => res.json())
            .then((res) => setFact(res?.text as string));
    }, []);

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
            className="h-full w-full [perspective:800px] sm:col-span-1 col-span-2"
        >
            <div
                style={{
                    transformStyle: "preserve-3d",
                    transform: `translateZ(10px)`,
                }}
                className="card-hover h-full w-full rounded-xl shadow-md shadow-indigo-700/5 map-border"
            >
                <div className="h-full flex flex-col justify-between w-full bg-gray-50 border-[1px] border-gray-100 p-[18px] rounded-md">
                    <div className="h-full w-full">
                        <h1 className="card-header flex gap-2 items-center">
                            <MdOutlineFactCheck size={30} />A FACT NOBODY ASKED
                            FOR
                        </h1>
                    </div>
                    <div className="flex flex-col h-full w-full">
                        <h1 className="text-lg font-medium text-gray-700 z-20">
                            {fact !== "" ? fact : "Loading..."}
                        </h1>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default RandomFact;
