import React, {useEffect} from 'react';
import {Observer, useLocalObservable} from 'mobx-react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import {styles} from './drawer-header.styles';
import {ShoppingCartIcon} from './shopping-cart/ShoppingCartIcon.component';
import {Cart} from '../../../store/cart';
import {useNavigation} from '@react-navigation/native';

interface Props {
  openDrawer: () => void;
  navigateToCart: () => void;
}

export const DrawerHeader: React.FC<Props> = ({openDrawer, navigateToCart}) => {
  const cart = useLocalObservable(() => new Cart());
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      await cart.getCartItems();
    });

    return unsubscribe;
  }, [navigation]);

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
