import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const response = await fetch(
        `https://api.lanyard.rest/v1/users/716322492586655795/kv/spotifyData`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: process.env.LANYARD_API_KEY as string,
            },
            body: req.body,
        },
    ).then((res) => res.body);

    return res.status(200).json(response);
};

export default handler;
