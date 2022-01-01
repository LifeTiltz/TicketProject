import react from "react";
import PageNotImplemented from './error-handling/pages/PageNotImplemented';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Shop } from "./shop/pages/Shop";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/shop">
          <Shop />
        </Route>
        <Route path="*">
          <PageNotImplemented isLoggedIn={false} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
