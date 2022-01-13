import React from 'react';
import {View} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';
import {observer} from 'mobx-react';

import {Screens} from '../../navigation/root-stack/routes.types';
import {AppNavigatorScreenProps} from '../../navigation/root-stack/stack.types';
import {colors} from '../../vars/variables';
import {styles} from './shopping-cart.styles';
import {CustomButton} from '../../components/button/CustomButton.component';
import {CustomHeader} from '../../components/custom-header/CustomHeader.component';
import {ListHeader} from '../../components/list-header/ListHeader.component';
import {CartItem} from './cart-item/CartItem.component';
import {HiddenItemWithActions} from './hidden-item-with-actions/HiddenItemWithActions.component';
import {EmptyBox} from '../../components/empty-box/EmptyBox.component';
import {useStore} from '../../store/store';
import {CartFood} from '../../model/cartFood';

interface Props extends AppNavigatorScreenProps<Screens.Cart> {}

export const ShoppingCart: React.FC<Props> = observer(({navigation}) => {
  const {cart, foodStore} = useStore();

  const goToCheckout = () => {
    navigation.navigate(Screens.Checkout);
  };

  const renderItem = ({item}: {item: CartFood}) => <CartItem item={item} />;

  const toggleLike = (item: CartFood) => {
    if (item.isLiked) {
      foodStore.removeFromFavourites(item.id);
    } else {
      foodStore.addToFavourite(item);
    }
    cart.updateCart(new CartFood(item.id, item.name, item.price, item.photo, item.gallery, item.qty, item.categories, !item.isLiked));
  };

  const deleteItem = (id: number) => cart.removeFromCart(id);

  const renderHiddenItem = ({item}: {item: CartFood}) => <HiddenItemWithActions item={item} toggleLike={toggleLike} onDelete={deleteItem} />;

  const renderListHeader = () => (cart.cartItemsQty ? <ListHeader iconName="hand-pointer-o" text="swipe on an item to delete" /> : null);

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
