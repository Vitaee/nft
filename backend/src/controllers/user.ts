/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable prettier/prettier */
/* eslint-disable no-useless-catch */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Database, getDBInstance } from "../database/db";
import { Request, Response } from "express";

export const currentUser =  async (req: Request, res: Response): Promise<Response> => {    
    try {
        return res.status(200).json({
            user: req.currentUser,
            message: "Current user information"
        });

    } catch (err) { 
        return res.status(500).json({
            message: "An error accured try again later!"
        });
    }

};

export const updateUser = async (req: Request, res: Response): Promise<Response> => {
    const database: Database = await getDBInstance();

    

    return res.status(200).json({})
}

