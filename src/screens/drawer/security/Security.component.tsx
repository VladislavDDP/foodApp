import React from 'react';
import {Text, View} from 'react-native';
import {TextButton} from '../../../components/text-btn/TextBtn.component';

import {useStore} from '../../../store/store';
import {useTheme} from '../../../theme/theme';
import {ThemeNames} from '../../../theme/types';
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
    <View style={[styles.container, {backgroundColor: theme.colorScheme.primaryBackgroundLight}]}>
      <View style={styles.wrapper}>
        <Text style={[styles.text, {color: theme.colorScheme.primaryText}]}>Theme: </Text>
        <TextButton title={`change to ${nextTheme}`} onPress={toggleSwitch} />
      </View>
    </View>
  );
};
