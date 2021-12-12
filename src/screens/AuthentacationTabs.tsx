import React from 'react';
import {Image, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import logo from '../assets/images/mainLogo.png';
import {Login} from '../components/login/Login.component';
import {SignUp} from '../components/sign-up/SignUp.component';
import {Screens} from '../navigation/routes.types';
import {AppNavigatorScreenProps} from '../navigation/stack.types';
import {styles} from './styles/authentication-tabs.styles';

const Tab = createMaterialTopTabNavigator();

interface Props extends AppNavigatorScreenProps<Screens.Authentication> {}

export const AuthenticationTabs: React.FC<Props> = () => (
  <View style={styles.container}>
    <View style={styles.logoContainer}>
      <Image source={logo} />
    </View>
    <View style={styles.tabsContainer}>
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            borderBottomRightRadius: 20,
            borderBottomLeftRadius: 20,
          },
          tabBarIndicatorContainerStyle: {width: '90%', marginRight: '35%', marginLeft: '5%'},
          tabBarIndicatorStyle: {backgroundColor: '#FA4A0C'},
        }}>
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="Sign-up" component={SignUp} />
      </Tab.Navigator>
    </View>
  </View>
);
