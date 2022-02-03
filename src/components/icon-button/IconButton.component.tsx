import React from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import AwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Awesome5Icon from 'react-native-vector-icons/FontAwesome5';

import {useTheme} from '../../theme/theme';
import {IconTypes} from './icon-types';

interface Props extends TouchableOpacityProps {
  name: string;
  size: number;
  color?: string;
  iconType?: IconTypes;
}

export const IconButton: React.FC<Props> = ({style, name, size, color, iconType, ...rest}) => {
  const {theme} = useTheme();

  const iconComponentMap: {[key in IconTypes]: typeof AwesomeIcon | typeof Awesome5Icon} = {
    [IconTypes.FontAwesomeIcon]: AwesomeIcon,
    [IconTypes.FontAwesome5Icon]: Awesome5Icon,
  };

  const Icon = iconComponentMap[iconType as IconTypes];

  return (
    <TouchableOpacity {...rest} style={style}>
      <Icon name={name} size={size} color={color || theme.colorScheme.text} />
    </TouchableOpacity>
  );
};

IconButton.defaultProps = {
  iconType: IconTypes.FontAwesomeIcon,
};
