import React from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';

import {styles} from './app-text.styles';

interface Props {
  text: string;
  labelStyle?: StyleProp<TextStyle>;
}

export const AppText: React.FC<Props> = props => <Text style={[props.labelStyle, styles.text]}>{props.text}</Text>;
