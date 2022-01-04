import { db } from '../../database/connection'

export type IShopItem = {
  id: number
  userId: number
  name: string
  price: number
  duration: number
  description: string
  productType: string
}

export const Product = {
  getAll: async (): Promise<IShopItem[]> => {
    const query = 'SELECT * FROM products;'
    const dbResult = await db.select(query)
    const shop = dbResult as IShopItem[]
    return shop
  },
  getByUserId: async (userId: number): Promise<IShopItem[]> => {
    const query = 'SELECT * FROM products WHERE user_id = ? ;'
    const dbResult = await db.select(query, [userId])
    const shopItems = dbResult as IShopItem[]
    return shopItems
  },
}
