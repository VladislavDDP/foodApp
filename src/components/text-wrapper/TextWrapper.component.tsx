import React from 'react';
import {Text, TextProps} from 'react-native';

import {useTheme} from '../../theme/theme';

export const TextWrapper: React.FC<TextProps> = ({style, children, ...rest}) => {
  const {theme} = useTheme();

  return (
    <Text {...rest} style={[{color: theme.colorScheme.text}, style]}>
      {children}
    </Text>
  );
};
