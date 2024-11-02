import { TweetRepository, Tweets } from '../domain';

export const findByUserId = async (
  tweetRepository: TweetRepository,
  userId: string
): Promise<Tweets[] | null> => {
  return await tweetRepository.findByUserId(userId);
};
