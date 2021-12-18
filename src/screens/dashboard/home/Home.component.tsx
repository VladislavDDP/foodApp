import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';

import categories from '../../../categories.json';
import food from '../../../food.json';
import {Category} from '../../../model/categoryModel';
import {Food} from '../../../model/foodModel';
import {Screens} from '../../../navigation/root-stack/routes.types';
import {AppNavigatorScreenProps} from '../../../navigation/root-stack/stack.types';
import {FoodItem} from './food-item/FoodItem.component';
import {HeaderMenu} from './header-menu/HeaderMenu.component';
import {styles} from './home.styles';
import {SearchBar} from './search-bar/SearchBar.component';

const startId = 1;
const mapToCategory = (item: {id: number; category: string}) => new Category(item.id, item.category);

interface Props extends AppNavigatorScreenProps<Screens.DashboardStack> {}

export const Home: React.FC<Props> = ({navigation}) => {
  const [foods, setFoods] = useState<Array<Food>>([]);
  const [foodCategories, setFoodCategories] = useState<Array<Category>>([]);
  const [categoryIndex, setCategoryIndex] = useState(startId);

  useEffect(() => {
    setFoodCategories(categories.categories.map(mapToCategory));
    setFoods(food.food.filter(item => item.category.includes(categoryIndex)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSelectCategory = (id: number) => {
    setCategoryIndex(id);
    setFoods(food.food.filter(item => item.category.includes(id)));
  };

  const renderCategory = ({item}: {item: Category}) => {
    const color = item.id === categoryIndex ? '#FA4A0C' : '#333';

    return (
      <TouchableOpacity onPress={() => onSelectCategory(item.id)}>
        <Text style={[styles.category, {color: color}]}>{item.category}</Text>
      </TouchableOpacity>
    );
  };

  const renderFoodItem = ({item}: {item: Food}) => <FoodItem item={item} onPress={() => navigation.navigate(Screens.Details, {food: item})} />;

  const extractCategoryKey = (item: Category) => item.id.toString();
  const extractFoodItemKey = (item: Food) => item.id.toString();

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
          data={foodCategories}
          showsHorizontalScrollIndicator={false}
          keyExtractor={extractCategoryKey}
          renderItem={renderCategory}
          horizontal
        />
        <FlatList
          style={styles.flatlist}
          data={foods}
          showsHorizontalScrollIndicator={false}
          keyExtractor={extractFoodItemKey}
          horizontal
          renderItem={renderFoodItem}
          ListEmptyComponent={null}
        />
      </View>
    </SafeAreaView>
  );
};
