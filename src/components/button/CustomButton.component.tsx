import React from 'react';
import {StyleProp, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';

import {DefaultStyledText} from '../app-text/AppText.component';
import {styles} from './custom-btn.styles';

interface Props {
  text: string;
  buttonStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  onPress: () => void;
}

export const CustomButton: React.FC<Props> = props => (
  <TouchableOpacity style={[props.buttonStyle, styles.button]} onPress={props.onPress}>
    <DefaultStyledText style={[props.labelStyle, styles.buttonText]}>{props.text}</DefaultStyledText>
  </TouchableOpacity>
);
