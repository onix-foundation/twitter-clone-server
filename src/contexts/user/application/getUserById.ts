import { User, UserRepository } from '../domain';

export const getUserById = async (
  userId: string,
  userRepository: UserRepository
): Promise<User | null> => {
  return await userRepository.getUserById(userId);
};
