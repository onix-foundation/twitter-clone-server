import { config } from 'dotenv';
config();

export const envVariables = {
  server: {
    port: process.env.PORT || 3000,
  },
};
