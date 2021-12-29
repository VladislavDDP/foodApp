import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {DrawerNavigationHelpers} from '@react-navigation/drawer/lib/typescript/src/types';

import {Screens} from '../../../../navigation/root-stack/routes.types';
import {styles} from './sign-out.styles';

interface Props {
  navigation: DrawerNavigationHelpers;
}

export const SignOut: React.FC<Props> = ({navigation}) => {
  const goToAuthentication = () => navigation.navigate(Screens.Authentication);

  return (
    <TouchableOpacity onPress={goToAuthentication} style={styles.button}>
      <Text style={styles.text}>Sign-out</Text>
      <Icon name="chevron-right" size={20} color="#fff" />
    </TouchableOpacity>
  );
};
