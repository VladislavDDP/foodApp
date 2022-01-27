import React from 'react';
import {SafeAreaView, ViewProps} from 'react-native';

import {useTheme} from '../../theme/theme';

interface Props extends ViewProps {}

export const SafeAreaTheme: React.FC<Props> = ({style, children, ...rest}) => {
  const {theme} = useTheme();

  return (
    <SafeAreaView {...rest} style={[style, {backgroundColor: theme.colorScheme.primaryLight}]}>
      {children}
    </SafeAreaView>
  );
};
