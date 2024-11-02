import { Like } from './like.entity';

export interface LikeRepository {
  createLike(tweetId: string, userId: string): Promise<Like>;
  deleteLike(tweetId: string, userId: string): Promise<void>;
  getLikesByTweetId(tweetId: string): Promise<Like[]>;
  getLikesByUserId(userId: string): Promise<Like[]>;
  getLike(tweetId: string, userId: string): Promise<Like | null>;
}
