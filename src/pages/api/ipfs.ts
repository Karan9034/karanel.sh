import { NextApiRequest, NextApiResponse } from "next";
import { ObjectManager } from "@filebase/sdk";
import { IncomingForm } from "formidable";
import { readFileSync } from "fs";

export const config = {
    api: {
        bodyParser: false,
    },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === "POST") {
        const form = new IncomingForm({
            uploadDir: "./uploads/",
            keepExtensions: true,
        });
        form.parse(req, async (err, fields, files) => {
            if (err) {
                return res.status(500).json({ message: "Server error", err });
            }

            if (
                files.file !== null &&
                files.file !== undefined &&
                files.file.length > 0
            ) {
                const objectManager = new ObjectManager(
                    process.env.S3_KEY as string,
                    process.env.S3_SECRET as string,
                    {
                        bucket: "karanel-sh",
                    },
                );
                const buffer = readFileSync(files.file[0].filepath);
                const uploadedObject = await objectManager.upload(
                    files.file[0].originalFilename,
                    buffer,
                    {},
                    {},
                );
                
                console.log(uploadedObject);
                const resp = await fetch(`https://cleanuri.com/api/v1/shorten`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        url: `https://${process.env.GATEWAY_NAME as string}.myfilebase.com/ipfs/${uploadedObject.cid}`
                    })
                })
                const data = await resp.json();
                console.log(data)
                return res.status(200).json(data);
            }
        });
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
};

export default handler;
