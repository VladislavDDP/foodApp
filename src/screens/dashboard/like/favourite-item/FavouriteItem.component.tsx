import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import {Food} from '../../../../model/foodModel';
import {colors} from '../../../../vars/variables';

interface Props {
  item: Food;
}

export const FavouriteItem: React.FC<Props> = ({item}) => (
  <View style={styles.container}>
    <Image source={{uri: item.photo}} style={styles.itemImage} />
    <View style={styles.itemDescription}>
      <Text style={styles.itemName}>{item.name}</Text>
      <Text style={styles.itemPrice}>{item.price}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
    marginHorizontal: 40,
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
});
