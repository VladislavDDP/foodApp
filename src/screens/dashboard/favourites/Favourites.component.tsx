import React, {useEffect, useState} from 'react';
import {Observer, useLocalObservable} from 'mobx-react';
import {FlatList} from 'react-native';

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
import {FoodStore} from '../../../store/foodStore';
import {ActivityIndicatorTheme} from '../../../components/activity-indicator-theme/ActivityIndicatorTheme.component';
import {Cart} from '../../../store/cart';

export const Favourites: React.FC<AppNavigatorScreenProps<Screens.DrawerStack>> = ({navigation}) => {
  const foodStore = useLocalObservable(() => new FoodStore());
  const cart = useLocalObservable(() => new Cart());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', async () => {
      await foodStore.getFavourites();
      setLoading(false);
    });

    return unsubscribe;
  }, [navigation]);

  const goToDetails = (item: Food) => navigation.navigate(Screens.Details, {item});

  const deleteItem = (item: Food) => {
    cart.updateCart(new Food(item.id, item.name, item.price, item.photo, item.gallery, item.categories, false));
    foodStore.removeFromFavourites(item.id);
  };

  const renderItem = ({item}: {item: Food}) => <FavouriteItem item={item} onPress={goToDetails} deleteItem={deleteItem} />;

  const renderListEmpty = () => (
    <EmptyBox icon="heart-o" title={localisation.t('favouritesEmptyTitle')} text={localisation.t('favouritesEmptyText')} />
  );

  const renderListHeader = () =>
    foodStore.favourites.length ? <ListHeader iconName="hand-pointer-o" text={localisation.t('favouritesAdvice')} /> : null;

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
            data={foodStore.favourites}
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
