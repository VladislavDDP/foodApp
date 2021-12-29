import React from 'react';
import {Animated, View} from 'react-native';

import {screenWidth} from '../../../vars/variables';
import {styles} from './paginator.styles';

const step = 1;
const lowOpacity = 0.3;
const maxOpacity = 1;

interface Props {
  gallery: Array<string>;
  scrollX: Animated.Value;
}

export const Paginator: React.FC<Props> = props => (
  <View style={styles.container}>
    {props.gallery.map((_, i) => {
      const inputRange = [(i - step) * screenWidth, i * screenWidth, (i + step) * screenWidth];
      const opacity = props.scrollX.interpolate({inputRange, outputRange: [lowOpacity, maxOpacity, lowOpacity], extrapolate: 'clamp'});

      return <Animated.View key={i} style={[styles.dots, {opacity}]} />;
    })}
  </View>
);
