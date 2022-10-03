/* eslint-disable no-console */
import express, { Application, Request, Response } from 'express';

const app: Application = express();

const port = 3001;

app.get('/', (req: Request, res: Response) => {
  res.status(200).send({ message: 'Express app running well!' });
});

app.listen(port, () => {
  console.log(`Node app listening on port ${port}`);
});

export default app;
