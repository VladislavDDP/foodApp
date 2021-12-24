import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from './sign-out.styles';

export const SignOut = () => (
  <TouchableOpacity style={styles.button}>
    <Text style={styles.text}>Sign-out</Text>
    <Icon name="arrow-right" size={25} color="#fff" />
  </TouchableOpacity>
);
