import React from 'react';
import {View} from 'react-native';

import {IconButton} from '../../../../components/icon-button/IconButton.component';
import {styles} from './header-menu.styles';

interface Props {
  onBurgerPress: () => void;
  onCartPress: () => void;
}

export const HeaderMenu: React.FC<Props> = props => (
  <View style={styles.headerContainer}>
    <IconButton iconName="bars" color="#000" size={25} onPress={props.onBurgerPress} />
    <IconButton iconName="shopping-cart" color="#999" size={25} onPress={props.onCartPress} />
  </View>
);
