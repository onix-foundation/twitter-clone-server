/* eslint-disable @typescript-eslint/no-unused-vars */
import { NextFunction, Request, Response } from "express";
import { BaseError } from "./BaseError";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  _next: NextFunction,
) => {

  if (err instanceof BaseError) {
    res.status(err.status).json({ error: err.message });
  }
  if (err.name === "PrismaClientInitializationError") {
    res.status(500).json({ error: "Something went wrong" });
  }

  res.status(500).json({ error: err.message });
};
