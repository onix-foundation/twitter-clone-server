import http from 'node:http';
import { app } from './app';
import { CONFIG } from './configuration/config';

const server = http.createServer(app);
console.log(`port ${CONFIG.PORT}`);

server.listen(CONFIG.PORT, () => {
  console.log(`Server is running on http://localhost:${CONFIG.PORT}`);
});
