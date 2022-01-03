import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {styles} from './change-btn.styles';

export const ChangeButton = () => (
  <TouchableOpacity onPress={() => undefined}>
    <Text style={styles.changeBtn}>change</Text>
  </TouchableOpacity>
);
