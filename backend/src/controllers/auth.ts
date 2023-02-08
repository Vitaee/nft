/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { database, getDBInstance } from "../database/db";
import bcrypt from "bcrypt";
import { generateTokens } from "../utils/generateToken";
import { Request, Response } from "express";


export const userRegister =  async (req: Request, res: Response) => {
    
    try {
        const database: database = await getDBInstance();

        const salt = await bcrypt.genSalt(Number(10));

        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        
        const user = await database.user.create({ ...{ username: "can", email: "can@gmail.com", password:hashedPassword } })

        const { accessToken, refreshToken } = await generateTokens(user);

        res.status(200).json({
            accessToken,
            refreshToken,
            message: "Registered successfully!"
        });

    } catch (err) { 
        res.status(500).json({
            message: "An error accured try again later!"
        });
    }

};
