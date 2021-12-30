import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from './item-not-found.styles';

export const ItemNotFound = () => (
  <View style={styles.container}>
    <Icon name="search" color="#999" size={100} />
    <Text style={styles.title}>Item not found</Text>
    <Text style={styles.text}>Try searching the item with a different keyword.</Text>
  </View>
);
