import { NextFunction, Request, Response } from 'express'
import { query } from '../../database/connection'
import HttpException from '../../exceptions/http-exception'

export const getSystemStatus = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const data = await query(`SELECT 1`).catch((error: string) =>
    next(new HttpException(500, error))
  )
  if (data) {
    res.json({
      db: true,
    })
  }
}
