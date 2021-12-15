import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import {RootStack} from './root-stack/RootStack.component';

export const RootNavigator: React.FC = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  </SafeAreaProvider>
);
