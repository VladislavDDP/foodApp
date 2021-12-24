import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import {tabScreens} from './routes.types';

const Tab = createBottomTabNavigator();

export const TabStack = () => (
  <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
    {tabScreens.map(tab => (
      <Tab.Screen
        key={tab.id}
        options={{tabBarIcon: ({focused}) => <Icon name={tab.icon} size={25} color={focused ? '#FA4A0C' : '#ADADAF'} />}}
        name={tab.name}
        component={tab.component}
      />
    ))}
  </Tab.Navigator>
);
