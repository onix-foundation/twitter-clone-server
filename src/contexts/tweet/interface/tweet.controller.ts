import { Request, Response } from 'express';
import { tweetPrismaRepository } from '../infrastructure/tweet.prisma.repository';
import * as tweetService from '../application';

const repository = tweetPrismaRepository;

export const save = async (req: Request, res: Response) => {
  try {
    const tweet = req.body;
    await tweetService.save(repository, tweet);
    res.status(200).json({ message: 'Tweet saved successfully' });
  } catch (error) {
    throw new Error(`Unnable to save tweet: ${error}`);
  }
};

export const deleteTweet = async (req: Request, res: Response) => {
  try {
    const tweetId = req.params.tweetId;
    await tweetService.delet(repository, { tweetId });
    res.status(200).json({ message: 'Tweet deleted successfully' });
  } catch (error) {
    throw new Error(`Unnable to delete tweet: ${error}`);
  }
};

export const find = async (req: Request, res: Response) => {
  try {
    const tweets = await tweetService.find(repository);
    res.status(200).json(tweets);
  } catch (error) {
    throw new Error(`Unnable to find tweets: ${error}`);
  }
};

export const findById = async (req: Request, res: Response) => {
  try {
    const tweetId = req.params.tweetId;
    const tweet = await tweetService.findById(repository, tweetId);
    res.status(200).json(tweet);
  } catch (error) {
    throw new Error(`Unnable to find tweet by id: ${error}`);
  }
};

export const findByUserId = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const tweets = await tweetService.findByUserId(repository, userId);
    res.status(200).json(tweets);
  } catch (error) {
    throw new Error(`Unnable to find tweets by user id: ${error}`);
  }
};

export const update = async (req: Request, res: Response) => {
  try {
    const tweet = req.body;
    await tweetService.update(repository, tweet);
    res.status(200).json({ message: 'Tweet updated successfully' });
  } catch (error) {
    throw new Error(`Unnable to update tweet: ${error}`);
  }
};
