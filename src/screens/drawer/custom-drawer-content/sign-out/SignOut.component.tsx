import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DrawerContentComponentProps} from '@react-navigation/drawer/lib/typescript/src/types';

import {Screens} from '../../../../navigation/root-stack/routes.types';
import {styles} from './sign-out.styles';

interface Props extends DrawerContentComponentProps {}

export const SignOut: React.FC<Props> = ({navigation}) => (
  <TouchableOpacity onPress={() => navigation.navigate(Screens.Authentication)} style={styles.button}>
    <Text style={styles.text}>Sign-out</Text>
    <Icon name="chevron-right" size={20} color="#fff" />
  </TouchableOpacity>
);
