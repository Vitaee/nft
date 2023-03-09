/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Database, getDBInstance } from '../database/db';
import bcrypt from 'bcrypt';
import { generateTokens } from '../utils/generateToken';
import { Request, Response } from 'express';
import { User } from '../database/models/user';

export const userRegister = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const database: Database = await getDBInstance();

    const salt = await bcrypt.genSalt(Number(10));

    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    const user: User = await database.user.create({
      ...{
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
      },
    });

    const { accessToken, refreshToken } = await generateTokens(user);

    return res.status(200).json({
      accessToken,
      refreshToken,
      message: 'Registered successfully!',
    });
  } catch (err) {
    return res.status(500).json({
      message: 'An error accured try again later!',
    });
  }
};

export const userLogin = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    const database: Database = await getDBInstance();

    const user: User = await database.user.findOne({
      where: { email: req.body.email },
    });

    if (!user) {
      return res
        .status(404)
        .json({ message: 'Password or email is incorrect!' });
    }

    const match = await bcrypt.compare(req.body.password, user.password!);

    if (match) {
      const { accessToken, refreshToken } = await generateTokens(user);

      return res.status(200).json({
        accessToken,
        refreshToken,
        message: 'Login successfully!',
      });
    }

    return res.status(404).json({ message: 'Password or email is incorrect!' });
  } catch (err) {
    return res.status(500).json({
      message: 'An error accured try again later!',
    });
  }
};
