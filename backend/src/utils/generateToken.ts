/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-unused-vars */
import jwt from 'jsonwebtoken';
import { UserToken } from '../database/models/user_token';
import configs from './configuration';
import { Database, getDBInstance } from '../database/db';
import { User } from '../database/models/user';

export const generateTokens = async (user: User): Promise<{accessToken:string, refreshToken:string}> =>  {
  try {

    const database: Database = await getDBInstance();

    const payload = { id: user.id };

    const accessToken = jwt.sign(payload, configs.access_token_private_key, { expiresIn: "30d" });

    const refreshToken = jwt.sign(payload, configs.refresh_token_private_key, { expiresIn: "30d" });

    const userToken: UserToken = await database.userToken.findOne({ where: { userId: user.id } });
    
    if (userToken) {
        await database.userToken.destroy({
            where: { 
                userId: user.id,
            }
        });
    }
    
    
    await database.userToken.create({ ...{userId: user.id, token: refreshToken } })

    return { accessToken, refreshToken }
  } catch (err) {
    throw err;
  }
};
