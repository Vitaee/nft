/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { UserToken } from "../database/models/user_token";
import { database, getDBInstance } from "../database/db";
import jwt from "jsonwebtoken";
import configs from "./configuration";

export const verifyRefreshToken = async (refreshToken: string) => {
    const database: database = await getDBInstance();

    const token = database.userToken.findOne({ where: { token: refreshToken }});
    
    if (!token) return {message: 'Invalid token!'}

    const verifiedToken = jwt.verify(refreshToken, configs.refresh_token_private_key);
    
    if (verifiedToken){
        return {verifiedToken, message: "Valid refresh token!" }
    }
}