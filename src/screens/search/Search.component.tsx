import React, {useEffect, useState} from 'react';
import {observer} from 'mobx-react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

import {Screens} from '../../navigation/root-stack/routes.types';
import {AppNavigatorScreenProps} from '../../navigation/root-stack/stack.types';
import {styles} from './search.styles';
import {Food} from '../../model/foodModel';
import {SearchHeader} from './search-header/SearchHeader.component';
import {AnimatedFoodItem} from './animated-food-item/AnimatedFoodItem.component';
import {EmptyBox} from '../../components/empty-box/EmptyBox.component';
import {useStore} from '../../store/store';

interface Props extends AppNavigatorScreenProps<Screens.Search> {}

export const Search: React.FC<Props> = observer(({navigation}) => {
  const [searchInput, setSearchInput] = useState('');
  const [foods, setFoods] = useState<Array<Food>>([]);
  const {searchedItems, searchedItemsQty, search} = useStore().searcher;

  const numColumns = 2;

  useEffect(() => {
    setFoods(searchedItems);
  }, [searchedItems]);

  const onInputSearch = (text: string) => {
    setSearchInput(text);
    search(text);
  };

  const goToFoodDetails = (item: Food) => navigation.navigate(Screens.Details, {item});

  const renderFoodItem = ({item, index}: {item: Food; index: number}) => (
    <AnimatedFoodItem item={item} index={index} goToFoodDetails={goToFoodDetails} />
  );

  const renderListEmpty = () => <EmptyBox icon="search" title="Item not found" text="Try searching the item with a different keyword." />;

  const extractItemKey = (item: Food) => item.id.toString();

  return (
    <SafeAreaView>
      <SearchHeader value={searchInput} onPress={navigation.goBack} onChangeText={onInputSearch} />
      <SharedElement id="bg" style={StyleSheet.absoluteFill}>
        <View style={styles.bg}>
          <Text style={styles.text}>Found {searchedItemsQty()} results</Text>
          <FlatList
            scrollEnabled
            data={foods.slice()}
            numColumns={numColumns}
            showsVerticalScrollIndicator={false}
            keyExtractor={extractItemKey}
            renderItem={renderFoodItem}
            ListEmptyComponent={renderListEmpty}
          />
        </View>
      </SharedElement>
    </SafeAreaView>
  );
});
