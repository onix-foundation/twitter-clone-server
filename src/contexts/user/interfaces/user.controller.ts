import { Request, Response } from 'express';
import * as userService from '../application';
import { UserInput, UserRepository } from '../domain';
import { userPrismaRepository } from '../infrastructure/user.prisma.repository';

const repository: UserRepository = userPrismaRepository;

export const getUserByEmail = async (req: Request, res: Response) => {
  try {
    const { email } = req.params;
    const user = await userService.getUserByEmail(email, repository);
    if (!user) {
      throw new Error('User not found');
    }
    res.status(200).json({ user });
  } catch (error) {
    throw new Error(`Error retrieving user by email: ${error}`);
  }
};

export const getUserById = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user = await userService.getUserById(userId, repository);
    if (!user) {
      throw new Error('User not found');
    }
    res.status(200).json({ user });
  } catch (error) {
    throw new Error(`Error retrieving user by ID: ${error}`);
  }
};

export const updateUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const body: UserInput = req.body;
    const updatedUser = await userService.updateUser(userId, body, repository);
    res.status(200).json({ user: updatedUser });
  } catch (error) {
    throw new Error(`Error updating user: ${error}`);
  }
};
