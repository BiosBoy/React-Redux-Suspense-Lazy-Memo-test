import { PropTypes } from 'prop-types';
import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AppLayout from '../layout';
import AsyncComponent from '../routes';
import { LoadingPlaceholder } from '../components';

const AppContainer = ({ store, history }) => {
  return (
    <Provider store={store} history={history}>
      <Router>
        <AppLayout>
          <Suspense fallback={<LoadingPlaceholder />}>
            <Switch>
              <Route path='/' exact render={() => <AsyncComponent componentName='HelloWorld' />} />
              <Route path='/next/' exact render={() => <AsyncComponent componentName='StartCoding' />} />
            </Switch>
          </Suspense>
        </AppLayout>
      </Router>
    </Provider>
  );
};

AppContainer.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default AppContainer;
