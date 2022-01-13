import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {CartFood} from '../../../../model/cartFood';
import {styles} from './history-item.styles';

const fixedPoints = 1;

interface Props {
  item: CartFood;
  deleteItem: (id: number) => void;
}

export const HistoryItem: React.FC<Props> = ({item, deleteItem}) => {
  const deleteOnLongPress = () => deleteItem(item.id);

  return (
    <TouchableOpacity onLongPress={deleteOnLongPress} style={styles.container}>
      <Image source={{uri: item.photo}} style={styles.itemImage} />
      <View style={styles.itemDescription}>
        <Text style={styles.itemName}>{item.name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.itemPrice}>{item.price}</Text>
          <Text> x {item.qty}</Text>
        </View>
      </View>
      <Text style={styles.totalPrice}>Total: {(item.price * item.qty).toFixed(fixedPoints)}</Text>
    </TouchableOpacity>
  );
};
