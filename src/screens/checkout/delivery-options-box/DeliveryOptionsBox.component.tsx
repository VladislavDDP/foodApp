import React from 'react';
import {View} from 'react-native';

import {RadioButton} from '../../../components/radio-button/RadioButton.components';
import {TextWrapper} from '../../../components/text-wrapper/TextWrapper.component';
import {ColorIntencity} from '../../../components/view-theme/ColorIntencity';
import {ViewTheme} from '../../../components/view-theme/ViewTheme.component';
import {localisation} from '../../../localization/localization';
import {DeliveryType} from '../../../model/deliveryType';
import {styles} from './delivery-options-box.styles';

interface Props {
  selectedOption: DeliveryType;
  setOption: (option: string) => void;
}

export const DeliveryOptionsBox: React.FC<Props> = ({selectedOption, setOption}) => (
  <View>
    <TextWrapper style={styles.sectionTitle}>{localisation.t('checkoutDeliveryMethod')}</TextWrapper>
    <ViewTheme colorIntencity={ColorIntencity.Strong} style={styles.deliveryMethodContainer}>
      <RadioButton text={DeliveryType.DoorDelivery} isSelected={selectedOption === DeliveryType.DoorDelivery} shouldSeparate onSelect={setOption} />
      <RadioButton text={DeliveryType.PickUp} isSelected={selectedOption === DeliveryType.PickUp} onSelect={setOption} />
    </ViewTheme>
  </View>
);
