import React, {useCallback, useEffect, useState} from 'react';
import {Observer, useLocalObservable} from 'mobx-react';
import {ActivityIndicator, FlatList, InteractionManager, ScrollView} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {SharedElement} from 'react-navigation-shared-element';

import {Category} from '../../../model/category';
import {Food} from '../../../model/food';
import {Screens} from '../../../navigation/root-stack/routes.types';
import {AppNavigatorScreenProps} from '../../../navigation/root-stack/stack.types';
import {CategoryItem} from './category-item/CategoryItem.component';
import {FakeSearch} from './fake-search/FakeSearch.component';
import {FoodItem} from './food-item/FoodItem.component';
import {styles} from './home.styles';
import {SafeAreaTheme} from '../../../components/safe-area-theme/SafeAreaTheme.component';
import {TextWrapper} from '../../../components/text-wrapper/TextWrapper.component';
import {ColorIntencity} from '../../../components/view-theme/ColorIntencity';
import {ViewTheme} from '../../../components/view-theme/ViewTheme.component';
import {localisation} from '../../../localization/localization';
import {HomeStore} from '../../../store/homeStore';

const startId = 1;
const duration = 100;

export const Home: React.FC<AppNavigatorScreenProps<Screens.DrawerStack>> = ({navigation}) => {
  const homeStore = useLocalObservable(() => new HomeStore());
  const [foods, setFoods] = useState<Array<Food>>([]);
  const [activeCategoryId, setActiveCategoryId] = useState(startId);

  const getFood = async (id: number) => {
    const food = await homeStore.getFoodByCategory(id);
    setFoods(food);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      homeStore.getCategories();
      getFood(activeCategoryId);
    });

    return unsubscribe;
  }, [navigation, activeCategoryId]);

  const navigateToSearch = () => {
    InteractionManager.runAfterInteractions(() => {
      navigation.navigate(Screens.Search);
    });
  };

  const onSelectCategory = useCallback((id: number) => {
    setActiveCategoryId(id);
    getFood(id);
  }, []);

  const renderCategory = ({item}: {item: Category}) => (
    <CategoryItem item={item} activeCategoryId={activeCategoryId} onSelectCategory={onSelectCategory} />
  );

  const goToDetails = (item: Food) => {
    InteractionManager.runAfterInteractions(() => {
      navigation.navigate(Screens.Details, {item});
    });
  };

  const renderFoodItem = ({item, index}: {item: Food; index: number}) => (
    <Animatable.View animation="zoomIn" delay={duration * index}>
      <FoodItem food={item} onPress={goToDetails} />
    </Animatable.View>
  );

  const extractCategoryKey = (item: Category) => item.id.toString();
  const extractFoodItemKey = (item: Food) => item.id.toString();

  const renderListEmptyElement = () => <ActivityIndicator style={styles.activityIndicator} size="large" color="#FF460A" />;

  return (
    <Observer>
      {() => (
        <SafeAreaTheme style={styles.container}>
          <ScrollView style={styles.wrapper}>
            <TextWrapper style={styles.title}>{localisation.t('homeTitle')}</TextWrapper>
            <FakeSearch onPress={navigateToSearch} />
            <FlatList
              style={styles.flatlist}
              data={homeStore.categories}
              contentContainerStyle={homeStore.categories.length ? null : styles.activityIndicator}
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
      )}
    </Observer>
  );
};
