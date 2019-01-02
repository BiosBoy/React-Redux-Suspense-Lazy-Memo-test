import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createResponsiveStateReducer } from 'redux-responsive';
import common from '../reducers';
import history from '../history';

const makeRootReducer = asyncReducers => {
  return combineReducers({
    ...asyncReducers,
    common,
    // routing
    router: connectRouter(history),
    browser: createResponsiveStateReducer({
      mobile: 600,
      tablet: 1000,
      desktop: 5000
    })
  });
};

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return;
  store.asyncReducers[key] = reducer;

  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
