import express from 'express';
import { setupSecurity } from './common/infrastructure/middleware/security';

const app = express();
setupSecurity(app);
app.use(express.json());

app.use('/api/v1');

export default app;
