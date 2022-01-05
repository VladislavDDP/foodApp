import React from 'react';
import {TouchableOpacity, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from './hidden-button.styles';

interface Props {
  icon: string;
  buttonStyle: ViewStyle;
  onPress: () => void;
}

export const HiddenButton: React.FC<Props> = ({icon, buttonStyle, onPress}) => (
  <TouchableOpacity onPress={onPress} style={[styles.backRightBtn, buttonStyle]}>
    <Icon name={icon} size={16} color="#fff" />
  </TouchableOpacity>
);
