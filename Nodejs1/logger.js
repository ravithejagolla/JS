import fs from 'fs';
import path from 'path';

const logStream = fs.createWriteStream(path.join('logs', 'requests.log'), { flags: 'a' });

export function requestLogger(req, res, next) {
  const start = Date.now();
  res.on('finish', () => {
    const duration = Date.now() - start;
    const log = `[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms\n`;
    logStream.write(log);
  });
  next();
}
