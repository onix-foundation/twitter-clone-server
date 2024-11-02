import { prisma } from '../../../database';
import { Tweet, TweetRepository, Tweets } from '../domain';

export const tweetPrismaRepository: TweetRepository = {
  save: async (tweet: Tweet): Promise<void> => {
    await prisma.tweet.create({
      data: {
        content: tweet.content,
        imageUrl: tweet.imageUrl,
        userId: tweet.userId,
      },
    });
  },
  delete: async (tweetId: Pick<Tweet, 'tweetId'>): Promise<void> => {
    await prisma.tweet.delete({
      where: {
        tweetId: tweetId.tweetId,
      },
    });
  },
  find: async (): Promise<Tweets[]> => {
    const tweet = await prisma.tweet.findMany({
      include: {
        user: {
          select: {
            username: true,
            imageUrl: true,
          },
        },
        likes: {
          select: {
            likeId: true,
            tweetId: true,
            userId: true,
            createdAt: true,
          },
        },
        comments: {
          select: {
            commentId: true,
            tweetId: true,
            userId: true,
            content: true,
            createdAt: true,
          },
        },
        poll: {
          select: {
            pollId: true,
            question: true,
            createdAt: true,
            expireAt: true,
            userId: true,
            user: {
              select: {
                username: true,
                imageUrl: true,
                email: true,
              },
            },
            options: {
              select: {
                pollOptionId: true,
                pollId: true,
                text: true,
                votes: {
                  select: {
                    pollVoteId: true,
                    pollOptionId: true,
                    userId: true,
                  },
                },
              },
            },
          },
        },
        retweets: {
          select: {
            retweetId: true,
            tweetId: true,
            userId: true,
            createdAt: true,
          },
        },
        hashtag: {
          select: {
            tweetId: true,
            hashtagId: true,
            hashtag: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
    return tweet;
  },
  findById: async (id: string): Promise<Tweets | null> => {
    const tweet = await prisma.tweet.findUnique({
      where: {
        tweetId: id,
      },
      include: {
        user: {
          select: {
            username: true,
            imageUrl: true,
          },
        },
        likes: {
          select: {
            likeId: true,
            tweetId: true,
            userId: true,
            createdAt: true,
          },
        },
        comments: {
          select: {
            commentId: true,
            tweetId: true,
            userId: true,
            content: true,
            createdAt: true,
          },
        },
        poll: {
          select: {
            pollId: true,
            question: true,
            createdAt: true,
            expireAt: true,
            userId: true,
            user: {
              select: {
                username: true,
                imageUrl: true,
                email: true,
              },
            },
            options: {
              select: {
                pollOptionId: true,
                pollId: true,
                text: true,
                votes: {
                  select: {
                    pollVoteId: true,
                    pollOptionId: true,
                    userId: true,
                  },
                },
              },
            },
          },
        },
        retweets: {
          select: {
            retweetId: true,
            tweetId: true,
            userId: true,
            createdAt: true,
          },
        },
        hashtag: {
          select: {
            tweetId: true,
            hashtagId: true,
            hashtag: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
    return tweet;
  },
  findByUserId: async (userId: string): Promise<Tweets[] | null> => {
    const tweet = await prisma.tweet.findMany({
      where: {
        userId: userId,
      },
      include: {
        user: {
          select: {
            username: true,
            imageUrl: true,
          },
        },
        likes: {
          select: {
            likeId: true,
            tweetId: true,
            userId: true,
            createdAt: true,
          },
        },
        comments: {
          select: {
            commentId: true,
            tweetId: true,
            userId: true,
            content: true,
            createdAt: true,
          },
        },
        poll: {
          select: {
            pollId: true,
            question: true,
            createdAt: true,
            expireAt: true,
            userId: true,
            user: {
              select: {
                username: true,
                imageUrl: true,
                email: true,
              },
            },
            options: {
              select: {
                pollOptionId: true,
                pollId: true,
                text: true,
                votes: {
                  select: {
                    pollVoteId: true,
                    pollOptionId: true,
                    userId: true,
                  },
                },
              },
            },
          },
        },
        retweets: {
          select: {
            retweetId: true,
            tweetId: true,
            userId: true,
            createdAt: true,
          },
        },
        hashtag: {
          select: {
            tweetId: true,
            hashtagId: true,
            hashtag: {
              select: {
                name: true,
              },
            },
          },
        },
      },
    });
    return tweet;
  },
  update: async (tweet: Partial<Tweet>) => {
    await prisma.tweet.update({
      where: {
        tweetId: tweet.tweetId,
      },
      data: {
        content: tweet.content,
        imageUrl: tweet.imageUrl,
      },
    });
  },
};
