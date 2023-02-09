/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Model, DataTypes, Sequelize } from 'sequelize';

export class User extends Model {
  public id?: number;
  public username?: string;
  public email?: string;
  public password?: string;
}

export async function initUser(sequelize: Sequelize) {
  sequelize.define(
    'user',
    {
      id: {
        type: new DataTypes.INTEGER(),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      username: {
          type: new DataTypes.STRING(256),
          allowNull: false
          
      },
      email: {
          type: new DataTypes.STRING(256),
          allowNull: true
      },
      password: {
          type: new DataTypes.STRING(256),
          allowNull: false
      },
    },
    {
        tableName: "user",
        modelName: "User",
        paranoid: true,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        indexes: [ { unique: true, fields: ['username' , 'email'] } ]
    },
  );
}


