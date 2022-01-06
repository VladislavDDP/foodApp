import React from 'react';
import {TextInput, View} from 'react-native';

import {BackButton} from '../../../components/back-button/BackButton.component';
import {styles} from './search-header.styles';

interface Props {
  value: string;
  onPress: () => void;
  onChangeText: (text: string) => void;
}

export const SearchHeader: React.FC<Props> = ({value, onPress, onChangeText}) => (
  <View style={styles.container}>
    <BackButton onPress={onPress} />
    <TextInput value={value} autoFocus autoCapitalize="none" onChangeText={onChangeText} style={styles.textInput} placeholder="Search" />
  </View>
);
