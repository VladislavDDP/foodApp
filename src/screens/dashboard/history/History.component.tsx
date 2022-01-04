import React from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';

import {EmptyBox} from '../../../components/empty-box/EmptyBox.component';
import {Food} from '../../../model/foodModel';
import {FavouriteItem} from '../like/favourite-item/FavouriteItem.component';
import {styles} from './history.styles';

export const History = () => {
  const renderItem = ({item}: {item: Food}) => <FavouriteItem item={item} />;

  const renderListEmpty = () => <EmptyBox icon="calendar" title="No history yet" text="Hit the orange button down below to Create an order" />;

  const extractKey = (item: Food) => item.id.toString();

  return (
    <SafeAreaView>
      <Text style={styles.title}>History</Text>
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
