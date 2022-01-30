import React from 'react';
import {DevSettings, View} from 'react-native';

import {TextButton} from '../../../components/text-button/TextButton.component';
import {TextWrapper} from '../../../components/text-wrapper/TextWrapper.component';
import {ColorIntencity} from '../../../components/view-theme/ColorIntencity';
import {ViewTheme} from '../../../components/view-theme/ViewTheme.component';
import {Languages} from '../../../localization/languages';
import {localisation} from '../../../localization/localization';
import {useStore} from '../../../store/store';
import {useTheme} from '../../../theme/theme';
import {ThemeNames} from '../../../theme/ThemeNames';
import {styles} from './security.styles';

export const Security = () => {
  const {settings} = useStore();
  const {changeTheme} = useTheme();

  const nextTheme = settings.theme === ThemeNames.Light ? ThemeNames.Dark : ThemeNames.Light;
  const nextLanguage = settings.language === Languages.EN ? Languages.RU : Languages.EN;

  const switchTheme = async () => {
    await settings.switchTheme(nextTheme);
    changeTheme(nextTheme);
  };

  const switchLanguage = async () => {
    await settings.switchLanguage(nextLanguage);
    DevSettings.reload();
  };

  return (
    <ViewTheme colorIntencity={ColorIntencity.Weak} style={styles.container}>
      <View style={styles.section}>
        <TextWrapper style={styles.text}>{localisation.t('settingsTheme')}: </TextWrapper>
        <TextButton title={`${localisation.t('buttons.changeTo')} ${nextTheme}`} onPress={switchTheme} />
      </View>
      <View style={styles.section}>
        <TextWrapper style={styles.text}>{localisation.t('settingsLanguage')}: </TextWrapper>
        <TextButton title={`${localisation.t('buttons.changeTo')} ${nextLanguage}`} onPress={switchLanguage} />
      </View>
    </ViewTheme>
  );
};
