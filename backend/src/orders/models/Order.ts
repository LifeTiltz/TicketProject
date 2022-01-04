import { db } from '../../database/connection'

export type IOrder = {
  id: number
  status: string
  orderDate: number
  productName: string
  productPrice: number
}

export const Order = {
  getAll: async (): Promise<IOrder[]> => {
    const query = 'SELECT * FROM orders;'
    const dbResult = await db.select(query)
    const orders = dbResult as IOrder[]
    return orders
  },
}
