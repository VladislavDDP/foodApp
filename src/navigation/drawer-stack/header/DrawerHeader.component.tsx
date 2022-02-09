import {View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Observer, useLocalObservable} from 'mobx-react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from './drawer-header.styles';
import {ShoppingCartIcon} from './shopping-cart/ShoppingCartIcon.component';
import {CartStore} from '../../../store/cartStore';

interface Props {
  openDrawer: () => void;
  navigateToCart: () => void;
}

export const DrawerHeader: React.FC<Props> = ({openDrawer, navigateToCart}) => {
  const cart = useLocalObservable(() => new CartStore());
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      await cart.getCartItems();
    });

    return unsubscribe;
  }, []);

  return (
    <Observer>
      {() => (
        <View style={styles.container}>
          <Icon name="bars" color="#999" size={25} onPress={openDrawer} />
          <ShoppingCartIcon qty={cart.cartItemsQty} onPress={navigateToCart} />
        </View>
      )}
    </Observer>
  );
};
