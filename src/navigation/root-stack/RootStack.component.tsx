import React from 'react';
import {createSharedElementStackNavigator, type SharedElementsComponentConfig} from 'react-navigation-shared-element';
import type {StackCardStyleInterpolator} from '@react-navigation/stack';

import {AuthenticationTabs} from '../../screens/authentication/AuthenticationTabs.component';
import {Onboarding} from '../../screens/onboarding/Onboarding.component';
import {Screens} from './routes.types';
import {StackParamList} from './stack.types';
import {Details} from '../../screens/details/Details.component';
import {DrawerStack} from '../drawer-stack/DrawerStack.component';
import {Search} from '../../screens/search/Search.component';
import {ShoppingCart} from '../../screens/shopping-cart/ShoppingCart.component';
import {Checkout} from '../../screens/checkout/Checkout.component';

const Stack = createSharedElementStackNavigator<StackParamList>();

const sharedElements: SharedElementsComponentConfig = (route, otherRoute, showing) => [{id: 'bg'}];

export const RootStack = () => {
  const setAnimation: StackCardStyleInterpolator = ({current: {progress}}) => ({
    cardStyle: {
      opacity: progress,
    },
  });

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Screens.Onboarding} component={Onboarding} />
      <Stack.Screen name={Screens.Authentication} component={AuthenticationTabs} />
      <Stack.Screen name={Screens.DrawerStack} component={DrawerStack} />
      <Stack.Screen
        name={Screens.Search}
        options={{
          headerBackTitleVisible: false,
          cardStyleInterpolator: setAnimation,
        }}
        sharedElements={sharedElements}
        component={Search}
      />
      <Stack.Screen name={Screens.Details} sharedElements={sharedElements} component={Details} />
      <Stack.Screen name={Screens.Cart} component={ShoppingCart} />
      <Stack.Screen name={Screens.Checkout} component={Checkout} />
    </Stack.Navigator>
  );
};
