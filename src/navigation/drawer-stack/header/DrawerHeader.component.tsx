import React from 'react';
import {observer} from 'mobx-react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from './drawer-header.styles';
import {useStore} from '../../../store/store';

interface Props {
  openDrawer: () => void;
  navigateToCart: () => void;
}

export const DrawerHeader: React.FC<Props> = observer(({openDrawer, navigateToCart}) => {
  const {cart} = useStore();

  return (
    <View style={styles.container}>
      <Icon name="bars" color="#999" size={25} onPress={openDrawer} />
      {cart.cartItemsQty ? (
        <TouchableOpacity onPress={navigateToCart}>
          <View style={styles.iconContainer}>
            <Icon name="shopping-cart" color="#999" size={25} onPress={navigateToCart} />
            <View style={styles.qtyContainer}>
              <Text style={styles.qtyText}>{cart.cartItemsQty}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ) : (
        <Icon name="shopping-cart" color="#999" size={25} onPress={navigateToCart} />
      )}
    </View>
  );
});
