/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response, ErrorRequestHandler } from 'express';
import { BaseError } from './BaseError';
import { ZodError } from 'zod';

export const errorHandler: ErrorRequestHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (err instanceof BaseError) {
    res.status(err.status).json({ error: err.message });
    return;
  }

  if (err instanceof ZodError) {
    res.status(403).json({
      error: {
        type: 'ValidationError',
        message: 'Bad request: Invalid input data',
        details: err.errors,
      },
    });
    return;
  }

  if (err.name === 'PrismaClientInitializationError') {
    res
      .status(500)
      .json({ error: 'Something went wrong with the database connection.' });
    return;
  }

  res.status(500).json({
    error: {
      type: 'InternalError',
      message: 'An unexpected error occurred.',
    },
  });
};
