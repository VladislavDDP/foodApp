import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import db from '../../../db.json';
import {Category} from '../../../model/categoryModel';
import {Food} from '../../../model/foodModel';
import {FoodItem} from './food-item/FoodItem.component';
import {HeaderMenu} from './header-menu/HeaderMenu.component';
import {styles} from './home.styles';
import {SearchBar} from './search-bar/SearchBar.component';

const startId = 0;

const mapToCategory = (item: {id: number; category: string; food: Array<Food>}) => new Category(item.id, item.category);

export const Home = () => {
  const [foods, setFoods] = useState<Array<Food>>([]);
  const [categories, setCategories] = useState<Array<Category>>([]);
  const [categoryIndex, setCategoryIndex] = useState(startId);

  useEffect(() => {
    setFoods(db.categories[categoryIndex].food);
    setCategories(db.categories.map(mapToCategory));
  }, [categoryIndex]);

  const renderCategoryName = ({item}: {item: Category}) => (
    <TouchableOpacity onPress={() => setCategoryIndex(item.id)}>
      <Text style={styles.category}>{item.category}</Text>
    </TouchableOpacity>
  );

  const renderCategoryKey = (item: Category) => item.id.toString();
  const renderFoodItemKey = (item: Food) => item.id.toString();

  const openNavigationMenu = () => {
    // TODO: navigation menu
  };

  const openShoppingCart = () => {
    // TODO: navigate to shopping cart
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <HeaderMenu onBurgerPress={openNavigationMenu} onCartPress={openShoppingCart} />
        <Text style={styles.title}>Delicious food for you</Text>
        <SearchBar />
        <FlatList
          style={styles.flatlist}
          data={categories}
          showsHorizontalScrollIndicator={false}
          keyExtractor={renderCategoryKey}
          renderItem={renderCategoryName}
          horizontal
        />
        <FlatList
          style={styles.flatlist}
          data={foods}
          showsHorizontalScrollIndicator={false}
          keyExtractor={renderFoodItemKey}
          horizontal
          renderItem={FoodItem}
          ListEmptyComponent={null}
        />
      </View>
    </SafeAreaView>
  );
};
