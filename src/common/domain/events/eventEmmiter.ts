export interface EventMap {
  accountCreated: { email: string; username: string };
  emailVerified: { email: string };
  oauthUserCreated: { email: string; username: string };
  passwordReset: { email: string };
  tweetCreated: { tweetId: string };
  tweetLiked: { tweetId: string; userId: string };
  tweetUnliked: { tweetId: string; userId: string };
  tweetRetweeted: { tweetId: string; userId: string };
  tweetUnretweeted: { tweetId: string; userId: string };
  commentCreated: { commentId: string };
  commentLiked: { commentId: string; userId: string };
  commentUnliked: { commentId: string; userId: string };
}
export const EventTypes = {
  ACCOUNT_CREATED: 'accountCreated',
  EMAIL_VERIFIED: 'emailVerified',
  OAUTH_USER_CREATED: 'oauthUserCreated',
  PASSWORD_RESET: 'passwordReset',
  TWEET_CREATED: 'tweetCreated',
  TWEET_LIKED: 'tweetLiked',
  TWEET_UNLIKED: 'tweetUnliked',
  TWEET_RETWEETED: 'tweetRetweeted',
  TWEET_UNRETWEETED: 'tweetUnretweeted',
  COMMENT_CREATED: 'commentCreated',
  COMMENT_LIKED: 'commentLiked',
  COMMENT_UNLIKED: 'commentUnliked',
} as const;
