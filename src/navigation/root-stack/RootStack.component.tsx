import React from 'react';
import {createSharedElementStackNavigator, type SharedElementsComponentConfig} from 'react-navigation-shared-element';
import type {StackCardStyleInterpolator} from '@react-navigation/stack';

import {Screens} from './routes.types';
import {StackParamList} from './stack.types';
import {Details} from '../../screens/details/Details.component';
import {DrawerStack} from '../drawer-stack/DrawerStack.component';
import {Search} from '../../screens/search/Search.component';
import {ShoppingCart} from '../../screens/shopping-cart/ShoppingCart.component';
import {Checkout} from '../../screens/checkout/Checkout.component';
import {AuthFlowStack} from '../auth-flow-stack/AuthFlowStack.component';

const Stack = createSharedElementStackNavigator<StackParamList>();

const sharedElements: SharedElementsComponentConfig = (route, otherRoute, showing) => [{id: 'bg'}];

export const RootStack = () => {
  const setAnimation: StackCardStyleInterpolator = ({current: {progress}}) => ({
    cardStyle: {
      opacity: progress,
    },
  });

  return (
    <Stack.Navigator initialRouteName={Screens.AuthFlowStack} screenOptions={{headerShown: false}}>
      <Stack.Screen name={Screens.AuthFlowStack} component={AuthFlowStack} />
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
