import Redis from 'ioredis';
import { CONFIG } from '../../../configuration/config';

export const createRedisClient = () => {
  const redis = new Redis({
    host: CONFIG.REDIS_HOST,
    port: CONFIG.REDIS_PORT,
    password: CONFIG.REDIS_PASSWORD,
  });

  redis.on('error', (err) => console.error('Redis Client Error', err));
  redis.on('connect', () => console.log('Redis Client Connected'));

  return redis;
};

export const getAsync = async (key: string): Promise<string | null> => {
  const redis = createRedisClient();
  const value = await redis.get(key);
  await redis.quit();
  return value;
};

export const setAsync = async (
  key: string,
  value: string,
  expireInSeconds?: number
): Promise<void> => {
  const redis = createRedisClient();
  if (expireInSeconds) {
    await redis.setex(key, expireInSeconds, value);
  } else {
    await redis.set(key, value);
  }
  await redis.quit();
};
