import React from 'react';
import {View} from 'react-native';

import {useTheme} from '../../theme/theme';
import {ActivityIndicatorTheme} from '../activity-indicator-theme/ActivityIndicatorTheme.component';
import {TextWrapper} from '../text-wrapper/TextWrapper.component';
import {styles} from './loading-screen.styles';

interface Props {
  title: string;
}

export const LoadingScreen: React.FC<Props> = ({title}) => {
  const {theme} = useTheme();

  return (
    <View style={[styles.activityIndicatorContainer, {backgroundColor: theme.colorScheme.secondary}]}>
      <ActivityIndicatorTheme style={styles.indicator} size="large" />
      <TextWrapper style={styles.loadingText}>{title}</TextWrapper>
    </View>
  );
};
