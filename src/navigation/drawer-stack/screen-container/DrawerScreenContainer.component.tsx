import React from 'react';
import {InteractionManager} from 'react-native';
import {useDrawerProgress} from '@react-navigation/drawer';
import Animated, {Adaptable, interpolateNode} from 'react-native-reanimated';
import {DrawerNavigationHelpers} from '@react-navigation/drawer/lib/typescript/src/types';

import {DrawerHeader} from '../header/DrawerHeader.component';
import {styles} from './drawer-screen-container.styles';
import {Screens} from '../../root-stack/routes.types';
import {useTheme} from '../../../theme/theme';

const animationVars = {
  start: 0,
  end: 1,
  minScale: 0.8,
  maxScale: 1,
  minRadius: 0,
  maxRadius: 20,
};

interface Props {
  navigation: DrawerNavigationHelpers;
  children: Element;
}

export const DrawerScreenContainer: React.FC<Props> = ({navigation, children}) => {
  const {theme} = useTheme();
  const progress = useDrawerProgress();

  const scale = interpolateNode(progress as Adaptable<number>, {
    inputRange: [animationVars.start, animationVars.end],
    outputRange: [animationVars.maxScale, animationVars.minScale],
  });
  const borderRadius = Animated.interpolateNode(progress as Adaptable<number>, {
    inputRange: [animationVars.start, animationVars.end],
    outputRange: [animationVars.minRadius, animationVars.maxRadius],
  });

  const openDrawer = () => navigation.openDrawer();

  const navigateToCart = () => {
    InteractionManager.runAfterInteractions(() => {
      navigation.navigate(Screens.Cart);
    });
  };

  return (
    <Animated.View style={[styles.container, {backgroundColor: theme.colorScheme.primaryLight, borderRadius, transform: [{scale}]}]}>
      <DrawerHeader openDrawer={openDrawer} navigateToCart={navigateToCart} />
      {children}
    </Animated.View>
  );
};
