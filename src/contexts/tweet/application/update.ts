import { Tweet, TweetRepository } from '../domain';

export const update = async (
  tweetRepository: TweetRepository,
  tweet: Partial<Tweet>
): Promise<void> => {
  return await tweetRepository.update(tweet);
};
