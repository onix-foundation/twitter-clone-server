import { Tweet } from '../../tweet';
import { User } from '../../user/domain';

export type Comment = {
  commentId: string;
  tweetId: string;
  userId: string;
  content: string;
  createdAt: Date;
  user: User;
  tweet: Tweet;
};
