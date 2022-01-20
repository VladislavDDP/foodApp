import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {Reciept} from '../../../../model/reciept';
import {styles} from './history-item.styles';

interface Props {
  item: Reciept;
  goToRecieptDetails: (item: Reciept) => void;
}

export const HistoryItem: React.FC<Props> = ({item, goToRecieptDetails}) => {
  const goToDetails = () => goToRecieptDetails(item);

  return (
    <View>
      <TouchableOpacity onPress={goToDetails} style={styles.container}>
        <View style={styles.itemDescription}>
          <Text style={styles.itemName}>Order #{item.id}</Text>
          <Text style={styles.itemDate}>{item.createdAt}</Text>
        </View>
        <Text style={styles.totalPrice}>Total: {item.totalPrice}</Text>
      </TouchableOpacity>
    </View>
  );
};
