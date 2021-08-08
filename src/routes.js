import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import CatalogPage from 'pages/catalog/index.jsx';
import CardPage from 'pages/card/index.jsx';
import BasketPage from 'pages/basket/index.jsx';
import AuthorizationPage from 'pages/authorizationPage/index.jsx';

export const useRoutes = (userId) => {
  if (userId === 1) {
    return (
      <Switch>
        <Route path='/catalog' exact>
          <CatalogPage />
        </Route>
        <Route path='/card' exact>
          <CardPage />
        </Route>
        <Route path='/basket' exact>
          <BasketPage />
        </Route>
        <Redirect to='/catalog'></Redirect>
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path='/'>
        <AuthorizationPage></AuthorizationPage>
      </Route>
      <Redirect to='/'></Redirect>
    </Switch>
  );
};
