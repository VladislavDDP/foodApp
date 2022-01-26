import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {Category} from '../../../../model/category';
import {useTheme} from '../../../../theme/theme';
import {styles} from './category-item.styles';

interface Props {
  item: Category;
  activeCategoryId: number;
  onSelectCategory: (id: number) => void;
}

export const CategoryItem: React.FC<Props> = ({item, onSelectCategory, activeCategoryId}) => {
  const {theme} = useTheme();
  const color = item.id === activeCategoryId ? '#FA4A0C' : theme.colorScheme.primaryText;

  const selectCategory = () => onSelectCategory(item.id);

  return (
    <TouchableOpacity onPress={selectCategory}>
      <Text style={[styles.text, {color: color}]}>{item.name}</Text>
    </TouchableOpacity>
  );
};
