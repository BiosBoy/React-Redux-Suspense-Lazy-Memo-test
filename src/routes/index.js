import React, { lazy } from 'react';
import { injectReducer } from '../controller/middleware';
import rootStore from '../controller/store';

const HelloWorld = lazy(() => import(/* webpackChunkName: "HelloWorld" */ './HelloWorld'));
const StartCoding = lazy(() => import(/* webpackChunkName: "StartCoding" */ './StartCoding'));

const Components = {
  HelloWorld,
  StartCoding
};

const AsyncComponent = props => {
  const { componentName } = props;

  import(`./${componentName}/controller/reducer`).then(({ default: reducer }) => {
    injectReducer(rootStore, { key: componentName, reducer });
  });

  const Component = Components[componentName];

  return <Component {...props} />;
};

export default AsyncComponent;
