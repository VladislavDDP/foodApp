import React from 'react';
import {observer} from 'mobx-react';
import {SafeAreaView, Text, FlatList} from 'react-native';

import {Food} from '../../../model/food';
import {EmptyBox} from '../../../components/empty-box/EmptyBox.component';
import {FavouriteItem} from './favourite-item/FavouriteItem.component';
import {styles} from './favourites.styles';
import {useStore} from '../../../store/store';
import {ListHeader} from '../../../components/list-header/ListHeader.component';
import {Screens} from '../../../navigation/root-stack/routes.types';
import {AppNavigatorScreenProps} from '../../../navigation/root-stack/stack.types';

interface Props extends AppNavigatorScreenProps<Screens.DrawerStack> {}

export const Favourites: React.FC<Props> = observer(({navigation}) => {
  const {foodStore} = useStore();

  const goToDetails = (item: Food) => navigation.navigate(Screens.Details, {item});

  const deleteItem = (id: number) => {
    foodStore.removeFromFavourites(id);
  };

  const renderItem = ({item}: {item: Food}) => <FavouriteItem item={item} onPress={goToDetails} deleteItem={deleteItem} />;

  const renderListEmpty = () => <EmptyBox icon="heart-o" title="No liked food" text="Add new items to favourites" />;

  const renderListHeader = () => (foodStore.favourites.length ? <ListHeader iconName="hand-pointer-o" text="long press to delete" /> : null);

  const extractKey = (item: Food) => item.id.toString();

  return (
    <SafeAreaView>
      <Text style={styles.title}>Favourites</Text>
      <FlatList
        scrollEnabled
        data={foodStore.favourites}
        ListHeaderComponent={renderListHeader}
        style={styles.flatlist}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={renderListEmpty}
        renderItem={renderItem}
        keyExtractor={extractKey}
      />
    </SafeAreaView>
  );
});
