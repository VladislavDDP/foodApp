import React from 'react';
import {Image, Text, View} from 'react-native';

import {Food} from '../../../../model/foodModel';
import {styles} from './food-item.styles';

export const FoodItem = ({item}: {item: Food}) => (
  <View style={styles.container}>
    <View style={styles.wrapper}>
      <Image source={{uri: item.photo}} style={styles.image} />
      <View style={styles.decriptionContainer}>
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    </View>
  </View>
);
