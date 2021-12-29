import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from './fake-search.styles';

interface Props {
  onPress: () => void;
}

export const FakeSearch: React.FC<Props> = ({onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.container}>
      <Icon name="search" size={25} />
      <Text style={styles.text}>Search</Text>
    </View>
  </TouchableOpacity>
);
