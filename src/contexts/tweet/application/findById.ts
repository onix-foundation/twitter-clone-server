import { TweetRepository, Tweets } from '../domain';

export const findById = async (
  tweetRepository: TweetRepository,
  id: string
): Promise<Tweets | null> => {
  return await tweetRepository.findById(id);
};
