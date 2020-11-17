import React from 'react';

import { Redirect, Route, Switch } from 'react-router-dom';

import { Shortcut, Navigation } from '../../navigation';
import Ribbon from './Ribbon';
import LayoutSwitcher from './LayoutSwitcher';

import Header from './Header';

import { routes } from '../../../routes';

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <div id="main" role="main">
          <LayoutSwitcher />
          <Ribbon />

          <Switch>
            {routes.map((route, idx) => {
              console.log(route.path);
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => <route.component {...props} />}
                />
              ) : null;
            })}
            <Redirect from="/" to="/" />
            {/* <Redirect from="/" to="/dashboard/analytics" /> */}
          </Switch>
        </div>

        {/*  <Footer /> */}
        <Shortcut />
      </div>
    );
  }
}

export default Layout;
