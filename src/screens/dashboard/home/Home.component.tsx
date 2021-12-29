import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, Text, View} from 'react-native';

import categories from '../../../categories.json';
import food from '../../../food.json';
import {Category} from '../../../model/categoryModel';
import {Food} from '../../../model/foodModel';
import {Screens} from '../../../navigation/root-stack/routes.types';
import {AppNavigatorScreenProps} from '../../../navigation/root-stack/stack.types';
import {CategoryItem} from './category-item/CategoryItem.component';
import {FoodItem} from './food-item/FoodItem.component';
import {styles} from './home.styles';
import {SearchBar} from './search-bar/SearchBar.component';

const startId = 1;
const mapToCategory = (item: {id: number; category: string}) => new Category(item.id, item.category);

interface Props extends AppNavigatorScreenProps<Screens.DrawerStack> {}

export const Home: React.FC<Props> = ({navigation}) => {
  const [searchInput, setSearchInput] = useState('');
  const [foods, setFoods] = useState<Array<Food>>([]);
  const [foodCategories, setFoodCategories] = useState<Array<Category>>([]);
  const [activeCategoryId, setActiveCategoryId] = useState(startId);

  useEffect(() => {
    setFoodCategories(categories.categories.map(mapToCategory));
    setFoods(food.food.filter(item => item.category.includes(activeCategoryId)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSelectCategory = (id: number) => {
    setActiveCategoryId(id);
    setFoods(food.food.filter(item => item.category.includes(id)));
  };

  const renderCategory = ({item}: {item: Category}) => (
    <CategoryItem item={item} activeCategoryId={activeCategoryId} onSelectCategory={onSelectCategory} />
  );

  const goToDetails = (item: Food) => navigation.navigate(Screens.Details, {item});
  const renderFoodItem = ({item}: {item: Food}) => <FoodItem food={item} onPress={goToDetails} />;

  const extractCategoryKey = (item: Category) => item.id.toString();
  const extractFoodItemKey = (item: Food) => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Delicious food for you</Text>
        <SearchBar input={searchInput} setInput={setSearchInput} />
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
