import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Screens} from './routes.types';
import {StackParamList} from './stack.types';
import {Onboarding} from '../screens/onboarding/Onboarding.component';
import {AuthenticationTabs} from '../screens/authentication/AuthenticationTabs.component';

const Stack = createStackNavigator<StackParamList>();

export const AppNavigator: React.FC = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={Screens.Onboarding} component={Onboarding} />
        <Stack.Screen name={Screens.Authentication} component={AuthenticationTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  </SafeAreaProvider>
);
