import { MailerAdapter } from '../../../../common/application';
import { CONFIG } from '../../../../configuration/config';
import { User } from '../../domain';

export const sendVerificationEmail = async (
  user: User,
  token: string,
  mailerAdapter: MailerAdapter
): Promise<void> => {
  const verificationLink = `${CONFIG.API_URL}/api/auth/verify-email?token=${token}`;

  const html = `
    <h1>Welcome to Twitter Clone!</h1>
    <p>Hi ${user.username},</p>
    <p>Please verify your email address by clicking the link below:</p>
    <a href="${verificationLink}">Verify Email</a>
    <p>This link will expire in 24 hours.</p>
    <p>If you didn't create an account, please ignore this email.</p>
  `;

  await mailerAdapter.sendMail(user.email, 'Verify your email address', html);
};
