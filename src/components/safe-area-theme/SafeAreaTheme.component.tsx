import React from 'react';
import {SafeAreaView} from 'react-native';
import {SafeAreaViewProps} from 'react-native-safe-area-context';

import {useTheme} from '../../theme/theme';

export const SafeAreaTheme: React.FC<SafeAreaViewProps> = ({style, children, ...rest}) => {
  const {theme} = useTheme();

  return (
    <SafeAreaView {...rest} style={[style, {backgroundColor: theme.colorScheme.primaryLight}]}>
      {children}
    </SafeAreaView>
  );
};
