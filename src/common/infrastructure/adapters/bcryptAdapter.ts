import bcrypt from 'bcrypt';
import { EncryptAdapter } from '../../application';

export const hash = async (
  password: string,
  saltRounds: number = 10
): Promise<string> => {
  return bcrypt.hash(password, saltRounds);
};

export const compare = async (
  password: string,
  hashPassword: string
): Promise<boolean> => {
  return bcrypt.compare(password, hashPassword);
};

export const createBcryptAdapter = (
  saltRounds: number = 10
): EncryptAdapter => {
  return {
    hash: (password: string) => hash(password, saltRounds),
    compare: (password: string, hash: string) => compare(password, hash),
  };
};
