import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import {Tabs} from './routes.types';
import {Home} from '../../screens/dashboard/home/Home.component';
import {Like} from '../../screens/dashboard/like/Like.component';
import {Profile} from '../../screens/dashboard/profile/Profile.component';
import {History} from '../../screens/dashboard/history/History.component';

const Tab = createBottomTabNavigator();

export const DashboardTabStack = () => (
  <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>
    <Tab.Screen
      name={Tabs.Home}
      component={Home}
      options={{tabBarIcon: ({focused}) => <Icon name="home" size={25} color={focused ? '#FA4A0C' : '#ADADAF'} />}}
    />
    <Tab.Screen
      name={Tabs.Like}
      component={Like}
      options={{tabBarIcon: ({focused}) => <Icon name="heart" size={25} color={focused ? '#FA4A0C' : '#ADADAF'} />}}
    />
    <Tab.Screen
      name={Tabs.Profile}
      component={Profile}
      options={{tabBarIcon: ({focused}) => <Icon name="user" size={25} color={focused ? '#FA4A0C' : '#ADADAF'} />}}
    />
    <Tab.Screen
      name={Tabs.History}
      component={History}
      options={{tabBarIcon: ({focused}) => <Icon name="history" size={25} color={focused ? '#FA4A0C' : '#ADADAF'} />}}
    />
  </Tab.Navigator>
);
