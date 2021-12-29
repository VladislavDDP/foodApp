import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import {TabComponents, tabScreens} from './routes.types';

const Tab = createBottomTabNavigator();

interface TabProps {
  id: number;
  name: string;
  icon: string;
  component: TabComponents;
}

export const TabStack = () => {
  const renderTab = (tab: TabProps) => (
    <Tab.Screen
      key={tab.id}
      options={{tabBarIcon: ({focused}) => <Icon name={tab.icon} size={25} color={focused ? '#FA4A0C' : '#ADADAF'} />}}
      name={tab.name}
      component={tab.component}
    />
  );

  return <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false}}>{tabScreens.map(renderTab)}</Tab.Navigator>;
};
