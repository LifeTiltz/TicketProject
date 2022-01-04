import react, { useState } from "react";
import PageNotImplemented from './error-handling/pages/PageNotImplemented';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Registration } from './auth/pages/Registration';
import './App.css';
import Header from "./Header/Header";
import ShopCart from "./shopCart/pages/ShopCart";
import Login from "./auth/pages/Login";
import { LoggedOff } from "./routes/components/LoggedOff";
import { LoggedIn } from "./routes/components/LoggedIn";

const App = () => {
  const [isDroppedDown, setDroppedDown] = useState([false, false]);

  const changeState = (num: number) => {
    const newDropDown = isDroppedDown.map((value: boolean, index: number) => index === num ? !value : value);
    setDroppedDown(newDropDown);
  }

  return (
    <Router>
      <Switch>
        <Route path={['/register', '/login']}>
          <LoggedOff />
        </Route>
        <Route path="*">
          <LoggedIn />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;

