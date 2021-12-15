import React from 'react';
import {Text, TextProps} from 'react-native';

import {styles} from './app-text.styles';

export const DefaultStyledText: React.FC<TextProps> = ({style, children, ...rest}) => (
  <Text {...rest} style={[styles.text, style]}>
    {children}
  </Text>
);
