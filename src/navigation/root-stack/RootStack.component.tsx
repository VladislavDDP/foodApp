import React from 'react';
import {createSharedElementStackNavigator, type SharedElementsComponentConfig} from 'react-navigation-shared-element';

import {AuthenticationTabs} from '../../screens/authentication/AuthenticationTabs.component';
import {Onboarding} from '../../screens/onboarding/Onboarding.component';
import {Screens} from './routes.types';
import {StackParamList} from './stack.types';
import {Details} from '../../screens/details/Details.component';
import {DrawerStack} from '../drawer-stack/DrawerStack.component';
import {Search} from '../../screens/search/Search.component';

const Stack = createSharedElementStackNavigator<StackParamList>();

const sharedElements: SharedElementsComponentConfig = (route, otherRoute, showing) => [{id: 'bg'}];

export const RootStack = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name={Screens.Onboarding} component={Onboarding} />
    <Stack.Screen name={Screens.Authentication} component={AuthenticationTabs} />
    <Stack.Screen name={Screens.DrawerStack} component={DrawerStack} />
    <Stack.Screen
      name={Screens.Search}
      options={{
        headerBackTitleVisible: false,
        cardStyleInterpolator: ({current: {progress}}) => ({
          cardStyle: {
            opacity: progress,
          },
        }),
      }}
      sharedElements={sharedElements}
      component={Search}
    />
    <Stack.Screen name={Screens.Details} sharedElements={sharedElements} component={Details} />
  </Stack.Navigator>
);
