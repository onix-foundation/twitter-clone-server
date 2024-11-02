import { TweetRepository, Tweets } from '../domain';

export const find = async (
  tweetRepository: TweetRepository
): Promise<Tweets[]> => {
  return await tweetRepository.find();
};
