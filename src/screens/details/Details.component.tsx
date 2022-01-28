import React, {useRef, useState} from 'react';
import {observer} from 'mobx-react';
import {Text, Animated, View, FlatList, ScrollView, Modal} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

import {CustomButton} from '../../components/custom-button/CustomButton.component';
import {Screens} from '../../navigation/root-stack/routes.types';
import {AppNavigatorScreenProps} from '../../navigation/root-stack/stack.types';
import {styles} from './details.styles';
import {Paginator} from './paginator/Paginator.component';
import {Section} from './section/Section.component';
import {SliderItem} from './slider-item/SliderItem.component';
import {SuccessModal} from './success-modal/SuccessModal.component';
import {useStore} from '../../store/store';
import {Food} from '../../model/food';
import {IconButton} from '../../components/icon-button/IconButton.component';
import {SafeAreaTheme} from '../../components/safe-area-theme/SafeAreaTheme.component';
import {TextWrapper} from '../../components/text-wrapper/TextWrapper.component';

const startValue = 0;

export const Details: React.FC<AppNavigatorScreenProps<Screens.Details>> = observer(({navigation, route}) => {
  const foodItem = route.params.item;
  const {cart, foodStore} = useStore();

  const [likedFood, setLikedFood] = useState(foodItem.isLiked);
  const [modalVisible, setModalVisible] = useState(false);

  const scrollX = useRef(new Animated.Value(startValue)).current;
  const slidesRef = useRef(null);

  const likeFood = () => {
    setLikedFood(true);
    cart.updateCart(new Food(foodItem.id, foodItem.name, foodItem.price, foodItem.photo, foodItem.gallery, foodItem.categories, true));
    foodStore.addToFavourite(foodItem);
  };

  const removeLike = () => {
    setLikedFood(false);
    cart.updateCart(new Food(foodItem.id, foodItem.name, foodItem.price, foodItem.photo, foodItem.gallery, foodItem.categories, false));
    foodStore.removeFromFavourites(foodItem.id);
  };

  const addFoodToCart = () => {
    cart.addToCart(new Food(foodItem.id, foodItem.name, foodItem.price, foodItem.photo, foodItem.gallery, foodItem.categories, likedFood));
    setModalVisible(true);
  };

  const renderSlide = ({item}: {item: string}) => <SliderItem imageUrl={item} />;

  const onRequestClose = () => {
    navigation.goBack();
    setModalVisible(!modalVisible);
  };

  return (
    <SafeAreaTheme style={styles.container}>
      <View style={styles.header}>
        <IconButton name="chevron-left" size={18} onPress={navigation.goBack} />
        {likedFood ? <IconButton name="heart" size={18} onPress={removeLike} /> : <IconButton name="heart-o" size={18} onPress={likeFood} />}
      </View>
      <Modal animationType="fade" transparent={true} visible={modalVisible} onRequestClose={onRequestClose}>
        <SuccessModal title="Done!" btnText="get it" onPress={onRequestClose} />
      </Modal>
      <View style={styles.slider}>
        <FlatList
          data={foodItem.gallery}
          renderItem={renderSlide}
          onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {useNativeDriver: false})}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={32}
          ref={slidesRef}
          bounces={true}
          pagingEnabled
          horizontal
        />
        <Paginator gallery={foodItem.gallery} scrollX={scrollX} />
        <TextWrapper style={styles.foodTitle}>{foodItem.name}</TextWrapper>
        <Text style={styles.foodPrice}>{foodItem.price}</Text>
      </View>
      <ScrollView style={styles.content}>
        <Section title="Delivery info" description="Delivered between monday aug and thursday 20 from 8pm to 91:32 pm" />
        <Section
          title="Return policy"
          description="All our foods are double checked before leaving our stores so
          by any case you found a broken food please contact our hotline immediately."
        />
      </ScrollView>
      <CustomButton text="Add to card" onPress={addFoodToCart} />
      <SharedElement id="bg">
        <View style={styles.bg} />
      </SharedElement>
    </SafeAreaTheme>
  );
});
