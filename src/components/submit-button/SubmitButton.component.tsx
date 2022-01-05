import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {styles} from './submit-button.styles';

interface Props {
  title: string;
  onPress: () => void;
}

export const SubmitButton: React.FC<Props> = ({title, onPress}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <Text style={styles.text}>{title}</Text>
  </TouchableOpacity>
);
