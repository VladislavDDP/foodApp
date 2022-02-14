import React, {useEffect, useState} from 'react';
import NetInfo from '@react-native-community/netinfo';

import {DisconnectedScreen} from '../../components/disconnected-screen/DisconnectedScreen.component';

export const NetworkChecker: React.FC = ({children}) => {
  const [connected, setConnected] = useState<boolean | null>(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setConnected(state.isConnected);
    });
    return unsubscribe;
  }, []);

  const checkConnection = async () => {
    const state = await NetInfo.fetch();
    setConnected(state.isConnected);
  };

  if (!connected) {
    return <DisconnectedScreen onPress={checkConnection} />;
  }

  return <>{children}</>;
};
