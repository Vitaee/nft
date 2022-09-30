/* eslint-disable no-console */
import express, { Application, Request, Response } from 'express';
import mongoose from 'mongoose';

const app: Application = express();

const port = 3001;

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hello from typescript express!');
});

app.listen(port, () => {
  console.log(`Node app listening on port ${port}`);
});
