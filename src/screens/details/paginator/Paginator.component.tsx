import React from 'react';
import {Dimensions} from 'react-native';
import {SharedValue} from 'react-native-gesture-handler/lib/typescript/handlers/gestures/reanimatedWrapper';
import Animated, {Extrapolate, interpolate, useAnimatedStyle} from 'react-native-reanimated';

import {styles} from './paginator.styles';

const {width} = Dimensions.get('window');
const step = 1;
const lowOpacity = 0.3;
const maxOpacity = 1;

interface Props {
  gallery: Array<string>;
  scrollX: SharedValue<number>;
}

export const Paginator: React.FC<Props> = ({gallery, scrollX}) => (
  <Animated.View style={styles.container}>
    {gallery.map((_, i) => (
      <Page key={i} i={i} scrollX={scrollX} />
    ))}
  </Animated.View>
);

export const Page: React.FC<{scrollX: SharedValue<number>; i: number}> = ({scrollX, i}) => {
  const rStyle = useAnimatedStyle(() => {
    const opacity = interpolate(
      scrollX.value,
      [(i - step) * width, i * width, (i + step) * width],
      [lowOpacity, maxOpacity, lowOpacity],
      Extrapolate.CLAMP,
    );

    return {opacity};
  });

  return <Animated.View key={i} style={[styles.dots, rStyle]} />;
};
