import react from 'react';
import { ShopItem } from './ShopContent';
import Button from '../../common/components/button/Button';
import "./ShopItem.css"

export const ShopItems: React.FC<ShopItem> = ({ title, description, price, duration }) => {
  return (
    <tr>
      <td className="itemTitle">{title}<p className="itemDesc">{description}</p></td>
      <td>
        <p>{price}</p>
        <p>{duration}</p>
      </td>
      <td>
        <Button title="Add to Cart" onClick={() => {} } classes="cart"/>
      </td>
    </tr>
  );
}
