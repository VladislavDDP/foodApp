import React from 'react';
import {StyleProp, Text, TextStyle, TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {useTheme} from '../../theme/theme';

import {styles} from './submit-button.styles';

interface Props extends TouchableOpacityProps {
  title: string;
  textStyle?: StyleProp<TextStyle>;
}

export const SubmitButton: React.FC<Props> = ({title, style, textStyle, ...rest}) => {
  const {theme} = useTheme();

  return (
    <TouchableOpacity {...rest} style={[styles.container, {backgroundColor: theme.colorScheme.accent}, style]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};
