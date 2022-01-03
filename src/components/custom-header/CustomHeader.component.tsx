import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import {IconButton} from '../icon-button/IconButton.component';
import {styles} from './custom-header.styles';

interface Props {
  title: string;
  onPress: () => void;
}

export const CustomHeader: React.FC<Props> = ({title, onPress}) => (
  <SafeAreaView style={styles.container}>
    <View style={styles.headerContainer}>
      <IconButton iconName="chevron-left" size={18} color="#333" onPress={onPress} />
      <Text style={styles.title}>{title}</Text>
    </View>
  </SafeAreaView>
);
