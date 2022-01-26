import React from 'react';
import {View} from 'react-native';

import {RadioButton} from '../../../components/radio-button/RadioButton.components';
import {TextWrapper} from '../../../components/text-wrapper/TextWrapper.component';
import {DeliveryType} from '../../../model/deliveryType';
import {useTheme} from '../../../theme/theme';
import {styles} from './delivery-options-box.styles';

interface Props {
  selectedOption: DeliveryType;
  setOption: (option: DeliveryType) => void;
}

export const DeliveryOptionsBox: React.FC<Props> = ({selectedOption, setOption}) => {
  const {theme} = useTheme();

  const setDoorDeliveryOption = () => setOption(DeliveryType.DoorDelivery);
  const setPickUpOption = () => setOption(DeliveryType.PickUp);

  return (
    <View>
      <TextWrapper style={styles.sectionTitle}>Delivery method</TextWrapper>
      <View style={[styles.deliveryMethodContainer, {backgroundColor: theme.colorScheme.primaryBackgroundDark}]}>
        <RadioButton
          text={DeliveryType.DoorDelivery}
          isSelected={selectedOption === DeliveryType.DoorDelivery}
          shouldSeparate
          onSelect={setDoorDeliveryOption}
        />
        <RadioButton text={DeliveryType.PickUp} isSelected={selectedOption === DeliveryType.PickUp} onSelect={setPickUpOption} />
      </View>
    </View>
  );
};
