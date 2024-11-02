export interface MailerAdapter {
  sendMail(to: string, subject: string, html: string): Promise<void>;
}
