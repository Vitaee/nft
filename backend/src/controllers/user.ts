/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Database, getDBInstance } from "../database/db";
import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { User } from "../database/models/user";
import { verifyRefreshToken } from "../utils/verifyRefreshToken";

export const currentUser =  async (req: Request, res: Response): Promise<Response> => {
    
    try {
        const database: Database = await getDBInstance();

        const token = req.headers.Authorization?.toString().split(" ")[1]

        const payload = await verifyRefreshToken(token?.toString());

        const user: User = await database.user.findOne({ where: {id: payload}})

        return res.status(200).json({
            user,
            message: "Current user information"
        });

    } catch (err) { 
        return res.status(500).json({
            message: "An error accured try again later!"
        });
    }

};

