import React from 'react';
import {StyleProp, TextStyle, TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {TextWrapper} from '../text-wrapper/TextWrapper.component';
import {styles} from './custom-btn.styles';

interface Props extends TouchableOpacityProps {
  text: string;
  labelStyle?: StyleProp<TextStyle>;
}

export const CustomButton: React.FC<Props> = ({text, style, labelStyle, disabled, ...rest}) => (
  <TouchableOpacity {...rest} style={[styles.button, disabled && styles.disabled, style]}>
    <TextWrapper style={[styles.buttonText, labelStyle]}>{text}</TextWrapper>
  </TouchableOpacity>
);
