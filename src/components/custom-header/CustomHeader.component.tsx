import React from 'react';
import {Text, View} from 'react-native';

import {IconButton} from '../icon-button/IconButton.component';
import {styles} from './custom-header.styles';

interface Props {
  title: string;
  onPress: () => void;
}

export const CustomHeader: React.FC<Props> = ({title, onPress}) => (
  <View style={styles.container}>
    <IconButton iconName="chevron-left" size={20} color="#333" onPress={onPress} />
    <Text style={styles.title}>{title}</Text>
  </View>
);
