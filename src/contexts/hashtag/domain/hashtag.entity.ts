import { Tweet } from '../../tweet';

export type Hashtag = {
  hashtagId: string;
  name: string;
  createdAt: Date;
  tweets?: TweetsOnHashtag[];
};

export type TweetsOnHashtag = {
  tweetId: string;
  hashtagId: string;
  tweet: Tweet;
  hashtag: Hashtag;
};
