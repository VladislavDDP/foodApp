import React from 'react';
import {SwipeListView} from 'react-native-swipe-list-view';
import {observer} from 'mobx-react';

import {Screens} from '../../navigation/root-stack/routes.types';
import {AppNavigatorScreenProps} from '../../navigation/root-stack/stack.types';
import {styles} from './shopping-cart.styles';
import {CustomButton} from '../../components/custom-button/CustomButton.component';
import {CustomHeader} from '../../components/custom-header/CustomHeader.component';
import {ListHeader} from '../../components/list-header/ListHeader.component';
import {CartItem} from './cart-item/CartItem.component';
import {HiddenItemWithActions} from './hidden-item-with-actions/HiddenItemWithActions.component';
import {EmptyBox} from '../../components/empty-box/EmptyBox.component';
import {useStore} from '../../store/store';
import {CartFood} from '../../model/cartFood';
import {ViewTheme} from '../../components/view-theme/ViewTheme.component';
import {ColorIntencity} from '../../components/view-theme/ColorIntencity';
import {localisation} from '../../localization/localization';

export const ShoppingCart: React.FC<AppNavigatorScreenProps<Screens.Cart>> = observer(({navigation}) => {
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

  const renderListHeader = () => (cart.cartItemsQty ? <ListHeader iconName="hand-pointer-o" text={localisation.t('cartAdvice')} /> : null);

  const renderListEmpty = () => <EmptyBox icon="shopping-cart" title={localisation.t('cartEmptyTitle')} text={localisation.t('cartEmptyText')} />;

  const extractKey = (item: CartFood) => item.id.toString();

  return (
    <ViewTheme colorIntencity={ColorIntencity.Weak} style={styles.container}>
      <CustomHeader title={localisation.t('cartTitle')} onPress={navigation.goBack} />
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
      <CustomButton disabled={!cart.cartItemsQty} text={localisation.t('buttons.checkout')} onPress={goToCheckout} />
    </ViewTheme>
  );
});
