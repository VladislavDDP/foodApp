import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

import {useTheme} from '../../theme/theme';
import {styles} from './loading-screen.styles';

interface Props {
  title: string;
}

export const LoadingScreen: React.FC<Props> = ({title}) => {
  const {theme} = useTheme();

  return (
    <View style={[styles.activityIndicatorBox, {backgroundColor: theme.colorScheme.secondaryBackground}]}>
      <ActivityIndicator size="large" color="#fff" />
      <Text style={styles.loadingText}>{title}</Text>
    </View>
  );
};
