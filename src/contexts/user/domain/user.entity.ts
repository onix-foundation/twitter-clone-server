import { Comment } from '../../comment/domain';
import { Like } from '../../like';
import { Notification } from '../../notification/domain';
import { Poll, PollVote } from '../../poll/domain';
import { Retweet, Tweet } from '../../tweet';

export type User = {
  userId: string;
  username: string;
  email: string;
  emailVerified: boolean;
  password: string;
  imageUrl?: string | null;
  bio?: string | null;
  createdAt: Date;
  updatedAt: Date;
  tweets?: Tweet[];
  likes?: Like[];
  comments?: Comment[];
  followers?: Follower[];
  following?: Follower[];
  polls?: Poll[];
  pollVote?: PollVote[];
  notificationsReceived?: Notification[];
  notificationsTriggered?: Notification[];
  retweets?: Retweet[];
};

export type Follower = {
  followId: string;
  followerId: string;
  followingId: string;
  createdAt: Date;
  follower: User;
  following: User;
};

export interface UserInput {
  email: string;
  emailVerified?: boolean;
  password: string;
  username?: string;
  imageUrl?: string;
  bio?: string;
}
