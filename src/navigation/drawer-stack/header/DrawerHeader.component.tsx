import React from 'react';
import {observer} from 'mobx-react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from './drawer-header.styles';
import {useStore} from '../../../store/store';
import {ShoppingCartIcon} from './shopping-cart/ShoppingCartIcon.component';

interface Props {
  openDrawer: () => void;
  navigateToCart: () => void;
}

export const DrawerHeader: React.FC<Props> = observer(({openDrawer, navigateToCart}) => {
  const {cart} = useStore();

  return (
    <View style={styles.container}>
      <Icon name="bars" color="#999" size={25} onPress={openDrawer} />
      <ShoppingCartIcon qty={cart.cartItemsQty} onPress={navigateToCart} />
    </View>
  );
});
