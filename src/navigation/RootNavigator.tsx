import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';

import {RootStack} from './root-stack/RootStack.component';
import {StatusBar} from 'react-native';

export const RootNavigator: React.FC = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />
      <RootStack />
    </NavigationContainer>
  </SafeAreaProvider>
);
