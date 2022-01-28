import React, {useEffect, useState} from 'react';
import {observer} from 'mobx-react';
import {ActivityIndicator, FlatList, ScrollView} from 'react-native';
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
import {SafeAreaTheme} from '../../../components/safe-area-theme/SafeAreaTheme.component';
import {TextWrapper} from '../../../components/text-wrapper/TextWrapper.component';
import {ColorIntencity} from '../../../components/view-theme/ColorIntencity';
import {ViewTheme} from '../../../components/view-theme/ViewTheme.component';

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

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      getFood(activeCategoryId);
    });

    return unsubscribe;
  }, [navigation, activeCategoryId]);

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
      <FoodItem food={item} onPress={goToDetails} />
    </Animatable.View>
  );

  const extractCategoryKey = (item: Category) => item.id.toString();
  const extractFoodItemKey = (item: Food) => item.id.toString();

  const renderListEmptyElement = () => <ActivityIndicator style={styles.activityIndicator} size="large" color="#FF460A" />;

  return (
    <SafeAreaTheme style={styles.container}>
      <ScrollView style={styles.wrapper}>
        <TextWrapper style={styles.title}>Delicious food for you</TextWrapper>
        <FakeSearch onPress={navigateToSearch} />
        <FlatList
          style={styles.flatlist}
          data={foodStore.categories}
          contentContainerStyle={foodStore.categories.length ? null : styles.activityIndicator}
          showsHorizontalScrollIndicator={false}
          keyExtractor={extractCategoryKey}
          renderItem={renderCategory}
          horizontal
          ListEmptyComponent={renderListEmptyElement}
        />
        <FlatList
          style={styles.flatlist}
          data={foods}
          contentContainerStyle={foods.length ? null : styles.activityIndicator}
          showsHorizontalScrollIndicator={false}
          keyExtractor={extractFoodItemKey}
          horizontal
          renderItem={renderFoodItem}
          ListEmptyComponent={renderListEmptyElement}
        />
        <SharedElement id="bg">
          <ViewTheme colorIntencity={ColorIntencity.Weak} style={styles.bg} />
        </SharedElement>
      </ScrollView>
    </SafeAreaTheme>
  );
});
