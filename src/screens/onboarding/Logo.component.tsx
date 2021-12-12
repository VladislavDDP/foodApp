import React from 'react';
import {Image, View} from 'react-native';

import logo from '../../assets/images/onBoardingLogo.png';
import {styles} from './styles/logo.styles';

export const OnboardingLogo = () => (
  <View style={styles.logoContainer}>
    <Image source={logo} />
  </View>
);
