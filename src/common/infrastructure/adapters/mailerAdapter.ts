import nodemailer from 'nodemailer';
import { MailerAdapter } from '../../application';

export const sendMail = async (
  to: string,
  subject: string,
  html: string
): Promise<void> => {
  const transporter = nodemailer.createTransport({
    // Configure your SMTP settings
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Twitter Clone" <${process.env.SMTP_FROM}>`,
    to,
    subject,
    html,
  });
};

export const createMailerAdapter = (): MailerAdapter => {
  return {
    sendMail,
  };
};
