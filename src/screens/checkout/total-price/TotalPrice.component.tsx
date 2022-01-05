import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './total-price.styles';

export const TotalPrice = () => (
  <View style={styles.finalPriceContainer}>
    <Text style={styles.totalText}>Total: </Text>
    <Text style={styles.totalPrice}>23.000</Text>
  </View>
);
