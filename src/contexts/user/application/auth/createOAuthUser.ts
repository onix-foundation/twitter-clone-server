import { PrismaClient } from '@prisma/client';
import { User, UserRepository } from '../../domain';
import { EventEmitterInterface } from '../../../../common/application';
import { EventTypes } from '../../../../common/domain/events/eventEmmiter';

interface OAuthUserData {
  email: string;
  username: string;
  imageUrl?: string;
  provider: string;
}

export const createOAuthUser = async (
  userData: OAuthUserData,
  userRepository: UserRepository,
  prisma: PrismaClient,
  eventEmitter?: EventEmitterInterface
): Promise<User> => {
  return await prisma.$transaction(async (tx) => {
    try {
      const existingUser = await userRepository.getUserByEmail(userData.email);
      if (existingUser) {
        return existingUser;
      }

      // Create user with transaction
      const user = await userRepository.createUser(
        {
          email: userData.email,
          username: userData.username,
          password: '', // OAuth users don't need password
          imageUrl: userData.imageUrl,
          emailVerified: true, // OAuth users are pre-verified
        },
        tx
      );

      // Create OAuth profile with transaction
      await tx.oAuthProfile.create({
        data: {
          userId: user.userId,
          provider: userData.provider,
          providerId: userData.email,
        },
      });

      // Emit event after successful transaction
      if (eventEmitter) {
        eventEmitter.emit(EventTypes.ACCOUNT_CREATED, {
          email: user.email,
          username: user.username,
        });
      }
      return user;
    } catch (error) {
      throw new Error(`Failed to create OAuth user: ${error.message}`);
    }
  });
};
