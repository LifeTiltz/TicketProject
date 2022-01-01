import { db } from '../../database/connection'

export type INews = {
  id: number
  title: string
  content: string
  publish_date: number
}

export const News = {
  getAll: async (): Promise<INews[]> => {
    const query = 'SELECT * FROM news;'
    const dbResult = await db.select(query)
    const news = dbResult as INews[]
    return news
  },
}
