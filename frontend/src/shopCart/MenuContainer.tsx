import React, { useState } from "react";
import DropDown from "./components/DropDown";
import Button from '../common/components/button/Button'

export const MenuContainer = () => {
    const [isDroppedDown, setDroppedDown] = useState([false, false]);

    const changeState = (num: number) => {
        const newDropDown = isDroppedDown.map((value: boolean, index: number) => index === num ? !value : value);
        setDroppedDown(newDropDown);
    }

    return (
        <div className="menuContainer">
            <div className="shopButtons">
                <Button classes='shop-button' title={'shop'} onClick={() => changeState(0)} imgPath="/icons/store.png" />
                <Button classes='cart-button' title={'cart'} onClick={() => changeState(1)} imgPath="/icons/shopicon.png"/>
            </div>
            {(isDroppedDown[0] || isDroppedDown[1]) && <div className="shopCartdiv">
                <DropDown name="Shop" isActive={isDroppedDown[0]} >
                </DropDown>
                <DropDown name="Cart" isActive={isDroppedDown[1]} >
                    Chnange to your componant Zolika 2
                </DropDown>
            </div>}
        </div>
    )
}
