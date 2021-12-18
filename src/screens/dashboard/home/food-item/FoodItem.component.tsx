import React from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';

import {Food} from '../../../../model/foodModel';
import {styles} from './food-item.styles';

interface Props {
  item: Food;
  onPress: () => void;
}

export const FoodItem: React.FC<Props> = props => (
  <TouchableOpacity onPress={props.onPress}>
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Image source={{uri: props.item.photo}} style={styles.image} />
        <View style={styles.decriptionContainer}>
          <Text style={styles.itemTitle}>{props.item.name}</Text>
          <Text style={styles.itemPrice}>{props.item.price}</Text>
        </View>
      </View>
    </View>
  </TouchableOpacity>
);
