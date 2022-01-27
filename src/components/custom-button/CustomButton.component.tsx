import React from 'react';
import {StyleProp, TextStyle, TouchableOpacity, TouchableOpacityProps, ViewStyle} from 'react-native';

import {TextWrapper} from '../text-wrapper/TextWrapper.component';
import {styles} from './custom-btn.styles';

interface Props extends TouchableOpacityProps {
  text: string;
  buttonStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  disabled?: boolean;
  invertedColors?: boolean;
}

export const CustomButton: React.FC<Props> = ({text, buttonStyle, labelStyle, disabled, invertedColors, ...rest}) => (
  <TouchableOpacity {...rest} style={[buttonStyle, styles.button, invertedColors && styles.invertedBackgroundColor, disabled && styles.disabled]}>
    <TextWrapper style={[labelStyle, styles.buttonText, invertedColors && styles.invertedTextColor]}>{text}</TextWrapper>
  </TouchableOpacity>
);
