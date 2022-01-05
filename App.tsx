import React from 'react';
import {Provider} from 'mobx-react';

import {RootNavigator} from './src/navigation/RootNavigator';
import {store} from './src/store/store';

export const App = () => {
  const appStore = store();

  return (
    <Provider {...appStore}>
      <RootNavigator />
    </Provider>
  );
};
