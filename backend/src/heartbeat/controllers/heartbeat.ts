import { NextFunction, Request, Response } from 'express'

import HttpException from '../../exceptions/http-exception'
import { db } from '../../database/connection'

export const getSystemStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const data = await db
    .select(`SELECT 1`)
    .catch(error => next(new HttpException(500, error)))
  if (data) {
    res.json({
      db: true,
    })
  }
}
