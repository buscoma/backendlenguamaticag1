import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import routes from "./routes";
import { AuthProvider } from "./Components/Auth";
import PrivateRoute from "./PrivateRoute";
import history from "./history";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Router history={history}>
          <Switch>
            {routes.map((route) =>
              route.public ? (
                <Route
                  key={route.key}
                  name={route.name}
                  exact={route.exact}
                  path={route.path}
                  component={route.main}
                />
              ) : (
                <PrivateRoute
                  key={route.key}
                  name={route.name}
                  exact={route.exact}
                  path={route.path}
                  component={route.main}
                />
              )
            )}
          </Switch>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
