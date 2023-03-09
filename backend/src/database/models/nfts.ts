/* eslint-disable @typescript-eslint/no-unused-vars */
import { Model, DataTypes, Sequelize } from 'sequelize';

export class Nft extends Model {
  public price!: any;
  public description!: string;
  public ArtName!: string;
  public ArtistName!: string;
  public date!: string | any;
  public category!: string;
  public image!: string;
}

export async function initNft(sequelize: Sequelize) {
  sequelize.define(
    'nfts',
    {
      id: {
        type: new DataTypes.INTEGER(),
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      price: {
        type: new DataTypes.DECIMAL(),
        allowNull: false,
      },
      description: {
        type: new DataTypes.TEXT(),
        allowNull: true,
      },
      ArtName: {
        type: new DataTypes.STRING(256),
        allowNull: false,
      },
      ArtistName: {
        type: new DataTypes.STRING(256),
        allowNull: false,
      },
      date: {
        type: new DataTypes.DATE(),
        allowNull: false,
      },
      category: {
        type: new DataTypes.STRING(256),
        allowNull: false,
      },
      image: {
        type: new DataTypes.TEXT(),
        allowNull: false,
      },
    },
    {
      tableName: 'nfts',
      modelName: 'nfts',
      paranoid: true,
      timestamps: true,
      freezeTableName: true,
      underscored: true,
      indexes: [{ unique: true, fields: ['description'] }],
    },
  );
}
