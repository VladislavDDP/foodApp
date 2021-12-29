import React from 'react';
import * as Animatable from 'react-native-animatable';

import {Food} from '../../../model/foodModel';
import {FoodItem} from '../../dashboard/home/food-item/FoodItem.component';

const duration = 300;

interface Props {
  item: Food;
  index: number;
  goToFoodDetails: (item: Food) => void;
}

export const AnimatedFoodItem: React.FC<Props> = ({item, index, goToFoodDetails}) => {
  const goToDetails = () => goToFoodDetails(item);

  return (
    <Animatable.View animation="bounceIn" delay={duration * index}>
      <FoodItem food={item} onPress={goToDetails} />
    </Animatable.View>
  );
};
