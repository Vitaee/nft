/* eslint-disable no-console */
import express, { Application, Request, Response } from 'express';
import configs from './utils/configuration';
import authRouter from './routes/auth';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('trust proxy', true);

app.get('/', async (req: Request, res: Response) => {
  res.status(200).send({ message: 'Express app running well!' });
});

app.use('/user', authRouter);

app.listen(configs.port, () => {
  console.log(`Node app listening on port ${configs.port}`);
});

export default app;
