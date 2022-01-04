import { Request, Response, NextFunction } from 'express'
import { ordersService } from '../services/orders-service'

export const ordersController = {
  get: async (req: Request, res: Response, next: NextFunction) => {
    const orders = await ordersService.get()
    res.status(200).json({ orders })
  },
}
