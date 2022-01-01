import { INews, News } from '../models/News'

export const newsService = {
  get: async (): Promise<INews[]> => {
    return News.getAll()
  },
}
