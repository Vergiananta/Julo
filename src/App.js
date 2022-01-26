import './App.css';
import React  from 'react';
import {Provider} from "react-redux";
import {
    BrowserRouter as Router, Redirect,
    Route,
    Switch
} from "react-router-dom";
import routes from "./configs/routes";
import store from "./configs/store";
import {Container} from "reactstrap";

function App() {
  return (
      <Container class="bg-dark">
    <Provider store={store}>
      <Router>
        <Switch>
            <Redirect exact from="/" to="/movies"/>
          {routes.map((route, index) => (
              <Route key={index} path={route.path} exact={route.exact}>
                {route.component}
              </Route>)
          )}
        </Switch>
      </Router>
    </Provider>
      </Container>
  );
}

export default App;
