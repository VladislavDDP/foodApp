import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import type {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {Screens} from '../../../../navigation/root-stack/routes.types';
import {styles} from './sign-out.styles';
import {useStore} from '../../../../store/store';
import {StackParamList} from '../../../../navigation/root-stack/stack.types';
import {AuthFlowScreens} from '../../../../navigation/auth-flow-stack/routes.types';
import {CommonActions} from '@react-navigation/native';

interface Props {
  navigation: NativeStackNavigationProp<StackParamList, Screens.DrawerStack>;
}

export const SignOut: React.FC<Props> = ({navigation}) => {
  const {authentication} = useStore();

  const goToAuthentication = async () => {
    await authentication.logout();
    navigation.dispatch({
      ...CommonActions.reset({
        index: 1,
        routes: [{name: Screens.AuthFlowStack, state: {routes: [{name: AuthFlowScreens.Authentication}]}}],
      }),
    });
  };

  return (
    <TouchableOpacity onPress={goToAuthentication} style={styles.button}>
      <Text style={styles.text}>Sign-out</Text>
      <Icon name="chevron-right" size={20} color="#fff" />
    </TouchableOpacity>
  );
};
