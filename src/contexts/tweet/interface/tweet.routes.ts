import { Router } from 'express';
import {
  save,
  deleteTweet,
  find,
  findById,
  findByUserId,
  update,
} from './tweet.controller';

const router = Router();

router.post('/create-tweet', save);
router.delete('/delete-tweet/:tweetId', deleteTweet);
router.get('/tweets', find);
router.get('/tweet/:tweetId', findById);
router.get('/tweets/:userId', findByUserId);
router.patch('/tweet-update', update);

export default router;
