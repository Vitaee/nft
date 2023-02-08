/* eslint-disable @typescript-eslint/ban-types */
import { Sequelize } from 'sequelize';
import { User } from '../database/models/user';
import { UserToken } from '../database/models/user_token';

export interface dbInterface {
  sequelize: Sequelize;
  authenticate: Function;
  associate: Function;
  user: User;
  userToken: UserToken;
}
