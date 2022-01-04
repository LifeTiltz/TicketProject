import React, { FC } from 'react';
import { Shop } from '../../shop/pages/Shop';
import DropDown from '../components/DropDown';
import './ShopCart.css';

interface isDroppedDownProps {
  isDroppedDown: boolean[]
}

const ShopCart:FC<isDroppedDownProps> = ({ isDroppedDown }) => {
  console.log('called with', isDroppedDown);
  return (
    <div className="menuContainer">
        {
          (isDroppedDown[0] || isDroppedDown[1]) && <div className="shopCartdiv">
              <DropDown name="Shop" isActive={isDroppedDown[0]} >
                <Shop />
              </DropDown>
              <DropDown name="Cart" isActive={isDroppedDown[1]} >
                  Chnange to your componant Zolika 2
              </DropDown>
          </div>
        }
    </div>
  );
};

export default ShopCart;