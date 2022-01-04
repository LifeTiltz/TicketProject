import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageNotImplemented from '../../error-handling/pages/PageNotImplemented';
import Header from '../../Header/Header';
import { Shop } from '../../shop/pages/Shop';
import ShopCart from "../../shopCart/pages/ShopCart";
import '../../App.css';
import News from '../../news/news-component';

export const LoggedIn = () => {
  const [isDroppedDown, setDroppedDown] = useState([false, false]);

  const changeState = (num: number) => {
    const newDropDown = isDroppedDown.map((value: boolean, index: number) => index === num ? !value : value);
    setDroppedDown(newDropDown);
  }

  return (
    <Router>
      <Header isLoggedIn={true} changeState={changeState} />
      <ShopCart isDroppedDown={isDroppedDown} />
      <Switch>
        <Route path="/news">
          <News />
        </Route>
        <Route path="*">
          <PageNotImplemented isLoggedIn={false} />
        </Route>
      </Switch>
    </Router>
  );
}
