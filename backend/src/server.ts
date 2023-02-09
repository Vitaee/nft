/* eslint-disable no-console */
import express, { Application, Request, Response } from 'express';
import configs from './utils/configuration';
import authRouter from './routes/auth';
import userRouter from './routes/user';

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set('trust proxy', true);

app.get('/', async (req: Request, res: Response): Promise<Response> => {
  return res.status(200).send({ message: 'App running well!' });
});

app.use('/auth', authRouter);
app.use('/user', userRouter);

if (process.env.NODE_ENV !== 'test') {
  app.listen(configs.port, () => {
    console.log(`Node app listening on port ${configs.port}`);
  });
}

export default app;
