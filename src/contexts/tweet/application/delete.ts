import { Tweet, TweetRepository } from '../domain';

export const delet = async (
  tweetRepository: TweetRepository,
  tweetId: Pick<Tweet, 'tweetId'>
): Promise<void> => {
  await tweetRepository.delete(tweetId);
};
