import { Tweet } from './tweet.entity';

export interface TweetRepository {
  save(tweet: Tweet): Promise<void>;
  delete(tweet: Tweet): Promise<void>;
  find(): Promise<Tweet[]>;
  findById(id: string): Promise<Tweet | null>;
  findByUserId(userId: string): Promise<Tweet[]>;
  update(tweet: Tweet): Promise<void>;
}
