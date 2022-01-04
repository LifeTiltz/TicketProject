import { IOrder, Order } from '../models/Order'

export const ordersService = {
  get: async (): Promise<IOrder[]> => {
    return Order.getAll()
  },
}
