import type { NextApiRequest, NextApiResponse } from "next";

import axios from "axios";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};

function getRequestParams(email: string) {
  // get env variables
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const LIST_ID = process.env.MAILCHIMP_AUDIENCE_KEY;

  const url = `https://us21.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  const data = {
    email_address: email,
    status: "subscribed",
  };

  const base64ApiKey = Buffer.from(`anystring:${API_KEY}`).toString("base64");
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Basic ${base64ApiKey}`,
  };

  return {
    url,
    data,
    headers,
  };
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;
  console.log(email);

  if (!email || !email.length) {
    return res.status(400).json({
      error: "Forgot to add your email?",
    });
  }

  try {
    const { url, data, headers } = getRequestParams(email);

    const response = await axios.post(url, data, { headers });
    console.log(response);

    return res.status(201).json({ error: null });
  } catch (error) {
    console.log(error);
    return res.status(400).json({
      error: `Oops, something went wrong...`,
    });
  }
};
