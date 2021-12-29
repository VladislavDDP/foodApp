import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import {Category} from '../../../../model/categoryModel';
import {styles} from './category-item.styles';

interface Props {
  item: Category;
  activeCategoryId: number;
  onSelectCategory: (id: number) => void;
}

export const CategoryItem: React.FC<Props> = ({item, onSelectCategory, activeCategoryId}) => {
  const color = item.id === activeCategoryId ? '#FA4A0C' : '#333';

  const selectCategory = () => onSelectCategory(item.id);

  return (
    <TouchableOpacity onPress={selectCategory}>
      <Text style={[styles.text, {color: color}]}>{item.category}</Text>
    </TouchableOpacity>
  );
};
