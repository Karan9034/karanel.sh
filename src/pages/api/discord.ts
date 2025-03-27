import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const response = await fetch(
        `https://api.lanyard.rest/v1/users/716322492586655795`,
    ).then((res) => res.json());

    return res.status(200).json(response);
};

export default handler;
