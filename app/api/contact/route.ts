import { NextRequest } from "next/server";
import fetch from "node-fetch";

type SMTPData = {
  sender: { name: string; email: string };
  to: { email: string; name: string }[];
  subject: string;
  htmlContent: string;
};

type Body = {
  email: string;
  name: string;
  message: string;
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

export async function POST(request: NextRequest) {
  try {
    const contactEmail = process.env.NEXT_CONTACT_EMAIL;

    if (contactEmail === undefined) {
      throw new Error("CONTACT_EMAIL is not defined");
    }

    const jsonBody = (await request.json()) as Body;
    const { email = "", name = "", message = "" } = jsonBody;
    const subject = "Contact from brunosabot.dev";

    await sendMail({
      sender: { name, email },
      to: [{ email: contactEmail, name: "Bruno Sabot" }],
      subject,
      htmlContent: message,
    });

    return new Response('{ status: "OK" }', {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (e) {
    return new Response('{ status: "ERROR" }', {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
