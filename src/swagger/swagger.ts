import swaggerAutogen from 'swagger-autogen';
import { CONFIG } from '../../config/config';

const doc = {
  info: {
    title: 'Twitter Clone API',
    description: 'Documentation for Twitter Clone API',
    version: '1.0.0',
  },
  host: `localhost:${CONFIG.PORT}`,
  schemes: ['http', 'https'],
  securityDefinitions: {
    bearerAuth: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
    },
  },
};

const outputFile = './swagger-output.json';
const routes = ['./src/presentation/routes/*.ts'];

swaggerAutogen()(outputFile, routes, doc);

import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import { Express } from 'express';

export const initializeSwagger = (app: Express) => {
  const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
      title: 'Twitter Clone API',
      version: '1.0.0',
      description: 'API documentation for the Twitter Clone application',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
        description: 'Development server',
      },
      // Add production server details here
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT',
        },
      },
    },
    security: [{ BearerAuth: [] }],
  };

  const options = {
    swaggerDefinition,
    apis: ['./src/routes/*.ts', './src/controllers/*.ts'], // Path to the API docs
  };

  const swaggerSpec = swaggerJSDoc(options);

  app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
