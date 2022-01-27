import React from 'react';
import {ActivityIndicator, ActivityIndicatorProps} from 'react-native';

import {useTheme} from '../../theme/theme';

interface Props extends ActivityIndicatorProps {}

export const ActivityIndicatorTheme: React.FC<Props> = ({style, ...rest}) => {
  const {theme} = useTheme();

  return <ActivityIndicator {...rest} style={[{backgroundColor: theme.colorScheme.primaryLight}, style]} />;
};
