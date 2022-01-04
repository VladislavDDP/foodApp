import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {IUseSectionListProps, SwipeListView} from 'react-native-swipe-list-view';

import {Food} from '../../model/foodModel';
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

interface Props extends AppNavigatorScreenProps<Screens.Cart> {}

export const ShoppingCart: React.FC<Props> = ({navigation}) => {
  const [food, setFood] = useState<Array<Food>>([]);

  useEffect(() => {
    setFood([]);
  }, []);

  const likeRow = (rowKey: number) => {
    // TODO: like item and add to Async Storage
  };

  const deleteRow = (rowKey: number) => {
    setFood(food.filter((item: Food) => item.id !== rowKey));
  };

  const goToCheckout = () => {
    navigation.navigate(Screens.Checkout);
  };

  const renderItem = ({item}: {item: Food}) => <CartItem item={item} deleteRow={deleteRow} />;

  const renderHiddenItem = (item: {item: Food}, rowMap: Partial<IUseSectionListProps<Food>>) => {
    const likeItem = () => likeRow(item.item.id);
    const deleteItem = () => deleteRow(item.item.id);

    return <HiddenItemWithActions onLike={likeItem} onDelete={deleteItem} />;
  };

  const renderListHeader = () => (food.length ? <ListHeader /> : null);

  const renderListEmpty = () => <EmptyBox icon="shopping-cart" title="Cart is empty" text="Add new items to cart" />;

  const extractKey = (item: Food) => item.id.toString();

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
};
