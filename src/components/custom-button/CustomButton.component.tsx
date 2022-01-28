import React from 'react';
import {StyleProp, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle} from 'react-native';

import {TextWrapper} from '../text-wrapper/TextWrapper.component';
import {styles} from './custom-btn.styles';

interface Props extends TouchableOpacityProps {
  text: string;
  buttonStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
}

export const CustomButton: React.FC<Props> = ({text, buttonStyle, labelStyle, disabled, ...rest}) => (
  <TouchableOpacity {...rest} style={[styles.button, buttonStyle, disabled && styles.disabled]}>
    <TextWrapper style={[styles.buttonText, labelStyle]}>{text}</TextWrapper>
  </TouchableOpacity>
);
