/* eslint-disable no-console */
import express, { Application, Request, Response } from 'express';
import configs from './utils/configuration';
import { getDBInstance } from './database/db';

const app: Application = express();

app.get('/', async (req: Request, res: Response) => {
  const db = await getDBInstance();
  console.log(db.sequelize);
  res.status(200).send({ message: 'Express app running well!' });
});

app.listen(configs.port, () => {
  console.log(`Node app listening on port ${configs.port}`);
});

export default app;
