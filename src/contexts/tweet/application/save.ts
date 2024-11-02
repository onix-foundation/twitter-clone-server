import { TweetRepository, Tweet } from '../domain';

export const save = async (
  tweetRepository: TweetRepository,
  tweet: Tweet
): Promise<void> => {
  await tweetRepository.save(tweet);
};
