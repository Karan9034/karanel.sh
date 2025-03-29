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
import Link from "next/link";

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
    const [url, setUrl] = useState<string | null>(null);

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
        if (data.cid) {
            setUrl(
                `https://${process.env.NEXT_PUBLIC_GATEWAY_NAME}.myfilebase.com/ipfs/${data.cid}`,
            );
        }
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
                className="card-hover h-full w-full rounded-xl bg-gray-50 shadow-md shadow-indigo-700/5 map-border"
            >
                <div className="h-full flex flex-col justify-between w-full bg-gray-50 border-[1px] border-gray-100 p-[18px] rounded-md">
                    <div className="h-full w-full">
                        <h1 className="card-header flex gap-2 items-center">
                            <SiIpfs size={30} />
                            IPFS Upload
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
                        <input
                            type="file"
                            onChange={handleFileChange}
                            className="file:mr-4 file:rounded-full file:border-0 file:outline-0 file:bg-violet-50 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-violet-700 hover:file:bg-violet-100 dark:file:bg-violet-600 dark:file:text-violet-100 dark:hover:file:bg-violet-500"
                        />
                        <br />
                        <button
                            disabled={!file}
                            className={`${
                                !file
                                    ? "bg-violet-100 cursor-default hover:bg-violet-100 text-black font-bold py-2 px-4 border border-grey-500 rounded"
                                    : "bg-violet-700 cursor-pointer hover:bg-violet-500 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                            }`}
                            onClick={handleUpload}
                        >
                            Upload!
                        </button>
                        {url && (
                            <h3 className="text-sm py-3">
                                Your file is uploaded{" "}
                                <Link
                                    target="_blank"
                                    className="text-blue-700 underline"
                                    href={url}
                                >
                                    here
                                </Link>
                                !
                            </h3>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default IPFS;
