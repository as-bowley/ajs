// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

type Data = {
  status: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const body = JSON.parse(req.body);

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Number: ${body.number}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: "jim@ajsautoelectrical.co.uk",
    from: "contact@ajsautoelectrical.co.uk",
    subject: "New contact form message!",
    text: message,
    html: message.replace(/\r\n/g, "<br>"),
  };

  mail.send(data);

  res.status(200).json({ status: "ok" });
}
