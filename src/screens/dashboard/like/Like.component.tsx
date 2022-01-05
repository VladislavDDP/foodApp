import React from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';

import {Food} from '../../../model/foodModel';
import {EmptyBox} from '../../../components/empty-box/EmptyBox.component';
import {FavouriteItem} from './favourite-item/FavouriteItem.component';
import {styles} from './like.styles';

export const Like = () => {
  const renderItem = ({item}: {item: Food}) => <FavouriteItem item={item} />;

  const renderListEmpty = () => <EmptyBox icon="heart-o" title="No liked food" text="Add new items to favourites" />;

  const extractKey = (item: Food) => item.id.toString();

  return (
    <SafeAreaView>
      <Text style={styles.title}>Favourites</Text>
      <FlatList
        scrollEnabled
        data={[]}
        style={styles.flatlist}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderListEmpty}
        renderItem={renderItem}
        keyExtractor={extractKey}
      />
    </SafeAreaView>
  );
};
