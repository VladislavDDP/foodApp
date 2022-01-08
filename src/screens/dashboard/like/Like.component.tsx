import React from 'react';
import {observer} from 'mobx-react';
import {SafeAreaView, Text, FlatList, View} from 'react-native';

import {Food} from '../../../model/foodModel';
import {EmptyBox} from '../../../components/empty-box/EmptyBox.component';
import {FavouriteItem} from './favourite-item/FavouriteItem.component';
import {styles} from './like.styles';
import {useStore} from '../../../store/store';
import Icon from 'react-native-vector-icons/FontAwesome';
import {ListHeader} from '../../../components/list-header/ListHeader.component';

export const Like = observer(() => {
  const {favourites} = useStore();

  const deleteItem = (id: number) => favourites.removeFromFavourites(id);

  const renderItem = ({item}: {item: Food}) => <FavouriteItem item={item} deleteItem={deleteItem} />;

  const renderListEmpty = () => <EmptyBox icon="heart-o" title="No liked food" text="Add new items to favourites" />;

  const renderListHeader = () => (favourites.items.length ? <ListHeader iconName="hand-pointer-o" text="long press to delete" /> : null);

  const extractKey = (item: Food) => item.id.toString();

  return (
    <SafeAreaView>
      <Text style={styles.title}>Favourites</Text>
      <FlatList
        scrollEnabled
        data={favourites.items}
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
