/* eslint-disable no-console */
import express, { Application, Request, Response } from 'express';
import configs from './utils/configuration';

const app: Application = express();

const port = configs.port;

app.get('/', (req: Request, res: Response) => {
  res.status(200).send({ message: 'Express app running well!' });
});

app.listen(port, () => {
  console.log(`Node app listening on port ${port}`);
});

export default app;
