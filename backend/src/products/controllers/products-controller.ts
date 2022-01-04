import { Request, Response, NextFunction } from 'express';
import { productsService } from '../services/products-service';

export const productsController = {
  get: async (req: Request, res: Response, next: NextFunction) => {
    const products = await productsService.get();
    res.status(200).json({ products });
  },
  getById: async (
    req: Request<{ userId: number }>,
    res: Response,
    next: NextFunction
  ) => {
    const products = await productsService.getById(req.params.userId);
    res.status(200).json({ products });
  },
};
