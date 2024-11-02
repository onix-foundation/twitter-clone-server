import jwt from 'jsonwebtoken';
import { JWTAdapter } from '../../application';

export const generateToken = (
  payload: object,
  secret: string,
  expiresIn: string = '1h'
): string => {
  return jwt.sign(payload, secret, { expiresIn });
};

export const verifyToken = (token: string, secret: string): object | string => {
  return jwt.verify(token, secret);
};

export const createJWTAdapter = (
  secret: string,
  expiresIn: string = '1h'
): JWTAdapter => {
  return {
    generateToken: (payload: object) =>
      generateToken(payload, secret, expiresIn),
    verifyToken: (token: string) => verifyToken(token, secret),
  };
};
