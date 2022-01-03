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

const foodInCart = [
  {
    id: 1,
    // eslint-disable-next-line no-magic-numbers
    category: [1],
    name: 'Veggie tomato mix',
    price: 'N2,500',
    photo: 'https://www.wbcsd.org/var/site/storage/images/programs/food-and-nature/food-land-use/fresh/60850-138-eng-GB/FReSH_720_square.jpg',
    gallery: [
      'https://www.wbcsd.org/var/site/storage/images/programs/food-and-nature/food-land-use/fresh/60850-138-eng-GB/FReSH_720_square.jpg',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
    ],
  },
  {
    id: 2,
    // eslint-disable-next-line no-magic-numbers
    category: [1],
    name: 'Potato mix',
    price: 'N4,200',
    photo: 'https://simply-delicious-food.com/wp-content/uploads/2017/10/easy-tomato-cream-rigatoni-3-500x500.jpg',
    gallery: [
      'https://simply-delicious-food.com/wp-content/uploads/2017/10/easy-tomato-cream-rigatoni-3-500x500.jpg',
      'https://www.wbcsd.org/var/site/storage/images/programs/food-and-nature/food-land-use/fresh/60850-138-eng-GB/FReSH_720_square.jpg',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
    ],
  },
  {
    id: 3,
    // eslint-disable-next-line no-magic-numbers
    category: [2],
    name: 'Vegano',
    price: 'N4,200',
    photo: 'https://www.wbcsd.org/var/site/storage/images/programs/food-and-nature/food-land-use/fresh/60850-138-eng-GB/FReSH_720_square.jpg',
    gallery: [
      'https://simply-delicious-food.com/wp-content/uploads/2017/10/easy-tomato-cream-rigatoni-3-500x500.jpg',
      'https://www.wbcsd.org/var/site/storage/images/programs/food-and-nature/food-land-use/fresh/60850-138-eng-GB/FReSH_720_square.jpg',
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80',
    ],
  },
];

interface Props extends AppNavigatorScreenProps<Screens.Cart> {}

export const ShoppingCart: React.FC<Props> = ({navigation}) => {
  const [food, setFood] = useState<Array<Food>>([]);

  useEffect(() => {
    setFood(foodInCart);
  }, []);

  const likeRow = (rowMap: Partial<IUseSectionListProps<Food>>, rowKey: number) => {
    // TODO: like item and add to Async Storage
  };

  const deleteRow = (rowMap: Partial<IUseSectionListProps<Food>>, rowKey: number) => {
    setFood(food.filter((item: Food) => item.id !== rowKey));
  };

  const goToCheckout = () => {
    navigation.navigate(Screens.Checkout);
  };

  const goBack = () => navigation.goBack();

  const renderItem = ({item}: {item: Food}) => <CartItem item={item} />;

  const renderHiddenItem = (item: {item: Food}, rowMap: Partial<IUseSectionListProps<Food>>) => {
    const likeItem = () => likeRow(rowMap, item.item.id);
    const deleteItem = () => deleteRow(rowMap, item.item.id);

    return <HiddenItemWithActions onLike={likeItem} onDelete={deleteItem} />;
  };

  const renderListHeader = () => (food.length ? <ListHeader /> : null);

  const renderListEmpty = () => <EmptyBox icon="shopping-cart" title="Cart is empty" text="Add new items to cart" />;

  const extractKey = (item: Food) => item.id.toString();

  return (
    <View style={styles.container}>
      <CustomHeader title="Cart" onPress={goBack} />
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
