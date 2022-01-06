import React from 'react';
import {Image, Text, View} from 'react-native';

import {IconButton} from '../../../components/icon-button/IconButton.component';
import {CartFood} from '../../../model/cartFoodModel';
import {colors} from '../../../vars/variables';
import {styles} from './cart-item.styles';

interface Props {
  item: CartFood;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
}

export const CartItem: React.FC<Props> = ({item, increaseQty, decreaseQty}) => {
  const addOneMoreItem = () => increaseQty(item.id);

  const removeOneMoreItem = () => {
    decreaseQty(item.id);
  };

  return (
    <View style={styles.container}>
      <Image source={{uri: item.photo}} style={styles.itemImage} />
      <View style={styles.itemDescription}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
      <View style={styles.qtyContainer}>
        <IconButton iconName="minus" size={10} color={colors.white} onPress={removeOneMoreItem} />
        <Text style={styles.qtyNumber}>{item.qty}</Text>
        <IconButton iconName="plus" size={10} color={colors.white} onPress={addOneMoreItem} />
      </View>
    </View>
  );
};
