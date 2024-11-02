import { Comment } from '../../comment/domain';
import { TweetsOnHashtag } from '../../hashtag/domain/hashtag.entity';
import { Like } from '../../like/domain';
import { Notification } from '../../notification/domain';
import { Poll } from '../../poll/domain';
import { User } from '../../user/domain';

export type Tweet = {
  tweetId: string;
  content: string;
  imageUrl?: string | null;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  user: User;
  likes?: Like[];
  comments?: Comment[];
  pollId?: string | null;
  poll?: Poll | null;
  notification?: Notification[];
  retweets?: Retweet[];
  hashtag?: TweetsOnHashtag[];
};

export type Retweet = {
  retweetId: string;
  tweetId: string;
  userId: string;
  createdAt: Date;
  tweet: Tweet;
  user: User;
};
export interface TweetInput {
  content: string;
  imageUrl?: string;
  userId: string;
}
