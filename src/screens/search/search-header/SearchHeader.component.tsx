import React from 'react';
import {View} from 'react-native';

import {IconButton} from '../../../components/icon-button/IconButton.component';
import {InputTheme} from '../../../components/input-theme/InputTheme.component';
import {styles} from './search-header.styles';

interface Props {
  onPress: () => void;
  onChangeText: (text: string) => void;
}

export const SearchHeader: React.FC<Props> = ({onPress, onChangeText}) => (
  <View style={styles.container}>
    <IconButton name="chevron-left" size={18} onPress={onPress} />
    <InputTheme autoFocus autoCapitalize="none" onChangeText={onChangeText} style={styles.textInput} placeholder="Search" />
  </View>
);
