import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from './list-header.styles';

interface Props {
  iconName: string;
  text: string;
}

export const ListHeader: React.FC<Props> = ({iconName, text}) => (
  <View style={styles.container}>
    <Icon name={iconName} size={10} color="#000" />
    <Text style={styles.headerListText}>{text}</Text>
  </View>
);
