import express from 'express';
import pino from 'pino-http';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const PORT = Number(process.env.PORT) || 3000;

export const setupServer = () => {
  const app = express();

  app.use(express.json());
  app.use(cors());
  app.use(
    pino({
      transport: {
        target: 'pino-pretty',
      },
      options: {
        colorize: true,
      },
    }),
  );
  app.get('/', (req, res) => {
    res.json({
      message: 'Hello World',
    });
  });
  app.use('*', (req, res, next) => {
    res.status(404).json({
      message: 'Not found',
    });
    next();
  });
  app.use((err, req, res, next) => {
    res.status(500).json({
      message: 'Something went wrong!',
      error: err.message,
    });
    next();
  });

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
