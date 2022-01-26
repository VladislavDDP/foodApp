import React from 'react';
import {View} from 'react-native';

import {TextWrapper} from '../../../../components/text-wrapper/TextWrapper.component';
import {styles} from './text-recipient-info.styles';

interface Props {
  name: string;
  address: string;
  phone: string;
}

export const TextRecipientInfo: React.FC<Props> = ({name, address, phone}) => (
  <View>
    <TextWrapper style={styles.customerName}>{name}</TextWrapper>
    <View style={styles.separator} />
    <TextWrapper>{address}</TextWrapper>
    <View style={styles.separator} />
    <TextWrapper>{phone}</TextWrapper>
  </View>
);
