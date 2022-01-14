import React from 'react';
import {Provider} from 'mobx-react';
import SplashScreen from 'react-native-splash-screen';

import {RootNavigator} from './src/navigation/RootNavigator';
import {rootStore} from './src/store/store';

export const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider value={rootStore}>
      <RootNavigator />
    </Provider>
  );
};
