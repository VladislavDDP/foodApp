import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  iconName: string;
  size: number;
  color: string;
  onPress: () => void;
}

export const IconButton: React.FC<Props> = props => (
  <TouchableOpacity style={styles.container} onPress={props.onPress}>
    <Icon name={props.iconName} size={props.size} color={props.color} />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});
