import {observer} from 'mobx-react';
import React from 'react';
import {Image, Text, View} from 'react-native';

import {IconButton} from '../../../components/icon-button/IconButton.component';
import {TextWrapper} from '../../../components/text-wrapper/TextWrapper.component';
import {ColorIntencity} from '../../../components/view-theme/ColorIntencity';
import {ViewTheme} from '../../../components/view-theme/ViewTheme.component';
import {CartFood} from '../../../model/cartFood';
import {useStore} from '../../../store/store';
import {colors} from '../../../vars/variables';
import {styles} from './cart-item.styles';

interface Props {
  item: CartFood;
}

export const CartItem: React.FC<Props> = observer(({item}) => {
  const {cart} = useStore();

  const addOneMoreItem = () => cart.increaseQty(item.id);
  const removeOneMoreItem = () => cart.decreaseQty(item.id);

  return (
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
  );
});
