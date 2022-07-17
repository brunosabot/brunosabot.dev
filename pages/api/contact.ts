import type { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

type SMTPData = {
  sender: { name: string; email: string };
  to: { email: string; name: string }[];
  subject: string;
  htmlContent: string;
};

type Data = {
  status: string;
};

async function sendMail(sendSmtpEmail: SMTPData) {
  const apiKey = process.env.NEXT_SENDINBLUE_API_KEY;

  if (apiKey === undefined) {
    throw new Error("SENDINBLUE_API_KEY is not defined");
  }

  const res = await fetch("https://api.sendinblue.com/v3/smtp/email", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "api-key": apiKey,
    },
    body: JSON.stringify(sendSmtpEmail),
  });

  return res.json();
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  try {
    const contactEmail = process.env.NEXT_CONTACT_EMAIL;

    if (contactEmail === undefined) {
      throw new Error("CONTACT_EMAIL is not defined");
    }

    const { email = "", name = "", message = "" } = req.body;
    const subject = "Contact from brunosabot.dev";

    sendMail({
      sender: { name, email },
      to: [{ email: contactEmail, name: "Bruno Sabot" }],
      subject,
      htmlContent: message,
    });

    res.status(200).json({ status: "OK" });
  } catch (e) {
    res.status(500).json({ status: "ERROR" });
  }
}
