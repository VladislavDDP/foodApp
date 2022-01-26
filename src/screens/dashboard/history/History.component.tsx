import React, {useEffect, useState} from 'react';
import {observer} from 'mobx-react';
import {ActivityIndicator, FlatList, SafeAreaView, Text} from 'react-native';

import {EmptyBox} from '../../../components/empty-box/EmptyBox.component';
import {useStore} from '../../../store/store';
import {HistoryItem} from './history-item/HistoryItem.component';
import {styles} from './history.styles';
import {Reciept} from '../../../model/reciept';
import {AppNavigatorScreenProps} from '../../../navigation/root-stack/stack.types';
import {Screens} from '../../../navigation/root-stack/routes.types';
import {useTheme} from '../../../theme/theme';

export const History: React.FC<AppNavigatorScreenProps<Screens.DrawerStack>> = observer(({navigation}) => {
  const {theme} = useTheme();
  const {foodStore} = useStore();
  const [loading, setLoading] = useState(true);

  const getShoppingHistory = async () => {
    try {
      await foodStore.getShoppingHistory();
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getShoppingHistory();
  });

  const goToRecieptDetails = (item: Reciept) => navigation.navigate(Screens.Reciept, {item});

  const renderItem = ({item}: {item: Reciept}) => <HistoryItem item={item} goToRecieptDetails={goToRecieptDetails} />;

  const renderListEmpty = () => <EmptyBox icon="calendar" title="No history yet" text="Hit the orange button down below to Create an order" />;

  const extractKey = (item: Reciept) => item.id.toString();

  if (loading) {
    return (
      <ActivityIndicator style={[styles.activityBox, {backgroundColor: theme.colorScheme.primaryBackgroundLight}]} size="large" color="#FF460A" />
    );
  }

  return (
    <SafeAreaView style={{backgroundColor: theme.colorScheme.primaryBackgroundLight}}>
      <Text style={[styles.title, {color: theme.colorScheme.primaryText}]}>History</Text>
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
