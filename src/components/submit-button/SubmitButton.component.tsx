import React from 'react';
import {StyleProp, Text, TextStyle, TouchableOpacity, ViewStyle} from 'react-native';

import {styles} from './submit-button.styles';

interface Props {
  title: string;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}

export const SubmitButton: React.FC<Props> = ({title, buttonStyle, textStyle, onPress}) => (
  <TouchableOpacity style={[styles.container, buttonStyle]} onPress={onPress}>
    <Text style={[styles.text, textStyle]}>{title}</Text>
  </TouchableOpacity>
);
