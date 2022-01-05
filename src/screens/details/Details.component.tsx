import React, {useRef} from 'react';
import {observer, inject} from 'mobx-react';
import {Text, Animated, SafeAreaView, View, FlatList, ScrollView} from 'react-native';
import {SharedElement} from 'react-navigation-shared-element';

import {CustomButton} from '../../components/button/CustomButton.component';
import {Food} from '../../model/foodModel';
import {Screens} from '../../navigation/root-stack/routes.types';
import {AppNavigatorScreenProps} from '../../navigation/root-stack/stack.types';
import {styles} from './details.styles';
import {IconBtn} from './icon-btn/IconBtn.component';
import {Paginator} from './paginator/Paginator.component';
import {Section} from './section/Section.component';
import {SliderItem} from './slider-item/SliderItem.component';

const startValue = 0;

interface Props extends AppNavigatorScreenProps<Screens.Details> {
  cart: {
    addToCart: (item: Food) => void;
  };
}

export const Details: React.FC<Props> = inject('cart')(
  observer(({navigation, route, ...props}) => {
    const {name, price, gallery} = route.params.item;
    const {addToCart} = props.cart;

    const scrollX = useRef(new Animated.Value(startValue)).current;
    const slidesRef = useRef(null);

    const navigateBack = () => navigation.goBack();

    const addToFavourite = () => {
      // TODO: add to favourite logic
    };

    const addFoodToCart = () => addToCart(route.params.item);

    const renderSlide = ({item}: {item: string}) => <SliderItem imageUrl={item} />;

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <IconBtn icon="chevron-left" onPress={navigateBack} />
          <IconBtn icon="heart" onPress={addToFavourite} />
        </View>
        <View style={styles.slider}>
          <FlatList
            data={gallery}
            renderItem={renderSlide}
            onScroll={Animated.event([{nativeEvent: {contentOffset: {x: scrollX}}}], {useNativeDriver: false})}
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={32}
            ref={slidesRef}
            bounces={true}
            pagingEnabled
            horizontal
          />
          <Paginator gallery={gallery} scrollX={scrollX} />
          <Text style={styles.foodTitle}>{name}</Text>
          <Text style={styles.foodPrice}>{price}</Text>
        </View>
        <ScrollView style={styles.content}>
          <Section title="Delivery info" description="Delivered between monday aug and thursday 20 from 8pm to 91:32 pm" />
          <Section
            title="Return policy"
            description="All our foods are double checked before leaving our stores so
          by any case you found a broken food please contact our hotline immediately."
          />
        </ScrollView>
        <CustomButton text="Add to card" buttonStyle={styles.button} labelStyle={styles.label} onPress={addFoodToCart} />
        <SharedElement id="bg">
          <View style={styles.bg} />
        </SharedElement>
      </SafeAreaView>
    );
  }),
);
