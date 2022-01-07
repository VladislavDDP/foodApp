import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from './shopping-cart.styles';

interface Props {
  qty: number;
  onPress: () => void;
}

export const ShoppingCartIcon: React.FC<Props> = ({qty, onPress}) => (
  <TouchableOpacity onPress={onPress}>
    <View style={styles.iconContainer}>
      <Icon name="shopping-cart" color="#999" size={25} />
      {qty ? (
        <View style={styles.qtyContainer}>
          <Text style={styles.qtyText}>{qty}</Text>
        </View>
      ) : null}
    </View>
  </TouchableOpacity>
);
