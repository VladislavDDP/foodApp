import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

import {Screens} from '../../navigation/root-stack/routes.types';
import {AppNavigatorScreenProps} from '../../navigation/root-stack/stack.types';
import {styles} from './search.styles';
import food from '../../food.json';
import {Food} from '../../model/foodModel';
import {SearchHeader} from './search-header/SearchHeader.component';
import {AnimatedFoodItem} from './animated-food-item/AnimatedFoodItem.component';
import {EmptyBox} from '../../components/empty-box/EmptyBox.component';

interface Props extends AppNavigatorScreenProps<Screens.Search> {}

export const Search: React.FC<Props> = ({navigation}) => {
  const [searchInput, setSearchInput] = useState('');
  const [foods, setFoods] = useState<Array<Food>>([]);
  const numColumns = 2;

  useEffect(() => {
    setFoods(food);
  }, []);

  const filterByCategory = (item: Food) => item.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase());

  const filterFood = () => {
    setFoods(searchInput ? food.filter(filterByCategory) : food);
  };

  const onInputSearch = (text: string) => {
    setSearchInput(text);
    filterFood();
  };

  const goToFoodDetails = (item: Food) => navigation.navigate(Screens.Details, {item});

  const renderFoodItem = ({item, index}: {item: Food; index: number}) => (
    <AnimatedFoodItem item={item} index={index} goToFoodDetails={goToFoodDetails} />
  );

  const renderListEmpty = () => <EmptyBox icon="search" title="Item not found" text="Try searching the item with a different keyword." />;

  const extractItemKey = (item: Food) => item.id.toString();

  const goBack = () => navigation.goBack();

  return (
    <SafeAreaView>
      <SearchHeader onPress={goBack} onChangeText={onInputSearch} />
      <SharedElement id="bg" style={StyleSheet.absoluteFill}>
        <View style={styles.bg}>
          <FlatList
            scrollEnabled
            data={foods}
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
};
