import express from 'express';
import { setupSecurity } from './common/infrastructure/middleware/security';
import { errorHandler } from './shared/errors/errorHandler';
import tweet from './contexts/tweet/interface/tweet.routes';

const app = express();
setupSecurity(app);
app.use(express.json());

app.use(tweet);

// app.use('/api/v1');

app.use(errorHandler);
export { app };
