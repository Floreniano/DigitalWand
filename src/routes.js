import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
/* Страницы */
import CatalogPage from 'pages/catalog/index.jsx';
import CardPage from 'pages/card/index.jsx';
import BasketPage from 'pages/basket/index.jsx';
import AuthorizationPage from 'pages/authorizationPage/index.jsx';

export const useRoutes = () => (
  <Switch>
    <Route path="/catalog" exact component={CatalogPage}></Route>
    <Route path="/card/:id" exact component={CardPage}></Route>
    <Route path="/basket" exact component={BasketPage}></Route>
    <Route path="/authorization" exact component={AuthorizationPage}></Route>
    <Redirect to="/catalog"></Redirect>
  </Switch>
);
