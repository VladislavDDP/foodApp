import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './total-price.styles';

const fixedPoints = 2;

interface Props {
  totalCartPrice: number;
}

export const TotalPrice: React.FC<Props> = ({totalCartPrice}) => (
  <View style={styles.finalPriceContainer}>
    <Text style={styles.totalText}>Total: </Text>
    <Text style={styles.totalPrice}>{totalCartPrice.toFixed(fixedPoints)}</Text>
  </View>
);
