import { useState } from "react";
import {
    MotionValue,
    useMotionTemplate,
    useMotionValue,
    useSpring,
    motion,
} from "framer-motion";
import { LuLaptop } from "react-icons/lu";
import { IoPhonePortraitOutline } from "react-icons/io5";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IoMdTabletLandscape } from "react-icons/io";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { FiCpu } from "react-icons/fi";
import {
    FaReact,
    FaMicrophone,
    FaNodeJs,
    FaPython,
} from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { RiNextjsLine } from "react-icons/ri";
import { DiGit } from "react-icons/di";
import {
    SiSolidity,
    SiFlask,
    SiExpress,
    SiTypescript,
    SiGooglecloud,
} from "react-icons/si";
import { FaJs } from "react-icons/fa6";

interface WhatIUseProps {
    handleMouseMove: (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        ref: DOMRect | null,
        x: MotionValue<number>,
        y: MotionValue<number>,
    ) => void;
    handleMouseLeave: (x: MotionValue<number>, y: MotionValue<number>) => void;
}

const WhatIUse = ({ handleMouseMove, handleMouseLeave }: WhatIUseProps) => {
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
            className="h-full w-full [perspective:800px] col-span-2 w-full h-full "
        >
            <div
                style={{
                    transformStyle: "preserve-3d",
                    transform: `translateZ(10px)`,
                }}
                className="card-hover w-full h-full map-border rounded-md bg-gray-50 shadow-md shadow-indigo-900/5"
            >
                <div className="w-full h-full p-6 border-[1px] border-gray-100 rounded-md">
                    <div className="flex gap-2 items-center card-header leading-tight">
                        <HiOutlineWrenchScrewdriver size={20} />
                        TOOLS I USE
                    </div>
                    <div className="w-full h-full items-start py-6  flex-col sm:flex-row flex gap-10 font-medium">
                        <div className="flex flex-col gap-3 text-sm">
                            Hardware
                            <div className="flex flex-col gap-2 px-1 text-xs font-normal text-gray-500">
                                <p className="flex gap-2 items-center leading-tight">
                                    <LuLaptop
                                        className="text-gray-600"
                                        size={20}
                                    />
                                    Asus Vivobook 15
                                </p>
                                <p className="flex gap-2 items-center leading-tight">
                                    <IoPhonePortraitOutline
                                        className="text-gray-600"
                                        size={20}
                                    />
                                    realme 8s 5G
                                </p>
                                {/* <p className="flex gap-2 items-center leading-tight">
                                    <IoMdTabletLandscape
                                        size={20}
                                        className="text-gray-600"
                                    />
                                    iPad Air 5th Gen
                                </p> */}
                                <p className="flex gap-2 items-center leading-tight">
                                    <FiCpu
                                        className="text-gray-600"
                                        size={20}
                                    />
                                    AMD Ryzen 5
                                </p>
                                <p className="flex gap-2 items-center leading-tight">
                                    <FaMicrophone
                                        size={20}
                                        className="text-gray-600"
                                    />
                                    Blue Snowball Mic
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col text-sm gap-3">
                            Software
                            <div className="flex flex-col sm:flex-row gap-3 md:gap-2 items-start">
                                <div className="flex flex-col gap-2 px-1 text-xs font-normal text-gray-500">
                                    <p className="flex gap-2 items-center leading-tight">
                                        <FaJs
                                            className="text-gray-600"
                                            size={20}
                                        />
                                        JavaScript
                                    </p>

                                    <p className="flex gap-2 items-center leading-tight">
                                        <FaReact
                                            className="text-gray-600"
                                            size={20}
                                        />
                                        React
                                    </p>
                                    <p className="flex gap-2 items-center leading-tight">
                                        <RiNextjsLine
                                            className="text-gray-600"
                                            size={20}
                                        />
                                        Next.js
                                    </p>
                                    <p className="flex gap-2 items-center leading-tight">
                                        <SiSolidity
                                            className="text-gray-600"
                                            size={20}
                                        />
                                        Solidity
                                    </p>
                                    <p className="flex gap-2 items-center leading-tight">
                                        <FaPython
                                            className="text-gray-600"
                                            size={20}
                                        />
                                        Python
                                    </p>
                                    <p className="flex gap-2 items-center leading-tight">
                                        <SiFlask
                                            className="text-gray-600"
                                            size={20}
                                        />
                                        Flask
                                    </p>
                                </div>
                                <div className="flex flex-col gap-2 h-full items-start pl-1 md:pl-3 text-xs font-normal text-gray-500">
                                    <p className="flex gap-2 items-center leading-tight">
                                        <SiTypescript
                                            className="text-gray-600"
                                            size={20}
                                        />
                                        TypeScript
                                    </p>
                                    <p className="flex gap-2 items-center leading-tight">
                                        <FaNodeJs
                                            className="text-gray-600"
                                            size={20}
                                        />
                                        Node.js
                                    </p>
                                    <p className="flex gap-2 items-center leading-tight">
                                        <SiExpress
                                            className="text-gray-600"
                                            size={20}
                                        />
                                        Express.js
                                    </p>
                                    <p className="flex gap-2 items-center leading-tight">
                                        <VscVscode
                                            className="text-gray-600"
                                            size={20}
                                        />
                                        VSCode
                                    </p>
                                    <p className="flex gap-2 items-center leading-tight">
                                        <DiGit
                                            className="text-gray-600"
                                            size={20}
                                        />
                                        Git
                                    </p>
                                    <p className="flex gap-2 items-center leading-tight">
                                        <SiGooglecloud
                                            className="text-gray-600"
                                            size={20}
                                        />
                                        Google Cloud
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default WhatIUse;
