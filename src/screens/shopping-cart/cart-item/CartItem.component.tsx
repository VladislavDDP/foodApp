import {observer} from 'mobx-react';
import React from 'react';
import {Image, Text, View} from 'react-native';

import {IconButton} from '../../../components/icon-font-awesome5-button/IconButton.component';
import {TextWrapper} from '../../../components/text-wrapper/TextWrapper.component';
import {CartFood} from '../../../model/cartFood';
import {useStore} from '../../../store/store';
import {useTheme} from '../../../theme/theme';
import {colors} from '../../../vars/variables';
import {styles} from './cart-item.styles';

interface Props {
  item: CartFood;
}

export const CartItem: React.FC<Props> = observer(({item}) => {
  const {theme} = useTheme();
  const {cart} = useStore();

  const addOneMoreItem = () => cart.increaseQty(item.id);
  const removeOneMoreItem = () => cart.decreaseQty(item.id);

  return (
    <View style={[styles.container, {backgroundColor: theme.colorScheme.primaryBackgroundDark}]}>
      <Image source={{uri: item.photo}} style={styles.itemImage} />
      <View style={styles.itemDescription}>
        <TextWrapper style={styles.itemName}>{item.name}</TextWrapper>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
      <View style={styles.qtyContainer}>
        <IconButton iconName="minus" size={10} color={colors.white} onPress={removeOneMoreItem} />
        <Text style={styles.qtyNumber}>{item.qty}</Text>
        <IconButton iconName="plus" size={10} color={colors.white} onPress={addOneMoreItem} />
      </View>
    </View>
  );
});
