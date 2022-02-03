import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {TextWrapper} from '../../../../components/text-wrapper/TextWrapper.component';
import {localisation} from '../../../../localization/localization';
import {Reciept} from '../../../../model/reciept';
import {useTheme} from '../../../../theme/theme';
import {styles} from './history-item.styles';

interface Props {
  item: Reciept;
  goToRecieptDetails: (item: Reciept) => void;
}

export const HistoryItem: React.FC<Props> = ({item, goToRecieptDetails}) => {
  const {theme} = useTheme();
  const goToDetails = () => goToRecieptDetails(item);

  return (
    <View>
      <TouchableOpacity onPress={goToDetails} style={[styles.container, {backgroundColor: theme.colorScheme.primaryDark}]}>
        <View style={styles.itemDescription}>
          <TextWrapper style={styles.itemName}>
            {localisation.t('order')} #{item.id}
          </TextWrapper>
          <Text style={styles.itemDate}>{item.createdAt}</Text>
        </View>
        <Text style={styles.totalPrice}>
          {localisation.t('total')}: {item.totalPrice}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
