import { NextFunction, Request, Response } from 'express';
import { verifyAccessToken, verifyRefreshToken } from '../utils/verifyTokens';
import { getDBInstance, Database } from '../database/db';
import { User } from '../database/models/user';

export const jwtCheck = async (
  req: Request<never, never, never, never>,
  res: Response,
  next: NextFunction,
) => {
  const database: Database = await getDBInstance();
  const token = req.headers.authorization?.toString().split(' ')[1];

  if (!token)
    return res
      .status(403)
      .json({ message: 'Invalid token or missing headers!' });

  const payload: any = await verifyAccessToken(token?.toString());

  if (payload.message)
    return res.status(403).json({ message: payload.message });

  const user: User = await database.user.findOne({
    where: { id: payload?.id },
  });

  req.currentUser = user;

  next();
};
