import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthenticationTabs} from '../../screens/authentication/AuthenticationTabs.component';
import {Onboarding} from '../../screens/onboarding/Onboarding.component';
import {Screens} from './routes.types';
import {StackParamList} from './stack.types';
import {Details} from '../../screens/details/Details.component';
import {DrawerStack} from '../drawer-stack/DrawerStack.component';

const Stack = createStackNavigator<StackParamList>();

export const RootStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={Screens.Onboarding} component={Onboarding} />
    <Stack.Screen name={Screens.Authentication} component={AuthenticationTabs} />
    <Stack.Screen name={Screens.DrawerStack} component={DrawerStack} />
    <Stack.Screen name={Screens.Details} component={Details} />
  </Stack.Navigator>
);
