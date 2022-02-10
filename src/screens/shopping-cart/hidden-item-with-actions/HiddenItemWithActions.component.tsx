import React from 'react';
import {View} from 'react-native';

import {CartFood} from '../../../model/cartFood';
import {HiddenButton} from './hidden-button/HiddenButton.component';
import {styles} from './hidden-item-with-actions.styles';

interface Props {
  item: CartFood;
  toggleLike: (item: CartFood) => void;
  onDelete: (id: number) => void;
}

export const HiddenItemWithActions: React.FC<Props> = ({item, toggleLike, onDelete}) => {
  const toggleLikeOnItem = () => toggleLike(item);
  const onDeleteItem = () => onDelete(item.id);

  return (
    <View style={styles.container}>
      <HiddenButton icon={item.isLiked ? 'heart' : 'heart-o'} buttonStyle={styles.backRightBtnLeft} onPress={toggleLikeOnItem} />
      <HiddenButton icon="trash" buttonStyle={styles.backRightBtnRight} onPress={onDeleteItem} />
    </View>
  );
};
