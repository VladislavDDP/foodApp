import React from 'react';

import {TextButton} from '../../../components/text-btn/TextBtn.component';
import {TextWrapper} from '../../../components/text-wrapper/TextWrapper.component';
import {ColorIntencity} from '../../../components/view-theme/ColorIntencity';
import {ViewTheme} from '../../../components/view-theme/ViewTheme.component';
import {useStore} from '../../../store/store';
import {useTheme} from '../../../theme/theme';
import {ThemeNames} from '../../../theme/ThemeNames';
import {styles} from './security.styles';

export const Security = () => {
  const {settings} = useStore();
  const {changeTheme} = useTheme();

  const nextTheme = settings.theme === ThemeNames.Light ? ThemeNames.Dark : ThemeNames.Light;

  const toggleSwitch = async () => {
    await settings.switchTheme(nextTheme);
    changeTheme(nextTheme);
  };

  return (
    <ViewTheme colorIntencity={ColorIntencity.Weak} style={styles.container}>
      <TextWrapper style={styles.text}>Theme: </TextWrapper>
      <TextButton title={`change to ${nextTheme}`} onPress={toggleSwitch} />
    </ViewTheme>
  );
};
