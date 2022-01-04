import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {IconButton} from '../../../components/icon-button/IconButton.component';
import {Food} from '../../../model/foodModel';
import {colors} from '../../../vars/variables';

const step = 1;

interface Props {
  item: Food;
  deleteRow: (id: number) => void;
}

export const CartItem: React.FC<Props> = ({item, deleteRow}) => {
  const [quantity, setQuantity] = useState(step);

  const increaseQty = () => setQuantity(quantity + step);

  const decreaseQty = () => {
    if (quantity - step) {
      setQuantity(quantity - step);
    } else {
      deleteRow(item.id);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={{uri: item.photo}} style={styles.itemImage} />
      <View style={styles.itemDescription}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
      <View style={styles.qtyContainer}>
        <IconButton iconName="minus" size={10} color={colors.white} onPress={decreaseQty} />
        <Text style={styles.qtyNumber}>{quantity}</Text>
        <IconButton iconName="plus" size={10} color={colors.white} onPress={increaseQty} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 10,
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
  itemDescription: {
    flexDirection: 'column',
  },
  itemImage: {
    width: 70,
    height: 70,
    borderRadius: 50,
    marginRight: 10,
  },
  itemName: {
    fontSize: 17,
    fontWeight: '700',
  },
  itemPrice: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.orange,
  },
  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.orange,
    borderRadius: 15,
    paddingVertical: 5,
    paddingHorizontal: 5,
    position: 'absolute',
    right: 10,
    bottom: 10,
  },
  qtyNumber: {
    color: colors.white,
    fontSize: 15,
    width: 20,
    textAlign: 'center',
  },
});
