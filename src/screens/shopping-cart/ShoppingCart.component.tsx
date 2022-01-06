import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {observer} from 'mobx-react';

import {Screens} from '../../navigation/root-stack/routes.types';
import {AppNavigatorScreenProps} from '../../navigation/root-stack/stack.types';
import {colors} from '../../vars/variables';
import {styles} from './shopping-cart.styles';
import {CustomButton} from '../../components/button/CustomButton.component';
import {CustomHeader} from '../../components/custom-header/CustomHeader.component';
import {ListHeader} from './list-header/ListHeader.component';
import {CartItem} from './cart-item/CartItem.component';
import {HiddenItemWithActions} from './hidden-item-with-actions/HiddenItemWithActions.component';
import {EmptyBox} from '../../components/empty-box/EmptyBox.component';
import {useStore} from '../../store/store';
import {CartFood} from '../../model/cartFoodModel';

interface Props extends AppNavigatorScreenProps<Screens.Cart> {}

export const ShoppingCart: React.FC<Props> = observer(({navigation}) => {
  const {cart} = useStore();

  const likeRow = (rowKey: number) => {
    // TODO: like item and add to Async Storage
  };

  const goToCheckout = () => {
    navigation.navigate(Screens.Checkout);
  };

  const renderItem = ({item}: {item: CartFood}) => <CartItem item={item} />;

  const renderHiddenItem = (item: {item: CartFood}) => {
    const likeItem = () => likeRow(item.item.id);
    const deleteItem = () => cart.removeFromCart(item.item.id);

    return <HiddenItemWithActions onLike={likeItem} onDelete={deleteItem} />;
  };

  const renderListHeader = () => (cart.cartItemsQty ? <ListHeader /> : null);

  const renderListEmpty = () => <EmptyBox icon="shopping-cart" title="Cart is empty" text="Add new items to cart" />;

  const extractKey = (item: CartFood) => item.id.toString();

  return (
    <View style={styles.container}>
      <CustomHeader title="Cart" onPress={navigation.goBack} />
      <SwipeListView
        data={cart.cartItems}
        ListHeaderComponent={renderListHeader}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        keyExtractor={extractKey}
        ListEmptyComponent={renderListEmpty}
        rightOpenValue={-110}
        disableRightSwipe
      />
      <CustomButton
        disabled={!cart.cartItemsQty}
        labelStyle={styles.label}
        buttonStyle={{backgroundColor: cart.cartItemsQty ? colors.orange : colors.light}}
        text="Checkout"
        onPress={goToCheckout}
      />
    </View>
  );
});
