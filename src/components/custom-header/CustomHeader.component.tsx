import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from './custom-header.styles';

interface Props {
  title: string;
  onPress: () => void;
}

export const CustomHeader: React.FC<Props> = ({title, onPress}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={onPress}>
      <Icon name="chevron-left" color="#333" size={20} />
    </TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
  </View>
);
