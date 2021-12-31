import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from './drawer-header.styles';

interface Props {
  openDrawer: () => void;
  navigateToCart: () => void;
}

export const DrawerHeader: React.FC<Props> = ({openDrawer, navigateToCart}) => (
  <View style={styles.container}>
    <Icon name="bars" color="#999" size={25} onPress={openDrawer} />
    <Icon name="shopping-cart" color="#999" size={25} onPress={navigateToCart} />
  </View>
);
