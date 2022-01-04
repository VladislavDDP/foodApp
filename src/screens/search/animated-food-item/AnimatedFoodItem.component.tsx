import React from 'react';
import * as Animatable from 'react-native-animatable';

import {Food} from '../../../model/foodModel';
import {FoodItem} from '../../dashboard/home/food-item/FoodItem.component';

const duration = 300;
const divider = 2;
const maxMargin = 30;
const minMargin = 0;

interface Props {
  item: Food;
  index: number;
  goToFoodDetails: (item: Food) => void;
}

export const AnimatedFoodItem: React.FC<Props> = ({item, index, goToFoodDetails}) => {
  const marginTop = index % divider ? maxMargin : minMargin;

  const goToDetails = () => goToFoodDetails(item);

  return (
    <Animatable.View style={{marginTop}} animation="bounceIn" delay={duration * index}>
      <FoodItem food={item} backColor="#f1f1f1" onPress={goToDetails} />
    </Animatable.View>
  );
};
