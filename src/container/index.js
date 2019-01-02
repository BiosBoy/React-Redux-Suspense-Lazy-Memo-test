import { PropTypes } from 'prop-types';
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import AppLayout from '../layout';
import AsyncComponent from '../routes';
import { LoadingPlaceholder } from '../components';

const AppContainer = ({ store, history }) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <ConnectedRouter history={history}>
          <AppLayout>
            <Suspense fallback={<LoadingPlaceholder />}>
              <Switch location={location}>
                <Route exact path='/' render={() => <AsyncComponent componentName='HelloWorld' />} />
                <Route path='/next' render={() => <AsyncComponent componentName='StartCoding' />} />
              </Switch>
            </Suspense>
          </AppLayout>
        </ConnectedRouter>
      </HashRouter>
    </Provider>
  );
};

AppContainer.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default AppContainer;
