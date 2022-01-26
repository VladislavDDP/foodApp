import React from 'react';
import {TextInput, View} from 'react-native';

import {IconButton} from '../../../components/icon-button/IconButton.component';
import {useTheme} from '../../../theme/theme';
import {styles} from './search-header.styles';

interface Props {
  onPress: () => void;
  onChangeText: (text: string) => void;
}

export const SearchHeader: React.FC<Props> = ({onPress, onChangeText}) => {
  const {theme} = useTheme();

  return (
    <View style={styles.container}>
      <IconButton name="chevron-left" onPress={onPress} />
      <TextInput
        autoFocus
        autoCapitalize="none"
        onChangeText={onChangeText}
        style={[styles.textInput, {color: theme.colorScheme.primaryText}]}
        placeholder="Search"
      />
    </View>
  );
};
