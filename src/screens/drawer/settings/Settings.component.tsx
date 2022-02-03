import {Picker} from '@react-native-picker/picker';
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

export const Settings = observer(() => {
  const {settings} = useStore();
  const {theme, changeTheme} = useTheme();
  const navigation = useNavigation();

  const switchTheme = async (nextTheme: ThemeNames) => {
    await settings.switchTheme(nextTheme);
    changeTheme(nextTheme);
  };

  const switchLanguage = async (lang: Languages) => {
    await settings.switchLanguage(lang);
    navigation.dispatch(StackActions.replace(Screens.DrawerStack, {screen: Drawers.Settings}));
  };

  return (
    <ViewTheme colorIntencity={ColorIntencity.Weak} style={styles.container}>
      <TextWrapper style={styles.text}>{localisation.t('settingsTheme')}</TextWrapper>
      <Picker dropdownIconColor={theme.colorScheme.text} selectedValue={settings.theme} onValueChange={switchTheme}>
        <Picker.Item label="Light" color="#FF460A" value={ThemeNames.Light} />
        <Picker.Item label="Dark" color="#FF460A" value={ThemeNames.Dark} />
      </Picker>
      <View style={styles.separator} />
      <TextWrapper style={styles.text}>{localisation.t('settingsLanguage')}</TextWrapper>
      <Picker dropdownIconColor={theme.colorScheme.text} selectedValue={settings.language} onValueChange={switchLanguage}>
        <Picker.Item label="Enlish" color="#FF460A" value={Languages.EN} />
        <Picker.Item label="Русский" color="#FF460A" value={Languages.RU} />
      </Picker>
    </ViewTheme>
  );
});
