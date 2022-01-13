import React from 'react';
import {observer} from 'mobx-react';
import {FlatList, SafeAreaView, Text} from 'react-native';

import {EmptyBox} from '../../../components/empty-box/EmptyBox.component';
import {CartFood} from '../../../model/cartFood';
import {useStore} from '../../../store/store';
import {HistoryItem} from './history-item/HistoryItem.component';
import {styles} from './history.styles';

export const History = observer(() => {
  const {foodStore} = useStore();

  const deleteItem = (id: number) => {
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
        data={foodStore.orders}
        style={styles.flatlist}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderListEmpty}
        renderItem={renderItem}
        keyExtractor={extractKey}
      />
    </SafeAreaView>
  );
});
