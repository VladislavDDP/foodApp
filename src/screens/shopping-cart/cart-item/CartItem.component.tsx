import {observer} from 'mobx-react';
import React from 'react';
import {Animated, Image, Text, View} from 'react-native';
import {Swipeable} from 'react-native-gesture-handler';

import {IconButton} from '../../../components/icon-button/IconButton.component';
import {TextWrapper} from '../../../components/text-wrapper/TextWrapper.component';
import {ColorIntencity} from '../../../components/view-theme/ColorIntencity';
import {ViewTheme} from '../../../components/view-theme/ViewTheme.component';
import {CartFood} from '../../../model/cartFood';
import {useStore} from '../../../store/store';
import {colors} from '../../../vars/variables';
import {styles} from './cart-item.styles';
import {ItemActions} from './item-actions/ItemActions.component';

interface Props {
  item: CartFood;
  likeItem: (item: CartFood) => void;
  removeItem: (id: number) => void;
}

export const CartItem: React.FC<Props> = observer(({item, ...props}) => {
  const {cart} = useStore();

  const addOneMoreItem = () => cart.increaseQty(item.id);
  const removeOneMoreItem = () => cart.decreaseQty(item.id);

  const renderRightActions = (dragX: Animated.AnimatedInterpolation) => <ItemActions dragX={dragX} item={item} {...props} />;

  return (
    <Swipeable renderRightActions={(_: Animated.AnimatedInterpolation, dragX: Animated.AnimatedInterpolation) => renderRightActions(dragX)}>
      <ViewTheme colorIntencity={ColorIntencity.Strong} style={styles.container}>
        <Image source={{uri: item.photo}} style={styles.itemImage} />
        <View style={styles.itemDescription}>
          <TextWrapper style={styles.itemName}>{item.name}</TextWrapper>
          <Text style={styles.itemPrice}>{item.price}</Text>
        </View>
        <View style={styles.qtyContainer}>
          <IconButton name="minus" style={styles.qtyController} size={10} color={colors.white} onPress={removeOneMoreItem} />
          <Text style={styles.qtyNumber}>{item.qty}</Text>
          <IconButton name="plus" style={styles.qtyController} size={10} color={colors.white} onPress={addOneMoreItem} />
        </View>
      </ViewTheme>
    </Swipeable>
  );
});
