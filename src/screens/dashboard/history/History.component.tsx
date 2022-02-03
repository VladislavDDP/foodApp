import React, {useEffect, useState} from 'react';
import {observer} from 'mobx-react';
import {FlatList} from 'react-native';

import {EmptyBox} from '../../../components/empty-box/EmptyBox.component';
import {useStore} from '../../../store/store';
import {HistoryItem} from './history-item/HistoryItem.component';
import {styles} from './history.styles';
import {Reciept} from '../../../model/reciept';
import {AppNavigatorScreenProps} from '../../../navigation/root-stack/stack.types';
import {Screens} from '../../../navigation/root-stack/routes.types';
import {SafeAreaTheme} from '../../../components/safe-area-theme/SafeAreaTheme.component';
import {TextWrapper} from '../../../components/text-wrapper/TextWrapper.component';
import {ActivityIndicatorTheme} from '../../../components/activity-indicator-theme/ActivityIndicatorTheme.component';
import {localisation} from '../../../localization/localization';

export const History: React.FC<AppNavigatorScreenProps<Screens.DrawerStack>> = observer(({navigation}) => {
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

  const renderListEmpty = () => <EmptyBox icon="calendar" title={localisation.t('historyEmptyTitle')} text={localisation.t('historyEmptyText')} />;

  const extractKey = (item: Reciept) => item.id.toString();

  if (loading) {
    return <ActivityIndicatorTheme style={styles.activityBox} size="large" color="#FF460A" />;
  }

  return (
    <SafeAreaTheme>
      <TextWrapper style={styles.title}>{localisation.t('historyTitle')}</TextWrapper>
      <FlatList
        scrollEnabled
        data={foodStore.orders}
        style={styles.flatlist}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderListEmpty}
        renderItem={renderItem}
        keyExtractor={extractKey}
      />
    </SafeAreaTheme>
  );
});
