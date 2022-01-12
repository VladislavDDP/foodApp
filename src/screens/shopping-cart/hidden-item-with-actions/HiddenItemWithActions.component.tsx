import {observer} from 'mobx-react';
import React from 'react';
import {View} from 'react-native';

import {CartFood} from '../../../model/cartFood';
import {useStore} from '../../../store/store';
import {HiddenButton} from './hidden-button/HiddenButton.component';
import {styles} from './hidden-item-with-actions.styles';

interface Props {
  item: CartFood;
  onDelete: () => void;
}

export const HiddenItemWithActions: React.FC<Props> = observer(({item, onDelete}) => {
  const {cart, foodStore} = useStore();

  const toggleLike = () => {
    if (item.isLiked) {
      foodStore.removeFromFavourites(item.id);
    } else {
      foodStore.addToFavourite(item);
    }
    cart.updateCart(new CartFood(item.id, item.name, item.price, item.photo, item.gallery, item.qty, item.categories, !item.isLiked));
  };

  return (
    <View style={styles.container}>
      {item.isLiked ? (
        <HiddenButton icon="heart" buttonStyle={styles.backRightBtnLeft} onPress={toggleLike} />
      ) : (
        <HiddenButton icon="heart-o" buttonStyle={styles.backRightBtnLeft} onPress={toggleLike} />
      )}

      <HiddenButton icon="trash" buttonStyle={styles.backRightBtnRight} onPress={onDelete} />
    </View>
  );
});
