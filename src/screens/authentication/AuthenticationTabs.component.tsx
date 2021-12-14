import React, {useRef} from 'react';
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
const maxOffset = 2;

export const AuthenticationTabs: React.FC<Props> = props => {
  const animateState = {
    start: 0,
    end: 100,
  };
  const value = useRef(new Animated.Value(animateState.start)).current;

  const timingProp = {duration: 300, useNativeDriver: false};

  const toSignInAnimate = () => {
    Animated.timing(value, {toValue: animateState.start, ...timingProp}).start();
  };

  const toLoginAnimate = () => {
    Animated.timing(value, {toValue: animateState.end, ...timingProp}).start();
  };

  const inputRange = Object.values(animateState);
  const offset = value.interpolate({inputRange, outputRange: [minOffset, -screenWidth]});
  const loginHeight = value.interpolate({inputRange, outputRange: [maxOffset, minOffset]});
  const signUpHeight = value.interpolate({inputRange, outputRange: [minOffset, maxOffset]});

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Logo />
        <View style={styles.tabs}>
          <NavigationTab title="Login" onPress={toSignInAnimate} height={loginHeight} />
          <NavigationTab title="Sign-up" onPress={toLoginAnimate} height={signUpHeight} />
        </View>
      </View>
      <Animated.View style={[styles.animatedContainer, {transform: [{translateX: offset}]}]}>
        <Login />
        <SignUp />
      </Animated.View>
    </SafeAreaView>
  );
};
