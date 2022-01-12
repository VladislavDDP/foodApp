import React from 'react';
import {Provider} from 'mobx-react';
import {LogBox} from 'react-native';

import {RootNavigator} from './src/navigation/RootNavigator';
import {rootStore} from './src/store/store';

export const App = () => (
  <Provider value={rootStore}>
    <RootNavigator />
  </Provider>
);
