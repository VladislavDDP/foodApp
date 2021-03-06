import React, {useCallback, useEffect} from 'react';
import {Observer, useLocalObservable} from 'mobx-react';
import {FlatList, InteractionManager} from 'react-native';

import {Screens} from '../../navigation/root-stack/routes.types';
import {AppNavigatorScreenProps} from '../../navigation/root-stack/stack.types';
import {styles} from './shopping-cart.styles';
import {CustomButton} from '../../components/custom-button/CustomButton.component';
import {CustomHeader} from '../../components/custom-header/CustomHeader.component';
import {ListHeader} from '../../components/list-header/ListHeader.component';
import {CartItem} from './cart-item/CartItem.component';
import {EmptyBox} from '../../components/empty-box/EmptyBox.component';
import {CartFood} from '../../model/cartFood';
import {localisation} from '../../localization/localization';
import {SafeAreaTheme} from '../../components/safe-area-theme/SafeAreaTheme.component';
import {CartStore} from '../../store/cartStore';
import {FavouritesStore} from '../../store/favouritesStore';

export const ShoppingCart: React.FC<AppNavigatorScreenProps<Screens.Cart>> = ({navigation}) => {
  const cart = useLocalObservable(() => new CartStore());
  const favouritesStore = useLocalObservable(() => new FavouritesStore());

  useEffect(() => {
    cart.getCartItems();
  }, []);

  const toggleLike = useCallback((item: CartFood) => {
    if (item.isLiked) {
      favouritesStore.removeFromFavourites(item.id);
    } else {
      favouritesStore.addToFavourites(item);
    }
    cart.getCartItems();
  }, []);

  const deleteItem = useCallback((id: number) => cart.removeFromCart(id), []);

  const addOneMoreItem = useCallback((id: number) => cart.increaseQty(id), []);

  const removeOneMoreItem = useCallback((id: number) => cart.decreaseQty(id), []);

  const goToCheckout = () => {
    InteractionManager.runAfterInteractions(() => {
      navigation.navigate(Screens.Checkout);
    });
  };

  const renderItem = ({item}: {item: CartFood}) => (
    <CartItem item={item} likeItem={toggleLike} removeItem={deleteItem} addOne={addOneMoreItem} removeOne={removeOneMoreItem} />
  );

  const renderListHeader = () => (cart.cartItems.length ? <ListHeader iconName="hand-pointer-o" text={localisation.t('cartAdvice')} /> : null);

  const renderListEmpty = () => <EmptyBox icon="shopping-cart" title={localisation.t('cartEmptyTitle')} text={localisation.t('cartEmptyText')} />;

  const extractKey = (item: CartFood) => item.id.toString();

  return (
    <Observer>
      {() => (
        <SafeAreaTheme style={styles.container}>
          <CustomHeader title={localisation.t('cartTitle')} onPress={navigation.goBack} />
          <FlatList
            style={styles.flatlist}
            data={cart.cartItems}
            ListHeaderComponent={renderListHeader}
            renderItem={renderItem}
            keyExtractor={extractKey}
            ListEmptyComponent={renderListEmpty}
          />
          <CustomButton disabled={!cart.cartItems.length} text={localisation.t('buttons.checkout')} onPress={goToCheckout} />
        </SafeAreaTheme>
      )}
    </Observer>
  );
};
