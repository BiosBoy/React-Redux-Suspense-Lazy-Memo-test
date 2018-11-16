import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';

import { logger } from './middleware';
import makeRootReducer from './middleware/rootReducer';
import initialState from './initialState';
import history from './history';

const rootStore = () => {
  const middleware = [routerMiddleware(history), logger];
  const enhancers = [];

  if (__DEV__ && window.__REDUX_DEVTOOLS_EXTENSION__) {
    enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    makeRootReducer(),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers
    )
  );

  store.asyncReducers = {};

  return store;
};

export default rootStore();
