import React from 'react';
import {Dimensions} from 'react-native';
import Animated, {Extrapolate, interpolate, SharedValue, useAnimatedStyle} from 'react-native-reanimated';

import {useTheme} from '../../../../theme/theme';
import {styles} from './page.styles';

const {width} = Dimensions.get('window');

const step = 1;
const lowOpacity = 0.3;
const maxOpacity = 1;

interface Props {
  scrollX: SharedValue<number>;
  index: number;
}

export const Page: React.FC<Props> = ({scrollX, index}) => {
  const {theme} = useTheme();
  const inputRange = [(index - step) * width, index * width, (index + step) * width];

  const rStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scrollX.value, inputRange, [lowOpacity, maxOpacity, lowOpacity], Extrapolate.CLAMP);
    return {opacity};
  });

  return <Animated.View style={[styles.dots, {backgroundColor: theme.colorScheme.accent}, rStyle]} />;
};
