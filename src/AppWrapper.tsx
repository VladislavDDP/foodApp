import React from 'react';

import {App} from './App';
import {RootStoreProvider} from './store/store';

export const AppWrapper = () => (
  <RootStoreProvider>
    <App />
  </RootStoreProvider>
);
