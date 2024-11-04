import { User, UserRepository } from '../domain';

export const getUserByEmail = async (
  email: string,
  userRepository: UserRepository
): Promise<User | null> => {
  return await userRepository.getUserByEmail(email);
};
