import { JWTAdapter } from '../../../../common/application';

export const createEmailVerificationToken = (
  email: string,
  jwtAdapter: JWTAdapter
): string => {
  return jwtAdapter.generateToken(
    { email, purpose: 'email-verification' },
    '24h' // Token expires in 24 hours
  );
};
