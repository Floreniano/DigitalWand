import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import CatalogPage from 'pages/catalog/index.jsx';
import CardPage from 'pages/card/index.jsx';
import BasketPage from 'pages/basket/index.jsx';
import AuthorizationPage from 'pages/authorizationPage/index.jsx';

export const useRoutes = () => (
    <Switch>
      <Route path="/catalog" exact>
        <CatalogPage />
      </Route>
      <Route path="/card" exact>
        <CardPage />
      </Route>
      <Route path="/basket" exact>
        <BasketPage />
      </Route>
      <Route path="/authorization">
        <AuthorizationPage></AuthorizationPage>
      </Route>
      <Redirect to="/catalog"></Redirect>
    </Switch>
);
