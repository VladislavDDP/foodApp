import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {styles} from './default-button.styles';

interface Props {
  title: string;
  onPress: () => void;
}

export const DefaultButton: React.FC<Props> = ({title, onPress}) => (
  <TouchableOpacity style={styles.refreshButton} onPress={onPress}>
    <Text style={styles.btnText}>{title}</Text>
  </TouchableOpacity>
);
