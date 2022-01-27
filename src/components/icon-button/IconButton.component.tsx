import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';

import {useTheme} from '../../theme/theme';
import {iconComponentMap} from './icon-component-map';
import {IconTypes} from './icon-types';

interface Props extends TouchableOpacityProps {
  name: string;
  size: number;
  color?: string;
  iconType?: IconTypes;
}

export const IconButton: React.FC<Props> = ({style, name, size, color, iconType, ...rest}) => {
  const {theme} = useTheme();

  const Icon = iconComponentMap[iconType || IconTypes.FontAwesomeIcon];

  return (
    <TouchableOpacity {...rest} style={[style]}>
      <Icon name={name} size={size} color={color || theme.colorScheme.text} />
    </TouchableOpacity>
  );
};
