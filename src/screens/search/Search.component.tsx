import React, {useState} from 'react';
import {observer} from 'mobx-react';
import {FlatList, StyleSheet} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';
import debounce from 'lodash.debounce';

import {Screens} from '../../navigation/root-stack/routes.types';
import {AppNavigatorScreenProps} from '../../navigation/root-stack/stack.types';
import {styles} from './search.styles';
import {Food} from '../../model/food';
import {SearchHeader} from './search-header/SearchHeader.component';
import {AnimatedFoodItem} from './animated-food-item/AnimatedFoodItem.component';
import {EmptyBox} from '../../components/empty-box/EmptyBox.component';
import {useStore} from '../../store/store';
import {SafeAreaTheme} from '../../components/safe-area-theme/SafeAreaTheme.component';
import {TextWrapper} from '../../components/text-wrapper/TextWrapper.component';
import {ViewTheme} from '../../components/view-theme/ViewTheme.component';
import {ColorIntencity} from '../../components/view-theme/ColorIntencity';
import {localisation} from '../../localization/localization';

const numColumns = 2;
const requestTimeout = 500;

export const Search: React.FC<AppNavigatorScreenProps<Screens.Search>> = observer(({navigation}) => {
  const [foods, setFoods] = useState<Array<Food>>([]);
  const {foodStore} = useStore();

  const debouncedTextInputHandler = debounce(async (text: string) => {
    const food = await foodStore.searchFoodByName(text);
    setFoods(food);
  }, requestTimeout);

  const onChange = (text: string) => debouncedTextInputHandler(text);

  const goToFoodDetails = (item: Food) => navigation.navigate(Screens.Details, {item});

  const renderFoodItem = ({item, index}: {item: Food; index: number}) => (
    <AnimatedFoodItem item={item} index={index} goToFoodDetails={goToFoodDetails} />
  );

  const renderListEmpty = () => <EmptyBox icon="search" title={localisation.t('searchEmptyTitle')} text={localisation.t('searchEmptyText')} />;

  const extractItemKey = (item: Food) => item.id.toString();

  return (
    <SafeAreaTheme style={styles.container}>
      <SearchHeader onPress={navigation.goBack} onChangeText={onChange} />
      <SharedElement id="bg" style={[styles.sharedElement, StyleSheet.absoluteFill]}>
        <ViewTheme colorIntencity={ColorIntencity.Weak} style={styles.bg}>
          <TextWrapper style={styles.text}>
            {localisation.t('searchFoundResults')} {foods.length}
          </TextWrapper>
          <FlatList
            scrollEnabled
            data={foods}
            numColumns={numColumns}
            showsVerticalScrollIndicator={false}
            keyExtractor={extractItemKey}
            renderItem={renderFoodItem}
            ListEmptyComponent={renderListEmpty}
          />
        </ViewTheme>
      </SharedElement>
    </SafeAreaTheme>
  );
});
