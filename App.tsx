import React, {useCallback, useEffect, useState} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {configure} from 'mobx';

import {FoodApi} from './src/api/food-api/food-api';
import {HttpApi} from './src/api/http-api';
import {Repository} from './src/api/repository';
import {UserApi} from './src/api/user-api/userApi';
import {LoadingScreen} from './src/components/loading-screen/LoadingScreen.component';
import {Configs} from './src/config/configs';
import {localisation} from './src/localization/localization';
import {RootNavigator} from './src/navigation/RootNavigator';
import {Storage} from './src/storage/storage';
import {Service} from './src/store/services/service';
import {ThemeProvider, themes} from './src/theme/theme';
import {ThemeNames} from './src/theme/ThemeNames';
import {injector} from './src/utils/injector/Injector';
import {NetworkChecker} from './src/utils/network-checker/NetworkChecker.component';
import {ProfileService} from './src/store/services/profile.service';
import {AuthenticationService} from './src/store/services/authentication.service';
import {CartService} from './src/store/services/cart.service';
import {SettingsService} from './src/store/services/settings.service';

configure({
  enforceActions: 'never',
});

const initBussinessLogin = async () => {
  const baseURL: string = 'https://rn-delivery-api.herokuapp.com/api';

  injector.set(Configs.Http, new HttpApi(baseURL));
  injector.set(Configs.AsyncMemory, new Storage());

  injector.set(Repository.userApi, new UserApi());
  injector.set(Repository.foodApi, new FoodApi());

  injector.set(Service.Profile, new ProfileService());
  injector.set(Service.Cart, new CartService());
  injector.set(Service.Authentication, new AuthenticationService());
  injector.set(Service.Settings, new SettingsService());

  await injector.get<AuthenticationService>(Service.Authentication).initAuth();
  await injector.get<SettingsService>(Service.Settings).initSettings();

  return injector.get<SettingsService>(Service.Settings).currentTheme;
};

export const App = () => {
  const [loading, setLoading] = useState(true);
  const [currentTheme, setCurrentTheme] = useState(themes[ThemeNames.Light]);

  const initApp = useCallback(async () => {
    try {
      const theme = await initBussinessLogin();
      setCurrentTheme(themes[ThemeNames[theme]]);
    } finally {
      SplashScreen.hide();
      setLoading(false);
    }
  }, []);

  const changeTheme = (name: ThemeNames) => setCurrentTheme(themes[name]);

  useEffect(() => {
    initApp();
  }, []);

  if (loading) {
    return <LoadingScreen title={localisation.t('loading')} />;
  }

  return (
    <ThemeProvider theme={currentTheme} changeTheme={changeTheme}>
      <NetworkChecker>
        <RootNavigator />
      </NetworkChecker>
    </ThemeProvider>
  );
};
