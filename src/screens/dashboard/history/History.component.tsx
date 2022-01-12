import {useIsFocused} from '@react-navigation/native';
import {observer} from 'mobx-react';
import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';

import {EmptyBox} from '../../../components/empty-box/EmptyBox.component';
import {CartFood} from '../../../model/cartFood';
import {useStore} from '../../../store/store';
import {HistoryItem} from './history-item/HistoryItem.component';
import {styles} from './history.styles';

export const History = observer(() => {
  const {foodStore} = useStore();
  const [items, setItems] = useState<Array<CartFood>>([]);
  const isFocused = useIsFocused();

  const getHistory = useCallback(async () => {
    const itemsFromHistory = await foodStore.getShoppingHistory();
    setItems(itemsFromHistory);
  }, [foodStore]);

  useEffect(() => {
    if (isFocused) {
      getHistory();
    }
  }, [getHistory, isFocused]);

  const deleteItem = (id: number) => {
    setItems(items.filter((item: CartFood) => item.id !== id));
    foodStore.removeItemFromHistory(id);
  };

  const renderItem = ({item}: {item: CartFood}) => <HistoryItem item={item} deleteItem={deleteItem} />;

  const renderListEmpty = () => <EmptyBox icon="calendar" title="No history yet" text="Hit the orange button down below to Create an order" />;

  const extractKey = (item: CartFood) => item.id.toString();

  return (
    <SafeAreaView>
      <Text style={styles.title}>History</Text>
      <FlatList
        scrollEnabled
        data={items}
        style={styles.flatlist}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderListEmpty}
        renderItem={renderItem}
        keyExtractor={extractKey}
      />
    </SafeAreaView>
  );
});
