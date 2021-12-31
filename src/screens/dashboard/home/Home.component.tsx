import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, ScrollView, Text, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {SharedElement} from 'react-navigation-shared-element';

import categories from '../../../categories.json';
import food from '../../../food.json';
import {Category} from '../../../model/categoryModel';
import {Food} from '../../../model/foodModel';
import {Screens} from '../../../navigation/root-stack/routes.types';
import {AppNavigatorScreenProps} from '../../../navigation/root-stack/stack.types';
import {CategoryItem} from './category-item/CategoryItem.component';
import {FakeSearch} from './fake-search/FakeSearch.component';
import {FoodItem} from './food-item/FoodItem.component';
import {styles} from './home.styles';

const startId = 1;
const duration = 100;

const mapToCategory = (item: {id: number; category: string}) => new Category(item.id, item.category);

interface Props extends AppNavigatorScreenProps<Screens.DrawerStack> {}

export const Home: React.FC<Props> = ({navigation, ...props}) => {
  const [foods, setFoods] = useState<Array<Food>>([]);
  const [foodCategories, setFoodCategories] = useState<Array<Category>>([]);
  const [activeCategoryId, setActiveCategoryId] = useState(startId);

  useEffect(() => {
    setFoodCategories(categories.categories.map(mapToCategory));
    setFoods(food.filter(item => item.category.includes(activeCategoryId)));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigateToSearch = () => navigation.navigate(Screens.Search);

  const onSelectCategory = (id: number) => {
    setActiveCategoryId(id);
    setFoods(food.filter(item => item.category.includes(id)));
  };

  const renderCategory = ({item}: {item: Category}) => (
    <CategoryItem item={item} activeCategoryId={activeCategoryId} onSelectCategory={onSelectCategory} />
  );

  const goToDetails = (item: Food) => navigation.navigate(Screens.Details, {item});

  const renderFoodItem = ({item, index}: {item: Food; index: number}) => (
    <Animatable.View animation="zoomIn" delay={duration * index}>
      <FoodItem food={item} backColor="#fff" onPress={goToDetails} />
    </Animatable.View>
  );

  const extractCategoryKey = (item: Category) => item.id.toString();
  const extractFoodItemKey = (item: Food) => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.wrapper}>
        <Text style={styles.title}>Delicious food for you</Text>
        <FakeSearch onPress={navigateToSearch} />
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
        <SharedElement id="bg">
          <View style={styles.bg} />
        </SharedElement>
      </ScrollView>
    </SafeAreaView>
  );
};
