import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {styles} from './change-btn.styles';

interface Props {
  onPress: () => void;
}

export const ChangeButton: React.FC<Props> = ({onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <Text style={styles.changeBtn}>change</Text>
  </TouchableOpacity>
);
