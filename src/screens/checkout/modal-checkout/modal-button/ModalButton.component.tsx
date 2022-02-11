import React from 'react';
import {Text, TextStyle, TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {styles} from './modal-button.styles';

interface Props extends TouchableOpacityProps {
  text: string;
  style: Array<TextStyle>;
}

export const ModalButton: React.FC<Props> = ({text, style, ...rest}) => (
  <TouchableOpacity style={[style]} {...rest}>
    <Text style={[styles.btnText, style]}>{text}</Text>
  </TouchableOpacity>
);
