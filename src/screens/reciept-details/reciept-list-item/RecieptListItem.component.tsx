import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './reciept-list-item.styles';

interface Props {
  name: string;
  qtyPrice: string;
}

export const RecieptListItem: React.FC<Props> = ({name, qtyPrice}) => (
  <View style={styles.itemContainer}>
    <Text>{name}</Text>
    <Text>{qtyPrice}</Text>
  </View>
);
