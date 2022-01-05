import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {inject, observer} from 'mobx-react';

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
import {CartFood} from '../../store/cart';

interface Props extends AppNavigatorScreenProps<Screens.Cart> {
  cart: {cartItems: Array<CartFood>; increaseQty: (id: number) => void; decreaseQty: (id: number) => void; removeFromCart: (id: number) => void};
}

export const ShoppingCart: React.FC<Props> = inject('cart')(
  observer(({navigation, ...props}) => {
    const [food, setFood] = useState<Array<CartFood>>([]);
    const {cartItems, increaseQty, decreaseQty, removeFromCart} = props.cart;

    useEffect(() => {
      setFood(cartItems);
    }, [cartItems]);

    const likeRow = (rowKey: number) => {
      // TODO: like item and add to Async Storage
    };

    const goToCheckout = () => {
      navigation.navigate(Screens.Checkout);
    };

    const renderItem = ({item}: {item: CartFood}) => <CartItem item={item} increaseQty={increaseQty} decreaseQty={decreaseQty} />;

    const renderHiddenItem = (item: {item: CartFood}) => {
      const likeItem = () => likeRow(item.item.id);
      const deleteItem = () => removeFromCart(item.item.id);

      return <HiddenItemWithActions onLike={likeItem} onDelete={deleteItem} />;
    };

    const renderListHeader = () => (food.length ? <ListHeader /> : null);

    const renderListEmpty = () => <EmptyBox icon="shopping-cart" title="Cart is empty" text="Add new items to cart" />;

    const extractKey = (item: CartFood) => item.id.toString();

    return (
      <View style={styles.container}>
        <CustomHeader title="Cart" onPress={navigation.goBack} />
        <SwipeListView
          data={food}
          ListHeaderComponent={renderListHeader}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          keyExtractor={extractKey}
          ListEmptyComponent={renderListEmpty}
          rightOpenValue={-110}
          disableRightSwipe
        />
        <CustomButton
          disabled={!food.length}
          labelStyle={styles.label}
          buttonStyle={{backgroundColor: food.length ? colors.orange : colors.light}}
          text="Checkout"
          onPress={goToCheckout}
        />
      </View>
    );
  }),
);
