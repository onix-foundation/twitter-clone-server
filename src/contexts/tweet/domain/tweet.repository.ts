import { Tweet, Tweets } from './tweet.entity';

export interface TweetRepository {
  save(tweet: Tweet): Promise<void>;
  delete(tweet: Pick<Tweet, 'tweetId'>): Promise<void>;
  find(): Promise<Tweets[]>;
  findById(id: string): Promise<Tweets | null>;
  findByUserId(userId: string): Promise<Tweets[] | null>;
  update(tweet: Partial<Tweet>): Promise<void>;
}
