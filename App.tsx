import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

import {Onboarding} from './src/screens/onboarding/Onboarding.component';

export const App = () => (
  <SafeAreaView style={styles.screenContainer}>
    <Onboarding />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
  },
});
