import { IShopItem, Product } from '../models/Product';

export const productsService = {
  get: async (): Promise<IShopItem[]> => {
    return Product.getAll();
  },
  getById: async (userId: number): Promise<IShopItem[]> => {
    return Product.getByUserId(userId);
  },
};
