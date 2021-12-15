import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthenticationTabs} from '../../screens/authentication/AuthenticationTabs.component';
import {Onboarding} from '../../screens/onboarding/Onboarding.component';
import {Screens} from './routes.types';
import {StackParamList} from './stack.types';

const Stack = createStackNavigator<StackParamList>();

export const RootStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={Screens.Onboarding} component={Onboarding} />
    <Stack.Screen name={Screens.Authentication} component={AuthenticationTabs} />
  </Stack.Navigator>
);
