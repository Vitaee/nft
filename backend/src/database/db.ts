/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import * as pg from 'pg';
import { Sequelize } from 'sequelize';
import { dbInterface } from '../interfaces/dbinterface';
import configs from '../utils/configuration';
import { initUser } from './models/user';
import { initUserToken } from './models/user_token';

export class database implements dbInterface {
  sequelize: Sequelize;
  user: any;
  userToken: any;

  constructor() {
    this.sequelize = new Sequelize(
      configs.db_name || '',
      configs.db_user || '',
      configs.db_password || '',
      {
        host: configs.db_host || '',
        dialect: 'postgres',
        dialectModule: pg,
        logging: false,
      },
    );

    initUser(this.sequelize);
    initUserToken(this.sequelize);
    this.user = this.sequelize.models.user;
    this.userToken = this.sequelize.models.userToken;
  }

  async associate() {
    this.userToken.belongsTo(this.user, { through: 'userToken' });
  }

  async authenticate() {
    try {
      //Create associations
      await this.associate();
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
