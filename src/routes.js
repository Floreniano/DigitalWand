import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { AuthorizationPage } from 'pages/AuthorizationPage/index.jsx';
import { CommentsPage } from 'pages/CommentsPage/index.jsx';
import PostsPage from 'pages/PostPage/index.jsx';

export const useRoutes = (userId) => {
  if (userId === 1) {
    return (
      <Switch>
        <Route path="/posts" exact>
          <PostsPage></PostsPage>
        </Route>
        <Route path="/comments" exact>
          <CommentsPage></CommentsPage>
        </Route>
        <Redirect to="/posts"></Redirect>
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/">
        <AuthorizationPage></AuthorizationPage>
      </Route>
      <Redirect to="/"></Redirect>
    </Switch>
  );
};
