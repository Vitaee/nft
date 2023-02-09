import { Request, Response } from 'express';
import configs from '../utils/configuration';
import jwt from 'jsonwebtoken';
import { verifyRefreshToken } from '../utils/verifyTokens';
import { Database, getDBInstance } from '../database/db';
import { User } from '../database/models/user';

export const currentUser = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  try {
    return res.status(200).json({
      user: req.currentUser,
      message: 'Current user information',
    });
  } catch (err) {
    return res.status(500).json({
      message: 'An error accured try again later!',
    });
  }
};

export const updateUser = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  await req.currentUser?.update({ ...req.body });

  return res.status(200).json({ message: 'User informations updated!' });
};

export const refreshAccessToken = async (
  req: Request,
  res: Response,
): Promise<Response> => {
  const verifyToken: any = await verifyRefreshToken(
    req.headers.refreshtoken?.toString().split(' ')[1],
  );

  const database: Database = await getDBInstance();

  const findUser: User = await database.user.findOne({
    where: { id: verifyToken.id },
  });

  const accessToken = jwt.sign(
    { id: findUser.id },
    configs.access_token_private_key,
    {
      expiresIn: '30m',
    },
  );

  return res.status(200).json({ accessToken });
};
