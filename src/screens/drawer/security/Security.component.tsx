import React from 'react';
import {View} from 'react-native';
import {TextButton} from '../../../components/text-btn/TextBtn.component';
import {TextWrapper} from '../../../components/text-wrapper/TextWrapper.component';

import {useStore} from '../../../store/store';
import {useTheme} from '../../../theme/theme';
import {ThemeNames} from '../../../theme/ThemeNames';
import {styles} from './security.styles';

export const Security = () => {
  const {settings} = useStore();
  const {theme, changeTheme} = useTheme();

  const nextTheme = settings.theme === ThemeNames.Light ? ThemeNames.Dark : ThemeNames.Light;

  const toggleSwitch = async () => {
    await settings.switchTheme(nextTheme);
    changeTheme(nextTheme);
  };

  return (
    <View style={[styles.container, {backgroundColor: theme.colorScheme.primaryLight}]}>
      <TextWrapper style={[styles.text, {color: theme.colorScheme.text}]}>Theme: </TextWrapper>
      <TextButton title={`change to ${nextTheme}`} onPress={toggleSwitch} />
    </View>
  );
};
