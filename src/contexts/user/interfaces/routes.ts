import { Router } from 'express';
import {
  getUserByEmail,
  getUserById,
  updateUser,
} from './user.controller';

const router = Router();

router.put('/:userId/update', updateUser);
router.get('/byemail/:email', getUserByEmail);
router.get('/byid/:userId', getUserById);

export default router;
