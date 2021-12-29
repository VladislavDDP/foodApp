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

export const AuthenticationTabs: React.FC<Props> = ({navigation}) => {
  const goToDashboard = () => navigation.navigate(Screens.DrawerStack);

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

  const inputRange = [animateState.start, animateState.end];
  const offset = value.interpolate({inputRange, outputRange: [minOffset, -screenWidth]});

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Logo />
        <View style={styles.tabs}>
          <NavigationTab title="Login" onPress={toSignInAnimate} value={value} inputRange={inputRange} outputRange={[maxOffset, minOffset]} />
          <NavigationTab title="Sign-up" onPress={toLoginAnimate} value={value} inputRange={inputRange} outputRange={[minOffset, maxOffset]} />
        </View>
      </View>
      <Animated.View style={[styles.animatedContainer, {transform: [{translateX: offset}]}]}>
        <Login navigate={goToDashboard} />
        <SignUp navigate={goToDashboard} />
      </Animated.View>
    </SafeAreaView>
  );
};
