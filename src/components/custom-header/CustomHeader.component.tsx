import React from 'react';
import {Text, View, SafeAreaView} from 'react-native';

import {useTheme} from '../../theme/theme';
import {IconButton} from '../icon-font-awesome5-button/IconButton.component';
import {styles} from './custom-header.styles';

interface Props {
  title: string;
  onPress: () => void;
}

export const CustomHeader: React.FC<Props> = ({title, onPress}) => {
  const {theme} = useTheme();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <IconButton iconName="chevron-left" size={18} color={theme.colorScheme.primaryText} onPress={onPress} />
        <Text style={[styles.title, {color: theme.colorScheme.primaryText}]}>{title}</Text>
        <IconButton iconName="chevron-left" size={18} color="transparent" onPress={onPress} />
      </View>
    </SafeAreaView>
  );
};
