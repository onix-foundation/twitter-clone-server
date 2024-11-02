import { EncryptAdapter, JWTAdapter } from '../../../common/application';
import { UserRepository } from '../domain';

export const loginUser = async (
  email: string,
  password: string,
  userRepository: UserRepository,
  encrypt: EncryptAdapter,
  jwt: JWTAdapter
): Promise<string> => {
  const user = await userRepository.getUserByEmail(email);
  if (!user) {
    throw new Error('Invalid credentials');
  }

  const isPasswordValid = await encrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid credentials');
  }

  const token = jwt.generateToken({ userId: user.userId, email: user.email });
  return token;
};
