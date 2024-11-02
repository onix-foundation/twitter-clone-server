import swaggerAutogen from 'swagger-autogen';
// import { CONFIG } from '../../config/config';
import { CONFIG } from '../../src/configuration/config';
const doc = {
  info: {
    title: 'Twitter Clone API',
    description: 'REST API for Twitter Clone application',
    version: '1.0.0',
  },
  host: `localhost:${CONFIG.PORT}`,
  basePath: '/api',
  schemes: ['http', 'https'],
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
    },
  },
  definitions: {
    User: {
      userId: 'string',
      username: 'string',
      email: 'string',
      imageUrl: 'string?',
      bio: 'string?',
      createdAt: 'string',
      updatedAt: 'string',
    },
    Tweet: {
      tweetId: 'string',
      content: 'string',
      imageUrl: 'string?',
      createdAt: 'string',
      updatedAt: 'string',
      userId: 'string',
    },
    Comment: {
      commentId: 'string',
      content: 'string',
      tweetId: 'string',
      userId: 'string',
      createdAt: 'string',
    },
    Notification: {
      notificationId: 'string',
      type: 'string',
      message: 'string',
      userId: 'string',
      fromUserId: 'string?',
      tweetId: 'string?',
      read: 'boolean',
      createdAt: 'string',
    },
  },
};

const outputFile = './swagger-output.json';
const routes = ['./src/presentation/routes/*.ts'];

export const generateSwaggerDocs = () =>
  swaggerAutogen()(outputFile, routes, doc);
