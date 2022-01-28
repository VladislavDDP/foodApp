import React from 'react';
import {TouchableOpacity, Image, Text, View} from 'react-native';

import {TextWrapper} from '../../../../components/text-wrapper/TextWrapper.component';
import {ColorIntencity} from '../../../../components/view-theme/ColorIntencity';
import {ViewTheme} from '../../../../components/view-theme/ViewTheme.component';
import {Food} from '../../../../model/food';
import {styles} from './food-item.styles';

interface Props {
  food: Food;
  onPress: (food: Food) => void;
}

export const FoodItem: React.FC<Props> = props => {
  const selectFood = () => props.onPress(props.food);

  return (
    <TouchableOpacity onPress={selectFood}>
      <View style={styles.container}>
        <ViewTheme colorIntencity={ColorIntencity.Strong} style={styles.wrapper}>
          <Image source={{uri: props.food.photo}} style={styles.image} />
          <View style={styles.decriptionContainer}>
            <TextWrapper style={styles.itemTitle}>{props.food.name}</TextWrapper>
            <Text style={styles.itemPrice}>{props.food.price}</Text>
          </View>
        </ViewTheme>
      </View>
    </TouchableOpacity>
  );
};
