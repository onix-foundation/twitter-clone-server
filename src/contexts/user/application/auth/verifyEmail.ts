import {
  EventEmitterInterface,
  JWTAdapter,
} from '../../../../common/application';
import { EventTypes } from '../../../../common/domain/events/eventEmmiter';
import { AuthenticationError } from '../../../../shared/errors/AuthenticationError';
import { UserRepository } from '../../domain';

export const verifyEmail = async (
  token: string,
  jwtAdapter: JWTAdapter,
  userRepository: UserRepository,
  eventEmitter: EventEmitterInterface
): Promise<void> => {
  try {
    const payload = jwtAdapter.verifyToken(token) as {
      email: string;
      purpose: string;
    };

    if (payload.purpose !== 'email-verification') {
      throw new AuthenticationError('Invalid verification token');
    }

    const user = await userRepository.getUserByEmail(payload.email);
    if (!user) {
      throw new AuthenticationError('User not found');
    }

    await userRepository.updateUser(user.userId, { emailVerified: true });

    eventEmitter.emit(EventTypes.EMAIL_VERIFIED, user);
  } catch (error) {
    if (error instanceof Error) {
      throw new AuthenticationError(
        `Invalid or expired verification token: ${error.message}`
      );
    }
  }
};
