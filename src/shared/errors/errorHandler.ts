/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from 'express';
import { BaseError } from './BaseError';
import { ZodError } from 'zod';

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof BaseError) {
    res.status(err.status).json({ error: err.message });
  }

  if (err instanceof ZodError) {
    return res.status(403).json({
      error: {
        type: 'ValidationError',
        message: 'Bad request Invalid input data',
        details: err.errors,
      },
    });
  }

  if (err.name === 'PrismaClientInitializationError') {
    res.status(500).json({ error: 'Something went wrong' });
  }

  return res.status(500).json({
    error: {
      type: 'InternalError',
      message: 'An unexpected error occurred',
    },
  });
};
