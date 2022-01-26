import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {useTheme} from '../../theme/theme';

interface Props {
  name: string;
  onPress: () => void;
}

export const IconButton: React.FC<Props> = ({name, onPress}) => {
  const {theme} = useTheme();

  return (
    <TouchableOpacity onPress={onPress}>
      <Icon name={name} size={20} color={theme.colorScheme.primaryText} />
    </TouchableOpacity>
  );
};
