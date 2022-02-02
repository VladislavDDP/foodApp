import React from 'react';
import {observer} from 'mobx-react';
import {Animated, FlatList} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

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
import {localisation} from '../../localization/localization';
import {SafeAreaTheme} from '../../components/safe-area-theme/SafeAreaTheme.component';

const startValue = 0;
const endValue = 100;
const minTranslate = -10;

export const ShoppingCart: React.FC<AppNavigatorScreenProps<Screens.Cart>> = observer(({navigation}) => {
  const {cart, foodStore} = useStore();

  const goToCheckout = () => {
    navigation.navigate(Screens.Checkout);
  };

  const renderRightActions = (item: CartFood, dragX: Animated.AnimatedInterpolation) => {
    const translateX = dragX.interpolate({
      inputRange: [startValue, endValue],
      outputRange: [minTranslate, startValue],
    });

    return (
      <Animated.View style={[{transform: [{translateX}]}]}>
        <HiddenItemWithActions item={item} toggleLike={toggleLike} onDelete={deleteItem} />
      </Animated.View>
    );
  };

  const renderItem = ({item}: {item: CartFood}) => (
    <Swipeable renderRightActions={(_: Animated.AnimatedInterpolation, dragX: Animated.AnimatedInterpolation) => renderRightActions(item, dragX)}>
      <CartItem item={item} />
    </Swipeable>
  );

  const toggleLike = (item: CartFood) => {
    if (item.isLiked) {
      foodStore.removeFromFavourites(item.id);
    } else {
      foodStore.addToFavourite(item);
    }
    cart.updateCart(new CartFood(item.id, item.name, item.price, item.photo, item.gallery, item.qty, item.categories, !item.isLiked));
  };

  const deleteItem = (id: number) => cart.removeFromCart(id);

  const renderListHeader = () => (cart.cartItemsQty ? <ListHeader iconName="hand-pointer-o" text={localisation.t('cartAdvice')} /> : null);

  const renderListEmpty = () => <EmptyBox icon="shopping-cart" title={localisation.t('cartEmptyTitle')} text={localisation.t('cartEmptyText')} />;

  const extractKey = (item: CartFood) => item.id.toString();

  return (
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
      <CustomButton disabled={!cart.cartItemsQty} text={localisation.t('buttons.checkout')} onPress={goToCheckout} />
    </SafeAreaTheme>
  );
});
