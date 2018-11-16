import { PropTypes } from 'prop-types';
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router';

import AppLayout from '../layout';
import AsyncComponent from '../routes';
import { LoadingPlaceholder } from '../components';

const AppContainer = ({ store, history }) => {
  console.log(store.getState(), store, history, 'AppContainer');
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Router>
          <AppLayout>
            <Suspense fallback={<LoadingPlaceholder />}>
              <Switch>
                <Route exact path='/' render={() => <AsyncComponent componentName='HelloWorld' />} />
                <Route path='/next' exact render={() => <AsyncComponent componentName='StartCoding' />} />
              </Switch>
            </Suspense>
          </AppLayout>
        </Router>
      </ConnectedRouter>
    </Provider>
  );
};

AppContainer.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default AppContainer;
