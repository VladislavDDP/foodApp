import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './total-price.styles';

interface Props {
  totalCartPrice: number;
}

export const TotalPrice: React.FC<Props> = ({totalCartPrice}) => (
  <View style={styles.finalPriceContainer}>
    <Text style={styles.totalText}>Total: </Text>
    <Text style={styles.totalPrice}>{totalCartPrice}</Text>
  </View>
);
