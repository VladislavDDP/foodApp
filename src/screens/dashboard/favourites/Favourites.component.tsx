import React from 'react';
import {observer} from 'mobx-react';
import {FlatList} from 'react-native';

import {Food} from '../../../model/food';
import {EmptyBox} from '../../../components/empty-box/EmptyBox.component';
import {FavouriteItem} from './favourite-item/FavouriteItem.component';
import {styles} from './favourites.styles';
import {useStore} from '../../../store/store';
import {ListHeader} from '../../../components/list-header/ListHeader.component';
import {Screens} from '../../../navigation/root-stack/routes.types';
import {AppNavigatorScreenProps} from '../../../navigation/root-stack/stack.types';
import {SafeAreaTheme} from '../../../components/safe-area-theme/SafeAreaTheme.component';
import {TextWrapper} from '../../../components/text-wrapper/TextWrapper.component';
import {localisation} from '../../../localization/localization';

export const Favourites: React.FC<AppNavigatorScreenProps<Screens.DrawerStack>> = observer(({navigation}) => {
  const {foodStore} = useStore();

  const goToDetails = (item: Food) => navigation.navigate(Screens.Details, {item});

  const deleteItem = (id: number) => {
    foodStore.removeFromFavourites(id);
  };

  const renderItem = ({item}: {item: Food}) => <FavouriteItem item={item} onPress={goToDetails} deleteItem={deleteItem} />;

  const renderListEmpty = () => (
    <EmptyBox icon="heart-o" title={localisation.t('favouritesEmptyTitle')} text={localisation.t('favouritesEmptyText')} />
  );

  const renderListHeader = () =>
    foodStore.favourites.length ? <ListHeader iconName="hand-pointer-o" text={localisation.t('favouritesAdvice')} /> : null;

  const extractKey = (item: Food) => item.id.toString();

  return (
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
  );
});
