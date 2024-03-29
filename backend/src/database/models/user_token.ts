/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Model, DataTypes, Sequelize } from 'sequelize';

export class UserToken extends Model {
  public token?: string;
  public createdAt?: Date;
}

export async function initUserToken(sequelize: Sequelize) {
  sequelize.define(
    'userToken',
    {
      id: {
        type: new DataTypes.INTEGER(),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      token: {
          type: new DataTypes.STRING(256),
          allowNull: false
      },
    },
    {
        tableName: "user_token",
        modelName: "UserToken",
        paranoid: true,
        timestamps: true,
        freezeTableName: true,
        underscored: true
    },
  );
}

