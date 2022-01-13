import {useFocusEffect} from '@react-navigation/native';
import {observer} from 'mobx-react';
import React, {useState} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView, ScrollView, Text, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {SharedElement} from 'react-navigation-shared-element';

import {Category} from '../../../model/category';
import {Food} from '../../../model/food';
import {Screens} from '../../../navigation/root-stack/routes.types';
import {AppNavigatorScreenProps} from '../../../navigation/root-stack/stack.types';
import {useStore} from '../../../store/store';
import {CategoryItem} from './category-item/CategoryItem.component';
import {FakeSearch} from './fake-search/FakeSearch.component';
import {FoodItem} from './food-item/FoodItem.component';
import {styles} from './home.styles';

const startId = 1;
const duration = 100;

interface Props extends AppNavigatorScreenProps<Screens.DrawerStack> {}

export const Home: React.FC<Props> = observer(({navigation}) => {
  const {foodStore} = useStore();
  const [foods, setFoods] = useState<Array<Food>>([]);
  const [activeCategoryId, setActiveCategoryId] = useState(startId);

  const getFood = async (id: number) => {
    const food = await foodStore.getFoodByCategory(id);
    setFoods(food);
  };

  useFocusEffect(() => {
    getFood(activeCategoryId);
  });

  const navigateToSearch = () => navigation.navigate(Screens.Search);

  const onSelectCategory = (id: number) => {
    setActiveCategoryId(id);
    getFood(id);
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

  const renderListEmptyElement = () => <ActivityIndicator style={styles.activityIndicator} size="large" color="#FF460A" />;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.wrapper}>
        <Text style={styles.title}>Delicious food for you</Text>
        <FakeSearch onPress={navigateToSearch} />
        <FlatList
          style={styles.flatlist}
          data={foodStore.categories}
          showsHorizontalScrollIndicator={false}
          keyExtractor={extractCategoryKey}
          renderItem={renderCategory}
          horizontal
          ListEmptyComponent={renderListEmptyElement}
        />
        <FlatList
          style={styles.flatlist}
          data={foods}
          showsHorizontalScrollIndicator={false}
          keyExtractor={extractFoodItemKey}
          horizontal
          renderItem={renderFoodItem}
          ListEmptyComponent={renderListEmptyElement}
        />
        <SharedElement id="bg">
          <View style={styles.bg} />
        </SharedElement>
      </ScrollView>
    </SafeAreaView>
  );
});
