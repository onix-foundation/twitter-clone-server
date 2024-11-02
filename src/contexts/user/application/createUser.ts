import {
  EncryptAdapter,
  EventEmitterInterface,
} from '../../../common/application';

import { User, UserInput, UserRepository } from '../domain';

export const createUser = async (
  userInput: UserInput,
  userRepository: UserRepository,
  encrypt: EncryptAdapter,
  eventEmitter?: EventEmitterInterface //TODO: Define the type of eventEmitter
): Promise<User> => {
  const { password } = userInput;
  const hashedPassword = await encrypt.hash(password);

  const newUser = await userRepository.createUser({
    ...userInput,
    password: hashedPassword,
  });

  // Emit an event after account creation
  if (eventEmitter) {
    eventEmitter.emit('accountCreated', {
      email: newUser.email,
      username: newUser.username,
    });
  }

  return newUser;
};
