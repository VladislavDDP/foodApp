import React, {useCallback, useEffect, useState} from 'react';
import {Observer, useLocalObservable} from 'mobx-react';
import {FlatList, InteractionManager} from 'react-native';

import {Food} from '../../../model/food';
import {EmptyBox} from '../../../components/empty-box/EmptyBox.component';
import {FavouriteItem} from './favourite-item/FavouriteItem.component';
import {styles} from './favourites.styles';
import {ListHeader} from '../../../components/list-header/ListHeader.component';
import {Screens} from '../../../navigation/root-stack/routes.types';
import {AppNavigatorScreenProps} from '../../../navigation/root-stack/stack.types';
import {SafeAreaTheme} from '../../../components/safe-area-theme/SafeAreaTheme.component';
import {TextWrapper} from '../../../components/text-wrapper/TextWrapper.component';
import {localisation} from '../../../localization/localization';
import {ActivityIndicatorTheme} from '../../../components/activity-indicator-theme/ActivityIndicatorTheme.component';
import {FavouritesStore} from '../../../store/favouritesStore';

export const Favourites: React.FC<AppNavigatorScreenProps<Screens.DrawerStack>> = ({navigation}) => {
  const favouritesStore = useLocalObservable(() => new FavouritesStore());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      await favouritesStore.getFavouriteItems();
      setLoading(false);
    });

    return unsubscribe;
  }, [navigation]);

  const goToDetails = (item: Food) => {
    InteractionManager.runAfterInteractions(() => {
      navigation.navigate(Screens.Details, {item});
    });
  };

  const deleteItem = useCallback((item: Food) => {
    favouritesStore.removeFromFavourites(item.id);
  }, []);

  const renderItem = ({item}: {item: Food}) => <FavouriteItem item={item} onPress={goToDetails} deleteItem={deleteItem} />;

  const renderListEmpty = () => (
    <EmptyBox icon="heart-o" title={localisation.t('favouritesEmptyTitle')} text={localisation.t('favouritesEmptyText')} />
  );

  const renderListHeader = () =>
    favouritesStore.favouriteItems.length ? <ListHeader iconName="hand-pointer-o" text={localisation.t('favouritesAdvice')} /> : null;

  const extractKey = (item: Food) => item.id.toString();

  if (loading) {
    return <ActivityIndicatorTheme style={styles.activityBox} size="large" color="#FF460A" />;
  }

  return (
    <Observer>
      {() => (
        <SafeAreaTheme style={styles.container}>
          <TextWrapper style={styles.title}>{localisation.t('favouritesTitle')}</TextWrapper>
          <FlatList
            scrollEnabled
            data={favouritesStore.favouriteItems}
            ListHeaderComponent={renderListHeader}
            showsVerticalScrollIndicator={false}
            ListEmptyComponent={renderListEmpty}
            renderItem={renderItem}
            keyExtractor={extractKey}
          />
        </SafeAreaTheme>
      )}
    </Observer>
  );
};
