import { User, UserInput, UserRepository } from '../domain';

export const updateUser = async (
  userId: string,
  data: Partial<UserInput>,
  userRepository: UserRepository
): Promise<User> => {
  return await userRepository.updateUser(userId, data);
};
