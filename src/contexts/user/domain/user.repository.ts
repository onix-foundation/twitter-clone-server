import { User, UserInput } from './user.entity';

export interface UserRepository {
  createUser(user: UserInput): Promise<User>;
  getUserByEmail(email: string): Promise<User | null>;
  getUserById(userId: string): Promise<User | null>;
  updateUser(userId: string, data: Partial<UserInput>): Promise<User>;
  followUser(followerId: string, followingId: string): Promise<void>;
  unfollowUser(followerId: string, followingId: string): Promise<void>;
  getFollowers(userId: string): Promise<User[]>;
  getFollowing(userId: string): Promise<User[]>;
}
