import React, {useCallback, useEffect, useState} from 'react';
import {observer} from 'mobx-react';
import {SafeAreaView, Text, FlatList} from 'react-native';
import {useIsFocused} from '@react-navigation/native';

import {Food} from '../../../model/food';
import {EmptyBox} from '../../../components/empty-box/EmptyBox.component';
import {FavouriteItem} from './favourite-item/FavouriteItem.component';
import {styles} from './like.styles';
import {useStore} from '../../../store/store';
import {ListHeader} from '../../../components/list-header/ListHeader.component';

export const Like = observer(() => {
  const {foodStore} = useStore();
  const [food, setFood] = useState<Array<Food>>([]);
  const isFocused = useIsFocused();

  const getLikedFood = useCallback(async () => {
    const likedFood = await foodStore.getFavouriteFood();
    setFood(likedFood);
  }, [foodStore]);

  useEffect(() => {
    if (isFocused) {
      getLikedFood();
    }
  }, [getLikedFood, isFocused]);

  const deleteItem = (id: number) => {
    setFood(food.filter((item: Food) => item.id !== id));
    foodStore.removeFromFavourites(id);
  };

  const renderItem = ({item}: {item: Food}) => <FavouriteItem item={item} deleteItem={deleteItem} />;

  const renderListEmpty = () => <EmptyBox icon="heart-o" title="No liked food" text="Add new items to favourites" />;

  const renderListHeader = () => (food.length ? <ListHeader iconName="hand-pointer-o" text="long press to delete" /> : null);

  const extractKey = (item: Food) => item.id.toString();

  return (
    <SafeAreaView>
      <Text style={styles.title}>Favourites</Text>
      <FlatList
        scrollEnabled
        data={food}
        ListHeaderComponent={renderListHeader}
        style={styles.flatlist}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderListEmpty}
        renderItem={renderItem}
        keyExtractor={extractKey}
      />
    </SafeAreaView>
  );
});
