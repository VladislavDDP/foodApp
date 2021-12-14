import React, {useRef, useState} from 'react';
import {Animated, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Login} from './login/Login.component';
import {SignUp} from './sign-up/SignUp.component';
import {Logo} from './logo/Logo.component';
import {Screens} from '../../navigation/root-stack/routes.types';
import {AppNavigatorScreenProps} from '../../navigation/root-stack/stack.types';
import {styles} from '../styles/authentication-tabs.styles';
import {screenWidth} from '../../vars/variables';
import {NavigationTab} from './navigation-tab/NavigationTab.component';

interface Props extends AppNavigatorScreenProps<Screens.Authentication> {}

const minOffset = 0;

export const AuthenticationTabs: React.FC<Props> = props => {
  const [height, setHeight] = useState({login: 2, signUp: 0});

  const animate_state = {
    start: 0,
    end: 100,
  };
  const value = useRef(new Animated.Value(animate_state.start)).current;
  const timingProp = {duration: 300, useNativeDriver: false};

  const toSignInAnimate = () => {
    setHeight({login: 2, signUp: 0});
    Animated.timing(value, {toValue: animate_state.start, ...timingProp}).start();
  };

  const toLoginAnimate = () => {
    setHeight({login: 0, signUp: 2});
    Animated.timing(value, {toValue: animate_state.end, ...timingProp}).start();
  };

  const inputRange = Object.values(animate_state);
  const offset = value.interpolate({inputRange, outputRange: [minOffset, -screenWidth]});

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Logo />
        <View style={styles.tabs}>
          <NavigationTab title="Login" onPress={toSignInAnimate} height={height.login} />
          <NavigationTab title="Sign-up" onPress={toLoginAnimate} height={height.signUp} />
        </View>
      </View>
      <Animated.View style={[styles.animatedContainer, {transform: [{translateX: offset}]}]}>
        <Login />
        <SignUp />
      </Animated.View>
    </SafeAreaView>
  );
};
