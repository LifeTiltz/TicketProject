import react from 'react';
import { ShopItem } from './ShopContent';
import Button from '../../common/button/Button';
import "./ShopItem.css"

export const ShopItems: React.FC<ShopItem> = ({ title, description, price, duration }) => {
  return (
    <tr>
      <td className="itemTitle">{title}<td className="itemDesc">{description}</td></td>
      <td>
        <p>{price}</p>
        <p>{duration}</p>
      </td>
      <td>
        <Button type="cart" title="Add to Cart" onClick={() => {}}/>
      </td>
    </tr>
  );
}
