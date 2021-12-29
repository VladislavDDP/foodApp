import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

interface Props {
  onPress: () => void;
}

export const BackButton: React.FC<Props> = ({onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <Icon name="chevron-left" size={20} />
  </TouchableOpacity>
);
