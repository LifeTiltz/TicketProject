import { Request, Response, NextFunction } from 'express'
import { newsService } from '../services/news-service'

export const newsController = {
  get: async (req: Request, res: Response, next: NextFunction) => {
    const news = await newsService.get()
    res.status(200).json({ news })
  },
}
