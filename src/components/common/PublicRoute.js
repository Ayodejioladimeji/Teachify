import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { Getuser } from './Getuser';

// handle the public routes
function PublicRoute({ component: Component, ...rest }) {
  console.log(Getuser());
  return (
    <Route
      {...rest}
      render={(props) =>
        !Getuser() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/' }} />
        )
      }
    />
  );
}

export default PublicRoute;
