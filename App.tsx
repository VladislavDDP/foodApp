import React, {useCallback, useEffect} from 'react';
import {Provider} from 'mobx-react';
import SplashScreen from 'react-native-splash-screen';

import {RootNavigator} from './src/navigation/RootNavigator';
import {rootStore, useStore} from './src/store/store';

export const App = () => {
  const {authentication} = useStore();

  const checkIfAuthorized = useCallback(async () => {
    await authentication.checkIfAuthorized();
    SplashScreen.hide();
  }, [authentication]);

  useEffect(() => {
    checkIfAuthorized();
  }, [checkIfAuthorized]);

  return (
    <Provider value={rootStore}>
      <RootNavigator />
    </Provider>
  );
};
