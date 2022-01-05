import React from 'react';
import {View} from 'react-native';

import {HiddenButton} from './hidden-button/HiddenButton.component';
import {styles} from './hidden-item-with-actions.styles';

interface Props {
  onLike: () => void;
  onDelete: () => void;
}

export const HiddenItemWithActions: React.FC<Props> = ({onLike, onDelete}) => (
  <View style={styles.container}>
    <HiddenButton icon="heart-o" buttonStyle={styles.backRightBtnLeft} onPress={onLike} />
    <HiddenButton icon="trash" buttonStyle={styles.backRightBtnRight} onPress={onDelete} />
  </View>
);
