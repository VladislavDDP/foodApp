import React from 'react';
import {View} from 'react-native';

import {HiddenButton} from './hidden-button/HiddenButton.component';
import {styles} from './hidden-item-with-actions.styles';

interface Props {
  isLiked: boolean;
  onLike: () => void;
  onDislike: () => void;
  onDelete: () => void;
}

export const HiddenItemWithActions: React.FC<Props> = ({isLiked, onLike, onDislike, onDelete}) => (
  <View style={styles.container}>
    {isLiked ? (
      <HiddenButton icon="heart" buttonStyle={styles.backRightBtnLeft} onPress={onDislike} />
    ) : (
      <HiddenButton icon="heart-o" buttonStyle={styles.backRightBtnLeft} onPress={onLike} />
    )}

    <HiddenButton icon="trash" buttonStyle={styles.backRightBtnRight} onPress={onDelete} />
  </View>
);
