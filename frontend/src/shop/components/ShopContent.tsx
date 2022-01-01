import react, { FC } from 'react';
import { ShopItems } from './ShopItem';
import './ShopContent.css'

export interface ShopItem {
  title: string
  description: string
  price: string
  duration: string
}

interface ShopContentProps {
  shopItems: ShopItem[]
}

export const ShopContent: FC<ShopContentProps> = ({ shopItems }) => {
  return (
    <table className="tab-content">
      {
        shopItems.map((item, i) =>
            <ShopItems
              key={'item-' + i}
              title={item.title}
              description={item.description}
              price={item.price}
              duration={item.duration}
            />
        )
      }
    </table>
  )
}
