import React from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';

import {Food} from '../../../../model/food';
import {styles} from './food-item.styles';

interface Props {
  food: Food;
  backColor: string;
  onPress: (food: Food) => void;
}

export const FoodItem: React.FC<Props> = props => {
  const selectFood = () => props.onPress(props.food);

  return (
    <TouchableOpacity onPress={selectFood}>
      <View style={styles.container}>
        <View style={[styles.wrapper, {backgroundColor: props.backColor}]}>
          <Image source={{uri: props.food.photo}} style={styles.image} />
          <View style={styles.decriptionContainer}>
            <Text style={styles.itemTitle}>{props.food.name}</Text>
            <Text style={styles.itemPrice}>{props.food.price}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
