import React from 'react';
import {StyleProp, Text, TextProps, TextStyle} from 'react-native';

import {styles} from './app-text.styles';

interface Props {
  text: string;
  labelStyle?: StyleProp<TextStyle>;
}

export const AppText: React.FC<TextProps> = ({style, children, ...rest}) => (
  <Text {...rest} style={[styles.text, style]}>
    {children}
  </Text>
);
