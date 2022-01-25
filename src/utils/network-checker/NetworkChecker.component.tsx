import {observer} from 'mobx-react';
import React, {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';

import {DisconnectedScreen} from '../../components/disconnected-screen/DisconnectedScreen.component';
import {useStore} from '../../store/store';

export const NetworkChecker: React.FC = observer(({children}) => {
  const [connected, setConnected] = useState<boolean | null>(true);
  const {foodStore} = useStore();

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setConnected(state.isConnected);
      if (state.isConnected) {
        foodStore.initializeData();
      }
    });
    return () => unsubscribe();
  }, []);

  const checkConnection = async () => {
    const state = await NetInfo.fetch();
    setConnected(state.isConnected);
  };

  if (!connected) {
    return <DisconnectedScreen onPress={checkConnection} />;
  }

  return <>{children}</>;
});
