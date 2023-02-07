/* eslint-disable @typescript-eslint/ban-types */
import { Sequelize } from 'sequelize';

export interface dbInterface {
  // Sequelize ORM object
  sequelize: Sequelize;
  // Use this function to establish connection with DB
  authenticate: Function;
  // Models for this project
}
