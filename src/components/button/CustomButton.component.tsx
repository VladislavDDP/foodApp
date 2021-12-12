import React from 'react';
import {StyleProp, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';

import {AppText} from '../app-text/AppText.component';
import {styles} from './custom-btn.styles';

interface Props {
  text: string;
  buttonStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
}

export const CustomButton: React.FC<Props> = props => (
  <TouchableOpacity style={[props.buttonStyle, styles.button]}>
    <AppText text={props.text} labelStyle={[props.labelStyle, styles.buttonText]} />
  </TouchableOpacity>
);