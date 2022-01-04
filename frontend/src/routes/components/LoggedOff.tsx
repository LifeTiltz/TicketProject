import React, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Registration } from '../../auth/pages/Registration';
import PageNotImplemented from '../../error-handling/pages/PageNotImplemented';
import Header from '../../Header/Header';
import '../../App.css';
import Login from '../../auth/pages/Login';

export const LoggedOff = () => {
  return (
    <Router>
      <Header isLoggedIn={false} />
      <Switch>
        <Route path="/register">
          <Registration />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="*">
          <PageNotImplemented isLoggedIn={false} />
        </Route>
      </Switch>
    </Router>
  );
}
