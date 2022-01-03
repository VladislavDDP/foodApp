import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from './empty-box.styles';

interface Props {
  icon: string;
  title: string;
  text: string;
}

export const EmptyBox: React.FC<Props> = props => (
  <View style={styles.container}>
    <Icon name={props.icon} color="#999" size={100} />
    <Text style={styles.title}>{props.title}</Text>
    <Text style={styles.text}>{props.text}</Text>
  </View>
);
