import React from 'react';
import {Text, View} from 'react-native';

import {styles} from './text-recipient-info.styles';

interface Props {
  name: string;
  address: string;
  phone: string;
}

export const TextRecipientInfo: React.FC<Props> = ({name, address, phone}) => (
  <View>
    <Text style={styles.customerName}>{name}</Text>
    <View style={styles.separator} />
    <Text>{address}</Text>
    <View style={styles.separator} />
    <Text>{phone}</Text>
  </View>
);
