import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import store from './store/configureStore';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Home from './pages/HomeNotAuth';
import { Layout } from './common';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/app.css';

const AuthRoute = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token') || '';
  console.log('token', !!token);
  return (
    <Route
      {...rest}
      render={(props) =>
        token ? <Component {...props} /> : <Redirect to="/home" />
      }
    />
  );
};

const App = (): JSX.Element => (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/login" exact={true} name="Login" component={Login} />
        <Route
          path="/register"
          exact={true}
          name="Register"
          component={Register}
        />
        <Route path="/home" exact={true} name="Home" component={Home} />
        <AuthRoute path="/" name="Dashboard" component={Layout} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;
