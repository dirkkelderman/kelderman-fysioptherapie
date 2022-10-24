import nodemailer from "nodemailer";
import { NextApiRequest, NextApiResponse } from "next";

const NODE_EMAIL = process.env.NODEMAILER_EMAIL;
const NODE_PASSWORD = process.env.NODEMAILER_PASSWORD;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: NODE_EMAIL,
      pass: NODE_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "info@keldermanfysiotherapie.nl",
      subject: `Contact form submission from ${name}`,
      html: `<p>You have a contact form submission</p><br>
        <p><strong>Email: </strong> ${email}</p><br>
        <p><strong>Message: </strong> ${message}</p><br>
      `,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: "" });
}
