import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from './search-bar.styles';

interface Props {
  input: string;
  setInput: (text: string) => void;
}

export const SearchBar: React.FC<Props> = props => (
  <View style={styles.searchBar}>
    <Icon name="search" size={25} color="#333" />
    <TextInput value={props.input} style={styles.searchInput} onChangeText={props.setInput} placeholder="Search" />
  </View>
);
