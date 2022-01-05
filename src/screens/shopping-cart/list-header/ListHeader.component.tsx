import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from './list-header.styles';

export const ListHeader = () => (
  <View style={styles.container}>
    <Icon name="hand-pointer-o" size={10} color="#000" />
    <Text style={styles.headerListText}>swipe on an item to delete</Text>
  </View>
);
