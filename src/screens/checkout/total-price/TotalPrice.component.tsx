import React from 'react';
import {View} from 'react-native';

import {TextWrapper} from '../../../components/text-wrapper/TextWrapper.component';
import {localisation} from '../../../localization/localization';
import {styles} from './total-price.styles';

const fixedPoints = 2;

interface Props {
  totalCartPrice: number;
}

export const TotalPrice: React.FC<Props> = ({totalCartPrice}) => (
  <View style={styles.finalPriceContainer}>
    <TextWrapper style={styles.totalText}>{localisation.t('total')}: </TextWrapper>
    <TextWrapper style={styles.totalPrice}>{totalCartPrice.toFixed(fixedPoints)}</TextWrapper>
  </View>
);
