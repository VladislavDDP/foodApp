import {observer} from 'mobx-react';
import React from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';

import {EmptyBox} from '../../../components/empty-box/EmptyBox.component';
import {CartFood} from '../../../model/cartFoodModel';
import {useStore} from '../../../store/store';
import {FavouriteItem} from '../like/favourite-item/FavouriteItem.component';
import {HistoryItem} from './history-item/HistoryItem.component';
import {styles} from './history.styles';

export const History = observer(() => {
  const {shoppingHistory} = useStore();

  const deleteItem = (id: number) => shoppingHistory.removeItemFromHistory(id);

  const renderItem = ({item}: {item: CartFood}) => <HistoryItem item={item} deleteItem={deleteItem} />;

  const renderListEmpty = () => <EmptyBox icon="calendar" title="No history yet" text="Hit the orange button down below to Create an order" />;

  const extractKey = (item: CartFood) => item.id.toString();

  return (
    <SafeAreaView>
      <Text style={styles.title}>History</Text>
      <FlatList
        scrollEnabled
        data={shoppingHistory.items}
        style={styles.flatlist}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderListEmpty}
        renderItem={renderItem}
        keyExtractor={extractKey}
      />
    </SafeAreaView>
  );
});
