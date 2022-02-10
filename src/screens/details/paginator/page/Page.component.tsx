import React from 'react';
import {Dimensions} from 'react-native';
import Animated, {Extrapolate, interpolate, SharedValue, useAnimatedStyle} from 'react-native-reanimated';

import {styles} from './page.styles';

const {width} = Dimensions.get('window');

const step = 1;
const lowOpacity = 0.3;
const maxOpacity = 1;

interface Props {
  scrollX: SharedValue<number>;
  i: number;
}

export const Page: React.FC<Props> = ({scrollX, i}) => {
  const inputRange = [(i - step) * width, i * width, (i + step) * width];

  const rStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scrollX.value, inputRange, [lowOpacity, maxOpacity, lowOpacity], Extrapolate.CLAMP);
    return {opacity};
  });

  return <Animated.View key={i} style={[styles.dots, rStyle]} />;
};
