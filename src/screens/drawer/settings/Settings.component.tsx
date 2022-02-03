import {observer} from 'mobx-react';
import React from 'react';
import {View} from 'react-native';
import {StackActions, useNavigation} from '@react-navigation/native';

import {TextWrapper} from '../../../components/text-wrapper/TextWrapper.component';
import {ColorIntencity} from '../../../components/view-theme/ColorIntencity';
import {ViewTheme} from '../../../components/view-theme/ViewTheme.component';
import {Languages} from '../../../localization/languages';
import {localisation} from '../../../localization/localization';
import {Drawers} from '../../../navigation/drawer-stack/drawer.types';
import {Screens} from '../../../navigation/root-stack/routes.types';
import {useStore} from '../../../store/store';
import {useTheme} from '../../../theme/theme';
import {ThemeNames} from '../../../theme/ThemeNames';
import {styles} from './settings.styles';
import {CustomPicker} from '../../../components/custom-picker/CustomPicker.component';
import {languageOptions, themeOptions} from './options';

export const Settings = observer(() => {
  const {settings} = useStore();
  const {changeTheme} = useTheme();
  const navigation = useNavigation();

  const switchTheme = async (nextTheme: ThemeNames) => {
    await settings.switchTheme(nextTheme);
    changeTheme(nextTheme);
  };

  const switchLanguage = async (nextLanguage: Languages) => {
    if (settings.language !== nextLanguage) {
      await settings.switchLanguage(nextLanguage);
      navigation.dispatch(StackActions.replace(Screens.DrawerStack, {screen: Drawers.Settings}));
    }
  };

  const switchThemeWithPicker = (itemValue: string) => switchTheme(itemValue as ThemeNames);
  const switchLanguageWithPicker = (itemValue: string) => switchLanguage(itemValue as Languages);

  return (
    <ViewTheme colorIntencity={ColorIntencity.Weak} style={styles.container}>
      <TextWrapper style={styles.text}>{localisation.t('settingsTheme')}</TextWrapper>
      <CustomPicker selectedValue={settings.theme} onValueChange={switchThemeWithPicker} items={themeOptions} />
      <View style={styles.separator} />
      <TextWrapper style={styles.text}>{localisation.t('settingsLanguage')}</TextWrapper>
      <CustomPicker selectedValue={settings.language} onValueChange={switchLanguageWithPicker} items={languageOptions} />
    </ViewTheme>
  );
});
