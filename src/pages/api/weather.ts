import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=Bengaluru&aqi=no`,
    ).then((res) => res.json());

    return res.status(200).json(response);
};

export default handler;
