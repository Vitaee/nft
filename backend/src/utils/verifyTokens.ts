/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserToken } from "../database/models/user_token";
import { Database, getDBInstance } from "../database/db";
import jwt from "jsonwebtoken";
import configs from "./configuration";

export const verifyAccessToken = async (accessToken: string | undefined): Promise<jwt.JwtPayload | string | undefined | {message: string}> => {
    try{
        const verifiedPayload = jwt.verify(accessToken!, configs.access_token_private_key);
        return verifiedPayload
    } catch (err) {
        return { message: 'Invalid token!' }
    }
}

export const verifyRefreshToken = async(refreshToken: string | undefined) => {
    const database: Database = await getDBInstance();
    const token: UserToken = await database.userToken.findOne({ where: { token: refreshToken }});

    if (!token) return { message: 'Invalid token!' }

    const verifyPayload = jwt.verify(refreshToken!, configs.refresh_token_private_key);

    if (verifyPayload){
        return verifyPayload
    }
}