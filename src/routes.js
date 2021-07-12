import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { AuthorizationPage } from "./pages/AuthorizationPage";
import { CommentsPage } from "./pages/CommentsPage";
import { PostsPage } from "./pages/PostsPage";

export const useRoutes = () => {
  return (
    <Switch>
       <Route path="/posts" exact>
           <PostsPage></PostsPage>
       </Route>
       <Route path="/comments" exact>
           <CommentsPage></CommentsPage>
       </Route>
      <Route path="/">
        <AuthorizationPage></AuthorizationPage>
      </Route>
      <Redirect path="/posts"></Redirect>
    </Switch>
  );
};
