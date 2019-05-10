import React from "react";
import { Switch, Route } from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Dashboard from "./components/Dashboard/Dashboard";
import Form from "./components/Form/Form";
import Post from "./components/Post/Post";

export default (
  <Switch>
    <Route component={Dashboard} path="/dashboard" />
    <Route component={Form} path="/new" />
    <Route component={Post} path="/post/:postid" />
    <Route component={Auth} exact path="/" />
  </Switch>
);
