import React, {useCallback, useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {RootNavigator} from './navigation/RootNavigator';
import {useStore} from './store/store';

export const App = () => {
  const {authentication} = useStore();

  const checkIfAuthorized = useCallback(async () => {
    await authentication.checkIfAuthorized();
    SplashScreen.hide();
  }, [authentication]);

  useEffect(() => {
    checkIfAuthorized();
  }, []);

  return <RootNavigator />;
};
