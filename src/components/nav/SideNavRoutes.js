import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "../Landing";
import Users from "../Users";
import UserProfile from "../UserProfile";
import Planets from "../Planets";

function SideNavRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Landing} />
      <Route exact path="/Users" component={Users} />
      <Route exact path="/Users/:name" component={UserProfile} />
      <Route exact path="/Planets" component={Planets} />
    </Switch>
  );
}

export default SideNavRoutes;
