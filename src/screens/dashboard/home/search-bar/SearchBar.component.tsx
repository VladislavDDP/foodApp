import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from './search-bar.styles';

export const SearchBar = () => {
  const [input, setInput] = useState('');

  return (
    <View style={styles.searchBar}>
      <Icon name="search" size={25} color="#333" />
      <TextInput value={input} style={styles.searchInput} onChangeText={setInput} placeholder="Search" />
    </View>
  );
};
