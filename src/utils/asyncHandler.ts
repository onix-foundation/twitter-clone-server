/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from 'express';

type AsyncFunction = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void>;

export const asyncHandler =
  (fn: AsyncFunction) => (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch((err) => next(err));
  };