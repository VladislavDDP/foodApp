import React from 'react';
import {Image, View} from 'react-native';

import logo from '../../../assets/images/mainLogo.png';
import {styles} from './logo.styles';

export const Logo = () => (
  <View style={styles.logoContainer}>
    <Image source={logo} />
  </View>
);
