import {Provider} from 'mobx-react';
import React, {useCallback, useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {LoadingScreen} from './src/components/loading-screen/LoadingScreen.component';
import {RootNavigator} from './src/navigation/RootNavigator';
import {rootStore, useStore} from './src/store/store';

export const App = () => {
  const [loading, setLoading] = useState(true);
  const {authentication} = useStore();

  const checkIfAuthorized = useCallback(async () => {
    try {
      await authentication.checkIfAuthorized();
    } finally {
      SplashScreen.hide();
      setLoading(false);
    }
  }, [authentication]);

  useEffect(() => {
    checkIfAuthorized();
  }, []);

  if (loading) {
    return <LoadingScreen title="Initing..." />;
  }

  return (
    <Provider value={rootStore}>
      <RootNavigator />
    </Provider>
  );
};
