import React from 'react';
import {TextInput, View} from 'react-native';

import {BackButton} from '../../../components/back-button/BackButton.component';
import {styles} from './search-header.styles';

interface Props {
  onPress: () => void;
  onChangeText: (text: string) => void;
}

export const SearchHeader: React.FC<Props> = ({onPress, onChangeText}) => (
  <View style={styles.container}>
    <BackButton onPress={onPress} />
    <TextInput autoFocus autoCapitalize="none" onChangeText={onChangeText} style={{marginLeft: 40}} placeholder="Search" />
  </View>
);
