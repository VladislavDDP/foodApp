import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthenticationTabs} from '../../screens/authentication/AuthenticationTabs.component';
import {Onboarding} from '../../screens/onboarding/Onboarding.component';
import {AuthFlowScreens} from './routes.types';
import {AuthFlowParamList} from './stack.types';

const AuthFlow = createStackNavigator<AuthFlowParamList>();

export const AuthFlowStack = () => (
  <AuthFlow.Navigator initialRouteName={AuthFlowScreens.Onboarding} screenOptions={{headerShown: false}}>
    <AuthFlow.Screen name={AuthFlowScreens.Onboarding} component={Onboarding} />
    <AuthFlow.Screen name={AuthFlowScreens.Authentication} component={AuthenticationTabs} />
  </AuthFlow.Navigator>
);
