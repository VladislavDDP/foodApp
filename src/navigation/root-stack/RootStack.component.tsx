import React from 'react';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';

import {AuthenticationTabs} from '../../screens/authentication/AuthenticationTabs.component';
import {Onboarding} from '../../screens/onboarding/Onboarding.component';
import {Screens} from './routes.types';
import {StackParamList} from './stack.types';
import {Details} from '../../screens/details/Details.component';
import {DrawerStack} from '../drawer-stack/DrawerStack.component';
import {Search} from '../../screens/search/Search.component';

const Stack = createSharedElementStackNavigator<StackParamList>();

const options = {
  headerBackTitleVisible: false,
  cardStyleInterpolator: ({current: {progress}}) => ({
    cardStyle: {
      opacity: progress,
    },
  }),
};

export const RootStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={Screens.Onboarding} component={Onboarding} />
    <Stack.Screen name={Screens.Authentication} component={AuthenticationTabs} />
    <Stack.Screen name={Screens.DrawerStack} component={DrawerStack} />
    <Stack.Screen name={Screens.Search} options={() => options} sharedElements={(route, otherRoute, showing) => [{id: 'bg'}]} component={Search} />
    <Stack.Screen name={Screens.Details} sharedElements={(route, otherRoute, showing) => [{id: 'bg'}]} component={Details} />
  </Stack.Navigator>
);
