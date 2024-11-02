import { Tweet } from '../../tweet/domain';
import { User } from '../../user/domain';

export type Like = {
  likeId: string;
  tweetId: string;
  userId: string;
  createdAt: Date;
  tweet: Tweet;
  user: User;
};
