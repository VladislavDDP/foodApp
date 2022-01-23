import {Provider} from 'mobx-react';
import React, {useCallback, useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import NetInfo from '@react-native-community/netinfo';

import {LoadingScreen} from './src/components/loading-screen/LoadingScreen.component';
import {RootNavigator} from './src/navigation/RootNavigator';
import {rootStore, useStore} from './src/store/store';
import {DisconnectedScreen} from './src/components/disconnected-screen/DisconnectedScreen.component';

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [connected, setConnected] = useState<boolean | null>(true);
  const {authentication, foodStore} = useStore();

  const checkConnection = async () => {
    await NetInfo.fetch().then(state => {
      setConnected(state.isConnected);
    });
  };

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

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setConnected(state.isConnected);
      if (state.isConnected) {
        foodStore.initializeData();
      }
    });
    return () => unsubscribe();
  }, []);

  if (!connected) {
    return <DisconnectedScreen onPress={checkConnection} />;
  }

  return (
    <React.Fragment>
      <Provider value={rootStore}>{loading ? <LoadingScreen title="Initing..." /> : <RootNavigator />}</Provider>
    </React.Fragment>
  );
};
