import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {AppNavigator} from './src/navigation/MainStack';

export const App = () => (
  <SafeAreaView style={styles.screenContainer}>
    <AppNavigator />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
