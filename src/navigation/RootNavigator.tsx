import React from 'react';
import {StatusBar} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import {RootStack} from './root-stack/RootStack.component';

export const RootNavigator: React.FC = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />
      <RootStack />
    </NavigationContainer>
  </SafeAreaProvider>
);
