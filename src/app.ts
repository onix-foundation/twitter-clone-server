import express from 'express';
import { setupSecurity } from './common/infrastructure/middleware/security';
import { errorHandler } from './shared/errors/errorHandler';

const app = express();
setupSecurity(app);
app.use(express.json());

// app.use('/api/v1');

app.use(errorHandler);
export { app };
