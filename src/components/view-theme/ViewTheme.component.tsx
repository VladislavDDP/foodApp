import React from 'react';
import {View, ViewProps} from 'react-native';

import {useTheme} from '../../theme/theme';
import {ColorIntencity} from './ColorIntencity';

interface Props extends ViewProps {
  colorIntencity: ColorIntencity;
}

export const ViewTheme: React.FC<Props> = ({children, style, colorIntencity, ...rest}) => {
  const {theme} = useTheme();

  const backgroundColorMap = {
    [ColorIntencity.Weak]: theme.colorScheme.primaryLight,
    [ColorIntencity.Strong]: theme.colorScheme.primaryDark,
  };

  const backgroundColor = backgroundColorMap[colorIntencity];

  return (
    <View {...rest} style={[style, {backgroundColor}]}>
      {children}
    </View>
  );
};
