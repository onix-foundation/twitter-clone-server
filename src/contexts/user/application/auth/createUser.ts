import {
  EncryptAdapter,
  EventEmitterInterface,
} from '../../../../common/application';
import { ConflictError } from '../../../../common/domain/errors/baseError';
import { EventTypes } from '../../../../common/domain/events/eventEmmiter';
import { User, UserInput, UserRepository } from '../../domain';

export const createUser = async (
  userData: UserInput,
  userRepository: UserRepository,
  encryptAdapter: EncryptAdapter,
  eventEmitter: EventEmitterInterface
): Promise<User> => {
  const existingUser = await userRepository.getUserByEmail(userData.email);
  if (existingUser) {
    throw new ConflictError('Email already registered');
  }

  const hashedPassword = await encryptAdapter.hash(userData.password);

  const user = await userRepository.createUser({
    ...userData,
    password: hashedPassword,
    emailVerified: false,
  });

  if (eventEmitter) {
    eventEmitter.emit(EventTypes.ACCOUNT_CREATED, {
      email: user.email,
      username: user.username,
    });
  }
  return user;
};
