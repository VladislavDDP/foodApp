import React from 'react';
import {Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';

interface Props {
  text: string;
  style: Array<TextStyle>;
  onPress: () => void;
}

export const ModalButton: React.FC<Props> = ({text, onPress, style}) => (
  <TouchableOpacity style={style} onPress={onPress}>
    <Text style={style}>{text}</Text>
  </TouchableOpacity>
);
