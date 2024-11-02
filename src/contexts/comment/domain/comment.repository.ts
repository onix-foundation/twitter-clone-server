import { Comment } from './comment.entity';

export interface CommentRepository {
  save(comment: Comment): Promise<void>;
  findById(id: string): Promise<Comment | null>;
  findByTweetId(tweetId: string): Promise<Comment[]>;
  deleteById(id: string): Promise<void>;
  deleteByTweetId(tweetId: string): Promise<void>;
}
