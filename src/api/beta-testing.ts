import type { NextApiRequest, NextApiResponse } from "next";

import axios from "axios";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "1mb",
    },
  },
};

interface IRequestParams {
  email: string;
  fname: string;
  lname: string;
  deviceType: string;
}

function getRequestParams({ email, lname, fname, deviceType }: IRequestParams) {
  // get env variables
  const API_KEY = process.env.MAILCHIMP_API_KEY;
  const LIST_ID = process.env.MAILCHIMP_AUDIENCE_KEY;

  const url = `https://us21.api.mailchimp.com/3.0/lists/${LIST_ID}/members`;

  const data = {
    email_address: email,
    tags: [deviceType],
    merge_fields: {
      FNAME: `${fname}`,
      LNAME: `${lname}`,
    },
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
  const { email, fname, lname, deviceType } = req.body;
  console.log(email);

  if (!email || !email.length) {
    return res.status(400).json({
      error: "Forgot to add your email?",
    });
  }

  if (!fname || !lname) {
    return res.status(400).json({
      error: "Invalid Input",
    });
  }
  if (!deviceType) {
    return res.status(400).json({
      error: "Must input a device type",
    });
  }

  try {
    const { url, data, headers } = getRequestParams({
      email,
      fname,
      lname,
      deviceType,
    });

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
