/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserToken } from "../database/models/user_token";
import { Database, getDBInstance } from "../database/db";
import jwt from "jsonwebtoken";
import configs from "./configuration";

export const verifyRefreshToken = async (refreshToken: string | undefined): Promise<jwt.JwtPayload | string | undefined | {message: string}> => {
    const database: Database = await getDBInstance();

    const token: UserToken = await database.userToken.findOne({ where: { token: refreshToken }});
    
    if (!token) return {message: 'Invalid token!'}

    const verifiedPayload = jwt.verify(refreshToken!, configs.refresh_token_private_key);
    
    if (verifiedPayload){
        return verifiedPayload
    }
}