import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {TextWrapper} from '../../../../components/text-wrapper/TextWrapper.component';
import {Food} from '../../../../model/food';
import {useTheme} from '../../../../theme/theme';
import {styles} from './favourite-item.styles';

interface Props {
  item: Food;
  onPress: (item: Food) => void;
  deleteItem: (item: Food) => void;
}

export const FavouriteItem: React.FC<Props> = ({item, onPress, deleteItem}) => {
  const {theme} = useTheme();
  const goToDetailsOnPress = () => onPress(item);
  const deleteOnLongPress = () => deleteItem(item);

  return (
    <TouchableOpacity
      onPress={goToDetailsOnPress}
      onLongPress={deleteOnLongPress}
      style={[styles.container, {backgroundColor: theme.colorScheme.primaryDark}]}>
      <Image source={{uri: item.photo}} style={styles.itemImage} />
      <View style={styles.itemDescription}>
        <TextWrapper style={styles.itemName}>{item.name}</TextWrapper>
        <Text style={[styles.itemPrice, {color: theme.colorScheme.accent}]}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );
};
