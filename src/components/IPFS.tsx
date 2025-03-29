import { useState } from "react";
import {
    MotionValue,
    useMotionTemplate,
    useMotionValue,
    useSpring,
    motion,
} from "framer-motion";
import { SiIpfs } from "react-icons/si";
import { FaCircleQuestion } from "react-icons/fa6";

interface IPFSProps {
    handleMouseMove: (
        e: React.MouseEvent<HTMLDivElement, MouseEvent>,
        ref: DOMRect | null,
        x: MotionValue<number>,
        y: MotionValue<number>,
    ) => void;
    handleMouseLeave: (x: MotionValue<number>, y: MotionValue<number>) => void;
}

const IPFS = ({ handleMouseLeave, handleMouseMove }: IPFSProps) => {
    const [rect, setRect] = useState<DOMRect | null>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const xSpring = useSpring(x);
    const ySpring = useSpring(y);
    const transform = useMotionTemplate`rotateX(${xSpring}deg) rotateY(${ySpring}deg)`;

    const [file, setFile] = useState<File | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
        console.log(e.target.files ? e.target.files[0] : "no file");
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!file) return;

        const formData = new FormData();
        formData.append("file", file);

        const response = await fetch("/api/ipfs", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();
        console.log(data);
    };

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
                className="card-hover h-full w-full rounded-xl shadow-inner shadow-indigo-700/5 map-border"
            >
                <div className="h-full flex flex-col justify-between w-full bg-gray-50 border-[1px] border-gray-100 p-[18px] rounded-md">
                    <div className="h-full w-full">
                        <h1 className="card-header flex gap-2 items-center">
                            <SiIpfs size={30} />
                            UPLOAD FILE TO IPFS
                            <div className="tooltip">
                                <FaCircleQuestion size={15} />
                                <div className="tooltiptext">
                                    You can upload files to IPFS and get a
                                    shortened permalink to your file. None of
                                    the files get stored on servers managed by
                                    me. Don&apos;t upload sensitive content.
                                </div>
                            </div>
                        </h1>
                    </div>
                    <div className="flex flex-col h-full w-full">
                        <input type="file" onChange={handleFileChange} />
                        <br />
                        <button
                            disabled={!file}
                            className={`btn btn-primary ${
                                !file ? "btn-disabled" : ""
                            }`}
                            onClick={handleUpload}
                        >
                            Upload!
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default IPFS;
