import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

import {useTheme} from '../../theme/theme';

export const InputTheme = React.forwardRef<TextInput, TextInputProps>((props: TextInputProps, ref) => {
  const {theme} = useTheme();

  return <TextInput {...props} ref={ref} style={[props.style, {color: theme.colorScheme.text}]} />;
});
