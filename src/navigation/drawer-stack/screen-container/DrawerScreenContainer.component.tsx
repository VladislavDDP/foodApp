import React from 'react';
import Animated, {Adaptable, interpolateNode} from 'react-native-reanimated';
import {useDrawerProgress} from '@react-navigation/drawer';
import {DrawerNavigationHelpers} from '@react-navigation/drawer/lib/typescript/src/types';

import {animationVars} from '../../../vars/variables';
import {DrawerHeader} from '../header/DrawerHeader.component';
import {styles} from './drawer-screen-container.styles';

interface Props {
  navigation: DrawerNavigationHelpers;
  children: Element;
}

export const DrawerScreenContainer: React.FC<Props> = props => {
  const progress = useDrawerProgress();

  const scale = interpolateNode(progress as Adaptable<number>, {
    inputRange: [animationVars.start, animationVars.end],
    outputRange: [animationVars.maxScale, animationVars.minScale],
  });
  const borderRadius = Animated.interpolateNode(progress as Adaptable<number>, {
    inputRange: [animationVars.start, animationVars.end],
    outputRange: [animationVars.minRadius, animationVars.maxRadius],
  });

  const openDrawer = () => props.navigation.openDrawer();

  const navigateToCart = () => {
    // TODO: navigation.navigate(Screens.ShoppingCart)
  };

  return (
    <Animated.View style={[styles.container, {borderRadius, transform: [{scale}]}]}>
      <DrawerHeader openDrawer={openDrawer} navigateToCart={navigateToCart} />
      {props.children}
    </Animated.View>
  );
};
