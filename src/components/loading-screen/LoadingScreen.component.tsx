import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

import {styles} from './loading-screen.styles';

interface Props {
  title: string;
}

export const LoadingScreen: React.FC<Props> = ({title}) => (
  <View style={styles.activityIndicatorBox}>
    <ActivityIndicator size="large" color="#fff" />
    <Text style={styles.loadingText}>{title}</Text>
  </View>
);
