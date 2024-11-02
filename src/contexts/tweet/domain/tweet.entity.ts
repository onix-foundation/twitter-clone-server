import { Comment } from '../../comment/domain';
import { Hashtag, TweetsOnHashtag } from '../../hashtag/domain/hashtag.entity';
import { Like } from '../../like/domain';
import { Notification } from '../../notification/domain';
import { Poll, PollOption, PollVote } from '../../poll/domain';
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

export type Tweets = {
  tweetId: string;
  content: string;
  imageUrl?: string | null;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
  user: Pick<User, 'username' | 'imageUrl'>;
  likes?: Pick<Like, 'likeId' | 'tweetId' | 'userId' | 'createdAt'>[];
  comments?: Pick<
    Comment,
    'commentId' | 'tweetId' | 'userId' | 'content' | 'createdAt'
  >[];
  pollId?: string | null;
  poll?:
    | (Pick<
        Poll,
        'pollId' | 'question' | 'createdAt' | 'expireAt' | 'userId'
      > & {
        user: Pick<User, 'username' | 'imageUrl' | 'email'>;
        options?: Array<
          Pick<PollOption, 'pollOptionId' | 'pollId' | 'text'> & {
            votes?: Array<
              Pick<PollVote, 'pollVoteId' | 'pollOptionId' | 'userId'>
            >;
          }
        >;
      })
    | null;
  retweets?: Pick<Retweet, 'retweetId' | 'tweetId' | 'userId' | 'createdAt'>[];
  hashtag?: Array<
    Pick<TweetsOnHashtag, 'tweetId' | 'hashtagId'> & {
      hashtag: Pick<Hashtag, 'name'>;
    }
  >;
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
