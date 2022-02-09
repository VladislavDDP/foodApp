import {Observer, useLocalObservable} from 'mobx-react';
import React, {useState} from 'react';
import {View} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';

import {TextWrapper} from '../../../components/text-wrapper/TextWrapper.component';
import {ColorIntencity} from '../../../components/view-theme/ColorIntencity';
import {ViewTheme} from '../../../components/view-theme/ViewTheme.component';
import {Languages} from '../../../localization/languages';
import {localisation} from '../../../localization/localization';
import {Screens} from '../../../navigation/root-stack/routes.types';
import {useTheme} from '../../../theme/theme';
import {ThemeNames} from '../../../theme/ThemeNames';
import {styles} from './settings.styles';
import {CustomPicker} from '../../../components/custom-picker/CustomPicker.component';
import {languageOptions, themeOptions} from './options';
import {Drawers} from '../../../navigation/drawer-stack/drawer.types';
import {SettingsStore} from '../../../store/settingsStore';
import {ActivityIndicatorTheme} from '../../../components/activity-indicator-theme/ActivityIndicatorTheme.component';

export const SettingsScreen = () => {
  const {changeTheme} = useTheme();
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const settings = useLocalObservable(() => new SettingsStore());

  const switchTheme = async (nextTheme: ThemeNames) => {
    if (settings.theme !== nextTheme) {
      setLoading(true);
      await settings.switchTheme(nextTheme);
      setLoading(false);
      changeTheme(nextTheme);
    }
  };

  const switchLanguage = async (nextLanguage: Languages) => {
    if (settings.language !== nextLanguage) {
      setLoading(true);
      await settings.switchLanguage(nextLanguage);
      setLoading(false);
      navigation.dispatch(StackActions.replace(Screens.DrawerStack, {screen: Drawers.Settings}));
    }
  };

  const switchThemeWithPicker = (itemValue: string) => switchTheme(itemValue as ThemeNames);
  const switchLanguageWithPicker = (itemValue: string) => switchLanguage(itemValue as Languages);

  if (loading) {
    return <ActivityIndicatorTheme style={styles.activityBox} size="large" color="#FF460A" />;
  }

  return (
    <Observer>
      {() => (
        <ViewTheme colorIntencity={ColorIntencity.Weak} style={styles.container}>
          <TextWrapper style={styles.text}>{localisation.t('settingsTheme')}</TextWrapper>
          <CustomPicker selectedValue={settings.theme} onValueChange={switchThemeWithPicker} items={themeOptions} />
          <View style={styles.separator} />
          <TextWrapper style={styles.text}>{localisation.t('settingsLanguage')}</TextWrapper>
          <CustomPicker selectedValue={settings.language} onValueChange={switchLanguageWithPicker} items={languageOptions} />
        </ViewTheme>
      )}
    </Observer>
  );
};
