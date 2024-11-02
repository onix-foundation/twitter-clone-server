import {
  EncryptAdapter,
  EventEmitterInterface,
} from '../../../common/application';
import { EventTypes } from '../../../common/domain/events/eventEmmiter';

import { User, UserInput, UserRepository } from '../domain';

export const createUser = async (
  userInput: UserInput,
  userRepository: UserRepository,
  encrypt: EncryptAdapter,
  eventEmitter?: EventEmitterInterface
): Promise<User> => {
  const { password } = userInput;
  const hashedPassword = await encrypt.hash(password);

  const newUser = await userRepository.createUser({
    ...userInput,
    password: hashedPassword,
  });

  if (eventEmitter) {
    eventEmitter.emit(EventTypes.ACCOUNT_CREATED, {
      email: newUser.email,
      username: newUser.username,
    });
  }

  return newUser;
};
