import React from 'react';
import {View} from 'react-native';

import {TextWrapper} from '../../../components/text-wrapper/TextWrapper.component';
import {styles} from './reciept-list-item.styles';

interface Props {
  name: string;
  qtyPrice: string;
}

export const RecieptListItem: React.FC<Props> = ({name, qtyPrice}) => (
  <View style={styles.itemContainer}>
    <TextWrapper>{name}</TextWrapper>
    <TextWrapper>{qtyPrice}</TextWrapper>
  </View>
);
