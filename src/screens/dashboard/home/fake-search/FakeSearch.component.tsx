import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {TextWrapper} from '../../../../components/text-wrapper/TextWrapper.component';
import {useTheme} from '../../../../theme/theme';
import {styles} from './fake-search.styles';

interface Props {
  onPress: () => void;
}

export const FakeSearch: React.FC<Props> = ({onPress}) => {
  const {theme} = useTheme();

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name="search" size={25} color={theme.colorScheme.text} />
      <TextWrapper style={styles.text}>Search</TextWrapper>
    </TouchableOpacity>
  );
};
