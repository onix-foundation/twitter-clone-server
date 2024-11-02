import { EncryptAdapter, JWTAdapter } from '../../../../common/application';
import { AuthenticationError } from '../../../../shared/errors/AuthenticationError';
import { UserRepository } from '../../domain';

export const loginUser = async (
  email: string,
  password: string,
  userRepository: UserRepository,
  encryptAdapter: EncryptAdapter,
  jwtAdapter: JWTAdapter
): Promise<{ token: string; email: string }> => {
  const user = await userRepository.getUserByEmail(email);
  if (!user) {
    throw new AuthenticationError('Invalid email or password');
  }

  const isValid = await encryptAdapter.compare(password, user.password);
  if (!isValid) {
    throw new AuthenticationError('Invalid email or password');
  }

  const token = jwtAdapter.generateToken({ email: user.email });

  return { token, email: user.email };
};
