import { prisma } from '../../../database';
import { User, UserInput } from '../domain';

export const createUser = async (user: UserInput): Promise<User> => {
  return prisma.user.create({
    data: user,
  });
};

export const getUserByEmail = async (email: string): Promise<User | null> => {
  return prisma.user.findUnique({
    where: { email },
  });
};

export const getUserById = async (userId: string): Promise<User | null> => {
  return prisma.user.findUnique({
    where: { userId },
  });
};

export const updateUser = async (
  userId: string,
  data: Partial<UserInput>
): Promise<User> => {
  return prisma.user.update({
    where: { userId },
    data,
  });
};

export const followUser = async (
  followerId: string,
  followingId: string
): Promise<void> => {
  await prisma.follower.create({
    data: {
      followerId,
      followingId,
    },
  });
};

export const unfollowUser = async (
  followerId: string,
  followingId: string
): Promise<void> => {
  await prisma.follower.delete({
    where: {
      followerId_followingId: {
        followerId,
        followingId,
      },
    },
  });
};
export const getFollowers = async (userId: string): Promise<User[]> => {
  const followers = await prisma.follower.findMany({
    where: { followingId: userId },
    include: { follower: true },
  });
  return followers.map((f) => f.follower);
};

export const getFollowing = async (userId: string): Promise<User[]> => {
  const following = await prisma.follower.findMany({
    where: { followerId: userId },
    include: { following: true },
  });
  return following.map((f) => f.following);
};
