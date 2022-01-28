import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {useTheme} from '../../theme/theme';
import {TextWrapper} from '../text-wrapper/TextWrapper.component';
import {styles} from './list-header.styles';

interface Props {
  iconName: string;
  text: string;
}

export const ListHeader: React.FC<Props> = ({iconName, text}) => {
  const {theme} = useTheme();

  return (
    <View style={styles.container}>
      <Icon name={iconName} size={10} color={theme.colorScheme.text} />
      <TextWrapper style={styles.headerListText}>{text}</TextWrapper>
    </View>
  );
};
