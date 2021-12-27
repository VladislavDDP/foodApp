import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

import {Screens} from '../../navigation/root-stack/routes.types';
import {AppNavigatorScreenProps} from '../../navigation/root-stack/stack.types';
import {styles} from './search.styles';
import food from '../../food.json';
import * as Animatable from 'react-native-animatable';
import {Food} from '../../model/foodModel';
import {FoodItem} from '../dashboard/home/food-item/FoodItem.component';
import {SearchHeader} from './search-header/SearchHeader.component';

interface Props extends AppNavigatorScreenProps<Screens.Search> {}
const duration = 300;

export const Search: React.FC<Props> = ({navigation}) => {
  const [searchInput, setSearchInput] = useState('');
  const [foods, setFoods] = useState<Array<Food>>([]);
  const numColumns = 2;

  useEffect(() => {
    setFoods(food);
  }, []);

  const filterFood = () => {
    if (searchInput) {
      setFoods(food.filter((el: Food) => el.name.toLocaleLowerCase().includes(searchInput.toLocaleLowerCase())));
    } else {
      setFoods(food);
    }
  };

  const onInputSearch = (text: string) => {
    setSearchInput(text);
    filterFood();
  };

  const renderFoodItem = ({item, index}: {item: Food; index: number}) => (
    <Animatable.View animation="bounceIn" delay={duration * index}>
      <FoodItem food={item} onPress={() => navigation.navigate(Screens.Details, {item})} />
    </Animatable.View>
  );

  const extractItemKey = (item: Food) => item.id.toString();

  const goBack = () => navigation.goBack();

  return (
    <SafeAreaView>
      <SearchHeader onPress={goBack} onChangeText={onInputSearch} />
      <SharedElement id="bg" style={StyleSheet.absoluteFill}>
        <View style={styles.bg}>
          <FlatList
            data={foods}
            numColumns={numColumns}
            showsVerticalScrollIndicator={false}
            keyExtractor={extractItemKey}
            renderItem={renderFoodItem}
          />
        </View>
      </SharedElement>
    </SafeAreaView>
  );
};
