export class BaseError extends Error {
  constructor(
    message: string,
    public errorType: string,
    public status: number,
    name = 'BaseError'
  ) {
    super(message);
    this.name = name;
    Error.captureStackTrace(this, this.constructor);
  }
}

export class AuthenticationError extends BaseError {
  constructor(message: string) {
    super(message, 'AuthenticationError', 401);
  }
}

export class ForbiddenError extends BaseError {
  constructor(message: string) {
    super(message, 'ForbiddenError', 403);
  }
}

export class NotFoundError extends BaseError {
  constructor(message: string) {
    super(message, 'NotFoundError', 404);
  }
}

export class ValidationError extends BaseError {
  constructor(message: string) {
    super(message, 'ValidationError', 400);
  }
}

export class ConflictError extends BaseError {
  constructor(message: string) {
    super(message, 'ConflictError', 409);
  }
}

export const errorTypes = {
  BAD_REQUEST: 'ValidationError',
  UNAUTHORIZED: 'AuthenticationError',
  FORBIDDEN: 'ForbiddenError',
  NOT_FOUND: 'NotFoundError',
  CONFLICT: 'ConflictError',
  INTERNAL: 'InternalError',
} as const;
