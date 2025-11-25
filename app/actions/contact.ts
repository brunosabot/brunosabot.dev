"use server";

type SMTPData = {
  htmlContent: string;
  sender: { email: string; name: string };
  subject: string;
  to: { email: string; name: string }[];
};

export async function sendContactEmail(
  email: string,
  name: string,
  message: string,
) {
  const contactEmail = process.env.NEXT_CONTACT_EMAIL;
  const subject = "Contact from brunosabot.dev";

  if (contactEmail === undefined) {
    throw new Error("CONTACT_EMAIL is not defined");
  }

  await sendMail({
    htmlContent: message,
    sender: { email, name },
    subject,
    to: [{ email: contactEmail, name: "Bruno Sabot" }],
  });
}

async function sendMail(sendSmtpEmail: SMTPData) {
  const apiKey = process.env.NEXT_SENDINBLUE_API_KEY;

  if (apiKey === undefined) {
    throw new Error("SENDINBLUE_API_KEY is not defined");
  }

  const res = await fetch("https://api.sendinblue.com/v3/smtp/email", {
    body: JSON.stringify(sendSmtpEmail),
    headers: {
      Accept: "application/json",
      "api-key": apiKey,
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  return res.json();
}
