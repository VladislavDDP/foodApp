import {Provider} from 'mobx-react';
import React, {useCallback, useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';

import {LoadingScreen} from './src/components/loading-screen/LoadingScreen.component';
import {RootNavigator} from './src/navigation/RootNavigator';
import {rootStore, useStore} from './src/store/store';
import {ThemeProvider, themes} from './src/theme/theme';
import {ThemeNames} from './src/theme/types';
import {NetworkChecker} from './src/utils/network-checker/NetworkChecker.component';

export const App = () => {
  const {authentication, settings} = useStore();
  const [currentTheme, setCurrentTheme] = useState(themes[ThemeNames.Light]);
  const [loading, setLoading] = useState(true);

  const initApp = useCallback(async () => {
    try {
      await authentication.checkIfAuthorized();
    } finally {
      SplashScreen.hide();
      setLoading(false);
    }
  }, []);

  const loadTheme = async () => {
    const savedTheme = await settings.loadTheme();
    setCurrentTheme(themes[ThemeNames[savedTheme as ThemeNames]]);
  };

  useEffect(() => {
    initApp();
    loadTheme();
  }, []);

  const changeTheme = (name: ThemeNames) => setCurrentTheme(themes[name]);

  if (loading) {
    return <LoadingScreen title="Initing..." />;
  }

  return (
    <ThemeProvider theme={currentTheme} changeTheme={changeTheme}>
      <NetworkChecker>
        <Provider value={rootStore}>
          <RootNavigator />
        </Provider>
      </NetworkChecker>
    </ThemeProvider>
  );
};
