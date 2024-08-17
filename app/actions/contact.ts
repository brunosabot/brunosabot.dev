"use server";

type SMTPData = {
  sender: { name: string; email: string };
  to: { email: string; name: string }[];
  subject: string;
  htmlContent: string;
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
    sender: { name, email },
    to: [{ email: contactEmail, name: "Bruno Sabot" }],
    subject,
    htmlContent: message,
  });
}
