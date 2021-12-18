import React from 'react';
import {Text, SafeAreaView} from 'react-native';

import {Screens} from '../../navigation/root-stack/routes.types';
import {AppNavigatorScreenProps} from '../../navigation/root-stack/stack.types';

interface Props extends AppNavigatorScreenProps<Screens.Details> {}

export const Details: React.FC<Props> = props => (
  <SafeAreaView>
    <Text>{props.route.params.food.name}</Text>
  </SafeAreaView>
);
