import { Tweet } from '../../tweet';
import { User } from '../../user/domain';

export type Poll = {
  pollId: string;
  question: string;
  createdAt: Date;
  expireAt?: Date | null;
  userId: string;
  user: User;
  options?: PollOption[];
  Tweet?: Tweet[];
};

export type PollOption = {
  pollOptionId: string;
  pollId: string;
  text: string;
  poll: Poll;
  votes?: PollVote[];
};

export type PollVote = {
  pollVoteId: string;
  pollOptionId: string;
  userId: string;
  user: User;
  pollOption: PollOption;
};
