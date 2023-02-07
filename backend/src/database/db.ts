/* eslint-disable no-console */
import * as pg from 'pg';
import { Sequelize } from 'sequelize';
import { dbInterface } from '../interfaces/dbinterface';
import configs from '../utils/configuration';

export class database implements dbInterface {
  sequelize: Sequelize;

  constructor() {
    this.sequelize = new Sequelize(
      configs.db_name || '',
      configs.db_user || '',
      configs.db_password,
      {
        host: configs.db_host,
        dialect: 'postgres',
        dialectModule: pg,
        logging: false,
      },
    );
  }

  async authenticate() {
    try {
      //Create associations

      //Sync DB
      await this.sequelize
        .sync({ force: false })
        .then(() => console.log('DB Connection established successfully.'))
        .catch((err: unknown) =>
          console.error(`DB Sequelize Connection Failed: ${err}`),
        );
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
  }
}

export const getDBInstance = async () => {
  const DB = new database();
  await DB.authenticate();
  return DB;
};
