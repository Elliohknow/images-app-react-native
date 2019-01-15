import React from 'react'
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import Application from './Application';
import configureStore from './src/store/configureStore';

const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <Application />
  </Provider>
);

AppRegistry.registerComponent('rn-course', () => RNRedux);
export default RNRedux;