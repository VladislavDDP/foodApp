import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  icon: string;
  onPress: () => void;
}

export const IconBtn: React.FC<Props> = ({icon, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <Icon name={icon} color="#333" size={18} />
  </TouchableOpacity>
);
