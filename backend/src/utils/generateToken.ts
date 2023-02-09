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

    const accessToken = jwt.sign(payload, configs.access_token_private_key, { expiresIn: "1m" });

    const refreshToken = jwt.sign(payload, configs.refresh_token_private_key, { expiresIn: "7d" });

    const checkDbToken: UserToken = await database.userToken.findOne({ where: { fk_userid: user.id } });

    if (checkDbToken) {
        await database.userToken.destroy({
            where: { 
                fk_userid: user.id,
            }
        });
    }
    
    
    await database.userToken.create({ ...{token: refreshToken, fk_userid: user.id },  })

    return { accessToken, refreshToken }
  } catch (err) {
    throw err;
  }
};
