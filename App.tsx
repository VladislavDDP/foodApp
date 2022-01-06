import React from 'react';

import {RootNavigator} from './src/navigation/RootNavigator';
import {store, StoreContext} from './src/store/store';

export const App = () => (
  <StoreContext.Provider value={store()}>
    <RootNavigator />
  </StoreContext.Provider>
);
