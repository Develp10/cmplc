import React from "react";
import { Redirect, Route } from "react-router";

const PrivateRoute = ({ component: Component, isAuth, routes, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isAuth ? (
        <Component {...props} routes={routes} />
      ) : (
        <Redirect
          to={{ pathname: "/auth/signIn", state: { from: props.location } }}
        />
      )
    }
  />
);

export default PrivateRoute;
