import helmet from 'helmet';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import session from 'express-session';
import RedisStore from 'connect-redis';
import { Express } from 'express';

import { createRedisClient } from '../cache/redisClient';
import { CONFIG } from '../../../configuration/config';

export const setupSecurity = (app: Express) => {
  const redis = createRedisClient();

  // Basic security headers
  app.use(helmet());

  // CORS
  app.use(
    cors({
      origin: CONFIG.CORS_ORIGIN,
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
      allowedHeaders: ['Content-Type', 'Authorization'],
    })
  );

  // Rate limiting
  app.use(
    rateLimit({
      windowMs: CONFIG.RATE_LIMIT_WINDOW,
      max: CONFIG.RATE_LIMIT_MAX,
      message: 'Too many requests from this IP, please try again later.',
    })
  );

  // Session management with Redis
  app.use(
    session({
      store: new RedisStore({ client: redis }),
      secret: CONFIG.SESSION_SECRET,
      resave: false,
      saveUninitialized: false,
      cookie: {
        secure: CONFIG.NODE_ENV === 'production',
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000, // 24 hours
      },
    })
  );

  // Additional security measures
  app.disable('x-powered-by');
  app.use(helmet.noSniff());
  app.use(helmet.xssFilter());
  app.use(helmet.frameguard({ action: 'deny' }));
};
