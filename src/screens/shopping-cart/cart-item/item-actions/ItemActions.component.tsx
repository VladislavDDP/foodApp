import React from 'react';
import {Animated} from 'react-native';

import {CartFood} from '../../../../model/cartFood';
import {HiddenItemWithActions} from '../../hidden-item-with-actions/HiddenItemWithActions.component';

const startValue = 0;
const endValue = 100;
const minTranslate = -10;

interface Props {
  dragX: Animated.AnimatedInterpolation;
  item: CartFood;
  likeItem: (item: CartFood) => void;
  removeItem: (id: number) => void;
}

export const ItemActions: React.FC<Props> = ({dragX, item, likeItem, removeItem}) => {
  const translateX = dragX.interpolate({
    inputRange: [startValue, endValue],
    outputRange: [minTranslate, startValue],
  });

  return (
    <Animated.View style={[{transform: [{translateX}]}]}>
      <HiddenItemWithActions item={item} toggleLike={likeItem} onDelete={removeItem} />
    </Animated.View>
  );
};
