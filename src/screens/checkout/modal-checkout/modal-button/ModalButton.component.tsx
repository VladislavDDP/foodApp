import React from 'react';
import {StyleProp, Text, TextStyle, TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {styles} from './modal-button.styles';

interface Props extends TouchableOpacityProps {
  text: string;
  textStyle?: StyleProp<TextStyle>;
}

export const ModalButton: React.FC<Props> = ({text, textStyle, ...rest}) => (
  <TouchableOpacity {...rest}>
    <Text style={[styles.btnText, textStyle]}>{text}</Text>
  </TouchableOpacity>
);
