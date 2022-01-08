import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {Food} from '../../../../model/foodModel';
import {styles} from './favourite-item.styles';

interface Props {
  item: Food;
  deleteItem: (id: number) => void;
}

export const FavouriteItem: React.FC<Props> = ({item, deleteItem}) => {
  const deleteOnLongPress = () => deleteItem(item.id);

  return (
    <TouchableOpacity onLongPress={deleteOnLongPress} style={styles.container}>
      <Image source={{uri: item.photo}} style={styles.itemImage} />
      <View style={styles.itemDescription}>
        <Text style={styles.itemName}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};
